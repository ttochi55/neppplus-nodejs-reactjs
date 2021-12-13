import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user";

const LoginCheck = () => {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginCheck;
