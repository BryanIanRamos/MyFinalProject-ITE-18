import React from 'react';
import '../Authentication.css';

function popupClose(props){
    return(props.trigger) ? (
      <div className='popup'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)}
          >&times;</button>
          {props.children}
        </div>
      </div>
    ) : "";
  }

  export default popupClose;