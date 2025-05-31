import { Routes, Route, useLocation } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import Home from './pages/Home'
import { SnackbarProvider } from './context/SnackbarContext'
import SnackbarGlobal from './components/alert/SnackbarGlobal'
import Header from './components/header/TopHeader'

function App() {
  const location = useLocation()
  const showHeader = location.pathname !== '/'

  return (
    <SnackbarProvider>
      <SnackbarGlobal />
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/form" element={<FormPage />} />
        <Route path="/listagem" element={<ListPage />} />
      </Routes>
    </SnackbarProvider>
  )
}

export default App
