import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 79px; */
  padding: 40px 130px;
  font-weight: 600;

  > li {
    margin-left: 30px;
  }

  > li:first-child {
    margin-right: 79px;
  }

  > li:last-child {
    display: flex;
    margin-left: 79px;
    padding: 10px 20px;
    gap: 15px;

    border-radius: 50px;
    border: 2px solid #89db7b;
  }
`;
