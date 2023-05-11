import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Painting1 from './pages/paintings/Painting1';
import Painting2 from './pages/paintings/Painting2';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Router>
                <Painting1 /> 
                <Painting2 />
            </Router>);
