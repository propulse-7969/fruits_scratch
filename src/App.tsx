import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div id="app-root">
     {/* <Navbar /> */}
      <main id="content">
        <Outlet />
      </main>
    </div>
  )
}
//hello world