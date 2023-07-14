import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'contexts/ThemeContext';

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"
// import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)
// root.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );
