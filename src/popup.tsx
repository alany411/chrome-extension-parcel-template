import './tailwind.css';

import ReactDOM from 'react-dom';

function PopUp() {
  return <div className='w-96 p-4'>PopUp</div>;
}

const mountNode = document.getElementById('popup');
ReactDOM.render(<PopUp />, mountNode);
