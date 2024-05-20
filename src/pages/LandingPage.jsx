import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  leftImage,
  rightImage,
  logo,
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

gsap.registerPlugin(ScrollTrigger);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
const SliderData = [
  {
    img: slide1,
    title: "Roulette",
    description:
      "Add excitement and glamour to your party by renting a casino roulette! Elevate your event with the elegance of blackjack and the thrill of roulette. Surprise your guests with a unique experience that will make your party unforgettable. Contact us now to make your event a success!",
  },
  {
    img: slide2,
    title: "Texas Hold 'em",
    description:
      " Join the ultimate poker showdown! Play your cards right and outsmart your opponents in Texas Hold'em.",
  },
  {
    img: slide3,
    title: "Black Jack",
    description:
      "Spice up family gatherings with our Blackjack card rental service! Bring the thrill of the casino to your event. Book now for unforgettable fun!",
  },
  {
    img: slide4,
    title: "Short Craps",
    description:
      " Experience the thrill of Craps in a fast-paced, action-packed game. Place your bets and roll the dice!  Book now for unforgettable fun!",
  },
  {
    img: slide5,
    title: "Large Craps",
    description:
      "Dive into the excitement of Craps with a wide range of betting options. Roll the dice and watch your fortunes change!",
  },
  {
    img: slide6,
    title: "Three Card  Poker",
    description:
      "Try your luck in Three Card Poker! Make the best poker hand with three cards and beat the dealer for a chance to win.",
  },
  {
    img: slide7,
    title: "Let it ride",
    description:
      "Let the good times roll in Let It Ride! Place your bets, watch the cards unfold, and see if you can win big against the house.",
  },
  {
    img: slide8,
    title: "Pai Gow Poker",
    description:
      "Play like a pro in Pai Gow Poker! Split your seven cards into two hands and beat the dealer for a chance to win big.",
  },
  {
    img: slide9,
    title: "Wheel of Fortune",
    description:
      " Spin the Wheel of Fortune and win big! Bet on your favorite segments and watch as the wheel determines your fate.",
  },
  {
    img: slide10,
    title: "Mini Baccarat",
    description:
      "Experience the elegance of Baccarat in a fast-paced game! Bet on the player, banker, or a tie and see if luck is on your side in Mini Baccarat.",
  },
];

gsap.config({ trialWarn: false });

