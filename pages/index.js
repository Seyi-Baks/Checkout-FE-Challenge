import { set, useForm } from "react-hook-form";
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
  border-radius: 5px;
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

const initialState = {
  customerName: "",
  customerEmail: "",
  customerComment: "",
};

const CustomerFeedback = () => {
  const [state, setState] = useState(initialState);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [input]: value }));
  };

  return (
    <div>
      <Container>
        <Grid>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col size={2}>
                <Row>
                  <Input
                    placeholder={"Name"}
                    handleChange={handleChange}
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={state.customerName}
                  />
                </Row>
                <Row>
                  <Input
                    placeholder="Email"
                    handleChange={handleChange}
                    id="customerEmail"
                    type="text"
                    name="customerEmail"
                    value={state.customerEmail}
                  />
                </Row>
                <Row>
                  <p>Product rating: </p>
                  <ReactStars
                    count={5}
                    onChange={setRating}
                    size={40}
                    activeColor="#ffd700"
                  />
                </Row>
                <Row>
                  <TextArea
                    placeholder="Comment"
                    handleChange={handleChange}
                    id="customerComment"
                    rows={10}
                    name="customerComment"
                    value={state.customerComment}
                  />
                </Row>
                <Button primary type="submit">
                  Submit{" "}
                </Button>
              </Col>
              <Col size={2}></Col>
            </Row>
          </form>
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
