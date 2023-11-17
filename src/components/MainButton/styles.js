import styled from "styled-components";

export const Container = styled.button`
  display: inline-flex;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 30px;
  border: 2px solid #89db7b;

  color: #1e1e1e;
  background: #89db7b;
  font-weight: 600;
  font-size: 20px;

  box-shadow: 4px 4px 30px 0px rgba(137, 219, 123, 0.5);

  position: relative;
  z-index: 10;

  > img {
    width: 15px;
    height: 15px;
  }
`;
