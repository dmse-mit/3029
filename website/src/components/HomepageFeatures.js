import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Catchphrase I',
    Svg: require('../../static/img/lj_plot.svg').default,
    description: (
      <>
        In 3.029 we will..
      </>
    ),
  },
  {
    title: 'Catchphrase II',
    Svg: require('../../static/img/compression_waves_plot.svg').default,
    description: (
      <>
        In 3.029 we will..
      </>
    ),
  },
  {
    title: 'Catchphrase III',
    Svg: require('../../static/img/dislocations_plot.svg').default,
    description: (
      <>
        In 3.029 we will..
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
