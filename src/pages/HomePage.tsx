import React from 'react';
import { createUseStyles } from 'react-jss';
import HomeCard from '../components/HomeCard';

const useStyles = createUseStyles({
  homePageRoot: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default function HomePage() {
  const styles = useStyles();
  return (
    <div className={styles.homePageRoot}>
      <HomeCard />
    </div>
  );
}
