import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CloudCommonHeader from './components/CloudCommonHeader';
import NavigationBar from './components/NavigationBar';
import ZeithroldProvider from './helpers/ZeithroldProvider';
import AccountDetailPage from './pages/AccountDetailPage';
import DefaultPage from './pages/DefaultPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <ZeithroldProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<AccountDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ZeithroldProvider>
  );
}
