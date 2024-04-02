import React from "react";
import Frame from "./Frame/Frame";
import { useEffect } from "react";
import { fadeInImages } from "./Anim";
import homework_figma from "./Ilustrations/homework_figma.png";
import homework from "./Ilustrations/homework.png";
import klinika from "./Ilustrations/klinika.png"
import homework_casestudy from "./Ilustrations/homework_casestudy.png";
import puromed_figma from "./Ilustrations/puromed_figma.png";
import abb from "./Ilustrations/abb.png"
import bello from "./Ilustrations/bello.png"
import viviamo from "./Ilustrations/viviamo.png"
import zoomies from "./Ilustrations/zoomies.png"
import furnitura from "./Ilustrations/furnitura.png"
import design_system from "./Ilustrations/design_system.png"
function App() {
  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);
  return <div className="App">
    <Frame pageUrl={"https://tomekswitecki.github.io/homework-case-study/"} label={"Homework.com - Redesign case study"} SlideIn="_up" Content={homework_casestudy} ></Frame>
    <Frame pageUrl={"https://www.figma.com/file/nK12ANwHtHpSDCMmuLyMpg/Homework.com?node-id=0%3A1&t=AVZE39mnvUZ70kao-1"} label={"Homework.com - Figma"} SlideIn="_up" Content={homework_figma} objectFit="none"></Frame>
    {/* <Frame pageUrl={"https://tomekswitecki.github.io/homework-project/#/landing"} label={"Homework.com"} SlideIn="_up" Content={homework} ></Frame> */}

    <Frame pageUrl={"https://www.figma.com/file/6YXd3631u0kIyuDxgt5Sex/Puromed?type=design&node-id=0%3A1&mode=design&t=d6JVt5p37lyoaXgJ-1"} label={"Puromed - Figma"} SlideIn="_up" Content={puromed_figma} ></Frame>

    <Frame pageUrl={"https://www.figma.com/file/QD44PXNjrMe0lCvAQ62y7z/ABB-Energy-Efficency-Calculator?type=design&node-id=0%3A1&mode=design&t=uxIE5VUvtK04aURa-1"} label={"ABB Energy Efficiency Calculator - Figma"} SlideIn="_up" Content={abb}></Frame>

    <Frame pageUrl={"https://tomekswitecki.github.io/klinikabm-public/"} label={"Klinika BM"} SlideIn="_up" Content={klinika}></Frame>

    <Frame pageUrl={"https://www.figma.com/file/QD44PXNjrMe0lCvAQ62y7z/ABB-Energy-Efficency-Calculator?type=design&node-id=0%3A1&mode=design&t=uxIE5VUvtK04aURa-1"} label={"Viviamo - Landing Page"} SlideIn="_up" Content={viviamo}></Frame>

    <Frame pageUrl={"https://tomekswitecki.github.io/bello/"} label={"Bello - Design Agency"} SlideIn="_up" Content={bello}></Frame>

    <Frame pageUrl={"https://dribbble.com/shots/23795258--Furnitura-Design-Case-Study"} label={"Furnitura - Mobile Furniture Store Case Study"} SlideIn="_up" Content={furnitura}></Frame>

    <Frame pageUrl={"https://www.figma.com/file/p5mz7boEZ4MyBRjuY2rOD2/Design-System?type=design&node-id=1%3A2&mode=design&t=bIEa6BeWoqYMCglx-1"} label={"Design System"} SlideIn="_up" Content={design_system}></Frame>

    <Frame pageUrl={"https://www.figma.com/proto/s0vNDyQML0V1SIgFh9HZ93/Zoomies?page-id=270%3A953&type=design&node-id=272-1677&viewport=744%2C355%2C0.15&t=yrRXaoJmQlCsbbWT-1&scaling=min-zoom&starting-point-node-id=272%3A1677&show-proto-sidebar=1&mode=design"} label={"Zoomies - Landing Page Design"} SlideIn="_up" Content={zoomies}></Frame>
  </div>;
}

export default App;


