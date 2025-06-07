import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Stepper from './components/Stepper/Stepper'
import steps from './components/Stepper/steps'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Stepper steps={steps} initialStep={2} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App