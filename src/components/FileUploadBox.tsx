import React from 'react';
import { createUseStyles } from 'react-jss';
import { CompoundButton } from '@fluentui/react/lib/Button';

const useStyles = createUseStyles({
  boxRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '12px',
    // marginBottom: '24px',
    padding: '12px',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: '8px',
    borderWidth: '3px',
    borderColor: '#262626',
    '&:hover': {
      backgroundColor: '#595959',
    },
    '&:active': {
      backgroundColor: 'black',
    }
  },
  boxText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '1.25em',
  }
});

export default function FileUploadBox() {
  const styles = useStyles();
  return (
    <button className={styles.boxRoot}>
      <span className={styles.boxText}>Upload your file</span>
    </button>
  );
}
