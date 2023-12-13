import React, { useState, ChangeEvent, FormEvent } from 'react';

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

interface DynamicFormProps {
  formData: FormData;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formData }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleChange = (variableName: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [variableName]: value }));
  };

  const renderFormFields = () => {
    return formData.fields.map((field) => {
      const { variable_name, label, validation, type, is_required } = field;

      return (
        <div key={variable_name}>
          <label>
            {label}:
            {type === 'textarea' ? (
              <textarea
                name={variable_name}
                value={formValues[variable_name] || ''}
                onChange={(e) => handleChange(variable_name, e.target.value)}
                required={is_required}
              />
            ) : type === 'select' ? (
              <select
                name={variable_name}
                value={formValues[variable_name] || ''}
                onChange={(e) => handleChange(variable_name, e.target.value)}
                required={is_required}
              >
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
            ) : (
              <input
                type={type === 'input date' ? 'date' : 'text'}
                name={variable_name}
                value={formValues[variable_name] || ''}
                onChange={(e) => handleChange(variable_name, e.target.value)}
                required={is_required}
              />
            )}
          </label>
        </div>
      );
    });
  };

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
