import { React, useState } from "react";
import Person from "../media/Profile.png";
import Logo from "../media/logo.png";
import "./Profile.css";
import { IoMailOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import PopupForm from "./PopupForm";

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
    <div className="profileCss">
      <div className="profile-content">
        <div className="profile-photo">
          <img src={Person} alt="profilePhoto" />
        </div>
        <div className="logo1">
          <img src={Logo} alt="company" />
        </div>
        <div className="details">
          <div className="headingsDetails">
            <h1>Mariam Safarian</h1>
            <h3>Polyglot Talent</h3>
            <h3>Head of BD & Client Success</h3>
          </div>
          <div className="contactDetails">
            <p className="mailContact">
              <a
                href="mailto:mariam@polyglottalent.com"
                test-id="business-card-email">
                <span>
                  <IoMailOutline />
                </span>
                mariam@polyglottalent.com
              </a>
            </p>
            <p className="website">
              <a
                href="http://www.polyglottalent.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <CiGlobe />
                </span>
                polyglottalent.com
              </a>
            </p>
          </div>

          <div className="logoButton">
            <a
              href="http://linkedin.com/in/marsafari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin">
                <FaLinkedinIn />
              </span>
            </a>
            <p className="mailButton" onClick={openModal}>
              <LuSend />
            </p>
          </div>
        </div>
        <div className="logo">
          <img src={Logo} alt="company" />
        </div>
      </div>
      <PopupForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      ></PopupForm>
    </div>
  );
};

export default Profile;
