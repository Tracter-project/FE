import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container.tsx';

export default function App() {
  return (
    <Container>
      <Header /> 
      <Outlet />
      <Footer /> 
    </Container>
  );
}

 