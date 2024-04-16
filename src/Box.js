import './images/calender.png';
function Box(props){
    return(
        <>
            {/* <div className="box" style={{width: '130px', height: '130px',backgroundColor:'white',borderRadius: '15px',boxShadow: '2px 2px 2px black',opacity: 0.5 ,float:'left',marginRight: '2px'}}>
                <h1 style={{color:'red',fontSize:'70px'}}>{props.date}</h1>  
                <h3 style={{color:'black',fontSize:'20px'}}>{props.tithi}</h3>  
            </div> */}
            <div style={{width: '125px',height: '140px',backgroundColor:'white', borderRadius: '15px',boxShadow: '2px 2px 2px black',opacity: 0.5,textAlign:'center',float:'left',marginRight: '10px', marginTop: '10px', backgroundImage:`url(${props.image})`}}>
                <h1 style={{color:`${props.colorBox}`,fontSize:'70px', margin:'0'}}>{props.date}</h1>  
                <h3 style={{color:`${props.colorBox}`,fontSize:'15px', margin:'0'}}>{props.tithi}{props.other}</h3> 
                {/* <image style={{height:'15px',width:'15px',margin:'0' , alt:'Image'}} src={props.image}></image>  */}
            </div>
        </>)
    
}
export default Box;

