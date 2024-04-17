import { PrettyChatWindow } from 'react-chat-engine-pretty';

const Chat = (props) => {
  console.log(props.chatUser.secret);
  
  return (
    <div className="fixed-top" style={{ height: '100vh' }}>
      <PrettyChatWindow
      projectId="777492b2-c259-4945-a6e3-6bed0f3b048e"
      username= {props.chatUser.username}
      secret="secret"
      
    />
    </div>
  );
};
export default Chat;
