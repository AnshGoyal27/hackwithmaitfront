import {useEffect, useState,} from 'react'
import { Navigate } from 'react-router-dom';
import { LoginCall } from '../utils/axios/login';

export const LoginValidation=()=>{

    function verify(){
        if(userName!=='' && ID!==''){
            console.log('Send Data');
            LoginCall(userName,ID)
        }
    }
    
    const [userName,setUser]=useState('');
    const [ID,setID]=useState('');

    useEffect(()=>{
        if(userName==='' || ID===''){
            document.getElementById('form').className='btn btn-danger disabled'
        }
        else{
            document.getElementById('form').className='btn btn-success'
        }
    },[userName,ID])

    return(
        <div className='container' style={{'width':'60%'}}>
            <form className="row g-3 p-2">
                <div className="col-md-12">
                    <label htmlFor="userName" className="display-6 form-label">UserName</label> &nbsp;
                    <input type="text" className="form-control shadow-none rounded-pill" style={{
                        'background': 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8))'
                    }} 
                    id="userName" onChange={e=>setUser(e.target.value)}/>
                </div>
                <br/>
                <div className="col-md-12">
                    <label htmlFor="id" className="display-6 form-label">Special ID</label> &nbsp;
                    <input type="text" className="form-control shadow-none rounded-pill" style={{
                        'background': 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8))'
                    }}  id="id" onChange={e=>setID(e.target.value)}/>
                </div>
                <div className="col-12">
                    <button id='form' className="btn btn-danger" type="button" onClick={()=>verify()}>Submit form</button>
                </div>
            </form>
        </div>
        
    )
}