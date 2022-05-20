import React, { useState } from "react";

const App = () => {
  let [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(v => v + 1);

  return <button onClick={handleClick}>Clicks: {clicks}</button>
}

export default App;