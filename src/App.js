import Home from './routes/home/home.components'
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/nav.component'
import Authentication from './routes/authentication/authentication.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}
export default App;
