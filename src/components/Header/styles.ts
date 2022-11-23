import styled from "styled-components";

export const Container = styled.header`
  height: 12.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #d73035;
  box-shadow: 10px 10px 20px #c3c3c3, -10px -10px 20px #fdfdfd;
`;

export const Content = styled.div`
  width: min(100%, 76rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: #ffffff;

    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    h1 {
      font-weight: 600;
      font-size: 2rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
    }
  }
`;
