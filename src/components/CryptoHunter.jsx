import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Crypto from "./Crrypto";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const Link = styled.a`
  color: blue;
  text-align: center;
`;

const CryptoHunter = () => {
  return (
    <>
      <Canvas camera={{ scale: 0.5, zoom: 0.5 }}>
        <Stage environment="city" intensity={0.2}>
          <Crypto />
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
        A React.js web application fetching real-time data from cryptocurrency
        APIs, providing users with up-to-date prices and details of various
        cryptocurrencies.
        <Link href="https://crypto-hunter-seven.vercel.app/"> Live Demo</Link>
      </Desc>
    </>
  );
};

export default CryptoHunter;
