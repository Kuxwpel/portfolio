import React from "react";
import EldenRing from "../assets/thumb/eldenring.jpg";
import Pathfinder from "../assets/thumb/pathfinder.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0f0f0f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Pathfinder})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                PATHFINDER. <br /> Travel Booking App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kuxwpel.github.io/pathfinder-spa/"
                  target="_blank"
                >
                  <button className="text-center rounded-bg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Kuxwpel/pathfinder-spa/tree/master"
                  target="_blank"
                >
                  <button className="text-center rounded-bg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${EldenRing})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Text Based Aventure Game <br />
                Art by u/arles48
              </span>
              <div className="pt-8 text-center">
                <a href="https://kuxwpel.github.io/er/" target="_blank">
                  <button className="text-center rounded-bg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kuxwpel/er" target="_blank">
                  <button className="text-center rounded-bg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
