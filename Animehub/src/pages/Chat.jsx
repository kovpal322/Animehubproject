import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const Chat = (props) => {
  const chatProps = useMultiChatLogic(
    "777492b2-c259-4945-a6e3-6bed0f3b048e",
    props.chatUser.username,
    "secret"
  );
  console.log(props.chatUser.secret);
  return (
<<<<<<< HEAD
    <div
      style={{ height: "100vh" }}
      className="fixed-top text-white chat-background"
    >
=======
    <div style={{ height: "100vh" }} className="fixed-top text-white  bg-dark">
>>>>>>> 11789fac8d7853a2cc48e4a244386a16c00c8f3e
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};
export default Chat;
