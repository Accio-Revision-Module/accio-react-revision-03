import { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleNavigation = () => {
    console.log("Navigate to a new page");
    navigate("/dashboard");
  };

  useEffect(() => {
    console.log("Only the first time");
  }, []);

  useEffect(() => {
    if (count) {
      console.log("Count variable was changed", count);
    }
  }, [count]);

  const id = Math.random();

  return (
    <>
      <div>Number of times button was clicked: {count}</div>
      {count == 5 && <p style={{ color: "green" }}>The value is 5</p>}
      <p>The count value is {count > 5 ? "greater" : "smaller"} than 5</p>
      <button onClick={handleClick}>Click Me!</button>

      <div>
        <Link to="/dashboard">Click to go to dashboard</Link>
        <Link to={`/user/${id}`}>Click to go to random user</Link>
      </div>

      <div>
        <button onClick={handleNavigation}>Navigate to dashboard</button>
      </div>
    </>
  );
}

export default Home;
