import React from "react";
import { Field } from "formik";

export const FirstNameInput = () => (
  <div>
    <Field
      data-testid="firstName"
      name="firstName"
      type="text"
      placeholder="First Name"
    />
  </div>
);

export const LastNameInput = () => (
  <div>
    <Field
      data-testid="lastName"
      name="lastName"
      type="text"
      placeholder="Last Name"
    />
  </div>
);

export const EmailInput = () => (
  <div>
    <Field
      data-testid="email"
      name="email"
      type="email"
      placeholder="Email"
    />
  </div>
);

export const PasswordInput = () => (
  <div>
    <Field
      data-testid="password"
      name="password"
      type="password"
      placeholder="Password"
    />
  </div>
);
