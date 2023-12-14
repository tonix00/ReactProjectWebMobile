import React,  { ChangeEvent, useImperativeHandle, useState } from 'react';

interface ProductFormState {
  product: string;
}

interface ProductFormProps {
  // No need for the onFormSubmit prop
}


const ProductForm: React.ForwardRefRenderFunction<any,ProductFormProps> = (_, ref) => {
  const [formData, setFormData] = useState<ProductFormState>({
    product: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>
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
      <h5>Product Information</h5>
      <label>
        Product:
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
        >
          <option value="">Select Product</option>
          <option value="life">Life</option>
          <option value="fire">Fire</option>
        </select>
      </label>
    </>
  );
};

export default React.forwardRef(ProductForm);