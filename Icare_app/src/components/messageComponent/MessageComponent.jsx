import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { fetchMessages } from "../../store/newIndex";
import { useDispatch, useSelector } from "react-redux";
import styles from "./messageComponent.module.css"

const MessageComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  const { isLoading, data, error } = useSelector((state) => {
    return state.messages;
  });

  const handleOpenMessages = () => {
    navigate("/client/messages")
  }

  const loading = () => {
    return <div>Loading.....</div>;
  };

  const noMessages = () => {
    return <div>{isLoading != null ? loading : "No messages"}</div>;
  };

  const messages = () => {
    return (
      <div onClick={handleOpenMessages} className={styles.messages}>{data.length === 1 ? `1 message` : `${data.length} messages`}</div>
    );
  };

  return (
    <div>
      <FaRegMessage style={{ margin: "0 20 0 20" }} size={40}></FaRegMessage>
      <div>
        {isLoading
          ? loading()
          : error
          ? "An error occured"
          : data.length === 0
          ? noMessages()
          : data.length !== 0
          ? messages()
          : null}
      </div>
    </div>
  );
};

export default MessageComponent;
