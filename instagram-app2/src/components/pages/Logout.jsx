import { useContext, useEffect } from "react";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { instance } from "../../apis";
import UserContext from "../../contexts/user";

const Logout = () => {
  // 1. localStorage의 token 지우기
  localStorage.removeItem("token");

  // 2. axios instance 의 default header Authorization 지우기
  delete instance.defaults.headers.common["Authorization"];

  // 3. UserContext의 isLogin false로 만들기
  const { setIsLogin } = useContext(UserContext);

  /**
   * Warning: Cannot update a component (`App`)
   * while rendering a different component (`Logout`).
   * To locate the bad setState() call inside `Logout`,
   */
  // setIsLogin(false);

  useEffect(() => {
    setIsLogin(false);
    return () => {
      setIsLogin(false);
    };
  }, [setIsLogin]);

  // 4. login 페이지로 이동 => Router 의 Outlet 속성으로 변경
  // let navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login");
  // }, [navigate]);

  return <div>logout</div>;
};

export default Logout;
