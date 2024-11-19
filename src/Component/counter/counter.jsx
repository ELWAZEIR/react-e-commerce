import { useState } from "react";
import './counter.css'; 

const FooterCard = () => {
 const [count, setCount] = useState(1); 

   const  handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) { 
      setCount(count - 1);
    }
  };

  return (
    <div className="footer-card">
      <div className="footer-card-controls">
        <button onClick={handleDecrease}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default FooterCard;
