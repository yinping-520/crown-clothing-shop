import Home from './routes/home/home.components'
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/nav.component'
import SignIn from './routes/sign-in/sign-in.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
export default App;
