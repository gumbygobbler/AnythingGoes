import React from "react";

import FightGrid from '../components/FightGrid';
import FightCard from '../components/FightCard';

const fights = [
  {
    id: 1,
    image: '',
    name: 'Fight 1',
    text: 'Random Text for Fight 1'
  },
  {
    id: 2,
    image: '',
    name: 'Fight 2',
    text: 'Random Text for Fight 2'
  },
  {
    id: 3,
    image: '',
    name: 'Fight 3',
    text: 'Random Text for Fight 3'
  },
  {
    id: 4,
    image: '',
    name: 'Fight 4',
    text: 'Random Text for Fight 4'
  },
  {
    id: 5,
    image: '',
    name: 'Fight 5',
    text: 'Random Text for Fight 5'
  },
  {
    id: 6,
    image: '',
    name: 'Fight 6',
    text: 'Random Text for Fight 6'
  },
  {
    id: 7,
    image: '',
    name: 'Fight 7',
    text: 'Random Text for Fight 7'
  },
  {
    id: 8,
    image: '',
    name: 'Fight 8',
    text: 'Random Text for Fight 8'
  },
  {
    id: 9,
    image: '',
    name: 'Fight 9',
    text: 'Random Text for Fight 9'
  },
  {
    id: 10,
    image: '',
    name: 'Fight 10',
    text: 'Random Text for Fight 10'
  },
  {
    id: 11,
    image: '',
    name: 'Fight 11',
    text: 'Random Text for Fight 11'
  },
  {
    id: 12,
    image: '',
    name: 'Fight 12',
    text: 'Random Text for Fight 12'
  },
  {
    id: 13,
    image: '',
    name: 'Fight 13',
    text: 'Random Text for Fight 13'
  }
];


const Home = () => {
  return (
    <main>
      <h3>Home</h3>
      <hr />
      <h3>Your Fights</h3>
      <FightGrid colCount={4} xs={12} sm={6} md={4} lg={3}>
        {fights.length > 0 ? (
          fights.map((fight) => (
            <FightCard
              key={fight.id}
              id={fight.id}
              image={fight.image}
              name={fight.name}
              text={fight.text}
              link={fight.link}
            />
          ))
        ) : (
          <div>No Fights to See Here...</div>
        )}
      </FightGrid>
      <hr />
      <h3>Explore Other Fights</h3>
      <hr />
    </main>
  );
};

export default Home;
