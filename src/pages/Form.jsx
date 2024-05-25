import React, { useState, useRef } from 'react';
import '../App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import image from "../assets/Fotos En Marcos Y Fondos Decorativos 702.jpeg";
import background from "../assets/BioDataBackground.png";

function BioDataForm() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formRef = useRef(null);

  const handleDownloadPdf = () => {
    html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF();
      pdf.addImage(image, 'JPEG', 0, 0, 210, 297);
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      pdf.save('bio_data.pdf');
    });
  };

  return (
    <div className='container'>
      <img className='bio-data' src={background}/>
      <div>
        <h2>Bio Data Form</h2>
        <form ref={formRef}>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </form>
        <button type="button" onClick={handleDownloadPdf}>Download PDF</button>
      </div>
    </div>
  );
}

export default BioDataForm;
