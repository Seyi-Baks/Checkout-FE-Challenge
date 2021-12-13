import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/form/Input";
import Comment from "../components/feed/Comment";
import TextArea from "../components/form/TextArea";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Chart from "chart.js/auto";

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 20px 20px;
  background-color: #f5f5f5;
  margin: 25px auto;
`;

const Header = styled.h1`
  color: blue;
  font-family: arial;
  &:after {
    content: "**";
  }
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#0099cc" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 100%;
  font-size: 1em;
  margin-top: 10px;
  padding: 1em 1em;
  border: 2px solid #0099cc;
  border-radius: 3px;
`;

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none`)}
`;

const CustomerFeedback = () => {
  const [rating, setRating] = useState(0); // initial rating value
  const { register, handleSubmit, errors, reset, handleChange, handleBlur } =
    useForm();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <Container>
        <Grid>
          <Row>
            <Col size={2}>
              <Row>
                <Input
                  required
                  placeholder={"Name"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={""}
                  id="customerName"
                  type="text"
                  name={"customerName"}
                />
              </Row>
              <Row>
                <Input
                  required
                  placeholder={"Email"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={""}
                  id="customerEmail"
                  type="text"
                  name={"customerEmail"}
                />
              </Row>
              <Row>
                <p>Product rating: </p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={40}
                  activeColor="#ffd700"
                />
              </Row>
              <Row>
                <TextArea
                  required
                  placeholder={"Comment"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={""}
                  id="customerComment"
                  rows={10}
                  name={"customerComment"}
                />
              </Row>
              <Button primary>Submit </Button>
            </Col>
            <Col size={2}></Col>
          </Row>
          <Container>
            <Comment />
            <Comment />
            <Comment />
          </Container>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomerFeedback;
