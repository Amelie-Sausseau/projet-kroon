import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './contact.scss';

const Contact = ({
  changeFieldSendMessage, 
  sendMessage2,
  message,
  email,
  name,
}) => {

  function handleSubmit(evt) {
    evt.preventDefault();
    sendMessage();
  }


  return (
    
    <Formik 
    initialValues={{ name: '', message: '', email: '' }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        sendMessage2();
      }, 400);
    }}
    
  >


  
    {formik => (
 <div className="container">

 <h1 className="contact">Get in touch</h1>
 <form className="contact-form row" onSubmit={formik.handleSubmit} />
 <div className="form-field col x-50">
 <label htmlFor="name"></label>
   <Field id="name" value={name}  className="input-text js-input" type="text" placeholder="Name" name="name" {...formik.getFieldProps('name')} />
   {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
 </div>
 <div className="form-field col x-100">
 <label htmlFor="email"></label>
   <Field id="email" value={email} className="input-text js-input" type="text" placeholder="Email" name="email" {...formik.getFieldProps('message')} />
   {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
 </div>
 <div className="form-field col x-100 ">
 <label htmlFor="message"></label>
   <Field id="message" value={message} className="input-text js-input message" type="text" rows="6" cols="40" placeholder="Message" name="message" {...formik.getFieldProps('email')} />
   {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
 </div>

 <div className="form-field col x-100 align-center">
   <button className="submit-btn" type="submit" value="Submit"  >Envoyer</button>
 </div>

</div>
    )}
 
</Formik>
);
  };

export default Contact;
