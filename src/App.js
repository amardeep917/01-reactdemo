 import APICallAxios from "./APICalls/APICallAxios";
import ApiCallWithBtn from "./APICalls/ApiCallWithBtn";


import SimpleAPICalls from "./APICalls/SimpleAPICalls";
import ContactManager from "./ContactManager/ContactManager";
import FormElements from "./FormExamples/FormElement";
import RegistrationForm from "./FormExamples/RegistrationForm";

import TodoComponent from "./TodoApp/TodoComponent";
import data from "./TodoApp/datafile";
// import CountDown from "./components/CountDown";
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import LeaderBoard from "./ScoreBoard/LeaderBoard"
import RankBoard from "./ScoreBoard/SortRank";
import Age from "./ScoreBoard/SortAge";
import AgeComponent from "./ScoreBoard/SortAge";
import RankComponent from "./ScoreBoard/SortRank";
import SortAge from "./ScoreBoard/SortAge";
import SortRank from "./ScoreBoard/SortRank";
import SortName from "./ScoreBoard/SortName";
import SortPoints from "./ScoreBoard/SortPoints";
import NavBarComponent from "./ScoreBoard/NavBarComponent";


function App() {
  
  return (
    <>
        {/* <TodoComponent data={data}/> */}
        {/* <CountDown /> */}
        {/* <SimpleAPICalls /> */}
        {/* <APICallAxios /> */}
        {/* <ApiCallWithBtn /> */}
        {/* <ContactManager /> */}
        {/* <FormElements /> */}
        {/* <RegistrationForm /> */}
        <BrowserRouter>
            
            <Routes>
              <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
              <Route path="/rank" element={<SortRank></SortRank>}></Route>
              <Route path="/age" element={<SortAge></SortAge>}></Route>
              <Route path="/name" element={<SortName></SortName>}></Route>
              <Route path="/points" element={<SortPoints></SortPoints>}></Route>
            </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
