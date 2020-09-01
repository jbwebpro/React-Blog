import React from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  // Side Effects
  // React.useEffect(() => {
  //   if (isSubmit) {
  //     const noErrors = Object.keys(errors).length === 0;
  //     if (noErrors) {
  //       console.log("Blog Created: ", values);
  //       setIsSubmit(false);
  //     } else {
  //       setIsSubmit(false);
  //     }
  //   }
  // }, [errors]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.persist();
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmit(true);

    console.log({ values });
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
    isSubmit,
  };
};

export default useFormValidation;
