import React from 'react';
import RecipeTile from '../components/RecipeTile';

function Home() {
  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center gap-10 bg-primary"
    >
      <h1 className="text-center">Home</h1>
      <RecipeTile imgSrc="https://bit.ly/2GJFu5W" imgAlt="Salade Caesar" />
      <RecipeTile imgSrc="https://bit.ly/2GJFu5W" imgAlt="Salade Caesar" />
      <RecipeTile imgSrc="https://bit.ly/2GJFu5W" imgAlt="Salade Caesar" />
    </div>
  );
}

export default Home;
