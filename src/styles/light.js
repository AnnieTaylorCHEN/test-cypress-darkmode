import { createGlobalStyle } from 'styled-components';

const lightThemeBlack = 'hsla(0, 0%, 0%, 1)';
const lightThemeWhite = 'hsla(0, 0%, 98%, 1)';

export default createGlobalStyle`

body {
    background-color: ${lightThemeWhite};
    color: ${lightThemeBlack};
}

.bg {
    background: url(./dog.jpg) no-repeat center;
    width: 800px;
    height: 500px;
}
`