import MyComponent from "./components/MyComponent";

const App = () => {
  const name = "react";
  const name2 = "react2";

  return (
    <>
      {/* <MyComponent name="react" name2="react2" /> */}
      {/* <MyComponent name={name} name2={name2}>
        <h1>This is children content in props.</h1>
      </MyComponent> */}
      <MyComponent name={name} name2={name2} />
    </>
  );
};

export default App;
