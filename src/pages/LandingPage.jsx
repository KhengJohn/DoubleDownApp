import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import {
  leftImage,
  rightImage,
  logo,
  logoT,
  pl1,
  pl2,
  pl3,
  pr1,
  pr2,
  pr3,
  welcomeTextImage,
  bgImage,
  shadeShape,
  heartShape,
  scroll,
  hamburger,
  slideBase,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  heartsButton,
  shoppingCart,
  blackJackBG,
  leftArrow,
  rightArrow,
} from "../common/assets/images";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/home/NavBar";
import SideCart from "../components/cart/SideCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Pagination,
  Autoplay,
  EffectFade,
  Navigation,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import SecondSection from "../components/home/SecondSection";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SliderData } from "../common/dummydata/DummyData";


gsap.registerPlugin(ScrollTrigger);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};


gsap.config({ trialWarn: false });

const LandingPage = () => {
  const [menu, setMenue] = useState(true);
  const [cart, setCart] = useState(true);
  const navigate = useNavigate();
  const handleRent = (id) => {
    navigate(`/single-product/${id}`);
  };
  const toggleMenu = () => {
    setMenue(!menu);
  };
  const toggleCart = () => {
    setCart(!cart);
  };
  const swiperRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const logoImageRef = useRef(null);
  const logoImageRef2 = useRef(null);
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
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const bg4Ref = useRef(null);
  const shadeShapeRef = useRef(null);
  const heartShapeRef = useRef(null);
  const scrollRef = useRef(null);
  const slideBaseRef = useRef(null);
  const slide1Ref = useRef(null);
  const hamburgerRef = useRef(null);
  const shoppingCartRef = useRef(null);
  const signInButtonRef = useRef(null);
  const secondSectionRef = useRef(null);

  useGSAP(() => {
    // STOP SCROLLING
    // document.body.style.overflow = "hidden";

    const handleClickNext = () => {
      const prevButton = document.querySelector(".custom-swiper-button-next");
      if (prevButton) {
        prevButton.click(); // Trigger click event
      }
    };
    const handleClickPrev = () => {
      const prevButton = document.querySelector(".custom-swiper-button-prev");
      if (prevButton) {
        prevButton.click(); // Trigger click event
      }
    };
    // S1
    ScrollTrigger.create({
      trigger: ".cont",
      start: "1400",
      end: "1900",
      scrub: true,
      // end: "bottom center",
      onLeave: () => handleClickNext(),
      // onLeaveBack: () => handleClickPrev(),
      onEnterBack: () => handleClickPrev(),
    });
    // S2
    ScrollTrigger.create({
      trigger: ".cont",
      start: "1900",
      end: "2400",
      scrub: true,
      // end: "bottom center",
      onLeave: () => handleClickNext(),
      // onLeaveBack: () => handleClickPrev(),
      onEnterBack: () => handleClickPrev(),
    });
    // S3
    ScrollTrigger.create({
      trigger: ".cont",
      start: "2400",
      end: "2900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S4
    ScrollTrigger.create({
      trigger: ".cont",
      start: "2900",
      end: "3400",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S5
    ScrollTrigger.create({
      trigger: ".cont",
      start: "3400",
      end: "3900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S6
    ScrollTrigger.create({
      trigger: ".cont",
      start: "4400",
      end: "4900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S7
    ScrollTrigger.create({
      trigger: ".cont",
      start: "5400",
      end: "5900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S8
    ScrollTrigger.create({
      trigger: ".cont",
      start: "6400",
      end: "6900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S9
    ScrollTrigger.create({
      trigger: ".cont",
      start: "7400",
      end: "7900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    // S10
    ScrollTrigger.create({
      trigger: ".cont",
      start: "8400",
      end: "8900",
      scrub: true,
      onLeave: () => handleClickNext(),
      onEnterBack: () => handleClickPrev(),
    });
    const swiper = swiperRef.current;
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;
    const logoImage = logoImageRef.current;
    const logoImage2 = logoImageRef2.current;
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
    const bg2 = bg2Ref.current;
    const bg3 = bg3Ref.current;
    const bg4 = bg4Ref.current;
    const shadeShape = shadeShapeRef.current;
    const heartShape = heartShapeRef.current;
    const scroll = scrollRef.current;
    const slideBase = slideBaseRef.current;
    const slide1 = slide1Ref.current;
    const hamburger = hamburgerRef.current;
    const shoppingCart = shoppingCartRef.current;
    const signInButton = signInButtonRef.current;
    const secondSection = secondSectionRef.current;

    ScrollTrigger.create({
      trigger: ".cont",
      start: "8900",
      end: "9000",
      scrub: true,
      pin: secondSection,
      animation: gsap
        .timeline()
        .to(secondSection, {
          x: 0,
          y: 0,
          duration: 0.1,
          opacity: 1,
          zIndex: 12,
        })
        .to(secondSection, { opacity: 1 }),
      toggleActions: "play none none none",
    });
    // Set initial position of the Images
    gsap.set(leftImage, { xPercent: "-100", y: 0, rotationY: 0 });
    gsap.from(rightImage, { opacity: 0, rotationY: 0 });
    gsap.set(logoImage, { opacity: 0, y: 60 });
    gsap.set(logoImage2, { opacity: 0, x: 0, y: 0 });
    gsap.from(pl1Image, { opacity: 0 });
    gsap.from(pl2Image, { opacity: 0 });
    gsap.from(pl3Image, { opacity: 0 });
    gsap.from(pr1Image, { opacity: 0 });
    gsap.from(pr2Image, { opacity: 0 });
    gsap.from(pr3Image, { opacity: 0 });
    gsap.set(leftImage2, { x: 0, y: "-200%" });
    gsap.set(rightImage2, { x: 0, y: "-200%" });
    gsap.set(welcomeText, { opacity: 0 });
    gsap.set(bg, { opacity: 0, backgroundImage: `url(${bgImage})` });
    gsap.from(bg2, { opacity: 0, backgroundImage: `url(${blackJackBG})` });
    gsap.from(swiper, { opacity: 0 });
    gsap.set(bg3, { opacity: 0, x: 0, y: 0 });
    gsap.from(bg4, { opacity: 0 });
    gsap.set(shadeShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(heartShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(scroll, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(slideBase, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(slide1, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(hamburger, { opacity: 0, scale: 0.4 });
    gsap.from(signInButton, { opacity: 0, scale: 0.4 });
    gsap.from(shoppingCart, { opacity: 0, scale: 0.4 });

    gsap.to(bg, {
      delay: 5,
      opacity: 1,
      backgroundImage: `url(${bgImage})`,
      duration: 2,
      onComplete: () => {
        document.body.style.overflow = "";
        gsap.to(bg, {
          opacity: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            scrub: true,
            pinSpacing: false,
            pin: bg,
          },
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".cont",
      start: "top 1",
      end: "8900",
      scrub: true,
      pin: bg2,
      animation: gsap
        .timeline()
        .to(bg2, {
          opacity: 1,
          duration: 0.01,
        })
        .to(bg2, { opacity: 1 })
        .to(bg2, { opacity: 0, duration: 0.01 }),
      toggleActions: "play none none none",
    });

    ScrollTrigger.create({
      trigger: ".cont",
      start: "top 1",
      end: "8900",
      scrub: true,
      pin: swiper,
      animation: gsap
        .timeline()
        .to(swiper, {
          opacity: 1,
          zIndex: 11,
          duration: 0.01,
        })
        .to(swiper, { opacity: 1 })
        .to(swiper, { opacity: 0, duration: 0.01 }),
      toggleActions: "play none none none",
    });

    ScrollTrigger.create({
      trigger: ".cont",
      start: "top 1",
      end: "8900",
      scrub: true,
      pin: bg4,
      animation: gsap
        .timeline()
        .to(bg4, {
          opacity: 1,
          duration: 0.01,
        })
        .to(bg4, { opacity: 1 })
        .to(bg4, { opacity: 0, duration: 0.01 }),
      toggleActions: "play none none none",
    });
    // HAMBURGER
    gsap.to(hamburger, {
      delay: 5,
      opacity: 1,
      duration: 2,
      scale: 0.7,
      zIndex: 20,
      onComplete: () => {
        gsap.to(hamburger, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
            pinSpacing: false,
            pin: hamburger,
          },
        });
      },
    });

    var signInButtonTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: signInButton,
          start: "top 18",
          end: "12900",
          scrub: true,
          pin: signInButton,
          animation: gsap
            .timeline()
            .to(signInButton, {
              opacity: 1,
              zIndex: 1,
              ease: "power2",
              duration: 0.001,
            })
            .to(signInButton, { opacity: 1 }),
          toggleActions: "play none none none",
        });
      },
    });
    // SIGN IN BUTTON
    signInButtonTL.to(signInButton, {
      opacity: 0,
      xPercent: 0,
      y: 0,
      scale: 1,
    });

    var shoppingCartTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: shoppingCart,
          start: "top 10",
          end: "12900",
          scrub: true,
          pin: shoppingCart,
          animation: gsap
            .timeline()
            .to(shoppingCart, {
              opacity: 1,
              zIndex: 1,
              ease: "power2",
              duration: 0.001,
            })
            .to(shoppingCart, { opacity: 1 }),
          toggleActions: "play none none none",
        });
      },
    });
    // SHOPPING CART ICON
    shoppingCartTL.to(shoppingCart, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
    });

    var shadeShapeTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "8900",
          scrub: true,
          pin: shadeShape,
          animation: gsap
            .timeline()
            .to(shadeShape, {
              opacity: 1,
              x: -160,
              y: 230,
              filter: "blur(0px)",
              scale: 1,
              zIndex: 1,
              ease: "power2",
              duration: 0.001,
            })
            .to(shadeShape, {
              opacity: 1,
              x: -399,
              y: 250,
              scale: 1,
              rotate: -120,
              ease: "power2",
              duration: 0.1,
            })
            .to(shadeShape, { x: -399, y: 250 })
            .to(shadeShape, { x: -459, y: 250, opacity: 0, duration: 0.1 }),
          toggleActions: "play none none none",
        });
      },
    });
    shadeShapeTL.to(shadeShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: -160,
      y: 230,
      filter: "blur(0px)",
      scale: 1,
      zIndex: 1,
    });

    // gsap.to(slide1, {
    //   delay: 5,
    //   opacity: 0.4,
    //   duration: 2,
    //   filter: "blur(15px)",
    //   scale: 0.5,
    //   onComplete: () => {
    //     gsap.to(slide1, {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: ".container",
    //         start: "top 1px",
    //         end: "900",
    //         // toggleActions: 'play pause reverse none',
    //         scrub: true,

    //         pinSpacing: false,
    //         pin: slide1,
    //         // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
    //         // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
    //       },
    //     });
    //   },
    // });

    //    gsap.to(slideBase, {
    //   delay: 5,
    //   opacity: 0.4,
    //   duration: 2,
    //   filter: "blur(15px)",
    //   scale: 0.5,
    //   onComplete: () => {
    //     gsap.to(slideBase, {
    //       opacity: 0,
    //       scale: 1.4,
    //       scrollTrigger: {
    //         trigger: ".container",
    //         start: "top 1px",
    //         end: "900",
    //         // toggleActions: 'play pause reverse none',
    //         scrub: true,

    //         pinSpacing: false,
    //         pin: slideBase,
    //         // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
    //         // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
    //       },
    //     });
    //   },
    // });

    gsap.to(scroll, {
      delay: 5,
      opacity: 1,
      duration: 2,
      scale: 0.5,
      onComplete: () => {
        gsap.to(scroll, {
          opacity: 0,
          scale: 1.4,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pinSpacing: false,
            pin: scroll,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },

            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
    var heartShapeTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "8900",
          scrub: true,
          pin: heartShape,
          animation: gsap
            .timeline()
            .to(heartShape, {
              opacity: 1,
              x: 20,
              y: 20,
              scale: 1,
              duration: 0.001,
            })
            .to(heartShape, {
              opacity: 1,
              x: 230,
              y: 28,
              scale: 1,
              zIndex: 1,
              rotate: 80,
              duration: 0.1,
            })
            .to(heartShape, { x: 230, y: 28 })
            .to(heartShape, { x: 280, y: 28, opacity: 0, duration: 0.1 }),
          toggleActions: "play none none none",
        });
      },
    });
    heartShapeTL.to(heartShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: 20,
      y: 20,
      filter: "blur(0px)",
      scale: 1,
      zIndex: 1,
    });

    var leftImgTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9500",
          scrub: true,
          pin: leftImage,
          animation: gsap
            .timeline()
            .to(leftImage, {
              x: 170,
              y: -240,
              scale: 2.7,
              rotationY: 160,
              // rotation: 190,
              filter: "blur(1px)",
              ease: "power2",
              duration: 0.001,
              zIndex: 200,
            })

            .to(leftImage, {
              rotation: 94,
              x: 140,
              scale: 1.7,
              y: -260,
              filter: "blur(2px)",
              duration: 0.1,
              zIndex: 200,
            })
            .to(leftImage, { x: 140, y: -260 })
            .to(leftImage, {
              x: 40,
              y: -264,
              opacity: 1,
              duration:0.029,
              scale: 0.8,
              zIndex: 40,
              rotate: 70
            })
            .to(leftImage, {
              x: 40,
              y: -264,
              opacity: 1,
              duration:0.041,
              zIndex: 40,
            }),
          toggleActions: "play none none none",
        });
      },
    });

    var rightImgTL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9500",
          scrub: true,
          pin: rightImage,
          animation: gsap
            .timeline()
            .to(rightImage, {
              x: -120,
              y: -100,
              scale: 2.7,
              rotationY: 160,
              // rotation: 20,
              duration: 0.001,
              filter: "blur(1px)",
              ease: "power2",
              zIndex: 200,
              opacity: 1,
            })
            .to(rightImage, {
              rotation: 210,
              x: -20,
              scale: 1.7,
              filter: "blur(1px)",
              y: 40,
              duration: 0.1,
              zIndex: 200,
              opacity: 1,
            })
            .to(rightImage, { opacity: 1, x: -20, y: 40 })
            .to(rightImage, {
              opacity: 1,
              zIndex: 200,
              x: 20,
              y: 70,
              duration: 0.012,
              filter: "blur(3px)",
            }),
          toggleActions: "play none none none",
        });
      },
    });

    var logoTL = gsap.timeline();

    // LEFT Animation
    leftImgTL
      .to(leftImage, {
        x: 200,
        y: -100,
        autoAlpha: 1,
        duration: 2,
        rotationY: -200,
        rotate: -9,
        rotateZ: 39,
        ease: "none",
      })
      .to(leftImage, {
        x: 260,
        y: -110,
        scale: 1.2,
        duration: 0.5,
        ease: "none",
        rotationZ: 40,
        rotate: 10,
      })
      .to(leftImage, {
        x: "47.5vw",
        y: -240,
        scale: 2.5,
        duration: 2,
        ease: "power2",
        rotationY: 340,
        rotation: 340,
        zIndex: 3,
      })
      .to(leftImage, {
        x: 170,
        y: -240,
        scale: 2.7,
        duration: 2,
        rotationY: 160,
        rotation: 190,
        filter: "blur(1px)",
        ease: "power2",
        zIndex: 3,
      });

    // Right Animation
    rightImgTL
      .to(rightImage, {
        x: -200,
        y: -100,
        autoAlpha: 1,
        duration: 2,
        rotationY: -200,
        rotate: -9,
        rotateZ: 39,
        ease: "none",
      })
      .to(rightImage, {
        x: -260,
        y: -110,
        scale: 1.2,
        duration: 0.5,
        ease: "none",
        rotationZ: 40,
        rotate: 10,
      })
      .to(rightImage, {
        x: "-47.5vw",
        y: -250,
        scale: 2.5,
        duration: 2,
        ease: "power2",
        rotationY: 340,
        zIndex: 2,
        rotation: 354,
      })
      .to(rightImage, {
        x: -120,
        y: -100,
        scale: 2.7,
        duration: 2,
        rotationY: 160,
        rotation: -20,
        filter: "blur(1px)",
        ease: "power2",
      });

    // Logo Animation
    logoTL.to(logoImage, {
      opacity: 1,
      delay: 1.5,
      duration: 3,
      ease: "none",
      y: 40,
      onComplete: () => {
        logoTL.to(logoImage, {
          x: "-34.5399vw",
          y: "-40.5vh",
          scale: 0.5,
          duration: 2,
          ease: "power2",
          onComplete: () => {
            logoTL.to(logoImage, {
              x: "-34.5399vw",
              y: "-40.5vh",
              ease: "power1.inOut",
              zIndex: 1,
              delay: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                end: "top 1px",
                scrub: true,
                pinSpacing: false,
                pin: true,
              },
            });
          },
        });
      },
    });

    const pl1TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pl1Image,
          animation: gsap
            .timeline()
            .to(pl1Image, {
              x: 150,
              y: 180,
              scale: 0.8,
              duration: 0.001,
              rotationY: 60,
              rotation: 40,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,
            })
            .to(pl1Image, {
              x: 210,
              filter: "blur(1px)",
              y: 175,
              duration: 0.1,
              opacity: 1,
            })
            .to(pl1Image, { x: 210, y: 175, opacity: 1 })
            .to(pl1Image, { x: 180, y: 105, opacity: 1,   duration:0.09, scale: 0.7 })
            .to(pl1Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });

    // pl1Image Animation
    pl1TL
      .to(pl1Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pl1Image, {
        x: 150,
        y: 180,
        scale: 1,
        duration: 2,
        rotationY: 60,
        rotation: 40,
        filter: "blur(1px)",
        ease: "power2",
      });

    // pl2Image Animation
    const pl2TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pl2Image,
          animation: gsap
            .timeline()
            .to(pl2Image, {
              x: -480,
              y: -0,
              scale: 0.8,
              duration: 0.001,
              rotationY: 60,
              rotation: 40,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,
            })
            .to(pl2Image, {
              x: -545,
              filter: "blur(2px)",
              y: -0,
              duration: 0.1,
              opacity: 1,
            })
            .to(pl2Image, { x: -545, y: -0, opacity: 1 })
            .to(pl2Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });

    pl2TL
      .to(pl2Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pl2Image, {
        x: -480,
        y: -0,
        scale: 1,
        duration: 2,
        rotationY: 60,
        rotation: 40,
        filter: "blur(1px)",
        ease: "power2",
      });

    // pl3Image Animation
    const pl3TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pl3Image,
          animation: gsap
            .timeline()
            .to(pl3Image, {
              x: -80,
              y: -170,
              scale: 0.8,
              duration: 0.001,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,
            })
            .to(pl3Image, {
              x: -0,
              filter: "blur(2px)",
              y: -130,
              duration: 0.1,
              opacity: 1,
            })
            .to(pl3Image, { x: -0, y: -130, opacity: 1 })
            .to(pl3Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });
    pl3TL
      .to(pl3Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pl3Image, {
        x: -80,
        y: -170,
        scale: 1,
        duration: 2,
        rotationY: 160,
        rotation: 40,
        filter: "blur(1px)",
        ease: "power2",
      });

    // pr1Image Animation
    const pr1TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pr1Image,
          animation: gsap
            .timeline()
            .to(pr1Image, {
              x: -580,
              y: 170,
              duration: 0.001,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,scale: 0.8,
            })
            .to(pr1Image, {
              x: -580,
              filter: "blur(2px)",
              y: 340,
              duration: 0.1,
              opacity: 1,
            })
            .to(pr1Image, { x: -580, y: 340, opacity: 1 })
            .to(pr1Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });
    pr1TL
      .to(pr1Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pr1Image, {
        x: -580,
        y: 170,
        scale: 1,
        duration: 2,
        rotationY: 180,
        rotation: 310,
        filter: "blur(1px)",
        ease: "power2",
      });

    // plr2Image Animation
    const pr2TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pr2Image,
          animation: gsap
            .timeline()
            .to(pr2Image, {
              x: 250,
              y: 0,
              duration: 0.001,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,
              scale: 0.8,
            })
            .to(pr2Image, {
              x: 250,
              y: 0,
              filter: "blur(2px)",
              duration: 0.1,
              opacity: 1,
            })
            .to(pr2Image, { x: 250, y: 0, opacity: 1 })
            .to(pr2Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });
    pr2TL
      .to(pr2Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pr2Image, {
        x: 250,
        y: 0,
        scale: 1,
        duration: 2,
        rotationY: 180,
        rotation: 20,
        filter: "blur(1px)",
        ease: "power2",
      });

    // pr3Image Animation
    const pr3TL = gsap.timeline({
      onComplete: function () {
        ScrollTrigger.create({
          trigger: ".cont",
          start: "top 1",
          end: "9800",
          scrub: true,
          pin: pr3Image,
          animation: gsap
            .timeline()
            .to(pr3Image, {
              x: 450,
              y: 120,
              duration: 0.001,
              filter: "blur(1px)",
              ease: "power2",
              opacity: 1,scale: 0.8,
            })
            .to(pr3Image, {
              x: 450,
              y: 120,
              filter: "blur(2px)",
              duration: 0.1,
              opacity: 1,
            })
            .to(pr3Image, { x: 450, y: 120, opacity: 0 })
            .to(pr3Image, { opacity: 0, duration: 0.001 }),
          toggleActions: "play none none none",
        });
      },
    });
    pr3TL
      .to(pr3Image, {
        opacity: 1,
        delay: 4,
        duration: 0.4,
        ease: "none",
      })
      .to(pr3Image, {
        x: 450,
        y: 120,
        scale: 1,
        duration: 2,
        rotationY: 180,
        rotation: 20,
        filter: "blur(1px)",
        ease: "power2",
      });

    // NEW LOGO
    gsap.to(logoImage2, {
      x: 0,
      y: 0,
      delay: 6.5,
      opacity: 1,
      zIndex: 19,
      display: "fixed",
      onComplete: () => {
        gsap.to(logoImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
            pinSpacing: false,
            pin: logoImage2,
          },
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
      zIndex: 20,
      display: "fixed",
      onComplete: () => {
        gsap.to(rightImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
            pinSpacing: false,
            pin: rightImage2,
          },
        });
      },
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
      zIndex: 19,
      onComplete: () => {
        gsap.to(leftImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
            pinSpacing: false,
            pin: leftImage2,
          },
        });
      },
    });
    // Welcome Text Animation
    gsap.to(welcomeText, {
      opacity: 1,
      delay: 6,
      duration: 2,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(welcomeText, {
          opacity: 0,
          duration: 2,
          ease: "power1.inOut",
          zIndex: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            scrub: true,
            pinSpacing: false,
            pin: true,
          },
        });
      },
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        // height: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
      className="cont"
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "8900px",
          overflow: "hidden",
          backgroundColor: "#000",
          top: 0,
        }}
        className=".container"
      >
        <NavBar toggleMenu={toggleMenu} menu={menu} />
        <SideCart toggleCart={toggleCart} cart={cart} />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            display: "flex",
          }}
        >
          <img
            ref={leftImageRef2}
            src={leftImage}
            alt="Animated"
            style={{
              position: "absolute",
              top: "16px",
              left: "3.5vw",
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
              left: "5vw",
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
              x: "-100%",
              y: 0,
              opacity: 1,
            }}
          />
          <img
            ref={logoImageRef}
            src={logo}
            alt="logo"
            style={{ width: "300px", display: "flex", margin: "auto" }}
          />
          <img
            ref={logoImageRef2}
            src={logoT}
            alt="logo"
            style={{
              width: "150px",
              position: "absolute",
              top: "16px",
              left: "8vw",
            }}
          />
          <img
            ref={pl1Ref}
            src={pl1}
            alt="pl1"
            style={{
              position: "absolute",
              top: "25%",
              left: "33%",
              opacity: 0,
              zIndex: 1,
            }}
          />
          <img
            ref={pl2Ref}
            src={pl2}
            alt="pl2"
            style={{
              position: "absolute",
              top: "32%",
              left: "40%",
              opacity: 0,
              zIndex: 1,
            }}
          />
          <img
            ref={pl3Ref}
            src={pl3}
            alt="pl3"
            style={{
              position: "absolute",
              top: "45%",
              left: "30%",
              opacity: 0,
              zIndex: 1,
            }}
          />
          <img
            ref={pr1Ref}
            src={pr1}
            alt="pr1"
            style={{
              position: "absolute",
              top: "50%",
              right: "35%",
              opacity: 0,
              zIndex: 10,
            }}
          />
          <img
            ref={pr2Ref}
            src={pr2}
            alt="pr2"
            style={{
              position: "absolute",
              top: "65%",
              right: "40%",
              opacity: 0,
              zIndex: 1,
            }}
          />
          <img
            ref={pr3Ref}
            src={pr3}
            alt="pr3"
            style={{
              position: "absolute",
              top: "77%",
              right: "38%",
              opacity: 0,
              zIndex: 1,
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
              width: "119.82px",
              height: "109.84px",
            }}
          />
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
          <Link to={"sign-up"}>
            <button
              ref={signInButtonRef}
              style={{
                position: "absolute",
                top: "12px",
                right: "18%",
                border: "1px solid transparent",
                borderImage:
                  "linear-gradient(to right, #BE9F60 0%, #000 49%, #BE9F60 100%) 1",
                borderImageSlice: "1",
                borderImageRepeat: "stretch",
                backgroundColor: "initial",
                color: "#E7B960",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "8px",
                padding: "05px 20px",
                cursor: "pointer",
                zIndex: 10,
                marginTop: "10px",
                opacity: 0,
              }}
              className="cormorant-font"
            >
              SIGN UP
            </button>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px',zIndex:200, position: 'absolute', right: '0'}}>
            {/* <span><Link to={"/account"}>Account</Link></span> */}
          </div>
          <img
            ref={shoppingCartRef}
            src={shoppingCart}
            alt="logo"
            style={{
              position: "absolute",
              top: "12px",
              right: "12%",
              cursor: "pointer",
              zIndex: 10,
              opacity: 0,
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={toggleCart}
          />
          <img
            ref={shadeShapeRef}
            src={shadeShape}
            alt="logo"
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              width: "360.47px",
              height: "289.84px",
            }}
          />
          <div
            ref={bgRef}
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              // backgroundColor: "#00000",
              margin: "auto",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="hero-section"
          >
            {/* <img
            ref={slide1Ref}
            src={slide1}
            alt="logo"
            style={{
              position: "absolute",
              bottom: "37vh",
              left: "39vw",
              width: "300px",
            }}
            className="floating-img hero-section"
          />
          <img
            ref={slideBaseRef}
            src={slideBase}
            alt="logo"
            style={{
              position: "absolute",
              bottom: "10vh",
              left: "28vw",
            }}
            className="hero-section"
          /> */}
            <img
              ref={scrollRef}
              src={scroll}
              alt="logo"
              style={{
                position: "absolute",
                bottom: "-8%",
                left: "49.7%",
              }}
              className="hero-section"
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
              className="hero-section"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            margin: "auto",
            backgroundImage: `url(${blackJackBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0,
          }}
          className="slider-section"
          ref={bg2Ref}
        ></div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            margin: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="slider-section"
        >
          <Swiper
            pagination={pagination}
            modules={[Pagination, EffectFade, Autoplay, Navigation, Keyboard]}
            className="mySwiper"
            effect="fade" // Set effect to fade
            fadeEffect={{ crossFade: true }} // Enable cross fade effect
            // autoplay={{
            //   delay: 10000,
            //   disableOnInteraction: false,
            // }}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            keyboard={{
              enabled: true,
            }}
            ref={swiperRef}
            style={{
              opacity: 0,
            }}
          >
            {/* Custom previous button */}
            <div className="custom-swiper-button-prev">
              <img src={leftArrow} alt="leftArrow" />
            </div>

            {/* Custom next button */}
            <div className="custom-swiper-button-next">
              <img src={rightArrow} alt="leftArrow" />
            </div>
            {SliderData.map((items, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    width: "30%",
                    textAlign: "start",
                    gap: "10px",
                    marginLeft: "10vh",
                    marginBottom: " 45vh",
                    height: "100%",
                  }}
                >
                  <span className="cormorant-font swipper-title">
                    {items.title}
                  </span>
                  <span className="swipper-description">
                    {items.description}
                  </span>
                  <button onClick={() => handleRent(index)} className="cormorant-font swipper-btn">
                    RENT NOW
                    <img
                      alt="heartsButton"
                      src={heartsButton}
                      style={{ width: "30px" }}
                    />
                  </button>
                </div>
                <img
                  src={items.img}
                  alt="logo"
                  style={{
                    width: items === slide2 ? "37.5rem" : "18.75rem",
                    height: "18.75rem",
                    display: "flex",
                    margin: "auto",
                    zIndex: 34,
                  }}
                  className="floating-img slider-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            style={{
              opacity: 0,
            }}
            ref={bg4Ref}
          >
            <img src={slideBase} alt="logo" className="swipper-base" />
          </div>
        </div>
      </div>
      <div
        ref={secondSectionRef}
        style={{
          color: "#FFF",
          zIndex: 4,
          position: "absolute",
          top: "8900px",
          opacity: 0,
          width: "100%",
        }}
      >
        <SecondSection />
      </div>
    </div>
  );
};

export default LandingPage;
