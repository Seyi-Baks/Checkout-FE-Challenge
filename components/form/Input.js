const { default: styled } = require("styled-components");
const { default: FieldFeedback } = require("./FieldFeedback");

const InputWrapper = styled.input`
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

const Input = (props) => {
  const {
    placeholder,
    name,
    id,
    disabled,
    handleChange,
    handleBlur,
    value,
    type,
    min,
    readOnly,
    description,
    error,
  } = props;

  const descriptionId = `${id}_description`;

  return (
    <>
      <InputWrapper
        placeholder={placeholder}
        id={id}
        readOnly={readOnly}
        name={name}
        disabled={disabled}
        value={value}
        min={min}
        type={type || "text"}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-describedby={descriptionId}
      />
      <FieldFeedback
        descriptionId={descriptionId}
        error={error}
        description={description}
      />
    </>
  );
};

export default Input;
