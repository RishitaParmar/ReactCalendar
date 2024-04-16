import logo from './logo.svg';
import Box from './Box.js';
import Daybox from './Daybox.js';
import Calander from './Calander';
import Header from './Header.js';
import Header2 from './Header2.js';
import SubHeading from './SubHeading.js';
import SideBox from './SideBox.js';

function App() {
  return (
    <div class="App">
      <div class='row'>
          <center>
          <Header/>
          {/* <Header2/> */}
          {/* <SubHeading/> */}
            <Calander/>
          </center>
       </div>
       <div class='row'>
          <SideBox/>
       </div>
    </div>
  );
}

export default App;
