// import atmiyalogo from './atmiyalogo.png';
// function Header(){
//     return(
//         <>
     
//            <div>
//             <img src="./atmiyalogo.png"
//             style={{backgroundColor:'white', height:'150px', display:'flex', flexDirection:'column',alignItems: 'center',justifyContent: 'center' }}></img>
//            </div>
//         </>
//     )
// }
// export default Header;

// import React from 'react';
// import './Header.css'; // Import CSS file for styling

// const Header = () => {
//   return (
//     <div className="header">
//       <div>
//         <img src="./images/atmiyalogo.png" style={{height:'100px',width:'100px'}} alt="Logo" className="logo" />
//         <p className="header-text">ATMIYA UNIVERSITY</p><br/>
//       </div>
//         <div>
//         <h3 style={{ marginLeft: '100px' }}> શ્રી સ્વામિનારાયણ સંવત 243</h3>
//         </div>
      
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header" style={{alignContent:'center'}}>
      <div className="header-container">
        <img src="/images/atmiyalogo.png" alt="Header Image" className="header-image" />
        <div className="header-text">
          <h1 className="main-head">ATMIYA UNIVERSITY</h1>
          <hr/>
          <h2 className="sub-heading">Yogidham Gurukul, Kalavad Road,Rajkot - 360 005.Gujrat (India)</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;


// .header {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   background-color: #ffffff; /* Change the background color as needed */
// }

// .logo {
//   width: 50px; /* Adjust the width of the logo as needed */
//   height: auto; /* Maintain aspect ratio */
//   margin-right: 10px; /* Add space between logo and text */
// }

// .header-text {
//   font-size: 40px;
//   margin: 0; 
//   color: rgb(61, 61, 128);
//   font-family: sans-serif;
// }
