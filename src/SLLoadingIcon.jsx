'use strict';
import React from 'react';

/**
 * Loading Icon which displays the SoftLedger Log spinning
 */
const SLLoadingIcon = () => {
	const style = {
    mixBlendMode: 'multiply'
  };

  return (
    <div>
      <svg width="75" height="100" viewBox="-5 -5 35 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="logo-softledger" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M23.9182748,0 L11.2471096,0 C5.0724313,0 0.0670747826,4.91597516 0.0670747826,10.9803913 C0.0670747826,17.0450124 5.0724313,21.9609876 11.2471096,21.9609876 L23.9182748,21.9609876 L23.9182748,0 Z" id="logo-blue" fill="#52C5D7" style={style}></path>
          <path d="M0.067053913,10.9804733 L12.7382191,10.9804733 C18.9128974,10.9804733 23.9182539,15.8964484 23.9182539,21.9608646 C23.9182539,28.0254857 18.9128974,32.9414609 12.7382191,32.9414609 L0.067053913,32.9414609 L0.067053913,10.9804733 Z" id="logo-red" fill="#EC125F" style={style}></path>
        </g>
      </svg>
    </div>
  )
}

export default SLLoadingIcon;