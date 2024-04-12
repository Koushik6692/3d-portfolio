import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  /* background-color: red; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  /* margin: 20px 0px; */
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
`;

const Logo = styled.p`
  /* height: 50px; */
  font-size: 25px;
  font-weight: 800;
  color: orangered;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid orangered;
    /* opacity: 0.9; */
    border-radius: 2px;
    transform: translateY(10px);
    transition: all ease-in-out 0.5s;
  }
`;

const Icons = styled.div`
  display: flex;

  align-items: center;
  gap: 25px;
`;
const Icon = styled.a`
  width: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  margin-top: 2px;
  &:hover {
    opacity: 0.6;
    color: #ffdab9;
  }
`;
const Button = styled.a`
  width: 100px;
  padding: 10px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  scroll-behavior: smooth;
  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>SK</Logo>
          <List>
            <ListItem href="#home">Home</ListItem>
            <ListItem href="#about">About</ListItem>
            <ListItem href="#projects">Projects</ListItem>
            <ListItem href="#contact">Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon
            href="https://github.com/Koushik6692"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </Icon>
          <Icon
            href="https://www.linkedin.com/in/koushik6692"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </Icon>
          <Icon
            href="https://www.instagram.com/koushik.09?utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram />
          </Icon>
          <Button href="#contact">Contact</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
