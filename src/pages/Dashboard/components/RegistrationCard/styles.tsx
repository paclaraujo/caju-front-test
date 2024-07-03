import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 4px solid #fff;
  margin: 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  h3,
  p {
    margin: 0;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Actions = styled.div<{ status: any }>`
  margin-top: 8px;
  display: flex;
  justify-content: ${({ status }) =>
    status === "APPROVED" ? "flex-end" : "space-between"};
  align-items: center;
  gap: 4px;

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 12px;
  }
`;
