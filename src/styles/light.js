import { createGlobalStyle } from 'styled-components';

const lightThemeBlack = 'hsla(0, 0%, 0%, 1)';
const lightThemeWhite = 'hsla(0, 0%, 90%, 1)';

export default createGlobalStyle`

body {
    background-color: ${lightThemeWhite};
    color: ${lightThemeBlack};
}
`