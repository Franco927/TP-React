import { Container } from "react-bootstrap"
import Header from "./components/Header/Header"
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { Suspense } from "react"
import Loader from "./components/Loader/Loader"

function App() {

  return (
    <>
      <Router>

        <Header/>

          <Container style={{minHeight: '110vh', minWidth:'100%', padding:'o'}}>
            
            <Suspense fallback={<Loader/>}>
              <AppRoutes/>
            </Suspense>

          </Container>
           
        <Footer/>

      </Router>
    </>
  )
}

export default App
