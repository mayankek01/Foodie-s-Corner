import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] ">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">Foodie's Corner</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            impedit eum ab a consequatur similique placeat magnam repudiandae
            dolores debitis?
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
            
            <div>
                <h6 className="font-medium text-[#9b9b9b]">location</h6>
                <ul>
                    <li className="py-2 text-sm">New York</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">India</li>
                    <li className="py-2 text-sm">Canada</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b]">OCULARISTS</h6>
                <ul>
                    <li className="py-2 text-sm">Todd Cranmore, <span className="font-bold">BCO BADO</span></li>
                    <li className="py-2 text-sm">Tawnya Cranmore, <span className="font-bold">Apprentice</span></li>
                    <li className="py-2 text-sm text-purple-400 cursor-pointer">Meet Our Team</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b]">Contact Us</h6>
                <ul>
                    <li className="py-2 text-sm"><span className="font-bold">Call </span> Or <span className="font-bold"> Text</span> 425-823-1861</li>
                    <li className="py-2 text-sm"><span className="font-bold">Toll-Free </span> 888-583-7780</li>
                    <li className="py-2 text-sm"><span className="font-bold"> Fax </span>425-823-1522</li>
                    <li className="py-2 text-sm"><span className="font-bold">Or Email US </span>Yumeats.US@yumeats.in</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
