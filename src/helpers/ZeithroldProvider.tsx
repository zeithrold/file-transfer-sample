import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: [
        'Arial',
        'Microsoft YaHei',
        'Tanoma',
        'Heiti SC',
        'Helvetica',
        'PingFang SC',
        'sans-serif',
      ].join(','),
      margin: '0px',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    }
  }
});

export default function ZeithroldProvider({ children }) {
  useStyles();
  return (
    <>
      {children}
    </>
  )
}

