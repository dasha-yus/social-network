import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount = () => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        let count = res.data.totalCount > 55 ? 54 : res.data.totalCount
        this.props.setTotalUsersCount(count);
      });
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={styles.users}>
        <h2>Users</h2>
        <div className={styles.pages}>
          {pages.map((page) => (
            <span
              className={this.props.currentPage === page && styles.selectedPage}
              onClick={() => this.onPageChanged(page)}
            >
              {page}
            </span>
          ))}
        </div>
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
