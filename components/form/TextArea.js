import React from "react";
import styled from "styled-components";
import { TextAreaWrapper } from "../../styles/Styles";

const TextArea = React.forwardRef((props, ref) => {
  const { name, id, disabled, handleChange, rows, cols, placeholder, value } =
    props;

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
