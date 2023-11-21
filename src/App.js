import React from "react";
import "./App.css";

function App(){
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect( () => {
    document.title = toggle ? "Welcome !" : "using the useEffect hook"
  }, []);

  return(
    <div>
      <h1>useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcome !</h2>}
    </div>
  )
}


export default App;