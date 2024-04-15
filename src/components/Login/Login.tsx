import React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "components/common/FormControls/FormsControls";
import { required } from "utils/validators/validators";
import { connect } from "react-redux";
import { login } from "redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} />
      </div>
      <div>
        <Field placeholder={"checkbox"} name={"rememberMe"} component={Input} /> remember me
      </div>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
