import React, { ChangeEvent, useImperativeHandle, useState } from 'react';

interface InsuredFormState {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  mobileNumber: string;
  address: string;
  province: string;
  civilStatus: string;
  occupation: string;
  sss: string;
  tin: string;
}

interface InsuredFormProps {
  // No need for the onFormSubmit prop
}

const InsuredForm: React.ForwardRefRenderFunction<any, InsuredFormProps> = (_, ref) => {
  const [formData, setFormData] = useState<InsuredFormState>({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    mobileNumber: '',
    address: '',
    province: '',
    civilStatus: '',
    occupation: '',
    sss: '',
    tin: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextareaChange = (
    e: ChangeEvent<HTMLTextAreaElement>
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
        <h5>Insured Information</h5>
        <label>
            First Name:
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Middle Name:
            <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Last Name:
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Date of Birth:
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Place of Birth:
            <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Gender:
            <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </label>

        <label>
            Mobile Number:
            <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Address:
            <textarea
                name="address"
                value={formData.address}
                onChange={handleTextareaChange}
            />
        </label>

        <label>
            Province:
            <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
            />
        </label>

        <label>
            Civil Status:
            <select
                name="civilStatus"
                value={formData.civilStatus}
                onChange={handleInputChange}
            >
                <option value="">Select Civil Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
            </select>
        </label>

        <label>
            Occupation:
            <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
            />
        </label>

        <label>
            SSS:
            <input
                type="text"
                name="sss"
                value={formData.sss}
                onChange={handleInputChange}
            />
        </label>

        <label>
            TIN:
            <input
                type="text"
                name="tin"
                value={formData.tin}
                onChange={handleInputChange}
            />
        </label>
    </>
  );
};

export default React.forwardRef(InsuredForm);
