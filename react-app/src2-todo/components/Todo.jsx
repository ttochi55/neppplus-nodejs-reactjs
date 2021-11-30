import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Todo = () => {
  // useState로 배열 선언
  // 초기값: [{id: 1, text: "할일", isDone: false}, {id: 2, text: "할일2", isDone: false}]
  const [todoList, setTodoList] = useState([
    { id: 1, text: "할일", isDone: false },
    { id: 2, text: "할일2", isDone: false },
  ]);
  const [text, setText] = useState("");

  // nextId 값을 useState(or useRef)로 관리하여 추가될때마다 id:0 대신 고유의 id
  // const [nextId, setNextId] = useState(3);
  const nextId = useRef(3);

  useEffect(() => {
    console.log(todoList);
  }, []);

  // input type="text"에 입력되는 값 useState로 관리
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 등록 버튼을 누르면 Input에서 입력한 값을 객체형식 ({id:0, text:text, isDone:false})으로 todoList에 추가
  const handleInsert = (e) => {
    const newTodoList = todoList.concat({
      id: nextId.current,
      text,
      isDone: false,
    });
    setTodoList(newTodoList);
    setText("");

    // setNextId(nextId + 1);
    nextId.current += 1;
  };

  // 삭제 버튼 누르면 todo 삭제 (filter 함수)
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  const handleDone = (e, id) => {
    const { checked } = e.target;
    const newTodoList = todoList.map((todo) => {
      // if (todo.id === id) {
      //   // todo.isDone = checked;
      //   // return todo;
      //   return { ...todo, isDone: checked };
      // } else {
      //   return todo;
      // }
      return todo.id === id ? { ...todo, isDone: checked } : todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <Component>
        <Title>일정관리</Title>
        <InputWrapper>
          <Input value={text} onChange={handleChange} />
          <BtnAdd onClick={handleInsert}>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          {/* <TodoItem>을 배열의 map함수로 출력 */}
          {todoList.map((todo) => (
            <TodoItem key={todo.id} isDone={todo.isDone}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => handleDone(e, todo.id)}
                />
                <TodoContent>{todo.text}</TodoContent>
              </label>
              <BtnDelete onClick={() => handleDelete(todo.id)}>삭제</BtnDelete>
            </TodoItem>
          ))}
        </TodoList>
      </Component>
    </div>
  );
};

const Component = styled.div`
  width: 500px;
  margin: 10px auto;
  background: #fecdcd;
`;

const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 15px;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 10px;
  border: 1px solid #d1d3d8;
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

const BtnAdd = styled(Button)`
  background: #fff;
`;

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 10px;
  label {
    display: flex;
    align-items: center;
  }
`;

const TodoContent = styled.span`
  margin-left: 10px;
`;

const TodoItem = styled.li`
  background: ${(props) => (props.isDone ? "black" : "white")};
  color: ${(props) => (props.isDone ? "white" : "black")};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;

  & + & {
    margin-top: 10px;
  }

  ${TodoContent} {
    text-decoration: ${(props) => props.isDone && "line-through"};
  }
`;

const BtnDelete = styled(Button)`
  background: red;
  color: #fff;
`;

export default Todo;
