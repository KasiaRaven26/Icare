import { useSelector } from "react-redux";
import styles from "./ClientMessageList.module.css"
import ClientMessageCard from "./ClientMessageCard";

const ClientMessageList = () => {
  const messageData = useSelector((state) => {
    console.log(state.messages.data);
    return state.messages.data;
  });

  const renderedData = messageData.map((element) => {
    console.log(messageData);
    return (
      <ClientMessageCard
        key={element.id}
        sender={element.senderId}
        message={element.message}
      />
    );
  });

  return <div className={styles.messageContainer}>{renderedData}</div>;
};
export default ClientMessageList;
