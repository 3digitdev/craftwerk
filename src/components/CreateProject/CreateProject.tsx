import './CreateProject.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
// import type { Project } from '@myTypes/projects';
import * as Yup from 'yup';

const projectValidator = Yup.object({
    // TODO
})

const CreateProject = () => {
    return (
        <Formik
            initialValues={{}}  // TODO
            validationSchema={projectValidator}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor='title'>Title</label>
                <Field name='title' type='text' />
                <ErrorMessage name='title' />

                <button type='submit'>Create Project</button>
            </Form>
        </Formik>
    );
};

export default CreateProject;