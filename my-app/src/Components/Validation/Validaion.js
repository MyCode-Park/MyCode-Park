export default function validateInfo(values) {
  let errors = {};

  // First Name
  if (!values.first_name.trim()) {
    errors.first_name = "*First name required";
  }

  // Last Name
  if (!values.last_name.trim()) {
    errors.last_name = "*Last name required";
  }

  // Email
  if (!values.email) {
    errors.email = "*Email required";
  } else if (
    !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      values.email
    )
  ) {
    errors.email = "*Email address is invalid";
  }

  // // Password
  // if (!values.password) {
  //   errors.password = "*Password is required";
  // } else if (values.password.length < 6) {
  //   errors.password = "*Password needs to be 6 characters or more";
  // }

  // // Mobile no
  // if (!values.mobile_no) {
  //   errors.mobile_no = "*Mobile Number is required";
  // } else if (values.mobile_no.length !== 10) {
  //   errors.mobile_no = "*Enter a valid Mobile Number";
  // }

  // Mobile no
  if (values.mobile_no.length === 0) {
    // errors.mobile_no = "*Mobile Number is not required";
  } else if (values.mobile_no.length !== 10) {
    errors.mobile_no = "*Enter a valid Mobile Number";
  }

  return errors;
}
