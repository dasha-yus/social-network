import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <div className={styles.users}>
        <h2>Users</h2>
        {this.props.users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.left}>
              <div>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
                  alt="ava"
                  className={styles.image}
                ></img>
              </div>
              {user.followed ? (
                <button onClick={() => this.props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(user.id)}>
                  Follow
                </button>
              )}
            </div>
            <div className={styles.right}>
              <div className={styles.location}>
                <div>
                  <h3>{user.name}</h3>
                </div>
                <div>
                  <h4>
                    Location
                    {/* {user.location.country}, {user.location.city} */}
                  </h4>
                </div>
              </div>
              <h6>{user.status}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
