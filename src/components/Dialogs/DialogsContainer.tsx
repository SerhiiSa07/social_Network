import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "redux/dialogs-reducer";
import Dialogs from "components/Dialogs/Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose, Dispatch } from "redux";
import { RootStateType } from "redux/store";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

/*let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

/*export default DialogsContainer;*/

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
