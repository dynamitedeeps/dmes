import logo from './logo.svg';
import './App.css';
import Square from './Square';
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';


function App() {
  /*
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {

    if (board[index] || calculateWinner(board)) return;
    
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(board);
  const status = winner
    ? `winner: ${winner}`
    : `Next player: ${isXNext} ? 'X' : 'O'}`;
  
  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => handleClick(index)} />
  }
  */
  return (
    <>
     {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter> */}
    <div className='App'>
      <BrowserRouter>
        <Header /> {/* Navigation bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}
/*
  function calculateWinner(board){
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let line of winningLines){
      const [a,b,c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
    return null;
  }
*/
export default App;