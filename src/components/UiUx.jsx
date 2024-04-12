import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 105px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
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
const UiUx = () => {
  return (
    <>
      <Canvas camera={{ zoom: 1.5, position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Certainly! A modern React website combines sleek design, smooth
        animations, and responsive layouts. It leverages React’s component-based
        architecture to create an engaging user experience.
        <div>
          <Link href="https://ui-using-react.vercel.app/"> Live Demo</Link>
        </div>
      </Desc>
    </>
  );
};

export default UiUx;
