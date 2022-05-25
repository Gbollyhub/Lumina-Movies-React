import React from 'react'
import "./notification.scss"


export default function Notification({message, type, actionHandler}) {

    return(
        <>
        <div className="notification" style={{backgroundColor: type === false ? '#54e329' : '#e32929'}}>
           <p>{message}</p>
           <div onClick={actionHandler} style={{cursor:'pointer'}}>close(x)</div>
        </div>
        </>
    )
}