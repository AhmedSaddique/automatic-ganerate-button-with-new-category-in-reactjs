import Navbar from "../../Navbar";
import {useState , useEffect} from 'react';

function Chat(){
        let initialNum=0;
    const [num, setNum] = useState(initialNum);

    useEffect(() => {
        document.title =`Chats(${num})`;
    }
    );
    return (
        <>
          <Navbar/>  

          <div>
             <h1 className="text-center mt-5">{num}</h1>
            </div>

        <div className="text-center mt-5">
        <button className="btn btn-outline-secondary w-25 mt-5 ms-5 me-5" onClick={()=>setNum(num+1)}>INCR</button>

        </div>
        </>
    );
}


export default Chat;
