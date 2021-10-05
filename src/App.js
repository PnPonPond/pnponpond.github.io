import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`
  html, body { overflow-x: hidden }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  h1,h2,h3,h4,h5,h6,nav{
    font-family: 'Kanit', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
      </Router>
    </div>
  );
}

export default App;
