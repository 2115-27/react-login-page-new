import React from "react";
import './App1.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Extraction Form
        </p>
        <form>
         <div className="input-container">
           <label>Release Version  </label>
           <input type="text" name="uname" required />
         </div><br>
         <div className="input-container">
           <label>Model Type  </label>
           <input type="text" name="pass" required />
         </div><br>
         <button type="button" class="build-button">BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default Home;
