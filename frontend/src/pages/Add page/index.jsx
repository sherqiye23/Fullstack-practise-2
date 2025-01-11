import { Helmet } from "react-helmet";
import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useAddConsultingMutation, useGetConsultingsQuery } from "../../redux/Slices/Consulting";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    job: Yup.string().required('Required'),
    image: Yup.string().required('Required').url()
});

export default function Add() {
    let { refetch } = useGetConsultingsQuery()
    let navigate = useNavigate()
    let [addConsulting] = useAddConsultingMutation()

    return (
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            <div className="h-[70vh] my-5">
                <Container>
                    <h1 className="text-4xl font-bold text-center">ADD FORM</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            job: '',
                            image: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            addConsulting(values)
                            refetch()
                            navigate("/")
                        }}>
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col gap-4 my-3">
                                <div>
                                    <Field className="w-full px-2 py-1 border" type="text" name="name" id="name" placeholder="...enter name" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div>
                                    <Field className="w-full px-2 py-1 border" type="text" name="job" id="job" placeholder="...enter job" />
                                    <ErrorMessage name="job" component="div" />
                                </div>
                                <div>
                                    <Field className="w-full px-2 py-1 border" type="text" name="image" id="image" placeholder="...enter image" />
                                    <ErrorMessage name="image" component="div" />
                                </div>
                                <button type="submit" disabled={isSubmitting}
                                    className="border max-w-[200px] bg-lime-400 font-bold rounded-4 py-1 text-white">
                                    Submit
                                </button>
                            </Form>
                        )}

                    </Formik>
                </Container>
            </div>
        </>
    )
}