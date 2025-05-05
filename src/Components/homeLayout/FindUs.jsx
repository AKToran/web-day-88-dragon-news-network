import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find us on</h2>

      <div className="join join-vertical w-full p-4">
        <button className="btn bg-base-100 justify-start join-item"><FaFacebook/> Facebook</button>
        <button className="btn bg-base-100 justify-start join-item"><FaTwitter/> Twitter</button>
        <button className="btn bg-base-100 justify-start join-item"><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
