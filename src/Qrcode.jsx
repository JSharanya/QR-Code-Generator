import React from 'react'

export const Qrcode = () => {
  return (

    <div className='app-container'>
        <img src="image/image.png"/>
        <div>
            <lable htmlFor="dataInput" className="input-lable">
                Data for QR code : 
            </lable>
            <input type='text' id='dataInput' placeholder='Enter Data for QR code'/>

            <lable htmlFor="dataInput" className="input-lable">
                Image Size (e.g. 150): 
            </lable>
            <input type='text' id='sizeInput' placeholder='Enter image Size'/>
            <button>Generate QR Code</button>
            <button>Download QR Code</button>
        </div>


    </div>
  )
}
