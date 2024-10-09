// src/components/MainContent.js
import React from 'react';
import Chart from './Chart';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="stats">
        <h2>Solana Projects Overview</h2>
        <Chart />
      </section>
      <section className="projects">
        <h2>Top Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
