import React from 'react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <aside className="sidebar">
        <p>COMPONENTE DOS</p>
      </aside>
      <main className="main-content">
        <div className="cards-row">
          <Card title="TÍTULO">COMPONENTE TRES</Card>
          <Card title="TÍTULO">COMPONENTE TRES</Card>
          <Card title="TÍTULO">COMPONENTE TRES</Card>
        </div>
        <div className="component-uno">COMPONENTE UNO</div>
      </main>
    </div>
  );
};

export default Home;