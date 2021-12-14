import styled from "styled-components";

export const ChildContainer = styled.div`
  display: flex;
`;

export const SmallFont = styled.p`
  font-size: 10pt;
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 20px 20px;
  background-color: #f5f5f5;
  margin: 25px auto;
  border-radius: 5px;
`;

export const CommentContainer = styled.div``;

export const Button = styled.button`
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

export const FieldError = styled.div`
  color: red;
  font-size: 12px;
`;

export const FormDescription = styled.div``;

export const InputWrapper = styled.input`
  font-size: 12px;
  padding: 20px;
  margin-bottom: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  width: 100%;
  display: block;
  ::placeholder {
    color: black;
  }
`;

export const TextAreaWrapper = styled.textarea`
  font-size: 12px;
  padding: 20px;
  background: white;
  border: none;
  margin: 10px 0;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 3px;
  width: 100%;
  display: block;
  ::placeholder {
    color: black;
  }
`;
