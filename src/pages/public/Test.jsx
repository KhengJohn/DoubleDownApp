import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)


const Test = () => {

    useGSAP(()=>{
// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true
  });
  
  // pin box-c when it reaches the center of the viewport, for 300px
  ScrollTrigger.create({
    trigger: ".box-c",
    pin: true,
    start: "center center",
    end: "+=300",
    markers: true
  });
  
  document.querySelector("button").addEventListener("click", e => {
    // scroll to the spot where .box-c is in the center.
    // parameters: element, smooth, position
    smoother.scrollTo(".box-c", true, "center center");
    
    // or you could animate the scrollTop:
    // gsap.to(smoother, {
    //  scrollTop: smoother.offset(".box-c", "center center"),
    //  duration: 1
    // });
  });
    })
  return (
<div id="smooth-wrapper">
  <div id="smooth-content">
    <header class="header">
      <h1 class="title">ScrollSmoother</h1>
      <button class="button">Jump to C</button>
    </header>
    <div class="box box-a" data-speed="clamp(0.5)">a</div>
    <div class="box box-b" data-speed="clamp(0.8)">b</div>
    <div class="box box-c" data-speed="1.5">c</div>
    <div class="line"></div>
  </div>
</div>
  )
}

export default Test