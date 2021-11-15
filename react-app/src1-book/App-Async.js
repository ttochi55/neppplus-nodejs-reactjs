import Todo from "./components/Todo";

const App = () => {
  function printMe() {
    console.log("hello world");
  }
  setTimeout(printMe, 3000);
  console.log("대기중");

  return (
    <>
      <Todo />
    </>
  );
};

export default App;
