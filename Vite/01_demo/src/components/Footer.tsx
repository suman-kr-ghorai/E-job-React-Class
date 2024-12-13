import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer</h5>
            <p>
              My Website Footer-by Suman
            </p>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="text-dark">About</li>
              <li className="text-dark">Contact</li>
              <li className="text-dark">Locate me</li>
              <li className="text-dark">THANKS for visiting</li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li className="text-dark">Email: footer@gmail.com</li>
              <li className="text-dark">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-light">
        © 2024 Suman. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
