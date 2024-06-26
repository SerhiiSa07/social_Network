import React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "components/common/FormControls/FormsControls";
import { required } from "utils/validators/validators";
import { connect } from "react-redux";
import { login } from "redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaUrl: null;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.rememberMe, formData.captchaUrl);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
