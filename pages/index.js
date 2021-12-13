import { useForm } from "react-hook-form";
import styled from "styled-components";

const Header = styled.h1`
  color: blue;
  font-family: arial;
  &:after {
    content: "**";
  }
`;

export default function CustomerFeedback() {
  const { register, handleSubmit, errors, reset } = useForm();
  return (
    <div>
      <Header>The Customer Feedback Page</Header>
    </div>
  );
}
