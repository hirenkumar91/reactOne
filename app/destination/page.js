"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetCard from '@/components/destination/PlanetCard';
import data from '@/data/galectica.json'
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';


export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);

  const onAddOrRemovePlanet = (name, index) => {
    console.log(`You selected the following planet: ${name}, with the index of ${index}`);

    setSelectedPlanets((prevState) => {
      if (prevState.includes(index)) {
        // If the planet is already selected, remove it
        const newSelectedPlanets = prevState.filter((planetIndex) => planetIndex !== index);
        setNumberOfPlanets(newSelectedPlanets.length); // Update the number of selected planets
        return newSelectedPlanets;
      } else {
        // If the planet is not selected, add it
        const newSelectedPlanets = [...prevState, index];
        setNumberOfPlanets(newSelectedPlanets.length); // Update the number of selected planets
        return newSelectedPlanets;
      }
    });
  }

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className={styles.card}>
          <h2>Wishlist</h2>
          {numberOfPlanets === 0
            ? <p>No planets in wishlist :(</p>

            :
            <>
              <p>You have {numberOfPlanets} in your wishlist</p>
              <b>List coming soon after lesson 3!</b>
            </>
          }



          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>

        <section className={styles.card}>
          <h2>Possible destinations</h2>

          {data.planetlist.map((planet, index) => {
            const isPlanetSelected = selectedPlanets.includes(index);

            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isPlanetSelected}
                onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name, index)}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default Destinations;
