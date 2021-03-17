import React, { useState } from "react";
import UserDetailsStep from "./UserDetailsStep";

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  job: string;
}

function useFormFields<T>(
  initialState: T
): [
  T,
  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
    inputs,
    function (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
      setValues({
        ...inputs,
        [event.target.id]: event.target.value,
      });
    },
  ];
}

export const UserForm = () => {
  const [step, setStep] = useState(0);

  const [inputs, handleInputChange] = useFormFields<User>({
    firstName: "",
    lastName: "",
    age: 0,
    country: "",
    job: "",
  });

  const { firstName, lastName, age, country, job } = inputs;

  const nextStep = () => {
    setStep((currStep) => currStep + 1);
  };

  const previousStep = () => {
    setStep((currStep) => currStep - 1);
  };

  switch (step) {
    case 0:
      return (
        <UserDetailsStep
          nextStep={nextStep}
          handleChange={handleInputChange}
          values={inputs}
        />
      );
    case 1:
      return <h1>Extra details step</h1>;
    case 2:
      return <h1>Confirm inputs step</h1>;
    case 3:
      return <h1>Submitted successfully</h1>;
  }

  return <div></div>;
};
