import './CreateProject.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from "../FormFields";
import DropDownField from "../FormFields/DropDownField";
import {PrecutType, ProjectType, QuiltType} from "../../types/projects";
import {useState} from "react";

const fabricMetadataSchema = Yup.object({
    id: Yup.string().required('Required'),
    line: Yup.string(),
    designer: Yup.string(),
    description: Yup.string(),
    totalYardage: Yup.number().positive('Must be > 0'),
    purchaseStore: Yup.string(),
    purchasePrice: Yup.number().positive('Must be > 0'),
    purchaseDate: Yup.date(),
})

const threadInfoSchema = Yup.object({
    color: Yup.string(),
    brand: Yup.string(),
    weight: Yup.string(),
    composition: Yup.string(),
    store: Yup.string(),
    price: Yup.number().positive('Must be > 0'),
    purchaseDate: Yup.date(),
    amountUsed: Yup.string(),
})

const needleInfoSchema = Yup.object({
    type: Yup.string(),
    brand: Yup.string(),
    store: Yup.string(),
    price: Yup.number().positive('Must be > 0'),
    purchaseDate: Yup.date(),
})

const projectValidator = Yup.object({
    type: Yup.string().oneOf(Object.keys(ProjectType)).required('Required'),
    title: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    creator: Yup.string().required('Required'),
    startDate: Yup.date().required('Required').default(() => new Date()),
    endDate: Yup.date().required('Required'),
    dedication: Yup.string(),
    dedicationDate: Yup.date(),
    createdFor: Yup.string(),
    occasion: Yup.string(),
    dimensions: Yup.tuple([
        Yup.number().positive('Must be > 0').required('Required'),
        Yup.number().positive('Must be > 0').required('Required')
    ]),
    fabricInfo: Yup.object({
        fabricType: Yup.object().oneOf([
            Yup.object({
                primaryFabric: Yup.string(),
                notes: Yup.string(),
            }).label('Scrappy'),
            Yup.object({
                notes: Yup.string(),
                fabrics: Yup.array().of(fabricMetadataSchema)
            }).label('Yardage'),
            Yup.object({
                type: Yup.string().oneOf(Object.keys(PrecutType)).required('Required'),
                otherDesc: Yup.string(),
                primaryFabric: fabricMetadataSchema,
                backgroundFabric: fabricMetadataSchema,
                notes: Yup.string()
            }).label('Precut'),
        ]).required('Required'),
        machine: Yup.string().required('Required'),
        threadInfo: threadInfoSchema,
        needleInfo: needleInfoSchema,
    }),
    quiltInfo: Yup.object({
        quiltedBy: Yup.string().required('Required'),
        shop: Yup.string(),
        cost: Yup.string(),
        quiltDate: Yup.date(),
        battings: Yup.array().of(Yup.object({
            composition: Yup.string().required('Required'),
            color: Yup.string().required('Required'),
            weight: Yup.string(),
            size: Yup.string(),
            brand: Yup.string(),
            store: Yup.string(),
            prince: Yup.number().positive('Must be > 0')
        })),
        quiltType: Yup.string().oneOf(Object.keys(QuiltType)).required('Required'),
        otherQuiltType: Yup.string().when('quiltType', {
            is: 'Other',
            then: s => s.required('Required'),
            otherwise: s => s
        }),
        quiltTypeData: Yup.object({
            threadInfo: threadInfoSchema,
            needleInfo: needleInfoSchema,
            markingMethod: Yup.string(),
            machine: Yup.string(),
            design: Yup.string(),
            designer: Yup.string(),
            designPrice: Yup.number().positive('Must be > 0'),
            designStore: Yup.string(),
        }),
    }),
    binding: Yup.object({
        width: Yup.string(),
        date: Yup.date(),
        style: Yup.string(),
        fabrics: Yup.array().of(fabricMetadataSchema)
    })
})

const renderAdvancedForm = (advanced: boolean) => {
    const elements = (
        <>
            <h1>ADVANCED STUFF!</h1>
        </>
    );
    return advanced ? elements : <></>;
}

const CreateProject = () => {
    const [advanced, setAdvanced] = useState(false);

    return (
        <Formik
            initialValues={{}}  // Do we need defaults...?
            validationSchema={projectValidator}
            onSubmit={(values, { setSubmitting }) => {  // TODO!
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='form-container'>
                <DropDownField options={Object.keys(ProjectType)} name='type'/>
                <TextField name='title'/>
                <TextField name='creator'/>
                {/* TODO:  DATE PICKERS */}
                <TextField name='dedication'/>
                <TextField name='createdFor' capName='Created For'/>
                <TextField name='occasion'/>
                {/* TODO: Dimensions multi-number picker */}
                <div className='btn-container'>
                    <button className='advanced-toggle' onClick={() => setAdvanced(!advanced)}>
                        {advanced ? 'Hide' : 'Show'} Advanced
                    </button>
                </div>
                <div className='advanced-container'>
                    {renderAdvancedForm(advanced)}
                </div>
                <div className='btn-container'>
                    <button className='create-btn' type='submit'>Create Project</button>
                </div>
            </Form>
        </Formik>
    );
};

export default CreateProject;