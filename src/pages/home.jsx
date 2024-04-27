import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};
const leftImage = `${process.env.PUBLIC_URL}/assets/images/spades-card.svg`;
const rightImage = `${process.env.PUBLIC_URL}/assets/images/hearts-card.svg`;
const logo = `${process.env.PUBLIC_URL}/assets/images/logo.svg`;
const pl1 = `${process.env.PUBLIC_URL}/assets/images/pl1.svg`;
const pl2 = `${process.env.PUBLIC_URL}/assets/images/pl2.svg`;
const pl3 = `${process.env.PUBLIC_URL}/assets/images/pl3.svg`;
const pr1 = `${process.env.PUBLIC_URL}/assets/images/pr1.svg`;
const pr2 = `${process.env.PUBLIC_URL}/assets/images/pr2.png`;
const pr3 = `${process.env.PUBLIC_URL}/assets/images/pr3.svg`;
const welcomeTextImage = `${process.env.PUBLIC_URL}/assets/images/welcome-text.svg`;
const bgImage = `${process.env.PUBLIC_URL}/assets/images/welcome-text-bg.svg`;
const shadeShape = `${process.env.PUBLIC_URL}/assets/images/spades-shape.svg`;
const heartShape = `${process.env.PUBLIC_URL}/assets/images/hearts-shape.svg`;
const scroll = `${process.env.PUBLIC_URL}/assets/images/scroll.svg`;
const slideBase = `${process.env.PUBLIC_URL}/assets/images/slide-base.svg`;
const slide1 = `${process.env.PUBLIC_URL}/assets/images/slide1.svg`;
const hamburger = `${process.env.PUBLIC_URL}/assets/images/hamburger.svg`;
const close = `${process.env.PUBLIC_URL}/assets/images/close.svg`;
const cloverShape = `${process.env.PUBLIC_URL}/assets/images/clover-Shape.svg`;
const xIcon = `${process.env.PUBLIC_URL}/assets/images/X-icon.png`;
const fbIcon = `${process.env.PUBLIC_URL}/assets/images/fb-icon.png`;
const igIcon = `${process.env.PUBLIC_URL}/assets/images/ig-icon.png`;

