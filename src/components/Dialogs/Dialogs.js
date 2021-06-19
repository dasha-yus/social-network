import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagesPage;
  let ref = React.createRef();

  const sendMessage = () => {
    props.addMessage();
  };

  const onUpdateMessage = () => {
    let newMessageText = ref.current.value;
    props.updateNewMessage(newMessageText)
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {state.dialogs.map((dialog) => (
          <Dialog name={dialog.name} id={dialog.id} image={dialog.image} />
        ))}
      </div>
      <div className={styles.messages}>
        {state.messages.map((message) => (
          <Message message={message.message} />
        ))}
        <div className={styles.send}>
          <textarea
            ref={ref}
            value={state.newMessage}
            onChange={onUpdateMessage}
          ></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
