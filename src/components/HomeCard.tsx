import React from 'react';
import { createUseStyles } from 'react-jss';
import Card from './Card';
import CodeInputBox from './CodeInputBox';
// import FileUploadBox from './FileUploadBox';
// import HomeCardInteractArea from './HomeCardInteractArea';

const useStyles = createUseStyles({
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
    marginTop: '24px',
    marginBottom: '6px',
  },
  homeCardDataPointText: {
    marginTop: '8px',
    fontSize: '0.8em',
    color: 'gray',
    alignSelf: 'center',
  }
});
export default function HomeCard() {
  const styles = useStyles();
  return (
    <Card>
      <span className={styles.homeCardTitle}>Transfer Your File, With <span className={styles.homeCardTitleGradient}>Ease</span></span>
      {/* <span className={styles.homeCardText}>Introducing a new way to transfer file, now with <b>File Transfer.</b></span> */}
      <h4 className={styles.homeCardText}>Input the file code to download, or double-click to upload file.</h4>
      <CodeInputBox />
      <span className={styles.homeCardDataPointText}>Your Data Point: <b>3.14 DP / 5.0 DP</b></span>
    </Card>
  );
}

