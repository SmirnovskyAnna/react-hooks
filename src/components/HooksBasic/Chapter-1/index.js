//The basics of useState. Using a pure function. Standard clicker counter.
import * as React from "react";

export default function Chapter1() {
  const [clicks, setClicks] = React.useState(0);
  const [showClicks, setShowClicks] = React.useState(false);
  const [inputText, setInputText] = React.useState("");

  const onClick = () => {
    setTimeout(() => {
      setClicks((prevValue) => prevValue + 1);
    }, 2000);
  };

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const toggleShowClicks = () => setShowClicks((prev) => !prev);

  const clicksText = showClicks ? `(${clicks})` : "";

  return (
    <>
      <button onClick={onClick}>Click me! {clicksText}</button>
      <button onClick={toggleShowClicks}>Toggle show clicks</button>
      <input value={inputText} type="text" onChange={onChange}/>
    </>
  );
}
