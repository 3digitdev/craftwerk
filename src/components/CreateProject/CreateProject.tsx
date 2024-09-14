import './CreateProject.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from "../FormFields";
import DropDownField from "../FormFields/DropDownField";
import {ProjectType} from "../../types/projects";

const projectValidator = Yup.object({
    type: Yup.string().oneOf(Object.keys(ProjectType)).required('Required'),
    title: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
})

const CreateProject = () => {
    return (
        <Formik
            initialValues={{}}  // TODO?  Do we need defaults...?
            validationSchema={projectValidator}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='form-container'>
                <DropDownField options={Object.keys(ProjectType)} name='type' />
                <TextField name='title' />
                <div className='submit-container'>
                    <a href='#'>Advanced</a>
                    <button type='submit'>Create Project</button>
                </div>
            </Form>
        </Formik>
    );
};

export default CreateProject;