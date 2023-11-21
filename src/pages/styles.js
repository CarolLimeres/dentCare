import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
  /* sempre colocar esse max-width e o width p ser a maior largura possível da pág
  e configurar o root
  */
  max-width: 1200px;
  width: 100%;

  .cards-home {
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
    justify-content: center;
    margin-bottom: 100px;
  }

  .first-second-card {
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
  }

  .third-fourth-card {
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
  }

  .services-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .services-satisfy {
    color: #89db7b;
    font-size: 20px;
    font-weight: 700;
  }

  .services-best {
    color: #1e1e1e;
    font-size: 36px;
    font-weight: 600;

    margin-bottom: 70px;
  }

  .cardservices-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 26px;
  }
`;
