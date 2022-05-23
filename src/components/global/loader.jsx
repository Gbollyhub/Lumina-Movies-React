import React from 'react'
import loader from '../../assets/images/loader.gif'
export default function Loader(props) {
    return(
        <>
        <div className="loader-class">
            <img src={loader} alt="" className="loader-img" />
        </div>
        </>
    )
}