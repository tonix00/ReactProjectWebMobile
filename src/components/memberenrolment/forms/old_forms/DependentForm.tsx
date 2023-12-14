import React,  { ChangeEvent, useImperativeHandle, useState } from 'react';

interface DependentFormState {
  firstName: string;
  middleName: string;
  lastName: string;
  relationship: string;
  gender: string;
  dateOfBirth: string;
}

interface DependentFormProps {
  // No need for the onFormSubmit prop
}

const DependentForm: React.ForwardRefRenderFunction<any,DependentFormProps> = (_, ref) => {
  const [formData, setFormData] = useState<DependentFormState>({
    firstName: '',
    middleName: '',
    lastName: '',
    relationship: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Dependent Form submitted:', formData);
  };

    // Expose a function to get the form data
    const getFormData = () => formData;

    // Use imperative handle to expose the function via ref
    useImperativeHandle(ref, () => ({
      getFormData,
    }));

  return (
    <>
      <h5>Dependent Information</h5>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Middle Name:
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Relationship to Insured:
        <input
          type="text"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add other gender options if needed */}
        </select>
      </label>

      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default React.forwardRef(DependentForm);