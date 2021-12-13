import styled from "styled-components";
import FieldFeedback from "./FieldFeedback";

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

const TextArea = (props) => {
  const {
    name,
    id,
    disabled,
    handleChange,
    value,
    rows,
    cols,
    placeholder,
    description,
    error,
  } = props;

  const descriptionId = `${id}_description`;

  return (
    <>
      <TextAreaWrapper
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        rows={rows || 4}
        cols={cols}
      />
      <FieldFeedback
        descriptionId={descriptionId}
        error={error}
        description={description}
      />
    </>
  );
};

export default TextArea;
