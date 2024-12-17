import React from 'react';

// functional component for the footer
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        {/* display current year dynamically and app information */}
        &copy; {new Date().getFullYear()} &bull; Namer نمير &bull; Powered by NodeJs, Express, MongoDB, React & ❤️ &bull; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;