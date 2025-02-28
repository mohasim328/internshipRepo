// App.jsx
import React, { useEffect, useState } from 'react';
import BeerCard from './BeeerCard';
import Header from './Header';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/beers/ale');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBeers(data);
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <>
      <Header/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Ales</h1>

        <div className='mx-auto flex justify-center items-center '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
        </div>
       
      </div>
    </>


  );
};

export default App;
