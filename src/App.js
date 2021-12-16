import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation'



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// this links for navigation bar Linking 
import Home from './Pages/Home'
import Listening from './Pages/Listening'
import Spreaking from './Pages/Speaking'
import Writting from './Pages/Writting'
import Reading from './Pages/Reading'
import Test1 from './Testsets/Test1/Test1'

// Test1 Listeing 1 all Sections
import Test1_Listening1 from './Testsets/Test1/Data/Listening1/Listening1' 
import Test1_List1_sect1 from './Testsets/Test1/Data/Listening1/Section1' 
import Test1_List1_sect2 from './Testsets/Test1/Data/Listening1/Section2' 
import Test1_List1_sect3 from './Testsets/Test1/Data/Listening1/Section3' 
import Test1_List1_sect4 from './Testsets/Test1/Data/Listening1/Section4' 

// test1 Reading 1 all Sections 
import Test1_Reading1 from './Testsets/Test1/Data/Reading/Reading1' 
import Test1_Read1_sect1 from './Testsets/Test1/Data/Reading/Section1'
import Test1_Read1_sect2 from './Testsets/Test1/Data/Reading/Section2'
import Test1_Read1_sect3 from './Testsets/Test1/Data/Reading/Section3'
import Test1_Read1_sect4 from './Testsets/Test1/Data/Reading/Section4'




function App() {
  return (
    <div className="App">

     
       <Router >

      

   
       <Navigation /> 
       {/* <Home />  */}
       

       <Switch >  
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />

          <Route path="/listening" component={Listening} />
          <Route path="/reading" component={Reading} />
          <Route path="/writting" component={Writting} />
          <Route path="/speaking" component={Spreaking} />



          <Route path="/test1" component={Test1} /> 
          
          <Route path="/test1_list1_sect1" component={Test1_List1_sect1} />
          <Route path="/test1_list1_sect2" component={Test1_List1_sect2} />
          <Route path="/test1_list1_sect3" component={Test1_List1_sect3} />
          <Route path="/test1_list1_sect4" component={Test1_List1_sect4} />
          
          <Route path="/test1_read1_sect1" component={Test1_Read1_sect1} />
          <Route path="/test1_read1_sect2" component={Test1_Read1_sect2} /> 
          <Route path="/test1_read1_sect3" component={Test1_Read1_sect3} />
          <Route path="/test1_read1_sect4" component={Test1_Read1_sect4} /> 




        </Switch>


      </Router> 



    </div>
  );
}

export default App;
