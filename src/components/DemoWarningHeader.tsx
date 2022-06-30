import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerRoot: {
    backgroundColor: '#990000',
    color: 'white',
    padding: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
  headerText: {
    fontSize: '15px',
  }
});

export default function DemoWarningHeader() {
  const styles = useStyles();
  return (
    <div className={styles.headerRoot}>
      <span className={styles.headerText}><b>WARNING: </b>This site is a demo.</span>
    </div>
  );
}


