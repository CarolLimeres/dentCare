import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    margin-left: 130px;
  }

  > div .text-container {
    width: 620px;
    font-size: 54px;
    font-weight: 700;
    color: #1e1e1e;
  }

  .image-container {
    width: 596.855px;
    height: 622px;
    /* background: #ffc170 -226.516px 0px / 156.446% 100% no-repeat; */
    border-radius: 100px 100px 0 0;
  }

  .mainButton {
    margin-top: 69px;
    position: relative;
    z-index: 1;
  }

  .svg-button {
    width: 113px;
    height: 113px;
    position: absolute;
    bottom: 52px;
    left: 260px;
    z-index: 0;
  }
`;
