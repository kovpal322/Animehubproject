import { useUserContext } from "../hooks/useUserContext.jsx";

const LogoutButton = () => {
  const { dispatch } = useUserContext();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout_user" });
    window.location.assign("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default LogoutButton;
