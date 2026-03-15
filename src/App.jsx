import './Css/App.css'
import ScrollToTop from './Components/ScrollToTop'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import {About} from './Components/About'
import Exp from './Components/Exp';
import Projects from './Components/Projects';
import { Tools } from './Components/Tools'
import { Contact } from './Components/Contact'
import {Footer} from './Components/Footer'
function App() {
    return(
        <div>
            <ScrollToTop ></ScrollToTop>
            <Navbar ></Navbar>
            <Home></Home>
            <About></About>
            <Exp />
            <Projects></Projects>
            <Tools/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
