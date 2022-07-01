import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ZeithroldProvider from './helpers/ZeithroldProvider';
import AccountDetailPage from './pages/AccountDetailPage';
import DefaultPage from './pages/DefaultPage';
import FileDownloadPage from './pages/FileDownloadPage';
import FileUploadPage from './pages/FileUploadPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <ZeithroldProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<AccountDetailPage />} />
            <Route path="upload" element={<FileUploadPage />} />
            <Route path="download" element={<FileDownloadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ZeithroldProvider>
  );
}
