import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div className='md:w-4/5 mx-auto' >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
