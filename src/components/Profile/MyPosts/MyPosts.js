import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let ref = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onUpdatePost = () => {
    let newPostText = ref.current.value;
    props.updateNewPostText(newPostText);
  };

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={ref} value={props.newPost} onChange={onUpdatePost} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {props.posts.map((post) => (
          <Post message={post.message} likes={post.likes} image={post.image} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
