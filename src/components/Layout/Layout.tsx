import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BigDrinkCard from '../BigDrinkCard/BigDrinkCard'
import Header from '../Header/Header'
import StartPage from '../../pages/Startpage'
import AboutPage from '../../pages/AboutPage'
import ErrorPage from '../../pages/ErrorPage'
import Footer from '../Footer/Footer'
import BoozePage from '../../pages/BoozePage'

function Layout() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route
              path="alcohol/:booze"
              element={<BoozePage drinks={[]}/>}
            />
            <Route path="drink/*" element={<BigDrinkCard />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default Layout
