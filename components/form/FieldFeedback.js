import styled from "styled-components";

export const FieldError = styled.div`
  color: red;
  font-size: 12px;
`;

const FormDescription = styled.div``;

const NotificationMessage = styled.div`
  ${(props) => {
    const {
      type,
      boxShadow,
      theme: {
        borderRadius,
        padding,
        notificationStyles,
        boxShadowMenu,
        border,
      },
      mb,
    } = props;

    return css`
      background-color: #fff;
      box-sizing: border-box;
      margin-bottom: 6px;
      width: 100%;
      position: relative;
      z-index: 9;
      ${padding};
      ${borderRadius};
      ${border};
      ${boxShadow && boxShadowMenu};

      &:last-child {
        ${mb ? "" : `margin-bottom: 0`}
      }

      & > button {
        position: absolute;
        top: 2px;
        right: -2px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: inherit;
      }

      & > p {
        margin: 0 0 3px;
        display: block;

        &:last-child {
          margin-bottom: 0;
        }
      }

      $h4 {
        margin-top: 0;
        margin-bottom: 0;
      }
      ${marginCSS};
      ${notificationStyles[type] || ``}
    `;
  }}
`;

const FieldFeedback = ({ error, description, descriptionId }) => {
  return (
    <>
      {description && (
        <FormDescription id={descriptionId}>{description}</FormDescription>
      )}
      {error && <NotificationMessage type="error">{error}</NotificationMessage>}
    </>
  );
};

export default FieldFeedback;
