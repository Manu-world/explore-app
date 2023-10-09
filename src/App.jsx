import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      document.title = `New message ${value}`;
    }
  });

  return (
    <React.Fragment>
      <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <p className="font-bold text-xl">{value}</p>
        <button
          className="px-5 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setValue(value + 1)}
        >
          Click me
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
