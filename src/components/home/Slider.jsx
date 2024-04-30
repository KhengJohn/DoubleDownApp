import React from "react";
import {
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
  slideBase,
  heartsButton,
} from "../../common/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade, Navigation,Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

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

const Slider = () => {
  
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, EffectFade, Autoplay, Navigation, Keyboard]}
        className="mySwiper"
        effect="fade" // Set effect to fade
        fadeEffect={{ crossFade: true }} // Enable cross fade effect
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={false}
        keyboard={{
          enabled: true,
        }}
        
      >
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
                marginBottom:' 45vh',
                height:'100%'
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
                  fontWeight: 100
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
              }}
              className="floating-img slider-img"
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
      <div>
        <img
          src={slideBase}
          alt="logo"
          style={{
            width: "400px",
            height: "300px",
            position: "absolute",
            bottom: "1vh",
            left: "36vw",
          }}
        />
      </div>
    </>
  );
};

export default Slider;
