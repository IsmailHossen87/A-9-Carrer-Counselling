import React from "react";
import frist from "../../assets/sliderImage at 21.29.42_16f7546d.jpg";
import second from "../../assets/slider222024-11-17 at 21.29.42_7f279152.jpg";
import tree from "../../assets/slider333 2024-11-17 at 21.29.43_0712b68b.jpg";

function Slider() {
  return (
    <div className="my-5">
      <div className="carousel w-full object-cover">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={frist}
            className="w-full md:h-[500px] h-[300px]  rounded-xl object-cover" 
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-6xl md:text-4xl text-xl font-bold text-center text-white  w-full md:w-[80%] mx-auto">
                Unlock your path to success with personalized career guidance.
              </h2>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={second}
            className="w-full md:h-[500px] h-[300px] rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-6xl md:text-4xl text-xl  font-bold text-center text-white  w-full md:w-[80%] mx-auto">
                Navigate the complexities of career planning with confidence.
              </h2>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={tree}
            className="w-full md:h-[500px] h-[300px] rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-6xl md:text-4xl text-xl font-bold text-center text-white  w-full md:w-[80%] mx-auto">
                Take the first step toward a fulfilling career.
              </h2>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
