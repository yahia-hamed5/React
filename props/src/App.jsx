import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Shoppage from './pages/shop/Shoppage'
import Productpage from './pages/product/Productpage'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<Shoppage/>} />
      <Route path='/product/:product_id' element={<Productpage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
