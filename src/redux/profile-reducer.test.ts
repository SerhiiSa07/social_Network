import profileReducer, { addPostActionCreation, deletePost } from "redux/profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Serg", likesCount: 0 },
    { id: 2, message: "Lex", likesCount: 23 },
    { id: 3, message: "BlaBla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 2 },
  ],
};

it("length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreation("it-kamasutra");

  //2 action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  //1. test data
  let action = addPostActionCreation("it-kamasutra");

  //2 action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra");
});

it("after deleting length of messages should be decrement", () => {
  //1. test data
  let action = deletePost(1);

  //2 action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
