const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState = {
  posts: [
    {
      message: "Hello guys",
      likes: 8,
      image:
        "https://www.vokrug.tv/pic/news/4/d/b/b/4dbb0b56e5971326028ff986aec1fad5.jpg",
    },
    {
      message: "My first post here",
      likes: 3,
      image:
        "https://marieclaire.ua/wp-content/uploads/2019/03/47445683_597267714057308_326513354496594094_n.jpg",
    },
  ],
  newPost: "new post",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPost,
        likes: 12,
        image:
          "https://www.vokrug.tv/pic/news/4/d/b/b/4dbb0b56e5971326028ff986aec1fad5.jpg",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPost: ''
      }
    case UPDATE_NEW_POST:
      return {
        ...state,
        newPost: action.newText
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADD_POST",
  };
};

export const updateNewPostTextActionCreator = (newPostText) => {
  return {
    type: "UPDATE_NEW_POST",
    newText: newPostText,
  };
};

export default profileReducer;
