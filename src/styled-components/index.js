import styled from "styled-components";

export const FormContainer = styled.form`
  @media only screen and (min-width: 860px) {
    width: 25%;
    height: 720px;
    background: white;
    box-shadow: 0px 9.600000381469727px 21.600000381469727px 0px #00000021;
  }

  @media only screen and (max-width: 859px) {
    width: 60%;
    height: 720px;
    background: white;
    box-shadow: 0px 9.600000381469727px 21.600000381469727px 0px #00000021;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: white;
    box-shadow: 0px 9.600000381469727px 21.600000381469727px 0px #00000021;
  }
`;
