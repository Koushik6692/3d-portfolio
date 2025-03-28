import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./app.css";
import ParticlesContainer from "./components/Particles";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* background-image: url("./img/bg1.jpg");*/
  background-repeat: no-repeat;
  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <ParticlesContainer id="particles" />
      <Hero />
      <Who />
      <Works />

      <Contact />
    </Container>
  );
}

export default App;
