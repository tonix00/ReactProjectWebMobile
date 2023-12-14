import React, { useState, FormEvent, ChangeEvent } from 'react';

interface Field {
  variable_name: string;
  label: string;
  validation: string;
  type: string;
  is_required: boolean;
}

interface FormData {
  name: string;
  method: string;
  action: string;
  fields: Field[];
}

interface FormValues {
  [key: string]: string;
}

interface InputFieldProps {
  field: Field;
  value: string;
  onChange: (variableName: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ field, value, onChange }) => {
  const { variable_name, label, validation, type, is_required } = field;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(variable_name, e.target.value);
  };

  if (type === 'textarea') {
    return (
      <textarea
        name={variable_name}
        value={value}
        onChange={handleChange}
        required={is_required}
      />
    );
  }

  if (type === 'select') {
    return (
      <select
        name={variable_name}
        value={value}
        onChange={handleChange}
        required={is_required}
      >
        <option value="" disabled={is_required}>Select {label}</option>
        {validation
          .split(' ')[1]
          .slice(1, -1)
          .split('|')
          .map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    );
  }

  return (
    <input
      type={type === 'input date' ? 'date' : 'text'}
      name={variable_name}
      value={value}
      onChange={handleChange}
      required={is_required}
    />
  );
};

interface DynamicFormProps {
  formData: FormData;
  fieldsPerPage: number;
}

const FIELDSPERPAGE :number = 8;

const DynamicForm: React.FC<DynamicFormProps> = ({ formData, fieldsPerPage = FIELDSPERPAGE }) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (variableName: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [variableName]: value }));
  };

  const renderFormFields = () => {
    const startIdx = currentPage * fieldsPerPage;
    const endIdx = startIdx + fieldsPerPage;
    const currentFields = formData.fields.slice(startIdx, endIdx);

    return currentFields.map((field) => (
      <div key={field.variable_name} className='field_input'>
        <label>
          {field.label}:
          <InputField
            field={field}
            value={formValues[field.variable_name] || ''}
            onChange={handleChange}
          />
        </label>
      </div>
    ));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const isLastPage = currentPage === Math.ceil(formData.fields.length / fieldsPerPage) - 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Form submitted:', formValues);

    // Additional logic for form submission (e.g., sending data to the server)
  };

  return (
    <form onSubmit={handleSubmit} method={formData.method} action={formData.action}>
      <h2>{formData.name}</h2>
      {renderFormFields()}
      <div className='btn_group'>
        {currentPage > 0 && <button onClick={handlePrevPage} className='btn_primary'>Previous</button>}
        {!isLastPage && <button onClick={handleNextPage} className='btn_primary'>Next</button>}
        {isLastPage && <button className='btn_primary' type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default DynamicForm;
