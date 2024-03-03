import { useSelector } from "react-redux";

const ClientMessageList = () => {
  const messageData = useSelector((state) => {
    console.log(state.messages.data);
    return state.messages.data;
  });

  const renderedData = () => {
    return (
      <div>
        {messageData.map((item) => {
          return item.message;
        })}
      </div>
    );
  };

  return <div>{renderedData()}</div>;
};
export default ClientMessageList;
