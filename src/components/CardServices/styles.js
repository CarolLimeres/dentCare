import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  max-width: 375px;
  height: 300px;

  border-radius: 20px;

  box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);

  /* ver mais sobre isso: */
  /* p todos os cartões crescerem igualmente no máximo de tamanho que der */
  flex: 1;

  .text-button-image-container {
    display: flex;
  }

  &.pink {
    background-color: #fee6dc;
  }

  &.yellow {
    background-color: #feefc1;
  }

  &.green {
    background-color: #dff7ea;
  }

  img {
    width: 200px;
    height: 250px;
  }
`;
