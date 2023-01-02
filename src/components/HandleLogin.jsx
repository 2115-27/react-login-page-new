// import React from "react";
// //import './App1.css';

// // const Home = () => {
// // 	const handleClick = async () => {
// // 	  console.log("handleclick")
// // 	let jsondata = JSON.stringify({
// //       	ref: 'main',
// //     	});

// //     let methodtype = 'POST';
// // 	let auth = 'Token ' + process.env.API_KEY
// // 	console.log(jsondata)
// // 	console.log("appending authsss")
// // 	console.log(auth)
// // 	console.log("setting tokenssSSSAAA")
// // 	  /* eslint-disable no-unused-vars */
// // 	 const apicall = await fetch(`https://api.github.com/repos/2115-27/react-login-page/actions/workflows/Reuseable-A.yml/dispatches`, {
// //       method: methodtype,
// //       headers: {
// // 	   'Accept': 'application/vnd.github+json',
// // 	   'Authorization': `token ${process.env.GITHUB_TOKEN}`,
// // 	   'X-GitHub-Api-Version': '2022-11-28',
// //       },
// //       body: jsondata,
// //     })
// //       .then((responseData) => responseData.json())
// //       .then(async (responseJson) => {
// //        console.log('handle inside');
// //       })
// //       .catch((error) => {
// //         console.log('error inside');
// //       });
// // 	/* eslint-enable no-unused-vars */
// //   };
//   return (
//     <div className="w-100">
//       <form className="mt-4">
//         <div>
// 	  <h1>Data Extraction Form</h1>
//           <div
//             className="input-container"
//             placeholder="Release Version"
//           >
// 	  <label>Release Version </label>
// 	  <input type="text" name="uname" required />
// 	  </div>
//           <div
//             className="input-container"
//             placeholder="Model Type"
//           >
// 	  <label>Model Type </label>
// 	  <input type="text" name="pass" required />
// 	  </div>
// 	  <button onClick={handleClick}>BUILD</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Home;

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
