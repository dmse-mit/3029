import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Materials Modeling',
    Svg: require('../../static/img/lj_plot.svg').default,
    description: (
      <>
        In 3.029 we will introduce common mathematical models used to describe the behavior of everyday materials.
      </>
    ),
  },
  {
    title: 'Interactive Exploration',
    Svg: require('../../static/img/surface_energy_plot.svg').default,
    description: (
      <>
        We will use interactive notebook environments to explore the rich landscape these models outline and help us understand the physics.
      </>
    ),
  },
  {
    title: 'Computational Thinking',
    Svg: require('../../static/img/strange_attractor.svg').default,
    description: (
      <>
        In addition to learning materials science, we will learn skills for scientific inquiry, visualization, and communication.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
