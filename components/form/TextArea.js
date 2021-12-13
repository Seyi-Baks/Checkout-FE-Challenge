import React from "react";
import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
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

const TextArea = React.forwardRef((props, ref) => {
  const { name, id, disabled, handleChange, rows, cols, placeholder, value } =
    props;

  const descriptionId = `${id}_description`;

  return (
    <>
      <TextAreaWrapper
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        rows={rows || 4}
        cols={cols}
      />
    </>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
