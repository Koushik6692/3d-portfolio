import React from "react";
import styled from "styled-components";
// import { GoDash } from "react-icons/go";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Section = styled.div`
  height: 100vh;

  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  gap: 10px;
  margin-left: 5px;
  width: 100%;
`;

const Icons = styled.p`
  width: 450px;
  gap: 10px;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    display: flex;

    justify-content: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.a`
  background-color: orangered;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

const IconDetalies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 10px;
`;

const Icon = styled.a`
  width: 20px;
  font-size: 50px;
  cursor: pointer;
  color: #e2725b;
  margin-top: 2px;
`;

const IconName = styled.p`
  color: white;
  font-size: 15px;
  width: auto;
  margin-left: 5px;
  text-align: start;
`;

const Domain = styled.h1`
  text-align: start;
  color: #ff7518;
`;

const who = () => {
  return (
    <Section id="about">
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 3, 7]} />
            <Cube />
          </Canvas>
        </Left>

        <Right>
          <Title>Skills</Title>
          <WhatWeDo>
            <Domain> Web devolopment</Domain>
            <Icons>
              <IconDetalies>
                <Icon>
                  <FaHtml5 />
                </Icon>
                <IconName>HTML5</IconName>
              </IconDetalies>
              <IconDetalies>
                <Icon>
                  <FaCss3 />
                </Icon>
                <IconName>CSS3</IconName>
              </IconDetalies>

              <IconDetalies>
                <Icon>
                  <RiJavascriptFill />
                </Icon>
                <IconName>JavaScript</IconName>
              </IconDetalies>
              <IconDetalies>
                <Icon>
                  <RiReactjsFill />
                </Icon>
                <IconName>React Js</IconName>
              </IconDetalies>
              <IconDetalies>
                <Icon>
                  <FaNodeJs />
                </Icon>
                <IconName>Node Js</IconName>
              </IconDetalies>
              <IconDetalies>
                <Icon>
                  <SiMongodb />
                </Icon>
                <IconName>MongoDB</IconName>
              </IconDetalies>
            </Icons>
          </WhatWeDo>
          <WhatWeDo>
            <Domain> Programming Languages </Domain>
            <Icons>
              <IconDetalies>
                <Icon>
                  <FaPython />
                </Icon>
                <IconName>Python</IconName>
              </IconDetalies>
              <IconDetalies>
                <Icon>
                  <FaJava />
                </Icon>
                <IconName>Java</IconName>
              </IconDetalies>
            </Icons>
          </WhatWeDo>
          <Button href="/resume.pdf" target="_blank">
            Resume
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default who;
