import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './components/Routes/Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/categories/categoriesSlice';
import Home from './components/Home/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <Home />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
