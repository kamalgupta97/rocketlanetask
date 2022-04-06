import styled from "styled-components";
export const InputSection = styled.div`
  width: 100%;
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const InputBox = styled.input`
  ::placeholder {
    color: #cecece;
  }
  border: none;
  background: #f4f4f4;
  height: 40px;
  border-bottom: 2px solid #8d8d8d;
  border-radius: 2px;
  font-size: 14px;
  padding-left: 10px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16%;
  width: 97%;
`;

export const Label = styled.label`
  &:before {
    content: "*";
    color: red;
  }
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.32%;
  font-weight: 400;
`;

export const InputContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
`;

export const LeftInput = styled.div`
  width: 100%;
`;
export const RightInput = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const BlockContainer = styled.div`
  width: 100%;
`;
