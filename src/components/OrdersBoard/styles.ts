import styled from "styled-components";

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1.5rem;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  button {
    height: 8rem;
    width: min(100%, 22rem);

    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666666;
    }
  }
`;
