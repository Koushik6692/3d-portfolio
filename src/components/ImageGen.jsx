import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Robot from "./Robot";
const Desc = styled.div`
  width: 200px;
  height: 120px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    left: 100px;
    top: 0%;
    bottom: 0;
    margin: auto;
  }
`;

const ImageGen = () => {
  return (
    <>
      <Canvas camera={{ zoom: 2 }}>
        <Suspense fallback={null}>
          <Robot position={[-0.3, -1, -1]} rotation={[0.25, 1.5, 0]} />
          <OrbitControls
            enableZoom={false}
            rotation={"left"}
            autoRotate
            autoRotateSpeed={-0.5}
          />
        </Suspense>
      </Canvas>
      <Desc>
        AI image generator website is a creative platform where users can input
        text descriptions, and the AI transforms them into captivating visual
        artworks, allowing users to bring their ideas to life through stunning
        images.
      </Desc>
    </>
  );
};

export default ImageGen;
