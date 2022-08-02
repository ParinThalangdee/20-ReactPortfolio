import Navbar from './components/Navbar'
import CssBaseline from '@mui/material/CssBaseline'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {UseState} from 'react'

// const [pageState, setPageState] = UseState({
//   about: true,
//   work: false,
//   contact: false
// })

function App() {
  return (
  <>
    <CssBaseline />
    {/* <Navbar pageState={pageState} setPageState={setPageState} />
    {pageState.about? <About />: ''}
    {pageState.work? <Work />: ''}
    {pageState.contact? <Contact />: ''}
    {pageState.footer ? <Footer />: ''} */}
    <Navbar />
    <About />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
