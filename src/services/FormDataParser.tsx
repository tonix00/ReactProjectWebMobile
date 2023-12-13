interface ParsedFormData {
  variable_name: string;
  label: string;
  validation: string;
  type: string;
  is_required: boolean;
}

interface FormData {
  fieldName: string;
  fieldLabel: string;
  fieldMax: number;
  fieldType: string;
  validationRule: string;
  fieldID: string;
}

class FormDataParser {
  private rawData: FormData[];

  constructor(jsonData: FormData[]) {
    this.rawData = jsonData;
  }

  private validateFieldType(fieldType: string, fieldLabel: string): string {

    let formFieldRule: string = "";

    if(fieldLabel.toLowerCase().includes("date")){
      formFieldRule = "input date";
    }
    else if(fieldType=="CMSelect" && fieldLabel=="Gender"){
      formFieldRule = "select";
    }
    else if(fieldLabel=="Civil Status"){
      formFieldRule = "select";
    }else{
      formFieldRule = "input text";
    }
    
    return formFieldRule;
  }

  parseFormData(): ParsedFormData[] {
    return this.rawData.map((data) => {
      
      let maxlengthRule: string = "maxlength " + data.fieldMax.toString();
      const isFieldRequired: boolean = data.validationRule === ">spaces";
      const specialValidation: string = this.validateFieldType(data.fieldType, data.fieldLabel);

      // modify maxlength rule
      if(data.fieldType=="CMSelect" && data.fieldLabel=="Gender"){
        maxlengthRule = "option [male|female]";
      }else if(data.fieldLabel=="Civil Status"){
        maxlengthRule = "option [Single|Married]";
      }

      return {
        variable_name: data.fieldName,
        label: data.fieldLabel,
        validation: maxlengthRule,
        type: specialValidation,
        is_required: isFieldRequired,
      };
    });
  }
}

export default FormDataParser;
