import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Tags from './components/Tags';
import Footer from './components/Footer';
import MyToDoList from './components/MyToDoList';
import LoginForm from './components/LoginForm/LoginForm';
import { AuthContextProvider } from './store/AuthorizationContextProvider';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Container />
                <Footer />
              </>
            }
          />
          <Route
            path="/tags"
            element={
              <>
                <Header />
                <Tags />
                <Footer />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <Header />
                <MyToDoList />
                <Footer />
              </>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
