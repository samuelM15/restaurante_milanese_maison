import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './componentes/inicio';
import Footer from './componentes/Footer';
import SobreNos from './componentes/Sobre_Nos';
import Contato from './componentes/Contatos';
import Menu from './componentes/Menu';
import './App.css';
//romulo
import ProductForm from './componentes/Pedidos';


function App() {


  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre_Nos" element={<SobreNos/>}/>
          <Route path="/Contatos" element={<Contato/>}/>
          <Route path="/Pedidos" element={<ProductForm/>}/>
          <Route path="/Menu" element={<Menu/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
