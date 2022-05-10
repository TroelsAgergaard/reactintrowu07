import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("init value");

  return (
    <>
      <p>{value}</p>
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
        type="text"
      />
    </>
  );
};

export default Input;
