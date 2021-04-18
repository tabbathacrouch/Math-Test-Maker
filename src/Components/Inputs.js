import React from "react";
import { Field } from "formik";

export const FirstNameInput = () => (
  <div className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
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
