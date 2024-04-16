// import React from 'react';
// import './Header2.css'; // Import CSS file for styling

// const Header2 = () => {
//   const currentDate = new Date();
//   const monthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="header-text">
//           <h1 className="main-heading">{monthYear}</h1>
//           <div className="sub-heading">Sub Heading</div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header2;

import React from 'react';
import './Header2.css'; // Import CSS file for styling

const Header2 = () => {
//   const currentDate = new Date();
//   const monthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="main-heading">MARCH 2024</h1>
        <div className="sub-heading">હરિધામ સોખડા</div>
      </div>
    </header>
  );
};

export default Header2;
