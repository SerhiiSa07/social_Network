import React from "react";
import s from "./MyPosts.module.css";
import Post from "components/Profile/MyPosts/Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "utils/validators/validators";
import { Textarea } from "components/common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder="Post message" validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
}

let AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

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
