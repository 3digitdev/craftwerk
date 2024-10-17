import './FormFields.css'
import {ErrorMessage} from 'formik';

type FieldProps = {
    name: string,
    capName?: string,
}

type FormFieldProps = {
    children: any,
} & FieldProps

const FormField = ({ name, capName, children }: FormFieldProps) => {
    const capitalized = capName || name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className='field-container'>
            <label htmlFor={name}>{capitalized}</label>
            {children}
            <ErrorMessage name={`${name}`} />
            <ErrorMessage name={`${name}.length`} />
            <ErrorMessage name={`${name}.width`} />
            <ErrorMessage name={`${name}.units`} />
        </div>
    )
}

export {FormField};
export type {FieldProps}