import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
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
const Home = () => {
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

    // Set initial position of the leftImage

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
    gsap.set(bg, {});

    // // LEFT Animation
    // gsap.to({
    //   delay: 5,

    // })
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
              x: 585,
              y: -240,
              scale: 2.5,
              duration: 2,
              ease: "power2",
              rotationY: 340,
              rotation: 340,
              zIndex: 3,
              onComplete: () => {
                gsap.to(leftImage, {
                  x: 240,
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
              x: "-585",
              y: -250,
              scale: 2.5,
              duration: 2,
              ease: "power2",
              rotationY: 340,
              zIndex: 2,
              rotation: 354,
              onComplete: () => {
                gsap.to(rightImage, {
                  x: -240,
                  y: -140,
                  scale: 2.7,
                  duration: 2,
                  rotationY: 160,
                  rotation: 0,
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
          x: -460,
          y: -280,
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
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#00000",
          margin: "auto",
        }}
      >
        <img
          ref={leftImageRef2}
          src={leftImage} // Replace with your leftImage path
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
          src={rightImage} // Replace with your leftImage path
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
          src={leftImage} // Replace with your leftImage path
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
          src={rightImage} // Replace with your leftImage path
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
          src={logo} // Replace with your leftImage path
          alt="logo"
          style={{ width: "300px", display: "flex", margin: "auto" }}
        />
        <img
          ref={pl1Ref}
          src={pl1} // Replace with your leftImage path
          alt="pl1"
          style={{ position: "absolute", top: "25%", left: "33%" }}
        />
        <img
          ref={pl2Ref}
          src={pl2} // Replace with your leftImage path
          alt="pl2"
          style={{ position: "absolute", top: "32%", left: "40%" }}
        />
        <img
          ref={pl3Ref}
          src={pl3} // Replace with your leftImage path
          alt="pl3"
          style={{ position: "absolute", top: "45%", left: "30%" }}
        />
        <img
          ref={pr1Ref}
          src={pr1} // Replace with your leftImage path
          alt="pr1"
          style={{ position: "absolute", top: "50%", right: "35%" }}
        />
        <img
          ref={pr2Ref}
          src={pr2} // Replace with your leftImage path
          alt="pr2"
          style={{ position: "absolute", top: "65%", right: "40%" }}
        />
        <img
          ref={pr3Ref}
          src={pr3} // Replace with your leftImage path
          alt="pr3"
          style={{ position: "absolute", top: "77%", right: "38%" }}
        />
        {/* <img
          ref={welcomeTextRef}
          src={welcomeTextImage} // Replace with your leftImage path
          alt="logo"
          style={{
            position: "absolute",
            width: "80%",
            top: "10%",
            left: "10%",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Home;
