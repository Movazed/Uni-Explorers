import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/AppContext";

import img1 from "../../assets/muusoorie/mussorieSlider.jpg";
import img2 from "../../assets/kasol/KasolSlider.jpg";
import img3 from "../../assets/manali/manaliSlider.jpg";

const Slider = () => {
  const swiperRef = useRef(null);
  const { activeSlideIndex, setActiveSlideIndex } = useContext(MyContext);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  });

  const places = [
    {
      name: "Mussoorie",
      img: img1,
    },
    {
      name: "Kasol",
      img: img2,
    },
    {
      name: "Manali",
      img: img3,
    }
  ];

  return (
    <div className="mr-14 shadow-xl">
      <Swiper
        slidesPerView={1}
        keyboard={true}
        spaceBetween={-250}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} // Corrected this line
        ref={swiperRef}
        initialSlide={activeSlideIndex}
        className="p1-[90px] pt-6"
      >
        {places.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={item.img} alt="" className="object-cover shadow-xl" />
              <div>
                sample text
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
