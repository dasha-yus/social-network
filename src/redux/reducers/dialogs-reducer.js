const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Tom",
      image:
        "https://www.vokrug.tv/pic/news/4/d/b/b/4dbb0b56e5971326028ff986aec1fad5.jpg",
    },
    {
      id: 2,
      name: "Zach",
      image:
        "https://marieclaire.ua/wp-content/uploads/2019/03/47445683_597267714057308_326513354496594094_n.jpg",
    },
    {
      id: 3,
      name: "Chris",
      image:
        "https://www.vokrug.tv/pic/news/b/0/1/5/b015407f0328a26b46f5dc8e76b535d7.jpeg",
    },
    {
      id: 4,
      name: "Selena",
      image:
        "https://nrj.ua/thumb/detail_308_308/news/50/36/5a0035db2dbaa_3_main.jpg",
    },
    {
      id: 5,
      name: "Justin",
      image: "https://instagrammi.ru/wp-content/uploads/dzhastin-biber.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Hey! How are u?" },
    { id: 2, message: "Hi, great" },
    { id: 3, message: "Nice" },
  ],
  newMessage: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        newMessage: "",
        messages: [...state.messages, { id: 4, message: state.newMessage }],
      };
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => {
  return {
    type: "ADD_MESSAGE",
  };
};

export const updateNewMessageTextActionCreator = (newPostText) => {
  return {
    type: "UPDATE_NEW_MESSAGE",
    newMessage: newPostText,
  };
};

export default dialogsReducer;
