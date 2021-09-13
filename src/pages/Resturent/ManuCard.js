import React from 'react';


function ManuCard({manuData}){
    return (
        <>
           <div className="container">

            <div className="row mt-5">
                {
               manuData.map((manuData , id)=>(
            <div className="col-md-4" key={id}>
            <div className="card shadow p-3 mb-5 bg-body rounded" style={{width:"20rem"}}>
            <img src="https://www.dropbox.com/s/5xp7sy21sqb6jm4/ImageCap.jpg?raw=1" class="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title text-light">{manuData.category}</h6>
                <h3 className="card-title text-light">{manuData.name}</h3>

                <p className="card-text text-light">{manuData.text}</p>
             
            </div>
        </div>
            </div>
                    ))
                }

            </div>
        </div>

        </>
    );
}


export default ManuCard;
