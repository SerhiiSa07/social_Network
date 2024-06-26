import React from "react";
import Profile from "components/Profile/Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, savePhoto, updateStatus } from "redux/profile-reducer";
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
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
