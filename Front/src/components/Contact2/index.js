import React, { useEffect } from "react";
import { render } from "react-dom";
import { withFormik } from "formik";
import * as Yup from "yup";

import { DisplayFormikState } from "./formik-helper";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!")
  }),
  mapPropsToValues: props => ({
    email: ""
  }),
  
  handleSubmit: (values, { setSubmitting }, sendMessage) => {
    const payload = {
      ...values,
      
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      sendMessage2();
      setSubmitting(false);
    }, 1000);
    console.log(sendMessage());
  },
  displayName: "MyForm"
});

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    sendMessage2,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={e => {
          handleBlur(e);
          if (!errors.email) {
            console.log("dispatch: ", e.currentTarget.value);
          }
        }}
      />
      {errors.email && touched.email && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{errors.email}</div>
      )}
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...props} />
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;