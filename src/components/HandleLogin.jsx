import React from "react";
import './App1.css';

const Home = () => {
	const handleClick = async () => {
	  console.log("handleclick")
	let jsondata = JSON.stringify({
      	ref: 'master',
    	});

    let methodtype = 'POST';
	let auth = 'Token ' + process.env.API_KEY
	console.log(jsondata)
	console.log("appending authsss")
	console.log(auth)
	console.log("setting tokenssSSSAAA")
	  /* eslint-disable no-unused-vars */
	 const apicall = await fetch(`https://api.github.com/repos/2115-27/react-login-page/actions/workflows/Reuseable-A.yml/dispatches`, {
      method: methodtype,
      headers: {
	   'Accept': 'application/vnd.github+json',
	   'Authorization': `token ${process.env.GITHUB_TOKEN}`,
	   'X-GitHub-Api-Version': '2022-11-28',
      },
      body: jsondata,
    })
      .then((responseData) => responseData.json())
      .then(async (responseJson) => {
       console.log('handle inside');
      })
      .catch((error) => {
        console.log('error inside');
      });
	/* eslint-enable no-unused-vars */
  };
  return (
    <div className="w-100">
      <form className="mt-4">
        <div>
	  <h1>Data Extraction Form</h1>
          <input
            className="form-control border-top-0 border-start-0 border-end-0 rounded-0 pb-2 mb-2 opacity-75"
            name="release"
            type="text"
            placeholder="Release Version"
          />
          <input
            className="form-control border-top-0 border-start-0 border-end-0 rounded-0 pb-2 mb-2 opacity-75"
            name="model"
            type="text"
            placeholder="Model Type"
          />
          <button
            onClick={handleClick}
            className="btn btn-lg w-100 btn-dark mt-4">
            BUILD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
