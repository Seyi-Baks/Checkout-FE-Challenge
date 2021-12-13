import styled from "styled-components";

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
    type,
    min,
    readOnly,
    value,
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
        min={min}
        type={type || "text"}
        onChange={handleChange}
        aria-describedby={descriptionId}
        value={value}
      />
    </>
  );
};

export default Input;
