import NavBar from './components/Navbar';
import Temp from './components/Temp';
import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <RouterProvider router={router} />
    </>
  )


}

export default App;
