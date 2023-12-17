import ReactDOM from 'react-dom/client';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter initialValue={0}/>);