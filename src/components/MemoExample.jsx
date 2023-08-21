/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

function MemoExample() {
  const [value, setValue] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const doubleNumber = useMemo(() => getDoubleNumber(), [value]);

  function getDoubleNumber() {
    for (let i = 0; i < 1000000; i++) {
      // something
      console.log("i");
    }
    return parseInt(value) * 2;
  }

  const themeStyles = {
    dark: { backgroundColor: "black", color: "white" },
    light: { backgroundColor: "white", color: "black" },
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleValueChange}
        placeholder="Enter a value"
        type="number"
      />
      <p>Number: {doubleNumber}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={isDark ? themeStyles.dark : themeStyles.light}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui adipisci
        exercitationem repellat ducimus, voluptatibus nihil in dolorem nostrum
        nemo non laborum? Fuga, maxime accusantium! In voluptatum perspiciatis
        odio consectetur maiores cum fugit blanditiis excepturi ipsam beatae
        minima at obcaecati nihil eius iusto, repellendus quia vero repudiandae
        ex cupiditate mollitia dolorum dicta praesentium? Earum provident eos
        odit expedita accusamus cum ipsa dolore fugit accusantium consequuntur
        nam, numquam suscipit quis! Ratione nesciunt perspiciatis quae in
        voluptatem necessitatibus omnis voluptate hic. Earum et modi dolorum
        voluptates similique tempore impedit beatae blanditiis vitae tempora
        omnis ad laborum, inventore fugit enim, laudantium nisi minima nemo!
      </div>
    </div>
  );
}

export default MemoExample;
