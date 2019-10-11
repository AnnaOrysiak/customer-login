import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SubmitButton from "./SubmitButton";
import "./LoginForm.css";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too short! Password should be between 8 and 32 characters')
    .max(32, 'Too long! Password should be between 8 and 32 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const LoginForm = (props) => {
  const { formSend, handleStatusForm, login, handleLogin } = props;

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
          // Console.log left on purpose
          // Preview of original inputs values
          console.log(`Original values: 
          email - ${values.email}
          password - ${values.password}`);
        }}
      >
        {({ errors, touched, values }) => (

          <Form className="login-form">
            <div className="form__field">
              <span className={`icon fa fa-user${errors.email && touched.email ? " invalid" : ""}`} aria-hidden="true"></span>
              <Field type="email" name="email" className="form__input" required />
              <label htmlFor="password" className={`input-label${values.email.length > 0 ? " touched" : ""}`}>Email</label>
              {errors.email && touched.email && <div className="form__alert">{errors.email}</div>}
            </div>

            <hr />

            <div className="form__field">
              <span className={`icon fa fa-lock${errors.password && touched.password ? " invalid" : ""}`} aria-hidden="true"></span>
              <Field type="password" name="password" className="form__input form__input--password" maxLength="32" required />
              <label htmlFor="password" className={`input-label${values.password.length > 0 ? " touched" : ""}`}>Password</label>
              {errors.password && touched.password && <div className="form__alert">{errors.password}</div>}
            </div>

            <SubmitButton
              formSend={formSend}
              handleStatusForm={handleStatusForm}
              login={login}
              handleLogin={handleLogin}
              validated={!errors.email && touched.email && !errors.password && touched.password}
            />

            <div className="form__footer">
              <p>Forgot Password? <a href="http://">Click Here</a></p>
            </div>
          </Form>
        )
        }
      </Formik>
    </div>
  );
}

export default LoginForm;