import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-base-content py-20 px-4 md:px-8 2xl:px-12 bg-black">
      <nav className="text-white space-y-2.5">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="text-white space-y-2.5">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="text-white space-y-2.5">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="text-white space-y-2.5">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="sm:w-80">
          <label>Enter your email address</label>
          <div className="join mt-3 text-gray-800">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item px-0 pl-2"
            />
            <button className="btn btn-primary join-item px-1">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
