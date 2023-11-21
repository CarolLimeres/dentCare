import styled from "styled-components";

export const Container = styled.div`
  max-width: 266px;
  height: 333px;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);

  flex: 1;

  .text-image-container {
    margin-left: 19px;
  }

  img {
    margin: 35px 0 20px 0;
    width: 85px;
    height: 85px;
  }

  .title-container {
    margin-bottom: 20px;

    color: #1e1e1e;

    font-size: 20px;

    font-weight: 700;
  }

  .text-container {
    width: 233px;
  }
`;
