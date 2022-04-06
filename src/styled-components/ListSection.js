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
