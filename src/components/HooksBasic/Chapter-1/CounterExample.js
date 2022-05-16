//The basics of useState. Using a pure function. Standard clicker counter.
import * as React from "react";

export default function CounterExample() {
  const [clicks, setClicks] = React.useState(0);
  const [showClicks, setShowClicks] = React.useState(false);

  const onClick = () => {
    setTimeout(() => {
      setClicks((prevValue) => prevValue + 1);
    }, 2000);
  };

  const toggleShowClicks = () => setShowClicks((prev) => !prev);

  const clicksText = showClicks ? `(${clicks})` : "";

  return (
    <>
      <button onClick={onClick}>Click me! {clicksText}</button>
      <button onClick={toggleShowClicks}>Toggle show clicks</button>
    </>
  );
}
