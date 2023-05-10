import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<HomePage />);