const Home = () => {
  const [menu, setMenue] = useState(true);
  const toggleMenu = () => {
    setMenue(!menu);
  };

  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const logoImageRef = useRef(null);
  const pl1Ref = useRef(null);
  const pl2Ref = useRef(null);
  const pl3Ref = useRef(null);
  const pr1Ref = useRef(null);
  const pr2Ref = useRef(null);
  const pr3Ref = useRef(null);
  const rightImageRef2 = useRef(null);
  const leftImageRef2 = useRef(null);
  const welcomeTextRef = useRef(null);
  const bgRef = useRef(null);
  const shadeShapeRef = useRef(null);
  const heartShapeRef = useRef(null);
  const scrollRef = useRef(null);
  const slideBaseRef = useRef(null);
  const slide1Ref = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;
    const logoImage = logoImageRef.current;
    const pl1Image = pl1Ref.current;
    const pl2Image = pl2Ref.current;
    const pl3Image = pl3Ref.current;
    const pr1Image = pr1Ref.current;
    const pr2Image = pr2Ref.current;
    const pr3Image = pr3Ref.current;
    const rightImage2 = rightImageRef2.current;
    const leftImage2 = leftImageRef2.current;
    const welcomeText = welcomeTextRef.current;
    const bg = bgRef.current;
    const shadeShape = shadeShapeRef.current;
    const heartShape = heartShapeRef.current;
    const scroll = scrollRef.current;
    const slideBase = slideBaseRef.current;
    const slide1 = slide1Ref.current;
    const hamburger = hamburgerRef.current;

    // Set initial position of the Images

    gsap.set(leftImage, { x: "-100%", y: 0, rotationY: 0 });
    gsap.set(rightImage, { x: "-100%", y: 0, rotationY: 0 });
    gsap.set(logoImage, { opacity: 0, y: 60 });
    gsap.set(pl1Image, { opacity: 0 });
    gsap.set(pl2Image, { opacity: 0 });
    gsap.set(pl3Image, { opacity: 0 });
    gsap.set(pr1Image, { opacity: 0 });
    gsap.set(pr2Image, { opacity: 0 });
    gsap.set(pr3Image, { opacity: 0 });
    gsap.set(leftImage2, { x: 0, y: "-200%" });
    gsap.set(rightImage2, { x: 0, y: "-200%" });
    gsap.set(welcomeText, { opacity: 0 });
    gsap.set(bg, { opacity: 0 });
    gsap.set(shadeShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(heartShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(scroll, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(slideBase, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(slide1, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(hamburger, { opacity: 0, scale: 0.4 });

    gsap.to(bg, {
      delay: 5,
      opacity: 1,
      duration: 2,
    });
    gsap.to(hamburger, {
      delay: 5,
      opacity: 1,
      duration: 2,
      scale: 0.7,
    });
    gsap.to(shadeShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: -160,
      y: 160,
      filter: "blur(0px)",
      scale: 0.5,
    });
    gsap.to(slide1, {
      delay: 5,
      opacity: 0.4,
      duration: 2,
      filter: "blur(15px)",
      scale: 0.5,
    });
    gsap.to(scroll, {
      delay: 5,
      opacity: 1,
      duration: 2,
      scale: 0.5,
    });
    gsap.to(slideBase, {
      delay: 5,
      opacity: 0.4,
      duration: 2,
      filter: "blur(15px)",
      scale: 0.5,
    });
    gsap.to(heartShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: 20,
      y: 20,
      filter: "blur(0px)",
      scale: 0.5,
    });
    // LEFT Animation
    gsap.to(leftImage, {
      x: 200,
      y: -100,
      autoAlpha: 1,
      duration: 2,
      rotationY: -200,
      rotate: -9,
      rotateZ: 39,
      ease: "none",
      onComplete: () => {
        gsap.to(leftImage, {
          x: 260,
          y: -110,
          scale: 1.2,
          duration: 0.5,
          ease: "none",
          rotationZ: 40,
          rotate: 10,
          onComplete: () => {
            gsap.to(leftImage, {
              x: "47.5vw",
              y: -240,
              scale: 2.5,
              duration: 2,
              ease: "power2",
              rotationY: 340,
              rotation: 340,
              zIndex: 3,
              onComplete: () => {
                gsap.to(leftImage, {
                  x: 170,
                  y: -240,
                  scale: 2.7,
                  duration: 2,
                  rotationY: 160,
                  rotation: 190,
                  filter: "blur(1px)",
                  ease: "power2",
                });
              },
            });
          },
        });
      },
    });

    // Right Animation
    gsap.to(rightImage, {
      x: -200,
      y: -100,
      autoAlpha: 1,
      duration: 2,
      rotationY: -200,
      rotate: -9,
      rotateZ: 39,
      ease: "none",
      onComplete: () => {
        gsap.to(rightImage, {
          x: -260,
          y: -110,
          scale: 1.2,
          duration: 0.5,
          ease: "none",
          rotationZ: 40,
          rotate: 10,
          onComplete: () => {
            gsap.to(rightImage, {
              x: "-47.5vw",
              y: -250,
              scale: 2.5,
              duration: 2,
              ease: "power2",
              rotationY: 340,
              zIndex: 2,
              rotation: 354,
              onComplete: () => {
                gsap.to(rightImage, {
                  x: -120,
                  y: -100,
                  scale: 2.7,
                  duration: 2,
                  rotationY: 160,
                  rotation: -20,
                  filter: "blur(1px)",
                  ease: "power2",
                });
              },
            });
          },
        });
      },
    });

    // Logo Animation
    gsap.to(logoImage, {
      opacity: 1,
      delay: 1.5,
      duration: 3,
      ease: "none",
      y: 40,
      onComplete: () => {
        gsap.to(logoImage, {
          x: "-36vw",
          y: "-21.6vw",
          scale: 0.5,
          duration: 2,
          ease: "power2",
        });
      },
    });
    // pl1Image Animation
    gsap.to(pl1Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pl1Image, {
          x: 150,
          y: 180,
          scale: 3,
          duration: 2,
          rotationY: 60,
          rotation: 40,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // pl2Image Animation
    gsap.to(pl2Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pl2Image, {
          x: -480,
          y: -0,
          scale: 3,
          duration: 2,
          rotationY: 60,
          rotation: 40,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // pl3Image Animation
    gsap.to(pl3Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pl3Image, {
          x: -80,
          y: -170,
          scale: 1,
          duration: 2,
          rotationY: 160,
          rotation: 40,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // pr1Image Animation
    gsap.to(pr1Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pr1Image, {
          x: -580,
          y: 170,
          scale: 3,
          duration: 2,
          rotationY: 180,
          rotation: 310,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // plr2Image Animation
    gsap.to(pr2Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pr2Image, {
          x: 250,
          y: 0,
          scale: 2,
          duration: 2,
          rotationY: 180,
          rotation: 20,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // pr3Image Animation
    gsap.to(pr3Image, {
      opacity: 1,
      delay: 4,
      duration: 0.4,
      ease: "none",
      onComplete: () => {
        gsap.to(pr3Image, {
          x: 450,
          y: 120,
          scale: 2,
          duration: 2,
          rotationY: 180,
          rotation: 20,
          filter: "blur(1px)",
          ease: "power2",
        });
      },
    });
    // Right2 Animation
    gsap.to(rightImage2, {
      x: 0,
      y: 0,
      delay: 4.5,
      duration: 2,
      rotate: -9,
      rotateZ: 39,
      ease: "bounce.in",
    });
    // Right2 Animation
    gsap.to(leftImage2, {
      x: 0,
      y: 0,
      delay: 4,
      duration: 2,
      rotate: -9,
      rotateZ: 39,
      ease: "bounce.in",
    });

    // Welcome Text Animation
    gsap.to(welcomeText, {
      opacity: 1,
      delay: 6,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: menu ? "0" : "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
          display: menu ? "block" : "hidden",
          transition: "transform 3s ease",
          transform: !menu ? "translateY(0)" : "translateY(-100%)",
          zIndex: 10,
        }}
      >
        <div>
          <img
            src={close}
            alt="close"
            style={{
              position: "absolute",
              top: "22px",
              right: "5%",
              cursor: "pointer",
              width: "30px",
            }}
            onClick={toggleMenu}
          />
          <img
            src={cloverShape}
            alt="cloverShape"
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "50%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "50px",
              height: "100vh",
            }}
          >
            <ul
              style={{
                background:
                  "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #C09852 73%, #F4E285 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
                justifyContent: "flex-start",
                fontSize: "40px",
                listStyle: "none",
                gap: "30px",
                marginLeft: 0,
                paddingLeft: 0,
              }}
            >
              <li>CONTACT US</li>
              <li>GAMING TABLES</li>
            </ul>
            <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
              <img
                src={xIcon}
                alt="xIcon"
                style={{ cursor: "pointer", width: "50px" }}
              />
              <img
                src={fbIcon}
                alt="fbIcon"
                style={{ cursor: "pointer", width: "50px" }}
              />
              <img
                src={igIcon}
                alt="igIcon"
                style={{ cursor: "pointer", width: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        ref={leftImageRef2}
        src={leftImage}
        alt="Animated"
        style={{
          position: "absolute",
          top: "16px",
          left: "3.5%",
          transform: " rotate(-29.11deg)",
          zIndex: 2,
        }}
      />
      <img
        ref={rightImageRef2}
        src={rightImage}
        alt="Animated"
        style={{
          position: "absolute",
          top: "14px",
          left: "5%",
          transform: " rotate(-29.11deg)",
          zIndex: 1,
        }}
      />
      <img
        ref={leftImageRef}
        src={leftImage}
        alt="Animated"
        style={{
          position: "absolute",
          bottom: "20%",
          left: 0,
          transform: " rotate(-29.11deg)",
        }}
      />

      <img
        ref={rightImageRef}
        src={rightImage}
        alt="Animated"
        style={{
          position: "absolute",
          bottom: "20%",
          right: 0,
          transform: " rotate(-29.11deg)",
        }}
      />
      <img
        ref={logoImageRef}
        src={logo}
        alt="logo"
        style={{ width: "300px", display: "flex", margin: "auto" }}
      />
      <img
        ref={pl1Ref}
        src={pl1}
        alt="pl1"
        style={{ position: "absolute", top: "25%", left: "33%" }}
      />
      <img
        ref={pl2Ref}
        src={pl2}
        alt="pl2"
        style={{ position: "absolute", top: "32%", left: "40%" }}
      />
      <img
        ref={pl3Ref}
        src={pl3}
        alt="pl3"
        style={{ position: "absolute", top: "45%", left: "30%" }}
      />
      <img
        ref={pr1Ref}
        src={pr1}
        alt="pr1"
        style={{ position: "absolute", top: "50%", right: "35%" }}
      />
      <img
        ref={pr2Ref}
        src={pr2}
        alt="pr2"
        style={{ position: "absolute", top: "65%", right: "40%" }}
      />
      <img
        ref={pr3Ref}
        src={pr3}
        alt="pr3"
        style={{ position: "absolute", top: "77%", right: "38%" }}
      />
      <div
        ref={bgRef}
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#00000",
          margin: "auto",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          ref={hamburgerRef}
          src={hamburger}
          alt="logo"
          style={{
            position: "absolute",
            top: "22px",
            right: "5%",
            cursor: "pointer",
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={toggleMenu}
        />
        <img
          ref={shadeShapeRef}
          src={shadeShape}
          alt="logo"
          style={{
            position: "absolute",
            top: "15%",
            left: "15%",
          }}
        />
        <img
          ref={slide1Ref}
          src={slide1}
          alt="logo"
          style={{
            position: "absolute",
            bottom: "17%",
            left: "30%",
          }}
        />
        <img
          ref={slideBaseRef}
          src={slideBase}
          alt="logo"
          style={{
            position: "absolute",
            bottom: "8%",
            left: "26%",
          }}
        />
        <img
          ref={scrollRef}
          src={scroll}
          alt="logo"
          style={{
            position: "absolute",
            bottom: "-8%",
            left: "50%",
          }}
        />
        <img
          ref={heartShapeRef}
          src={heartShape}
          alt="logo"
          style={{
            position: "absolute",
            top: "15%",
            right: "15%",
          }}
        />
        <img
          ref={welcomeTextRef}
          src={welcomeTextImage}
          alt="logo"
          style={{
            position: "absolute",
            width: "70%",
            top: "15%",
            left: "15%",
          }}
        />
      </div>
       {/* <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </> */}
    </div>
  );
};

export default Home;
