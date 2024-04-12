import React, { useState } from "react";
import styled from "styled-components";
import SkEstate from "./SkEstate";
import CryptoHunter from "./CryptoHunter";
import UiUx from "./UiUx";
import ImageGen from "./ImageGen";
import RythuSeva from "./RythuSeva";
import SetupRender from "./SetupRender";
// import "./works.css";

const projectsData = [
  "AI image genrator",
  "SK Estate",
  "Crypto Hunter",
  "Rythu Seva",
  "React UI desgin",
];

const Section = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  position: relative;
  color: black;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  /* transition: all 2s ease; */
  /* z-index: 1; */

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: orangered;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    /* z-index: -1; */
  }

  &:hover {
    /* color: red; */
    &:after {
      animation: moveText 1s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: bold;
  color: orangered;
  text-align: center;
  font-size: 60x;
  /* width: 100%; */
`;

const Whole = styled.div`
  scroll-snap-align: center;
  /* display: flex; */
  /* flex-direction: column; */
  height: 100vh;
  /* width: 100vw; */
  justify-content: space-evenly;
  align-items: center;
`;

const Works = () => {
  const [work, setWork] = useState("");
  return (
    <Whole>
      <Title>Projects</Title>
      <Section id="projects">
        <Container>
          <Left>
            <List>
              {projectsData.map((item) => (
                <ListItem
                  className="listItem"
                  key={item}
                  text={item}
                  onClick={() => setWork(item)}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>
            {work === "SK Estate" ? (
              <SkEstate />
            ) : work === "Crypto Hunter" ? (
              <CryptoHunter />
            ) : work === "React UI desgin" ? (
              <UiUx />
            ) : work === "Rythu Seva" ? (
              <RythuSeva />
            ) : work == "AI image genrator" ? (
              <ImageGen />
            ) : (
              <SetupRender />
            )}
          </Right>
        </Container>
      </Section>
    </Whole>
  );
};

export default Works;
