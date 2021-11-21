import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard/dashboard'


const App =() => {
 return(
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element = { < LandingPage />} />
            <Route exact path='/dashboard' element= {<Dashboard />}/>
        </Routes>
     </BrowserRouter>
 )
}

export default App;
