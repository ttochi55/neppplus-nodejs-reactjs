import { useReducer } from "react";

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickName } = state;
  return (
    <>
      <div>
        <input
          name="name"
          value={name}
          placeholder="이름 입력"
          onChange={(e) => dispatch(e.target)}
        />
        <input
          name="nickName"
          value={nickName}
          placeholder="닉네임 입력"
          onChange={(e) => dispatch(e.target)}
        />
      </div>
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickName}</h3>
    </>
  );
};

export default Info;
