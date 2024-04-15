import React from "react";
import Profile from "components/Profile/Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "redux/redux-store";

type PathParamsType = {
  userId: string;
};

type MapStateToPropsType = {
  profile: ProfileType | null;
};

type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
};

type OwnProsType = MapStateToPropsType & MapDispatchToPropsType;

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
