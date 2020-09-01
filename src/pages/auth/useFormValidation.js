import React, { useEffect } from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  // Side Effects
  useEffect(() => {
    if (isSubmit) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("Authenticated", values);
        setIsSubmit(false);
      } else {
        setIsSubmit(false);
      }
    }
  }, [errors]);

  // Handle Input Changes
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  // Handle Input Event
  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  // Handle Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmit(true);

    console.log({ values });
  };

  return {
    handleInputChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmit,
  };
};

export default useFormValidation;
