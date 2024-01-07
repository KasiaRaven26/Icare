import { useState } from "react";

export function Button( {data} ) {
  const [showButtons, setShowButtons] = useState(true);

  const handleClick = () => {

    setShowButtons(!showButtons);
    const result = showButtons
    data(result)
  }
    
    return <button onClick={handleClick}>Button</button>;
    
};