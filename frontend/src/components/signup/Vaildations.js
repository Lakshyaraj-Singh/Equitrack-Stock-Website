

export const SignupValidation = (values) => {
  let errors= usernameverify(values);
  emailverify(values,errors);
  passwordverify(values,errors);
  return errors;
}

export const loginValidation = (values) => {
  let errors= emailverify(values);
  passwordverify(values,errors);
  return errors;
}

export const usernameverify=(values,errors={})=>{
    if(!values.username){
        errors.username="Username is required";
    }
    return errors;
}

export const emailverify=(values,errors={})=>{
    if(!values.email){
        errors.email="Email is required";
    }
    if(!values.email.includes("@")){
        errors.email="Invalid email"}
    if(values.email.includes(" ")){
        errors.email="Must not contain space";
    }
    return errors;
}

export const passwordverify=(values,errors={})=>{
    if(!values.password){
        errors.password="password is required"
    }
    if(values.password.length<8){
        errors.password="password must be at least 8 characters long"
    }
    if(values.password.includes(" ")){
        errors.password="password must not contain space"
    }
    if(!/[A-Z]/.test(values.password)){
        errors.password="password must contain at least one uppercase letter"
    }
    if(!/[a-z]/.test(values.password)){
        errors.password="password must contain at least one lowercase letter"
    }
    if(!/[0-9]/.test(values.password)){
        errors.password="password must contain at least one number"
    }
    if(!/[!@#$%^&*]/.test(values.password)){
        errors.password="password must contain at least one special character"
    }
    return errors;
}