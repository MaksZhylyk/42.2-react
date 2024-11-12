import React from 'react';
import ProfileCard from './components/ProfileCards.js';

function App(){
  return(
    <div className="App">
      <h1>Профили пользователей</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <ProfileCard 
        avatar="https://imgcdn.stablediffusionweb.com/2024/5/13/d4b0fccc-2439-476e-9747-b10f5e818243.jpg"
        name='Артур Пирожков'
        occupation="Team Leader"
        hobbies="Программирование, ин.яз"
        />
        <ProfileCard
        avatar="https://imgcdn.stablediffusionweb.com/2024/5/13/d4b0fccc-2439-476e-9747-b10f5e818243.jpg"
        name='Сергей Крамник'
        occupation="Junior Developer"
        hobbies="Программирование, шахматы"
        />
        <ProfileCard
        avatar="https://imgcdn.stablediffusionweb.com/2024/5/13/d4b0fccc-2439-476e-9747-b10f5e818243.jpg"
        name='Александр де Клаус'
        occupation="Delivery"
        hobbies="Доставка подарков"
        />
      </div>
    </div>
  );
}

export default App;


