import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Setup from "./Setup";

const SetupRender = () => {
  return (
    <>
      <Canvas
        camera={{
          zoom: 1,
        }}
      >
        <Stage environment="city" intensity={0.2}>
          <Setup />
        </Stage>

        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.75}
        />
      </Canvas>
    </>
  );
};

export default SetupRender;
