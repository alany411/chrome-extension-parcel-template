import './tailwind.css';

import { createRoot } from 'react-dom/client';

function PopUp() {
  return <div className='w-96 p-4'>PopUp</div>;
}

const mountNode = document.getElementById('popup') as Element;
const root = createRoot(mountNode);
root.render(<PopUp />);
