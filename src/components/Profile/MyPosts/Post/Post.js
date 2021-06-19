import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="pic"></img>
      {props.message}
      <div>
          {props.likes} likes
      </div>
    </div>
  );
};

export default Post;
