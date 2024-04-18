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
>>>>>>> a603960f2b17e29acd4242bb80f6611b25b26cc2
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};
export default Chat;
