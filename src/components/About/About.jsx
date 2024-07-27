import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/dataIcon.png')} alt='Data icon' />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                  I have skills in analyzing data to derive insights and inform decision-making. 
                My expertise includes working with large datasets, performing statistical analyses, 
                and creating visualizations to communicate results effectively.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/mlIcon.png')} alt='Machine Learning icon' />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Specialist</h3>
              <p>
                  I specialize in developing machine learning models and algorithms. 
                I am proficient in using Python and libraries such as TensorFlow, Keras, and Scikit-Learn to build predictive models. 
                My work involves feature engineering, model training, evaluation, and deployment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/androidIcon.png')} alt='Android icon' />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                  I have experience developing efficient and fast Android applications. 
                Although I have less experience in this area compared to data analysis and machine learning, 
                I have worked on several Android projects and have a good understanding of the Android development ecosystem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
