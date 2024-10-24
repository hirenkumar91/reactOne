"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetCard from '@/components/destination/PlanetCard';
import data from '@/data/galectica.json';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);

  const onAddOrRemovePlanet = (planet, index) => {
    setSelectedPlanets((prevState) => {
      const isAlreadySelected = prevState.some((p) => p.index === index);

      if (isAlreadySelected) {
        const newSelectedPlanets = prevState.filter((p) => p.index !== index);
        setNumberOfPlanets(newSelectedPlanets.length);
        return newSelectedPlanets;
      } else {
        const newSelectedPlanets = [...prevState, { ...planet, index }];
        setNumberOfPlanets(newSelectedPlanets.length);
        return newSelectedPlanets;
      }
    });
  };

  const onAddWishlistItem = (customPlanet) => {
    setSelectedPlanets((prevState) => [...prevState, customPlanet]);
    setNumberOfPlanets((prevState) => prevState + 1);
  };

  const removeFromWishlist = (index) => {
    setSelectedPlanets((prevState) => {
      const newSelectedPlanets = prevState.filter((planet) => planet.index !== index);
      setNumberOfPlanets(newSelectedPlanets.length);
      return newSelectedPlanets;
    });
  };
  

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className={styles.card}>
        <h2>Wishlist</h2>
{numberOfPlanets === 0 ? (
  <p>No planets in wishlist :(</p>
) : (
  <>
    <p>You have {numberOfPlanets} planet(s) in your wishlist:</p>
    <div className={styles.wishlistList}>
      {selectedPlanets.map((planet, index) => (
        <div key={index} className={styles.wishlistItem}>
          <img
            src={planet.thumbnail}
            alt={planet.name}
            className={styles.wishlistItemThumbnail}
          />
          <p>{planet.name}</p>
          <button onClick={() => removeFromWishlist(planet.index)}>Remove</button>
        </div>
      ))}
    </div>
  </>
)}

        </section>
        <section className={styles.card}>
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
        </section>
        <section className={styles.card}>
          <h2>Possible destinations</h2>
          {data.planetlist.map((planet, index) => {
            const isPlanetSelected = selectedPlanets.some((p) => p.index === index);

            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isPlanetSelected}
                onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet, index)}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
