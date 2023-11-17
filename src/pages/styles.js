import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
  /* sempre colocar esse max-width e o width p ser a maior largura possível da pág
  e configurar o root
  */
  max-width: 1200px;
  width: 100%;

  .text-button-image-container {
    display: flex;
    position: relative;
  }

  .text-container {
    width: 667px;
    font-size: 54px;
    font-weight: 700;
    color: #1e1e1e;
  }

  .image-container {
    > img {
      width: 450px;
      height: 500px;
    }

    position: absolute;
    z-index: -10;
    right: 30px;
  }

  .button-wrapper {
    margin-top: 69px;
    position: relative;
  }

  .svg-button {
    bottom: -24px;
    left: 148px;

    position: absolute;

    > svg {
      width: 113px;
      height: 113px;
    }
  }
`;
