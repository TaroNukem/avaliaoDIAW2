import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Votacao from './pages/Votacao'
import Resultado from './pages/Resultado'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
return(
  <div>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/votacao" element={<Votacao />}/>
      <Route path="/resultado" element={<Resultado />}/>
    </Routes>
    </BrowserRouter>

    
  </div>
)
}

export default App
