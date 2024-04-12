import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import House from "./House";
{
  /* <Canvas scale={0.5} camera={{ zoom: 0.5, near: 1, far: 1000 }}> */
}
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 140px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 80px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    left: 100px;
    top: 0%;
    bottom: 0;
    margin: auto;
  }
`;

const Link = styled.a`
  color: blue;
  text-align: center;
`;
const SkEstate = () => {
  return (
    <>
      <Canvas scale={0.5} camera={{ zoom: 0.5, near: 1, far: 1000 }}>
        <Stage environment="city" intensity={0.2}>
          <House />
        </Stage>

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.75}
        />
      </Canvas>
      <Desc>
        A real estate marketplace using the MERN stack, facilitating seamless
        property listings and user interactions. Implemented advanced features
        for property search, user authentication, and real-time updates,
        ensuring a dynamic and user-friendly platform
        <Link href="https://sk-estate.onrender.com/"> Live Demo</Link>
      </Desc>
    </>
  );
};

export default SkEstate;
