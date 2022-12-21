import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Classes } from "../components/classes";
import { getClass } from "../utils/axios/getclass";

export const ClassList=()=>{

    const state=useSelector(state=>state);
    const classofteacher= state.classes;
    const loggedin= state.loggedin;
    const token = state.token;
    console.log(classofteacher);

    const Navigate=useNavigate();

    if(!loggedin){
        return(<Navigate to='/'></Navigate>)
    }
    else if(loggedin && classofteacher.length===0){ //can find better condition
        console.log('calling getclass')
        getClass(token);
    }
    else{
        console.log('printing classlist')
        return(
            <div className="d-flex align-items-center" style={{'minHeight':'100vh','minWidth':'100vw'}}>
                <div className="container " 
                    style={{
                        'minHeight': '80vh',
                        'width': '60%',
                        'background': 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
                        'borderRadius': '2rem',
                        'zIndex': '2',
                        'backdropFilter': 'blur(2rem)',
                        'display': 'flex',
                        'padding':'0px'
                        }}>
                    <div className="d-flex align-items-center row" style={{'width':'100%'}}>
                        <h1 className="display-1">Class List</h1>
                    {classofteacher.map((element)=>{
                    return(
                        <div className="btn btn-group-lg" onClick={()=>Navigate('/choice/'+element)}>
                            <Classes cname={element} key={element}/> &nbsp;
                        </div>
                    )
                })}
                    </div>
                    
                </div>
                </div>
                
        )
    }

    
}