import Home from './routes/home/home.components'
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/nav.component'
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'
import Checkout from './components/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
export default App;
