import React from "react";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Extraction Form
        </p>
        <form>
         <div className="input-container">
           <label>Release Version </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Model Type </label>
           <input type="text" name="pass" required />
         </div>
         <button onClick={handleClick}>BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default Home;
