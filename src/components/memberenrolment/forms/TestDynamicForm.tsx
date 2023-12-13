import React from 'react';
import DynamicForm from './DynamicForm'; // Make sure to adjust the path

interface FormData {
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

  // Mock data, replace this with the actual data received from the server
  const formData: FormData = {
    "name": "Insured Information",
    "method": "POST",
    "action": "/save_insured",
    "fields": [
      {
        "variable_name": "first_name",
        "label": "First Name",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      },
      {
        "variable_name": "middle_name",
        "label": "Middle Name",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": false
      },
      {
        "variable_name": "last_name",
        "label": "Last Name",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      },
      {
        "variable_name": "date_of_birth",
        "label": "Date of Birth",
        "validation": "maxlength 30",
        "type": "input date",
        "is_required": true
      },
      {
        "variable_name": "place_of_birth",
        "label": "Place of Birth",
        "validation": "maxlength 100",
        "type": "textarea",
        "is_required": true
      },
      {
        "variable_name": "mobile_number",
        "label": "Mobile Number",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      },
      {
        "variable_name": "address",
        "label": "Address",
        "validation": "maxlength 255",
        "type": "textarea",
        "is_required": true
      },
      {
        "variable_name": "province",
        "label": "Province",
        "validation": "maxlength 255",
        "type": "textarea",
        "is_required": true
      },
      {
        "variable_name": "civil_status",
        "label": "Civil Status",
        "validation": "option [single|married]",
        "type": "select",
        "is_required": true
      },
      {
        "variable_name": "occupation",
        "label": "Occupation",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      },
      {
        "variable_name": "sss",
        "label": "SSS",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      },
      {
        "variable_name": "tin",
        "label": "TIN",
        "validation": "maxlength 30",
        "type": "input text",
        "is_required": true
      }
    ]
  };

  return (
    <div>
      <DynamicForm formData={formData} />
    </div>
  );
};

export default TestDynamicForm;
