import React,  { ChangeEvent, useImperativeHandle, useState } from 'react';

interface BeneficiaryFormState {
  firstName: string;
  middleName: string;
  lastName: string;
  relationship: string;
}

interface BeneficiaryFormProps {
  // No need for the onFormSubmit prop
}

const BeneficiaryForm: React.ForwardRefRenderFunction<any,BeneficiaryFormProps> = (_, ref) => {
  const [formData, setFormData] = useState<BeneficiaryFormState>({
    firstName: '',
    middleName: '',
    lastName: '',
    relationship: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Expose a function to get the form data
  const getFormData = () => formData;

  // Use imperative handle to expose the function via ref
  useImperativeHandle(ref, () => ({
    getFormData,
  }));


  return (
    <>
      <h5>Beneficiary Information</h5>
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
    </>
  );
};

export default React.forwardRef(BeneficiaryForm);
