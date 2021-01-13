import React from "react";

interface HelloWorldProps {
  message: string;
  setMessageBegin: Function;
}

const HelloWorld = (props: HelloWorldProps) => {
  const [state, setState] = React.useState("");
  React.useEffect(() => {}, [props.message]);

  return (
    <div>
      <input type="text" onChange={e => setState(e.target.value)} />
      <button onClick={() => props.setMessageBegin(state)}>Send Text</button>
      {props.message}
    </div>
  );
};
export default HelloWorld;
