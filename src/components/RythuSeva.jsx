import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Farm from "./Farm";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 130px;
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

const RythuSeva = () => {
  return (
    <>
      <Canvas
        camera={{
          zoom: 1,
        }}
      >
        <Stage environment="city" intensity={0.2}>
          <Farm />
        </Stage>

        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.75}
        />
      </Canvas>
      <Desc>
        Utilized machine learning algorithms to suggest optimal crops based on
        soil, and climate data. Developed a userfriendly website for farmers to
        access recommendations, enhancing decision-making in agriculture.
      </Desc>
    </>
  );
};

export default RythuSeva;
