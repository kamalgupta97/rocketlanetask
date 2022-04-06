import styled from "styled-components";

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
      : "#000000"};
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
  width: 50%;
  height: 40px;
`;

export const Loader = styled.div`
  position: sticky;
  border: 5px solid #f3f3f3 !important;
  border-radius: 50% !important;
  border-top: 5px solid #0f62fe !important;
  width: 50px !important;
  height: 50px !important;
  animation: spin 2s linear infinite;
  margin: 150px !important;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
