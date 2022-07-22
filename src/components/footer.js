import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 md:p-6 w-screen mb-4">
      <div className="grid justify-items-center">
        <div className="hidden"></div>
        <div className="text-sm text-black sm:text-center text-center items-center">
          © 2022 by sanjula de alwis
        </div>
        <div className="hidden"></div>
      </div>
      <div className="grid justify-items-center mt-3">
        <div className="hidden"></div>
        <div className="text-sm text-black text-center items-center">
          <a
            href="https://www.facebook.com/sanjula.dealwis"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.facebook.com/sanjula.dealwis"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            {' '}
            <GitHubIcon />
          </a>
          <a
            href="https://www.facebook.com/sanjula.dealwis"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="hidden"></div>
      </div>
    </footer>
  );
}

export default Footer;