const LandingPage = () => {
  const [menu, setMenue] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  const toggleMenu = () => {
    setMenue(!menu);
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

  useEffect(() => {
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
    // ScrollTrigger for next button
    ScrollTrigger.create({
      trigger: ".container",
      start: "900",
      end: "1400",
      scrub: true,
      // end: "bottom center",
      onEnter: () => handleClickNext(),
      onLeaveBack: () => handleClickPrev(),
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

    // Set initial position of the Images

    gsap.set(leftImage, { x: "-100%", y: 0, rotationY: 0 });
    gsap.set(rightImage, { x: "-100%", y: 0, rotationY: 0 });
    gsap.set(logoImage, { opacity: 0, y: 60 });
    gsap.set(logoImage2, { opacity: 0, x: 0, y: 0 });
    gsap.set(pl1Image, { opacity: 0 });
    gsap.set(pl2Image, { opacity: 0 });
    gsap.set(pl3Image, { opacity: 0 });
    gsap.set(pr1Image, { opacity: 0 });
    gsap.set(pr2Image, { opacity: 0 });
    gsap.set(pr3Image, { opacity: 0 });
    gsap.set(leftImage2, { x: 0, y: "-200%" });
    gsap.set(rightImage2, { x: 0, y: "-200%" });
    gsap.set(welcomeText, { opacity: 0 });
    gsap.set(bg, { opacity: 0, backgroundImage: `url(${bgImage})` });
    gsap.set(bg2, { opacity: 0, backgroundImage: `url(${blackJackBG})` });
    gsap.set(swiper, { opacity: 0 });
    gsap.set(bg3, { opacity: 0, x: 0, y: 0 });
    gsap.set(bg4, { opacity: 0 });
    gsap.set(shadeShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(heartShape, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(scroll, { opacity: 0, filter: "blur(1px)", scale: 0.4 });
    gsap.set(slideBase, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(slide1, { filter: "blur(10px)", opacity: 0, scale: 0.4 });
    gsap.set(hamburger, { opacity: 0, scale: 0.4 });
    gsap.set(signInButton, { opacity: 0, scale: 0.4 });
    gsap.set(shoppingCart, { opacity: 0, scale: 0.4 });

    gsap.to(bg, {
      delay: 5,
      opacity: 1,
      backgroundImage: `url(${bgImage})`,
      duration: 2,
      onComplete: () => {
        gsap.to(bg, {
          opacity: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: bg,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });

    gsap.to(bg2, {
      delay: 5,
      opacity: 0,
      backgroundImage: `url(${blackJackBG})`,
      duration: 2,
      onComplete: () => {
        gsap.to(bg2, {
          backgroundImage: `url(${blackJackBG})`,
          opacity: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "1400",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: bg2,
          },
        });
      },
    });
    gsap.to(swiper, {
      delay: 5,
      opacity: 0,
      duration: 2,
      zIndex: 20,
      onComplete: () => {
        gsap.to(swiper, {
          opacity: 1,
          zIndex: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "1400",
            scrub: true,
            pin: swiper,
          },
        });
      },
    });

    gsap.to(bg4, {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        gsap.to(bg4, {
          opacity: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1",
            end: "1400",
            scrub: true,
            pin: bg4,
          },
        });
      },
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
            pin: hamburger,
          },
        });
      },
    });
    // SIGN IN BUTTON
    gsap.to(signInButton, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      onComplete: () => {
        gsap.to(signInButton, {
          x: 0,
          y: 0,
          opacity: 1,
          zIndex: 20,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
            pin: signInButton,
          },
        });
      },
    });
    // SHOPPING CART ICON
    gsap.to(shoppingCart, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      onComplete: () => {
        gsap.to(shoppingCart, {
          x: 0,
          y: 0,
          opacity: 1,
          zIndex: 20,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px", 
            scrub: true, 
            pin: shoppingCart, 
          },
        });
      },
    });
    gsap.to(shadeShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: -160,
      y: 230,
      filter: "blur(0px)",
      scale: 1,
      onComplete: () => {
        gsap.to(shadeShape, {
          opacity: 1,
          x: -300,
          y: 340,
          scale: 1.4,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            // end: "bottom 50%",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: shadeShape,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
    gsap.to(slide1, {
      delay: 5,
      opacity: 0.4,
      duration: 2,
      filter: "blur(15px)",
      scale: 0.5,
      onComplete: () => {
        gsap.to(slide1, {
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: slide1,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
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

            pin: scroll,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },

            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
    gsap.to(slideBase, {
      delay: 5,
      opacity: 0.4,
      duration: 2,
      filter: "blur(15px)",
      scale: 0.5,
      onComplete: () => {
        gsap.to(slideBase, {
          opacity: 0,
          scale: 1.4,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "900",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: slideBase,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
    gsap.to(heartShape, {
      delay: 5,
      opacity: 1,
      duration: 2,
      x: 20,
      y: 20,
      filter: "blur(0px)",
      scale: 1,
      onComplete: () => {
        gsap.to(heartShape, {
          opacity: 1,
          x: 220,
          y: 28,
          scale: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            // end: "bottom 50%",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: heartShape,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
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
                  onComplete: () => {
                    gsap.to(leftImage, {
                      x: 160,
                      y: -320,
                      scale: 2.7,
                      duration: 7,
                      rotationY: 160,
                      rotation: 220,
                      filter: "blur(2px)",
                      ease: "power2",
                      scrollTrigger: {
                        trigger: ".container",
                        start: "top 1px",
                        // end: "bottom 50%",
                        // toggleActions: 'play pause reverse none',
                        scrub: true,

                        pin: leftImage,
                        // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                        // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
                      },
                    });
                  },
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
                  onComplete: () => {
                    gsap.to(rightImage, {
                      x: 20,
                      y: 20,
                      scale: 2.7,
                      duration: 7,
                      rotationY: 160,
                      rotation: 20,
                      filter: "blur(2px)",
                      ease: "power2",
                      zIndex: 1,
                      scrollTrigger: {
                        trigger: ".container",
                        start: "top 1px",
                        end: "bottom 50%",
                        // toggleActions: 'play pause reverse none',
                        scrub: true,

                        pin: rightImage,
                        // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                        // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
    var logoTL = gsap.timeline();
    // Logo Animation
    logoTL.to(logoImage, {
      opacity: 1,
      delay: 1.5,
      duration: 3,
      ease: "none",
      y: 40,
      onComplete: () => {
        logoTL.to(logoImage, {
          x: "-37vw",
          y: "-42.6vh",
          scale: 0.5,
          duration: 2,
          ease: "power2",
          onComplete: () => {
            logoTL.to(logoImage, {
              opacity: 0,
              ease: "power1.inOut",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                end: "top 1px",
                scrub: true,
                pin: true,
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pl1Image, {
              x: 250,
              y: 240,
              scale: 2.7,
              duration: 7,
              rotationY: 160,
              rotation: 20,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pl1Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pl2Image, {
              x: -575,
              y: -0,
              scale: 2.7,
              duration: 7,
              rotationY: 160,
              rotation: 20,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pl2Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pl3Image, {
              x: -0,
              y: -130,
              scale: 0.5,
              duration: 7,
              rotationY: 160,
              rotation: 20,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pl3Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pr1Image, {
              x: -580,
              y: 330,
              scale: 4,
              duration: 7,
              rotationY: 160,
              rotation: 310,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pr1Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pr2Image, {
              x: 250,
              y: 0,
              scale: 2.1,
              duration: 7,
              rotationY: 180,
              rotation: 20,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pr2Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
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
          onComplete: () => {
            gsap.to(pr3Image, {
              x: 450,
              y: 120,
              scale: 2.1,
              duration: 7,
              rotationY: 180,
              rotation: 20,
              filter: "blur(2px)",
              ease: "power2",
              zIndex: 1,
              scrollTrigger: {
                trigger: ".container",
                start: "top 1px",
                // end: "bottom 50%",
                // toggleActions: 'play pause reverse none',
                scrub: true,

                pin: pr3Image,
                // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
                // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
              },
            });
          },
        });
      },
    });
    // NEW LOGO
    gsap.to(logoImage2, {
      x: 0,
      y: 0,
      delay: 6,
      opacity: 1,
      zIndex: 3,
      display: "fixed",
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(logoImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
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
      zIndex: 4,
      display: "fixed",
      onComplete: () => {
        gsap.to(rightImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            scrub: true,
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
      zIndex: 1,
      onComplete: () => {
        gsap.to(leftImage2, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            // end: "bottom 50%",
            // toggleActions: 'play pause reverse none',
            scrub: true,

            pin: leftImage2,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
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
            pin: true,
          },
        });
      },
    });

    // gsap.set(".slider-section", { display: "none" });
    // // Welcome Text Animation
    // gsap.to(".slider-section", {
    //   display: "flex",
    //   delay: 8,
    //   duration: 2,
    //   ease: "power1.inOut",
    //   zIndex: 2,
    //   scrollTrigger: {
    //     trigger: ".container",
    //     start: "top 1px",
    //     end: "bottom 50%",
    //     // toggleActions: 'play pause reverse none',
    //     scrub: true,
    //     markers: true,
    //     pin: ".slider-section",
    //     // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
    //     // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
    //   },
    // });

    // gsap.to(".hero-section", {
    //   display: "none",
    //   delay: 8,
    //   duration: 2,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".container",
    //     start: "top 1px",
    //     end: "bottom 50%",
    //     // toggleActions: 'play pause reverse none',
    //     scrub: true,
    //     markers: true,
    //     pin: ".hero-section",
    //     // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
    //     // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
    //   },
    // });

    // let scene1 = gsap.timeline();
    // ScrollTrigger.create({
    //   animation: scene1,
    //   trigger: ".container",
    //   start: "top top",
    //   end: "45% 100%",
    //   scrub: 3,
    // });
    // scene1.to("#hh", { y: 800 }, 0);

    // gsap.to("#hh", {
    //   y: 500,
    //   x: 800,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".container",
    //     start: "top 1px",
    //     end: "bottom 50%",
    //     // toggleActions: 'play pause reverse none',
    //     scrub: true,
    //     markers: true,
    //     pin: ".ss",
    //     // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
    //     // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
    //   },
    // });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "2300px",
        overflow: "hidden",
        backgroundColor: "#000",
        top: 0,
      }}
      className=".container"
    >
      <NavBar toggleMenu={toggleMenu} menu={menu} />
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
          }}
        />
        <img
          ref={logoImageRef}
          src={logo}
          alt="logo"
          style={{ width: "300px", display: "flex", margin: "auto" }}
        />{" "}
        <img
          ref={logoImageRef2}
          src={logo}
          alt="logo"
          style={{
            width: "150px",
            position: "absolute",
            top: "16px",
            left: "7vw",
          }}
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
        />{" "}
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
        />{" "}
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
            zIndex: 30,
            marginTop: "10px",
          }}
          className="cormorant-font"
        >
          SIGN UP
        </button>
        {/* <h1 style={{ color: "white", zIndex: 6 }} id="hh">
        HELLO WORLD
      </h1> */}
        <img
          ref={shoppingCartRef}
          src={shoppingCart}
          alt="logo"
          style={{
            position: "absolute",
            top: "12px",
            right: "12%",
            cursor: "pointer",
            zIndex: 30,
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
          <img
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
          />
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
                <span
                  style={{
                    fontWeight: 300 /* Light font weight */,
                    fontStyle: "italic" /* Italic style */,
                    fontSize: "40px",
                    color: "#E7B960",
                  }}
                  className="cormorant-font"
                >
                  {items.title}
                </span>
                <span
                  style={{
                    fontStyle: "normal" /* Italic style */,
                    fontSize: "14px",
                    color: "#fff",
                    fontWeight: 100,
                  }}
                >
                  {items.description}
                </span>
                <button
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #E7B960 0%, #000 49%, #E7B960 100%) 1",
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
                    marginTop: "10px",
                  }}
                  className="cormorant-font"
                >
                  RENT NOW{" "}
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
                  width: items === slide2 ? "600px" : "300px",
                  height: "300px",
                  display: "flex",
                  margin: "auto",
                  zIndex: 34,
                }}
                className="floating-img slider-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={bg4Ref}>
          <img
            src={slideBase}
            alt="logo"
            style={{
              width: "400px",
              height: "300px",
              position: "absolute",
              bottom: "1vh",
              left: "36vw",
              zIndex: 20,
              opacity: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
