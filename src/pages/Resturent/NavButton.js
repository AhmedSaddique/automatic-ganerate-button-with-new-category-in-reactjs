import React from 'react';


function NavButton ({filterItem , Nav}){
    return (
        <>

             <div className="conatiner">
             <div className="text-center mt-5">
                 {
                     Nav.map((navbtn ,index1)=>{
                         return(
                <button key={index1} className="btn btn-outline-dark mt-1" onClick={()=>filterItem(navbtn)}>{navbtn}</button>

                );     })
                 }
                {/* <button className="btn btn-outline-dark mt-1" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
                <button className="btn btn-outline-dark mt-1"onClick={()=>filterItem("Lunch")}>Lunch</button>
                <button className="btn btn-outline-dark mt-1"onClick={()=>filterItem("Dinner")}>Dinner</button> */}

             </div>
            </div>
        </>
    );
}



export default NavButton;
