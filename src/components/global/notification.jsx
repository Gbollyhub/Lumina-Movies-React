import React from 'react'
import "./notification.scss"
import { useDispatch } from "react-redux";
import { clearError } from "../../store/auth"

export default function Notification({message, type}) {
    const dispatch = useDispatch();
    return(
        <>
        <div className="notification" style={{backgroundColor: type === false ? '#54e329' : '#e32929'}}>
           <p>{message}</p>
           <div onClick={()=>{dispatch(clearError())}} style={{cursor:'pointer'}}>close(x)</div>
        </div>
        </>
    )
}