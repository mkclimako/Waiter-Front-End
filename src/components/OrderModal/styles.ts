import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
  position: fixed;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.281rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: #fff;
  border-radius: 0.5rem;

  width: min(100%, 25rem);
  height: fit-content;

  padding: 2rem;
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    font-size: 1.5rem;
  }

  button {
    border: none;
    background: transparent;
    line-height: 0;
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  small {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 0.5rem;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  img {
    width: 3.5rem;
    height: 1.782rem;
    border-radius: 0.375rem;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;
      gap: 0.75rem;

      & + .item {
        margin-top: 1rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;

        display: block;
        min-width: 1.25rem;
      }

      .product-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  .primary {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background: #333333;
    border-radius: 3rem;
    border: 0;

    color: #fff;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .secondary {
    color: #d73035;
    border: 0;
    background: transparent;

    padding: 0.75rem 1.5rem;
  }
`;
