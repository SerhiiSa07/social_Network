import { Redirect } from "react-router-dom";
import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
};

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStatePropsType) => {
    let { isAuth, ...restProps } = props;

    if (isAuth) return <Redirect to={"/login"} />;
    return <Component {...(restProps as T)} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
