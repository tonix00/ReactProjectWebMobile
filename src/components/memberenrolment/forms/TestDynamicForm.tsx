import React from 'react';
import DynamicForm from './DynamicForm'; // Make sure to adjust the path
import FormDataParser, { FormData, ParsedFormData }  from '../../../services/FormDataParser';
import dbTemplate from '../../../services/FormTemplate';

interface MainFormData {
  name: string;
  method: string;
  action: string;
  fields: Array<{
    variable_name: string;
    label: string;
    validation: string;
    type: string;
    is_required: boolean
  }>;
}

const TestDynamicForm: React.FC = () => {

  const jsonData: FormData[] = dbTemplate;
  const formDataParser = new FormDataParser(jsonData);
  const parsedData: ParsedFormData[] = formDataParser.parseFormData();

  // Mock data, replace this with the actual data received from the server
  const mainFormData: MainFormData = {
    "name": "FORTUNELIFE GROUP TERM LIFE INSURANCE (OLC)",
    "method": "POST",
    "action": "/save_insured",
    "fields": parsedData
  };

  return (
    <div>
      <DynamicForm formData={mainFormData} />
    </div>
  );
};

export default TestDynamicForm;
