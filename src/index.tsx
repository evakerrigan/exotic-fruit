import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";
import { TempAny } from "./types";

const root: TempAny = ReactDOM.createRoot(document.getElementById('root') as TempAny);
root.render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // {/* </React.StrictMode> */}
);

