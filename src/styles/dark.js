import { createGlobalStyle } from 'styled-components';

const darkThemeBlack = 'hsla(0, 0%, 9%, 1)';
const darkThemeWhite = 'hsla(0, 0%, 95%, 1)';

export default createGlobalStyle`

body {
    background-color: ${darkThemeBlack};
    color: ${darkThemeWhite};
}
`