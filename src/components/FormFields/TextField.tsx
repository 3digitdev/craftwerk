import './FormFields.css'
import {Field} from 'formik';
import {FieldProps, FormField} from "./FormField";

const TextField = ({ name, capName }: FieldProps) => {
    return (
        <FormField name={name} capName={capName}>
            <Field name={name} type='text' />
        </FormField>
    )
}

export default TextField;
