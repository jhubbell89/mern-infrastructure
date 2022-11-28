import { useState } from 'react';
import './App.css';
import AuthPage from '../authpage/AuthPage';
import NewOrderPage from '../neworderpage/NewOrderPage';
import OrderHistoryPage from '../orderhistorypage/OrderHistoryPage';
import {Routes, Route } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
  <main className="App">
    {user ? 
      <>
      <NavBar user={user} />
      <Routes>
        <Route path='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />
      </Routes> 
      </>
      : 
      <AuthPage setUser={setUser} />
      }
    </main>
  )
}
