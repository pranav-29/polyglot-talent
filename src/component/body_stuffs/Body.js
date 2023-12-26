import React, { useState } from 'react';
import './Body.css';
import { saveAs } from 'file-saver';
import { PiDownloadBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import VideoPlayer from '../attachments/videoPlayer';
import FilePdf from '../media/Polyglot.pdf';
import Profile from '../attachments/Profile';
import PopupForm from '../attachments/PopupForm';
import { Translation } from 'react-i18next';
import PdfViewer from '../attachments/PdfPreview';

const Header = () => {
  const pdfUrl = FilePdf;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    saveAs(pdfUrl, 'Scale with the right Sales & Marketing talent.pdf');
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal(); 
  };

  return (
    <div className='Header'>
      <div className='headerContent'>
        <div className='text'>
          <h1>
            <Translation>{(t) => t('polyglotTalentGrowing')}</Translation>
          </h1>
        </div>
        <div className='buttons'>
          <button className='download' onClick={handleDownload}>
            <span className='logoIcon'><PiDownloadBold /></span>
            <Translation>{(t) => t('download')}</Translation>
          </button>
          <button className='contact' onClick={openModal}>
            <span className='logoIcon'><LuSend /></span>
            <Translation>{(t) => t('contact')}</Translation>
          </button>
        </div>
      </div>

      <div className='bodyContent'>
        <div className='videoSection '><VideoPlayer />
          <div className='profileDetails'>
            <Profile />
          </div>
        </div>
        <button className='download1' onClick={handleDownload}>
          <span className='logoIcon1'><PiDownloadBold /></span>
          <Translation>{(t) => t('download')}</Translation>
        </button>
        <div className='PdfFileContent'>
          <PdfViewer />
        </div>
      </div>

      <PopupForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit}>
      </PopupForm>
    </div>
  );
};

export default Header;
