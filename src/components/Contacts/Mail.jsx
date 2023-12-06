import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ErrorMessageView from "./ErrorMessageView";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const MailSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Min 2 characters")
    .max(20)
    .required("Name is required"),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});

const Mail = () => {
  const handlerSubmit = (values, form) => {
      console.log(values);
      form.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={MailSchema}
      >
        {(props) => (
          <Form>
            <div>
              <Field name="name" />
              <ErrorMessage name="name" component={ErrorMessageView} />
            </div>

            <div>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component={ErrorMessageView} />
            </div>

            <div>
              <Field name="message" as="textarea" />
              <ErrorMessage name="message" component={ErrorMessageView} />
            </div>

            <button type="submit">send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Mail;
