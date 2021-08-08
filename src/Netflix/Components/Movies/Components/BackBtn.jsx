import React from 'react'
import './acount.css'
import { useHistory } from 'react-router'
const BackBtn = (props) => {
    const history = useHistory()
    console.log(history);
    
    return (
        <>
         <div className={props.class}>
             <div onClick={() => history.goBack()}>
             <i class="far fa-long-arrow-left"></i>
             </div>
             <div onClick={() => history.goForward()}>
             <i class="far fa-long-arrow-right"></i>
             </div>
         </div>   
        </>
    )
}

export default BackBtn
