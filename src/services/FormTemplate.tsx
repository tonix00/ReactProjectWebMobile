interface FormData {
  insGroupID: string;
  insProductID: string;
  insComponentID: number;
  insSubComponentID:number;
  itemNo: number;
  fieldType: string;
  fieldName: string;
  fieldID: string;
  fieldLabel: string;
  fieldKey:string;
  fieldBind: string;
  fieldSize: number;
  fieldMax: number;
  validationRule:string; 
  selectTag: string;
  selectKeyword: string;
  placeHolder:string;
  updateBy:string;
  updateDate:string;
}

const dbTemplate: FormData[] = [
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 1,
      "fieldType": "CMText",
      "fieldName": "insuredLastName",
      "fieldID": "firstString",
      "fieldLabel": "Insured Last Name",
      "fieldKey": "Key",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 2,
      "fieldType": "CMText",
      "fieldName": "insuredFirstName",
      "fieldID": "string1",
      "fieldLabel": "First Name",
      "fieldKey": "Key",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 3,
      "fieldType": "CMText",
      "fieldName": "insuredMiddleName",
      "fieldID": "string2",
      "fieldLabel": "Middle Name",
      "fieldKey": "Key",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 4,
      "fieldType": "CMText",
      "fieldName": "insuredBirthDate",
      "fieldID": "date1",
      "fieldLabel": "Date of Birth",
      "fieldKey": "Key",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 5,
      "fieldType": "CMSelect",
      "fieldName": "insuredGender",
      "fieldID": "selectVerify1",
      "fieldLabel": "Gender",
      "fieldKey": "LastKey",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "gender",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 6,
      "fieldType": "CMText",
      "fieldName": "insuredCellNo",
      "fieldID": "firstCellNo",
      "fieldLabel": "Mobile Number",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 7,
      "fieldType": "CMText",
      "fieldName": "insuredAddress",
      "fieldID": "string3",
      "fieldLabel": "Address (Unit/Room#, Floor, Bldg, Lot/Block/Phase#, House#, Street, Subdivision, Barangay)",
      "fieldKey": "",
      "fieldBind": "",
      "fieldSize": 100,
      "fieldMax": 100,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 8,
      "fieldType": "CMSelect",
      "fieldName": "insuredProvinceCode",
      "fieldID": "select1",
      "fieldLabel": "Province",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "ProvincesSelectTag",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 9,
      "fieldType": "CMSelect",
      "fieldName": "insuredCityCode",
      "fieldID": "select2",
      "fieldLabel": "City/Municipality",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "CitiesSelectTag",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 10,
      "fieldType": "CMSelect",
      "fieldName": "insuredStatus",
      "fieldID": "selectGo3",
      "fieldLabel": "Civil Status",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "civilStatus",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 11,
      "fieldType": "CMText",
      "fieldName": "insuredOccupation",
      "fieldID": "string4",
      "fieldLabel": "Occupation",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 50,
      "fieldMax": 50,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 12,
      "fieldType": "CMText",
      "fieldName": "insuredPlaceOfBirth",
      "fieldID": "string5",
      "fieldLabel": "Place of Birth",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 50,
      "fieldMax": 50,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 13,
      "fieldType": "CMText",
      "fieldName": "insuredSSSTIN",
      "fieldID": "string6",
      "fieldLabel": "SSS/TIN",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 14,
      "fieldType": "CMText",
      "fieldName": "ben1LastName",
      "fieldID": "string7",
      "fieldLabel": "Beneficiary-1: Last Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 15,
      "fieldType": "CMText",
      "fieldName": "ben1FirstName",
      "fieldID": "string8",
      "fieldLabel": "First Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 16,
      "fieldType": "CMText",
      "fieldName": "ben1MiddleName",
      "fieldID": "string9",
      "fieldLabel": "Middle Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 17,
      "fieldType": "CMSelect",
      "fieldName": "ben1Relationship",
      "fieldID": "select4",
      "fieldLabel": "Relationship",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": ">spaces",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "relationship",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 18,
      "fieldType": "CMText",
      "fieldName": "ben2LastName",
      "fieldID": "string10",
      "fieldLabel": "Beneficiary-2: Last Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 19,
      "fieldType": "CMText",
      "fieldName": "ben2FirstName",
      "fieldID": "string11",
      "fieldLabel": "First Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 20,
      "fieldType": "CMText",
      "fieldName": "ben2MiddleName",
      "fieldID": "string12",
      "fieldLabel": "Middle Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 21,
      "fieldType": "CMSelect",
      "fieldName": "ben2Relationship",
      "fieldID": "select5",
      "fieldLabel": "Relationship",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "relationship",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 22,
      "fieldType": "CMText",
      "fieldName": "ben3LastName",
      "fieldID": "string13",
      "fieldLabel": "Beneficiary-3: Last Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 23,
      "fieldType": "CMText",
      "fieldName": "ben3FirstName",
      "fieldID": "string14",
      "fieldLabel": "First Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 24,
      "fieldType": "CMText",
      "fieldName": "ben3MiddleName",
      "fieldID": "string15",
      "fieldLabel": "Middle Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 25,
      "fieldType": "CMSelect",
      "fieldName": "ben3Relationship",
      "fieldID": "select6",
      "fieldLabel": "Relationship",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "relationship",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 26,
      "fieldType": "CMText",
      "fieldName": "ben4LastName",
      "fieldID": "string16",
      "fieldLabel": "Beneficiary-4: Last Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 27,
      "fieldType": "CMText",
      "fieldName": "ben4FirstName",
      "fieldID": "string17",
      "fieldLabel": "First Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 28,
      "fieldType": "CMText",
      "fieldName": "ben4MiddleName",
      "fieldID": "string18",
      "fieldLabel": "Middle Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 29,
      "fieldType": "CMSelect",
      "fieldName": "ben4Relationship",
      "fieldID": "select7",
      "fieldLabel": "Relationship",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "relationship",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 30,
      "fieldType": "CMText",
      "fieldName": "numUnits",
      "fieldID": "integer1",
      "fieldLabel": "Number of Units Availed",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 31,
      "fieldType": "CMText",
      "fieldName": "perUnitFee",
      "fieldID": "currency1",
      "fieldLabel": "Per Unit Fee",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 32,
      "fieldType": "CMText",
      "fieldName": "totalCost",
      "fieldID": "currency2",
      "fieldLabel": "Total Cost",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 33,
      "fieldType": "CMSelect",
      "fieldName": "staffLoginName",
      "fieldID": "select4",
      "fieldLabel": "Referrer",
      "fieldKey": "",
      "fieldBind": "",
      "fieldSize": 25,
      "fieldMax": 25,
      "validationRule": ">spaces",
      "selectTag": "StaffSelectTag",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 1,
      "insSubComponentID": 1,
      "itemNo": 34,
      "fieldType": "CMText",
      "fieldName": "refClientID",
      "fieldID": "string19",
      "fieldLabel": "Reference Client I.D. (6-10 digits)",
      "fieldKey": "",
      "fieldBind": "",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": ">spaces",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 2,
      "insSubComponentID": 1,
      "itemNo": 1,
      "fieldType": "CMText",
      "fieldName": "famLastName",
      "fieldID": "string20",
      "fieldLabel": "Last Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 2,
      "insSubComponentID": 1,
      "itemNo": 2,
      "fieldType": "CMText",
      "fieldName": "famFirstName",
      "fieldID": "string21",
      "fieldLabel": "First Name",
      "fieldKey": "",
      "fieldBind": "CMBind-Body",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 2,
      "insSubComponentID": 1,
      "itemNo": 3,
      "fieldType": "CMText",
      "fieldName": "famMiddleName",
      "fieldID": "string22",
      "fieldLabel": "Middle Name",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 2,
      "insSubComponentID": 1,
      "itemNo": 4,
      "fieldType": "CMText",
      "fieldName": "famBirthDate",
      "fieldID": "date2",
      "fieldLabel": "Date of Birth",
      "fieldKey": "",
      "fieldBind": "CMBind-Beg",
      "fieldSize": 10,
      "fieldMax": 10,
      "validationRule": "None",
      "selectTag": "",
      "selectKeyword": "",
      "placeHolder": "mm/dd/yyyy",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    },
    {
      "insGroupID": "GTLHF",
      "insProductID": "FLI27",
      "insComponentID": 2,
      "insSubComponentID": 1,
      "itemNo": 6,
      "fieldType": "CMSelect",
      "fieldName": "famRelationship",
      "fieldID": "select5",
      "fieldLabel": "Relationship",
      "fieldKey": "",
      "fieldBind": "CMBind-End",
      "fieldSize": 20,
      "fieldMax": 20,
      "validationRule": "None",
      "selectTag": "ClassCodesSelectTag",
      "selectKeyword": "relationship",
      "placeHolder": "",
      "updateBy": "SYSMANAGER     ",
      "updateDate": "2023-12-12T14:44:00"
    }
  ];
  
export default dbTemplate;
