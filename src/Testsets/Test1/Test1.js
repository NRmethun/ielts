import React from 'react'
import Listening1 from './Data/Listening1/Listening1'
import Reading1 from './Data/Reading/Reading1' 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Test1_Listening1 from './Data/Listening1/Listening1' 
import Test1_List1_sect1 from './Data/Listening1/Section1' 
import Test1_List1_sect2 from './Data/Listening1/Section2' 
import Test1_List1_sect3 from './Data/Listening1/Section3' 
import Test1_List1_sect4 from './Data/Listening1/Section4'
function Test1() {
    console.log('hello')
    return (
        <div>   

       

     
       <Listening1 /> 
   {/* <Switch >  



          <Route path="/test1_list1_sect1" component={Test1_List1_sect1} />
          <Route path="/test1_list1_sect2" component={Test1_List1_sect2} />
          <Route path="/test1_list1_sect3" component={Test1_List1_sect3} />
          <Route path="/test1_list1_sect4" component={Test1_List1_sect4} /> 



          </Switch> */}
       


            
             <Reading1/>
        </div>
    )
}

export default Test1
