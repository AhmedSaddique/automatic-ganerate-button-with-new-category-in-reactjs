import Navbar from "../../Navbar";
import restaurentApi from "./restaurentApi";
import {useState} from 'react';
import ManuCard from "./ManuCard";
import NavButton from './NavButton'

let UdateList= [... new Set(restaurentApi.map((curElem)=>{
 return curElem.category;
})
),
    "All"
];
console.log(UdateList);

function Home(){

let [ManuData,setManuData] = useState(restaurentApi);
let [NavData,setNav] = useState(UdateList);

// button category

function filterItem(category){

    if(category === 'All'){
    setManuData(restaurentApi);
    return;
}
  let updatelist= restaurentApi.filter((curEle)=>{
        return curEle.category===category;
    });
setManuData(updatelist)
}
// End button category




    return(<>

    <Navbar/>
     <NavButton filterItem={filterItem} Nav={NavData}  />
    <ManuCard manuData={ManuData}/>

   </> );
}
export default Home;