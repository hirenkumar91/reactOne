"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const API_KEY = 'UiGqRvQgXG8OPOgXi4iFq9jJdXHP4Cgiuufb0H0d';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto =({date,src,roverName}) => {
  return(
    <div>
      <p>Date {date}</p>
    <p> {roverName}</p>
    <img className={styles.nasaPicOfTheDayImg} src={src}/>
    </div>
  )
}

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto);
        const roverPhotoData = await roverPhotoResponse.json();
        setRoverPhoto(roverPhotoData);
      } catch (error) {
        console.error('Failed to fetch rover photos:', error);
      }
    };

    const fetchDailyImage = async () => {
      try {
        const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
        const dailyImgData = await dailyImgResponse.json();
        setDailyImg(dailyImgData);
        console.log(dailyImgData)
      } catch (error) {
        console.error('Failed to fetch daily image:', error);
      }
    };

    fetchRoverPhotos();
    fetchDailyImage();

  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {dailyImg.title ? (
            <>
              <h3>{dailyImg.title}</h3>
              <img src={dailyImg.url} alt={dailyImg.title } className={styles.nasaPicOfTheDayImg}/>
              <p>{dailyImg.explanation}</p>
            </>
          ) : (
            <p>Loading Astronomy Picture of the Day...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo, index) => (
              <RoverPhoto
                key={index}
                date={photo.earth_date}
                src={photo.img_src}
                roverName={photo.rover.name}
              />
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
