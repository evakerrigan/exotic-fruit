import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    // {/* </React.StrictMode> */}
  );
}