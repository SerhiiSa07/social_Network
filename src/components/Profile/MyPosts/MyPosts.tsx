import React from "react";
import s from "./MyPosts.module.css";
import Post from "components/Profile/MyPosts/Post/Post";
import { Field, reduxForm } from "redux-form";

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
