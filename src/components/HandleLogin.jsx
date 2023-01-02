import React from "react";
import './App1.css';

const Home = () => {
  const handleClick = async () => {
	  console.log("handleclick")
	  const octokit = new Octokit({
  		auth: process.env.TOKEN,
	})

  await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: '2115-27',
    repo: 'react-login-page',
    workflow_id: 'Reuseable-A.yml',
    ref: 'main'
    })
  };
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
         </div><br/>
         <div className="input-container">
           <label>Model Type  </label>
           <input type="text" name="pass" required />
         </div><br/>
         <button type="button" class="build-button">BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default Home;
