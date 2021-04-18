import React from "react";
import { Formik, Form } from "formik";
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
} from "../Components/Inputs";

function Register({ addUser }) {
  return (
    <Formik
      initialValues={{
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={(user, { resetForm }) => {
        addUser(user);
        console.log(user);
        const prev = user.id;
        resetForm({
          values: {
            id: prev + 1,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          },
        });
      }}
    >
      <Form>
        <div>
          <h2>Register</h2>
        </div>
        <div className="form">
          <FirstNameInput />
          <LastNameInput />
          <EmailInput />
          <PasswordInput />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default Register;
