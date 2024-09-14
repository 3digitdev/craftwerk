import './FormFields.css'
import {Field} from 'formik';
import {FieldProps, FormField} from "./FormField";

type DropDownFieldProps = {
    options: string[]
} & FieldProps

const TextField = ({ name, capName, options }: DropDownFieldProps) => {
    const optionList = options.map(opt => <option>{opt}</option>)
    return (
        <FormField name={name} capName={capName}>
            <Field name={name} as='select' children={optionList} />
        </FormField>
    )
}

export default TextField;
