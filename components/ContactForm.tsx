import * as React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

export const ContactForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '', lastName: "", email: "", comment: "" };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />
          <label htmlFor="comment">Comments</label>
          <Field id="comment" name="comment" placeholder="Comments" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
