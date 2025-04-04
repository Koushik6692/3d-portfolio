import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { FaHtml5, FaCss3, FaPython, FaNodeJs, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiBootstrap, SiTableau, SiQlik, SiCypress, SiFlask, SiFirebase, SiReact } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

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
  width: 100%;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconDetalies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 10px;
  align-items: center;
`;

const Icon = styled.a`
  font-size: 50px;
  cursor: pointer;
  color: #e2725b;
  margin-top: 2px;
`;

const IconName = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
`;

const Domain = styled.h1`
  text-align: start;
  color: #ff7518;
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
            <Domain>Frontend Development</Domain>
            <Icons>
              <IconDetalies><Icon><FaHtml5 /></Icon><IconName>HTML5</IconName></IconDetalies>
              <IconDetalies><Icon><FaCss3 /></Icon><IconName>CSS3</IconName></IconDetalies>
              <IconDetalies><Icon><RiJavascriptFill /></Icon><IconName>JavaScript</IconName></IconDetalies>
              <IconDetalies><Icon><SiTypescript /></Icon><IconName>TypeScript</IconName></IconDetalies>
              <IconDetalies><Icon><RiReactjsFill /></Icon><IconName>React.js</IconName></IconDetalies>
              <IconDetalies><Icon><SiNextdotjs /></Icon><IconName>Next.js</IconName></IconDetalies>
              <IconDetalies><Icon><SiBootstrap /></Icon><IconName>Bootstrap</IconName></IconDetalies>
              <IconDetalies><Icon><SiTailwindcss /></Icon><IconName>Tailwind CSS</IconName></IconDetalies>
              <IconDetalies><Icon><SiReact /></Icon><IconName>React Native</IconName></IconDetalies>
            </Icons>
          </WhatWeDo>

          <WhatWeDo>
            <Domain>Backend Development</Domain>
            <Icons>
              <IconDetalies><Icon><FaNodeJs /></Icon><IconName>Node.js</IconName></IconDetalies>
              <IconDetalies><Icon><SiExpress /></Icon><IconName>Express.js</IconName></IconDetalies>
              <IconDetalies><Icon><SiFlask /></Icon><IconName>Flask</IconName></IconDetalies>
            </Icons>
          </WhatWeDo>

          <WhatWeDo>
            <Domain>Databases</Domain>
            <Icons>
              <IconDetalies><Icon><SiMongodb /></Icon><IconName>MongoDB</IconName></IconDetalies>
              <IconDetalies><Icon><SiMysql /></Icon><IconName>MySQL</IconName></IconDetalies>
              <IconDetalies><Icon><SiFirebase /></Icon><IconName>Firebase</IconName></IconDetalies>
            </Icons>
          </WhatWeDo>

          <WhatWeDo>
            <Domain>Testing</Domain>
            <Icons>
              <IconDetalies><Icon><SiCypress /></Icon><IconName>Cypress</IconName></IconDetalies>
            </Icons>
          </WhatWeDo>
        </Right>
      </Container>
    </Section>
  );
};

export default who;
