import styled from "styled-components";
export const ListSection = styled.div`
  width: 100%;
  height: 356px;
  margin-bottom: 24px;
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

export const HeaderList = styled.div`
  margin: auto;
  width: 90%;
  height: 100px;
  display: flex;
  align-items: flex-end;
`;

export const TaskLists = styled.div`
  margin: auto;
  width: 100%;
  height: 256px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskList = styled.div`
  width: 100%;
  height: 64px;
  border-top: 1px solid #cecece;
`;

export const Taskcont = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
export const Taskcontenttop = styled.div`
  line-height: 0;
  & > div > p {
    font-weight: 500;
    font-size: 14px;
    color: #161616;
    font-style: normal;
  }
`;
export const Taskcontentbottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  & > span {
    font-size: 12px;
    color: #4c4c4c;
  }
`;

export const DeleteButton = styled.div`
  & > img {
    cursor: pointer;
  }
`;

export const TaskLeft = styled.div``;

export const TaskRight = styled.div``;
