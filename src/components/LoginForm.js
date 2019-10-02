import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SubmitButton from "./SubmitButton";
import "./LoginForm.css";


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password too Short!')
    .max(32, 'Password too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const LoginForm = (props) => {
  return (

    <div className="form">
      <h2 className="form__title">Customer login</h2>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        validationSchema={LoginSchema}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >

        {({ errors, touched }) => (

          <Form className="login-form">

            <div className="form__field">
              <label htmlFor="login" className="input-label">
                <i className="fa fa-user" aria-hidden="true"></i>
              </label>

              <Field type="email" name="email" className="form__input" placeholder="Email" required />
              {errors.email && touched.email && <div className="form__alert">{errors.email}</div>}

            </div>

            <hr />

            <div className="form__field">
              <label htmlFor="password" className="input-label">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </label>

              <Field type="password" name="password" className="form__input" placeholder="*********" maxLength="32" required />
              {errors.password && touched.password && <div className="form__alert">{errors.password}</div>}

            </div>

            <SubmitButton handleSubmitForm={props.handleSubmitForm} />

            <div className="form__footer">
              <p>Forgot Password? <a href="http://">Click Here</a></p>
            </div>
          </Form>

        )}

      </Formik>

    </div>

  );
}

export default LoginForm;