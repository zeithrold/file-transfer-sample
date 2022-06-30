import React from 'react';
import { createUseStyles } from 'react-jss';
import CodeInputBox from './CodeInputBox';
import FileUploadBox from './FileUploadBox';
// import HomeCardInteractArea from './HomeCardInteractArea';

const useStyles = createUseStyles({
  homeCardRoot: {
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'center',
    flexDirection: 'column',
    maxWidth: '960px',
    padding: '24px',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '#e6e6e6',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
  homeCardTitle: {
    fontSize: '3em',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifySelf: 'center'
  },
  homeCardTitleGradient: {
    background: 'linear-gradient(-45deg, #00c6fb 0%, #005bea 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  homeCardText: {
    alignSelf: 'center',
  }
});
export default function HomeCard() {
  const styles = useStyles();
  return (
    <div className={styles.homeCardRoot}>
      <span className={styles.homeCardTitle}>Transfer Your File, With <span className={styles.homeCardTitleGradient}>Ease</span></span>
      <p className={styles.homeCardText}>Introducing a new way to transfer file, now with File Transfer.</p>
      <h3 className={styles.homeCardText}>Want to get file?</h3>
      <CodeInputBox />
      <h3 className={styles.homeCardText}>Want to upload file?</h3>
      <FileUploadBox />
    </div>
  );
}

