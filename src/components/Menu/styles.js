import styled from "styled-components";

export const Container = styled.header`
  height: 115px;
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  > nav {
    display: flex;
    width: 100%;

    .nav-list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;

      .link-list {
        display: flex;
        color: #1e1e1e;
      }

      .link {
        padding: 10px 20px;
      }

      .link:visited {
        color: #1e1e1e;
      }

      .link:hover {
        background-color: #89db7b;
        transition: background-color 0.3s;
        border-radius: 30px;
      }

      .contact-button {
        border-radius: 50px;
        border: 2px solid #89db7b;
        padding: 15px 30px;
        display: flex;
        align-items: center;
        gap: 10px;

        img {
          height: 15px;
          width: 15px;
        }
      }
    }
  }
`;
