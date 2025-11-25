import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 sm:py-20 px-4 md:px-8 2xl:px-12">
      <div className="footer max-w-[1400px] mx-auto sm:footer-horizontal justify-between gap-12 sm:gap-6">
        <div className="flex flex-col space-y-4">
          <h6 className="text-3xl font-bold cursor-pointer bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            PetPaws
          </h6>
          <p className="text-sm text-gray-400 max-w-xs">
            Your trusted partner for premium pet care, from walking to wellness.
          </p>

          <div className="space-y-1 pt-2 text-gray-300">
            <h6 className="footer-title text-lg text-white pt-2">Contact Us</h6>
            <p className="flex items-center space-x-2">
              <span className="text-purple-400">📞</span>
              <span>(123) 456-7890</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-purple-400">📧</span>
              <span>support@petpaws.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-purple-400">📍</span>
              <span>123 Pet Lane, Suite 100</span>
            </p>
          </div>
        </div>

        <nav className="text-gray-300 space-y-2.5">
          <h6 className="footer-title text-lg text-white">Pet Services</h6>
          <a href="#" className="link link-hover">
            Dog Walking
          </a>
          <a href="#" className="link link-hover">
            Pet Grooming
          </a>
          <a href="#" className="link link-hover">
            Vet Services
          </a>
          <a href="#" className="link link-hover">
            Pet Boarding
          </a>
        </nav>

        <nav className="text-gray-300 space-y-2.5">
          <h6 className="footer-title text-lg text-white">Company & Legal</h6>
          <a href="#" className="link link-hover">
            About Us
          </a>
          <a href="#" className="link link-hover">
            Careers
          </a>
          <a href="#" className="link link-hover">
            Terms of Use
          </a>

          <a href="#" className="link link-hover ">
            Privacy Policy
          </a>
        </nav>

        <div className="flex flex-col space-y-5">
          <form className="space-y-2.5">
            <h6 className="footer-title text-lg text-white">
              Join Our Newsletter
            </h6>
            <fieldset className="">
              <label className="text-sm text-gray-400 ">
                Get Pawsome Tips!
              </label>{" "}
              <br />
              <div className="join mt-3 text-gray-800">
                <input
                  type="email"
                  placeholder="name@site.com"
                  className="input input-bordered join-item w-full px-2 text-sm"
                />

                <button
                  className="btn btn-primary join-item px-2 text-white font-semibold 
                         bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>

          <div className="pt-4">
            <h6 className="footer-title text-lg text-white">Follow Us</h6>
            <div className="grid grid-flow-col gap-4 text-xl">
              <a href="#">
                <span className="hover:text-purple-400 transition">🐦</span>
              </a>{" "}
              <a href="#">
                <span className="hover:text-purple-400 transition">📸</span>
              </a>{" "}
              <a href="#">
                <span className="hover:text-purple-400 transition">📘</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} PetPaws. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
