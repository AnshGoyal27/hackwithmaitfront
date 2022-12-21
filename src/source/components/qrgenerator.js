import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { qrcall } from '../utils/axios/qrcall';

export const QR=()=>{

    const loggedin = useSelector(state=>state.loggedin);
    const QR= useSelector(state=>state.QR);
    const token = useSelector(state=>state.token);

    if(!loggedin){
        return(<Navigate to='/'></Navigate>)
    }
    else if(QR===''){
        qrcall(token);
    }

    return( //designing for the page
        <div>
            <img src={QR} alt=''></img>
        </div>
    )
}