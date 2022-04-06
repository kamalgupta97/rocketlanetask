import styled from "styled-components";
export const ButtonSection = styled.div`
  width: 100%;
  height: 72px;
  border-top: 1px solid #cecece;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  gap: 10%;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.primary && props.disabled
      ? "#C6C6C6"
      : props.primary
      ? "#0F62FE"
      : "white"};
  color: ${(props) =>
    props.primary && props.disabled
      ? "#8D8D8D"
      : props.primary
      ? "white"
      : "#161616"};
  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: ${(props) =>
    props.primary && props.disabled
      ? "2px solid #C6C6C6"
      : props.primary
      ? "2px solid #0F62FE"
      : "2px solid #C6C6C6"};

  border-radius: 3px;
  width: 45%;
  height: 40px;
`;

export const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  color: black;
  border: 2px solid red;
`;
