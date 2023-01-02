import React from "react";
import './src/app.css';

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
         <button type="button" class="build-button">BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default Home;
