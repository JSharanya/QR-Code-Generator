import React, { useState } from 'react'

export const Qrcode = () => {

  const [img, setImg] = useState("")
  const [loading, setLoading] = useState(false)
  const [qrData, setQrData] = useState("https://github.com/JSharanya/QR-Code-Generator")
  const [qrSize, setQrSize] = useState("150")

  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url)
    } catch (error) {
      console.error("Error generating QR code", error)
    } finally {
      setLoading(false)
    }

  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch((error) => {
        console.error("Error dowloading QR code", error)
      })
  }

  return (

    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait....</p>}
      {img && <img src={img} className='qr-code-image' />}
      <div>
        <lable htmlFor="dataInput" className="input-lable">
          Data for QR code :
        </lable>
        <input type='text' value={qrData} id='dataInput' placeholder='Enter Data for QR code' onChange={(e) => {
          setQrData(e.target.value)
        }} />

        <lable htmlFor="dataInput" className="input-lable" >
          Image Size (e.g. 150) :
        </lable>
        <input type='text' id='sizeInput' placeholder='Enter image Size' value={qrSize} onChange={(e) => {
          setQrSize(e.target.value)
        }} />
        <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='download-button' onClick={downloadQR}>Download QR Code</button>
      </div>


    </div>
  )
}
