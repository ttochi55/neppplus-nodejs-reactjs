const MyComponent1 = (props) => {
  return (
    <div>
      Hello, My name is {props.name}.
      <br />
      Hello, My name is {props.name2}.
    </div>
  );
};

const MyComponent2 = (props) => {
  const name = props.name;
  const name2 = props.name2;
  return (
    <div>
      Hello, My name is {name}.
      <br />
      Hello, My name is {name2}.
    </div>
  );
};

const MyComponent3 = (props) => {
  const { name, name2 } = props;
  return (
    <div>
      Hello, My name is {name}.
      <br />
      Hello, My name is {name2}.
    </div>
  );
};

const MyComponent4 = ({ name, name2 }) => {
  return (
    <div>
      Hello, My name is {name}.
      <br />
      Hello, My name is {name2}.
    </div>
  );
};

const MyComponent = ({ name, name2, children }) => {
  return (
    <div>
      Hello, My name is {name}.
      <br />
      Hello, My name is {name2}.
      <br />
      {children}
    </div>
  );
};

export default MyComponent;
