import styled from "styled-components";
import FieldFeedback from "./FieldFeedback";

const TextAreaWrapper = styled.textarea`
  ${(props) => {
    const {
      theme: { input, defaultFontFamily },
    } = props;
    return `${input};${defaultFontFamily};`;
  }};
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
