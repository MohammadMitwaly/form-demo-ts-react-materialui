import React, { useState } from "react";
import ConfirmStep from "./ConfirmStep";
import SuccessStep from "./SuccessStep";
import UserDetailsStep from "./UserDetailsStep";
import UserExtraDetailsStep from "./UserExtraDetailsStep";

export interface User {
  firstName: string;
  lastName: string;
  age: number | undefined;
  country: string;
  job: string;
}

function useFormFields<T>(
  initialState: T
): [
  T,
  (
    event: React.ChangeEvent<
      | HTMLTextAreaElement
      | HTMLInputElement
      | { name?: string | undefined; value: unknown }
    >
  ) => void
] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
    inputs,
    function (
      event: React.ChangeEvent<
        | HTMLTextAreaElement
        | HTMLInputElement
        | {
            name?: string | undefined;
            value: unknown;
          }
      >
    ) {
      if ("id" in event.target) {
        setValues({
          ...inputs,
          [event.target.id]: event.target.value,
        });
      } else {
        setValues({
          ...inputs,
          country: event.target.value,
        });
      }
    },
  ];
}

export const UserForm = () => {
  const [step, setStep] = useState(0);

  const [inputs, handleInputChange] = useFormFields<User>({
    firstName: "",
    lastName: "",
    age: undefined,
    country: "",
    job: "",
  });

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
      return (
        <UserExtraDetailsStep
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleInputChange}
          values={inputs}
        />
      );
    case 2:
      return (
        <ConfirmStep
          nextStep={nextStep}
          previousStep={previousStep}
          values={inputs}
        />
      );
    case 3:
      return <SuccessStep />;
  }

  return <div></div>;
};
