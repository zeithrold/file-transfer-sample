import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  navBarRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    border: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: '#e6e6e6',
  },
  navBarTitleText: {
    composes: ['$navBarLink'],
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navBarAccountText: {
    composes: ['$navBarLink']
  },
  navBarLink: {
    '&:link': {
      color: 'black',
      textDecoration: 'none',
    },
    '&:visited': {
      color: 'black',
      textDecoration: 'none',
    },
    '&:hover': {
      color: 'black',
      textDecoration: 'underline',
    },
    '&:active': {
      color: 'gray',
      textDecoration: 'underline',
    }
  }
});

export default function NavigationBar() {
  const styles = useStyles();
  return (
    <div className={styles.navBarRoot}>
      <Link className={styles.navBarTitleText} to='/'>File Transfer</Link>
      <Link className={styles.navBarAccountText} to='/account'>Hi, Zeithrold!</Link>
    </div>
  )
}
