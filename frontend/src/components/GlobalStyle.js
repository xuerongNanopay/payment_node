import { Global, css } from "@emotion/react";

const GlobalStyle = (props) => {
  return (
    <Global
      {...props}
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          color: red;
        }

        body {
          margin: 0;
        }
      `}
    />
  )
}

export default GlobalStyle;