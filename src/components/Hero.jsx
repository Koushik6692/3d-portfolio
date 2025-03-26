import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { GoDash } from "react-icons/go";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  /* background-color: red; */
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    /* scroll-snap-align: center; */
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Span = styled.span`
  font-weight: bold;
  color: #ff7518;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.p`
  height: 5px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  color: #e2725b;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.a`
  background-color: orangered;
  text-decoration: none;
  text-align: center;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    scroll-snap-align: center;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>
            Hey, I'm <Span>KOUSHIK SARABU </Span>
          </Title>
          <WhatWeDo>
            <Line>
              <GoDash />
            </Line>
            <Subtitle>Full Stack developer | Software Engineer</Subtitle>
          </WhatWeDo>
          <Desc>
            Hello there! Thanks for stopping by. Explore my work, get inspired,
            and let’s create something amazing together!"
          </Desc>
          <Button href="#projects">Projects</Button>
        </Left>

        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 3, 7]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="orangered"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/aust.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
