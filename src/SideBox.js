import React, { useState, useEffect } from 'react';
import './SideBox.css'; // Import CSS file for styling
// import './SideBox.json';

// const sidebox = require('./SideBox.json')


// const SideBox = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const dummyData = [
//       { id: 1, content: "Lorem ipsum dolor sit amet" },
//       { id: 2, content: "Consectetur adipiscing elit" },
//       { id: 3, content: "Sed do eiusmod tempor incididunt" }
//     ];
//     setData(dummyData);
//   }, []);



// return (
//     <>
//      {     
//             sidebox.map(function(sideboxdemo)
//             {
//                 return  <div style={{width: '950px'}}><Daybox DayE={day.DayE} DayG={day.DayG}/></div>
//             })
//         }

//   return (
//     <div className="side-box" style={{alignContent:'flex-end'}}>
//       {
//         sidebox.map(function(item) 
//         {
//         <div key={item.date} className="box-item">
//           {item.tithi}
//         </div>
//         })
//       }
//     </div>
//   );
// };

// export default SideBox;

const SideBox = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Assuming data is fetched from a JSON file or an API
      // For demonstration purposes, initializing with dummy data
      const dummyData = [
        {
            "date":"06 - ",
            "tithi":"વિજ્યા એકાદશી , ઉપવાસ"
        },
        {
            "date":"08 - ",
            "tithi":" મહાશિવરાત્રી (ફરાલ કરવુ) "
        },
        {
            "date":"10 - ",
            "tithi":"અમાસ"
        },
        {
            "date":"16 - ",
            "tithi":"હોલાષ્ટક પ્રારંભ"
        },
        {
            "date":"20 - ",
            "tithi":"આમલકી એકાદશી , ઉપવાસ"
        },
        {
            "date":"23 - ",
            "tithi":"વેમાર હરિમંદિર નો પાટોત્સવ"
        },
        {
            "date":"24 - ",
            "tithi":"પુનમ,હોળી, હુતાસની, હોલિકા દહન, -ભક્તનો વિજયદિન બ્રહ્મસ્વરૂપ શ્રી ભગતમહારાજનો પ્રાગટ્યદિન(સં.1885)"
        },
        {
            "date":"25 - ",
            "tithi":"ધુળેટી, હોલાષ્ટક, રંગોત્સવ, ફુલડોલોત્સવ"    
        },
        {
            "date":"27 - ",
            "tithi":"આત્મીય સંસ્કારધામ"
        }
      ];
      setData(dummyData);
    }, []);
  
    return (
      <div className="side-box" style={{alignContent:'flex-end',alignItems:'center',borderRadius:'60em 60em 0px 0px',color:'brown', fontWeight:'bold'}}>
        <h1 className='headsidebar' style={{textAlign:'center'}}>વિશેષ</h1>
        {data.map(item => (
          <div>
            <h3 className="box-item">
                {item.date} {item.tithi}
            </h3>
          </div>
        ))}
      </div>
    );
  };

  export default SideBox;