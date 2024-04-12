import React, { useRef, useState } from "react";
import styled from "styled-components";
// import MapChart from "./MapChart";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ebe6e6;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ebe6e6;
`;
const Button = styled.button`
  background-color: orangered;
  color: white;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 20px;
  &:disabled {
    opacity: 0.5;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();

  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await emailjs
      .sendForm("service_q4yghh7", "template_mpdd2rs", ref.current, {
        publicKey: "EaSPhWQOe8xTvE5kj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
    ref.current.reset();
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title> Contact</Title>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Email" name="email" required />
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
              required
            />
            <Button disabled={loading}>
              {loading ? "sending..." : "send"}
            </Button>
            {success &&
              "Your message as been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>{/* <MapChart /> */}</Right>
      </Container>
    </Section>
  );
};

export default Contact;
