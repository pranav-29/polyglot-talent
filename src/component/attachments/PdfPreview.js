import React from 'react';
import './PdfPreview.css';
import Img0 from '../../PdfImages/0.jpg';
import Img1 from '../../PdfImages/1.jpg';
import Img2 from '../../PdfImages/2.jpg';
import Img3 from '../../PdfImages/3.jpg';
import Img4 from '../../PdfImages/4.jpg';

const PdfPreview = ({ pdfUrl }) => {
  return (
    <div className="pdf-preview-container">

      <img src={Img0} alt='pdf-img-0'/>
      <img src={Img1} alt='pdf-img-1' />
      <img src={Img2} alt='pdf-img-2' />
      <img src={Img3} alt='pdf-img-3' />
      <img src={Img4} alt='pdf-img-4' />

    </div>
  );
};

export default PdfPreview;