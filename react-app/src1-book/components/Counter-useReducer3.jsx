import { useReducer } from "react";

// useReducer: REDUX 를 훅으로 만든 것
// useMemo, useCallback 렌더링 될때 최적화 시킬때 사용
// useRef 많이 사용 됨

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.number };
    case "DECREMENT":
      return { ...state, value: state.value + action.number };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 1 });
  return (
    <>
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>
        <button onClick={() => dispatch({ type: "INCREMENT", number: 10 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", number: -10 })}>
          -1
        </button>
      </div>
    </>
  );
};

export default Counter3;
