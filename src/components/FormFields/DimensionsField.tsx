import {FieldProps, FormField} from "./FormField";
import {Field, ErrorMessage} from "formik";
import {DimensionUnits} from "../../types/projects";

type DimensionsFieldProps = {
} & FieldProps

const DimensionsField = ({ name, capName }: DimensionsFieldProps) => {
    // TODO:  NEED TO GET VALIDATIONS AS SINGLE ERROR RATHER THAN 2
    //        ALSO NEED TO FIX VALIDATION ERROR WHEN ATTEMPTING TYPING NON-NUMERIC...
    return (
        <div className='field-container'>
        {/* <FormField name={name} capName={capName}> */}
            <label htmlFor={name}>{name}</label>
            <div className='dimension-container'>
                <Field className='dimension-field' name={`${name}.length`} type='number' inputMode='decimal' />
                <div className='dimension-field'>X</div>
                <Field className='dimension-field' name={`${name}.width`} type='number' inputMode='decimal' />
                <Field name={`${name}.units`} as='select' children={Object.values(DimensionUnits).map(o => <option>{o}</option>)} />
                <ErrorMessage name={`${name}.length`} />
                <ErrorMessage name={`${name}.width`} />
                <ErrorMessage name={`${name}.units`} />
            </div>
        {/* </FormField> */}
        </div>
    );
};

export default DimensionsField;