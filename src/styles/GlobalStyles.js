import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  :root{
    --bg: ${({ theme }) => theme.colors.bgColor};
    --textColor: ${({ theme }) => theme.colors.textColor};
    --softBg: ${({ theme }) => theme.colors.softBgColor};
    --softTextColor: ${({ theme }) => theme.colors.softTextColor};
  };

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  body{
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: var(--bg);
    color: var(--textColor);
  };

  a{
    color: inherit;
    text-decoration: none;
  };

  .ql-container{
    font-size: 28px !important;
  };

  .quill > .ql-container > .ql-editor.ql-blank::before{
    color: #b3b3b1;
  };
`;

export default GlobalStyles;