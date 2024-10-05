import "./MostAttractive.css";
import img1 from "../../assets/muusoorie/mussorieLeft.png";
import img2 from "../../assets/manali/manaliLeft.png";
import img3 from "../../assets/kasol/KasolLeft.png";

import img4 from "../../assets/muusoorie/mussorieRight.png";
import img5 from "../../assets/manali/manaliRight_new.png";
import img6 from "../../assets/kasol/KasolRight.png";

import img7 from "../../assets/muusoorie/mussorie1.png";
import img8 from "../../assets/manali/manali1.png";
import img9 from "../../assets/kasol/kasol1.png";

import img10 from "../../assets/muusoorie/mussorie2.png";
import img11 from "../../assets/manali/manali2.png";
import img12 from "../../assets/kasol/kasol2.png";

import img13 from "../../assets/muusoorie/mussorie3.png";
import img14 from "../../assets/manali/manali3.png";
import img15 from "../../assets/kasol/kasol3.png";

import bgLeft from "../../assets/bg/Asset6.png";
// import bgRight from "../../assets/bg/Asset7.png";

import { BsHexagonFill } from "react-icons/bs";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/AppContext";
import AOS from "aos";

const MostAttractive = () => {
  const { activeSlideIndex } = useContext(MyContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const datas = [
    {
      name: "Mussoorie ",
      leftImg1: img1,
      leftImg2: img7,
      leftImg3: img13,
      rightImg1: img4,
      rightImg2: img10,
    },
    {
      name: "Manali ",
      leftImg1: img2,
      leftImg2: img8,
      leftImg3: img14,
      rightImg1: img5,
      rightImg2: img11,
    },
    {
      name: "Kasol ",
      leftImg1: img3,
      leftImg2: img9,
      leftImg3: img15,
      rightImg1: img6,
      rightImg2: img12,
    },
    {
      name: "Banaras",
      // leftImg1: img16,  // Replace with Banaras image path
      // leftImg2: img17,  // Replace with Banaras image path
      // leftImg3: img18,  // Replace with Banaras image path
      // rightImg1: img19, // Replace with Banaras image path
      // rightImg2: img20, // Replace with Banaras image path
    }
  ];

  const handleChange = (index) => {
    switch (index) {
      case 0:
        return datas[0];
      case 1:
        return datas[1];
      case 2:
        return datas[2];
      case 3:
        return datas[3];
      default:
        return datas[0];
    }
  };

  const infos = handleChange(activeSlideIndex);

  return (
    <section
      className="bg-[#001E23] pt-[120px] pb-[250px] w-full overflow-hidden"
      id="most"
    >
      <div className="text-center">
        <h2 className="text-[#42a8bb] text-[76px] font-DancingScript">
          Why you visit?
        </h2>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Most Attractive Place <br /> in {infos.name}
        </h2>
      </div>

      <section className="flex justify-center mt-10 relative">
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            harum repudiandae quibusdam inventore eos quasi porro optio
            </p>
          </div>
          
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            harum repudiandae quibusdam inventore eos quasi porro optio
            </p>
          </div>
          <img src={infos.leftImg1} alt= "" 
          className="absolute top-[-180px] left-[-150px] w-[700px] h-[650px]"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"/>  
          
          <img src={infos.leftImg2} alt= "" 
          className="absolute top-[10%] left-[30%] w-[250px] h-[250px]"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1500"/>


          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            harum repudiandae quibusdam inventore eos quasi porro optio
            </p>
          </div>
          
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            harum repudiandae quibusdam inventore eos quasi porro optio
            </p>
          </div>

          <img src={infos.rightImg1} alt= "" 
          className="absolute top-[60px] right-[-150px] w-[700px] h-[650px]"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"/>  
          
          <img src={infos.rightImg2} alt= "" 
          className="absolute top-[43%] right-[30%] w-[250px] h-[250px]"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1500"/>


          
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            harum repudiandae quibusdam inventore eos quasi porro optio
            </p>
          </div>

          <img src={infos.leftImg3} alt= "" 
          className="absolute top-[78%] left-[32%] w-[190px] h-[190px]"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1500"/>

<img src={bgLeft} alt="" className="absolute top-[78%] left-[-120px] w-[430px] h-[430px]"/>
<img src={bgLeft} alt="" className="absolute top-[78%] right-[-120px] w-[250px] h-[250px]" />

        </div>
      </section>
    </section>
  );
};

export default MostAttractive;
