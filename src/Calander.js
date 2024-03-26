import Box from './Box.js';
import Daybox from './Daybox.js';
const box = require('./date_tithi.json')
const daybox= require('./day.json')

function Calander()
{
    return (
        <>
         {
                daybox.map(function(day)
                {
                    return  <div style={{width: '950px'}}><Daybox DayE={day.DayE} DayG={day.DayG}/></div>
                })
            }
            {
                box.map(function(date1)
                {
                    return  <div style={{width: '950px'}}><Box date={date1.date} tithi={date1.tithi}/></div>
                })
            }
            {/* <Box date={box[0].date} tithi={box[0].tithi}/> */}
        </>
    )
}
export default Calander;