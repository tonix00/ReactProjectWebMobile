import React,  { ChangeEvent, useImperativeHandle, useState } from 'react';

interface PropertyFormState {
  addressOfTheProperty: string;
  address: string;
}

interface PropertyFormProps {
  // No need for the onFormSubmit prop
}

const PropertyForm: React.ForwardRefRenderFunction<any,PropertyFormProps> = (_, ref) => {
  const [formData, setFormData] = useState<PropertyFormState>({
    addressOfTheProperty: '',
    address: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <h5>Property Information</h5>
      <label>
        Address of the Property:
        <textarea
          name="addressOfTheProperty"
          value={formData.addressOfTheProperty}
          onChange={handleChange}
        />
      </label>

      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default React.forwardRef(PropertyForm);