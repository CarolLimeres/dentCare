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

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover {
    /* vai dar uma escurecida no hover dos botões e dos links: */
  filter: brightness(0.9);
}
`;
