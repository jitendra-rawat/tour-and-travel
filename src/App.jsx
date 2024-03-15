import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import routes from './routes/lazyloading'
import { Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>

      <Header />

<Routes>

<Route path='/' element={<Home />}  index />

{routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<div>Loading... </div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}

</Routes>

<Footer />



    </Router>
  )
}

export default App