import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css';
document.querySelector('img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]').style.display = 'none';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
 