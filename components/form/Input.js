import styled from "styled-components";
import { InputWrapper } from "../../styles/Styles";

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
