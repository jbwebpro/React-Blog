const RegisterValidation = (values) => {
  let errors = {};
  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  // Email Errors
  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter valid email. Required!";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be atleast 8 characters long.";
  }

  // Password COnfirmation Errors
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please confirm your password.";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Match with your password";
  }

  return errors;
};

export default RegisterValidation;
