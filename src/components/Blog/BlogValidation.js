import { ModalTitle } from "react-bootstrap";

const BlogValidation = (values) => {
  let errors = {};
  const filePattern = new RegExp(/\.(jpg|jpeg|png|gif)$/);

  // Image Errors
  if (!values.image) {
    errors.image = "Image is required";
  } else if (!filePattern.test(values.image.match)) {
    errors.image = "Upload valid image format";
  }

  // Title Errors
  if (!values.title) {
    errors.title = "Title is required";
  } else if (values.title.length < 8) {
    errors.title = "Title must contain atlest 8 characters Long.";
  }

  // Body Errors
  if (!values.body) {
    errors.body = "Body is required";
  }

  return errors;
};

export default BlogValidation;
