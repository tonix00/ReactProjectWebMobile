import React, { useRef } from 'react';
import InsuredForm from './forms/InsuredForm';
import BeneficiaryForm from './forms/BeneficiaryForm';
import DependentForm from './forms/DependentForm';
import PropertyForm from './forms/PropertyForm';
import ProductForm from './forms/ProductForm';

const MemberEnrollmentForm: React.FC = () => {
  const insuredFormRef = useRef<any>(null);
  const beneficiaryFormRef = useRef<any>(null);
  const dependentFormRef = useRef<any>(null);
  const propertyFormRef = useRef<any>(null);
  const productFormRef = useRef<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Access the state of the InsuredForm directly using the ref
    const insuredFormData = insuredFormRef.current?.getFormData();
    const beneficiaryFormData = beneficiaryFormRef.current?.getFormData();
    const dependentFormData = beneficiaryFormRef.current?.getFormData();
    const propertyFormData = propertyFormRef.current?.getFormData();
    const propductFormData = productFormRef.current?.getFormData();
    
    // Add your final form submission logic here
    console.log('insured Form submitted:', { insured: insuredFormData });
    console.log('beneficiary Form submitted:', { beneficiary: beneficiaryFormData });
    console.log('dependent Form submitted:', { dependent: dependentFormData });
    console.log('property Form submitted:', { property: propertyFormData });
    console.log('product Form submitted:', { product: propductFormData });
  };

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <h2>Member Enrollment Form</h2>
      
      <InsuredForm ref={insuredFormRef} />
      <BeneficiaryForm ref={beneficiaryFormRef} />
      <DependentForm ref={dependentFormRef} />
      <PropertyForm ref={propertyFormRef} />
      <ProductForm ref={productFormRef} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MemberEnrollmentForm;


