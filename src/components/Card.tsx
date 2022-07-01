import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  cardRoot: {
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'center',
    flexDirection: 'column',
    maxWidth: '480px',
    padding: '24px',
    marginTop: '24px',
    marginBottom: '24px',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '#e6e6e6',
    width: '100%',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
});

export default function Card({ children }) {
  const styles = useStyle();
  return (
    <div className={styles.cardRoot}>
      { children }
    </div>
  );
}
