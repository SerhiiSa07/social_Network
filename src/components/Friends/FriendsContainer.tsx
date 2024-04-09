import React from "react";
import {firstNameCreator, updateNewNameFriendsCreator} from "../../redux/sidebar-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        firstName: () => {
            dispatch(firstNameCreator());
        },
        updateNewNameFriend: (friend) => {
            dispatch(updateNewNameFriendsCreator(friend));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
