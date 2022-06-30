import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  boxRoot: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: '12px',
    // marginBottom: '12px',
    fontSize: '1.25em',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: 'black',
    borderWidth: '3px'
  }
});

export default function CodeInputBox() {
  const styles = useStyles();
  const [code, setCode] = React.useState('');
  return (
    <input placeholder="Input File Code..." className={styles.boxRoot} onChange={
      (e) => {
        setCode(e.target.value);
      }
    }>
    </input>
  );
}
