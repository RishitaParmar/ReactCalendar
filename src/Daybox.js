function Daybox(props){
    return(
        <>
            <div className="box" style={{width: '125px', height: '65px',backgroundColor:'white',borderRadius: '15px',boxShadow: '2px 2px 2px black',opacity: 0.5,float:'left',marginRight: '10px', marginTop: '10px'}}>
                <h3 style={{color:(props.DayE=="SUN")?'red':'brown',fontSize:'20px', margin:'0'}}>{props.DayE}</h3>
                <h3 style={{color:(props.DayG=="રવિ")?'red':'brown',fontSize:'20px', margin:'0'}}>{props.DayG}</h3>
            </div>
        </>
    )
}
export default Daybox;
