import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    /* box sizing border box p evitar q qnd, por ex, eu aplique um padding interno q isso influencie no tamanho total do elemento */
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

ul {
    list-style: none;
}
`;
