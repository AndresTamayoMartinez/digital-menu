import { Routes, Route } from 'react-router-dom';
import MenuView from './components/views/Menu_View.jsx';

const App = () => {
  return(
    <Routes>
      <Route path={'/'} element={<h1>Hola Mundo</h1>} />
      <Route path={'/index.html'} element={<h1>Hola Mundo</h1>} />
      <Route path={'/inicio'} element={<h1>Hola Mundo</h1>} />
      <Route path={'/menu'} element={<MenuView />} />
    </Routes>
  );
}

export default App;