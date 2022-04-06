import './tailwind.css';

import { createRoot } from 'react-dom/client';

function Options() {
  return <div>Options</div>;
}

const mountNode = document.getElementById('options') as Element;
const root = createRoot(mountNode);
root.render(<Options />);
