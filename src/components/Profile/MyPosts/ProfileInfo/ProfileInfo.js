import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.image}
          src="https://wallup.net/wp-content/uploads/2017/03/28/314282-multiple_display-sky-clouds-water.jpg"
          alt="sea"
          id="sea"
        ></img>
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
