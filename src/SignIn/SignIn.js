import React from "react";
import { Formik, Form } from "formik";
import { EmailInput, PasswordInput } from "../Components/Inputs";

function SignIn({ users }) {
  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(user, { resetForm }) => {
          // need to check if user is in database and email/password combination works
          console.log(user);
          resetForm();
        }}
      >
        <Form>
          <div>
            <h2>Sign In</h2>
          </div>
          <div className="form">
            <EmailInput />
            <PasswordInput />
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
