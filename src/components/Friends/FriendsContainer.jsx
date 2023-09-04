import React from "react";
import {firstNameCreator, updateNewNameFriendsCreator} from "../../redux/sidebar-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        firstName: () => {
            dispatch(firstNameCreator());
        },
        updateNewNameFriend: (body) => {
            dispatch(updateNewNameFriendsCreator(body));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default FriendsContainer;
