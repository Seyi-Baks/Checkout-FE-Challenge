/* eslint-disable react-hooks/exhaustive-deps */
import { set, useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/form/Input";
import CommentsSection from "../components/feed/CommentSection";
import TextArea from "../components/form/TextArea";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Container, Grid, Row, Button, Col } from "../styles/Styles";

const initialState = {
  customerName: "",
  customerEmail: "",
  customerComment: "",
};

const CustomerFeedback = () => {
  const [state, setState] = useState(initialState);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/feedback", {
      ...state,
      customerRating: rating,
    });
    setFeedback(data);
  };

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/feedback", {
      ...state,
      customerRating: rating,
    });

    setState(initialState);
    setRating(0);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                    type="email"
                    name="customerEmail"
                    value={state.customerEmail}
                  />
                </Row>
                <Row>
                  <p>Product rating: </p>
                  <ReactStars
                    count={5}
                    onChange={handleRatingChange}
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
            <CommentsSection data={feedback} />
          </Container>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomerFeedback;
