import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Roshan Avinash</h1>
        <p className={styles.description}>
        I'm a data analyst and machine learning enthusiast with a bit of Android dev on the side. Swing by if you want to chat!
        </p>
        <a href='mailto:roshanavinash19@email.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='Spidey time !!'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
