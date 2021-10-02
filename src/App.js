import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Kanit', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
