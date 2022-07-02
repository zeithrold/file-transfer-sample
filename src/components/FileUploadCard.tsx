import React from 'react';
import { createUseStyles } from 'react-jss';
import { BsFileEarmarkPptFill } from 'react-icons/bs';
import Card from './Card';

const useStyles = createUseStyles({
  cardFileDetail: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardFileIcon: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#b7472a',
  },
  cardSelect: {
    width: '100%',
    margin: '18px 0',
    fontSize: '1.25em',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px',
    borderRadius: '8px',
    borderColor: 'black',
    borderWidth: '3px',
  },
  cardUploadButton: {
    width: '100%',
    margin: '8px 0',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1.5em',
    background: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '3px',
    userSelect: 'none',
    transition: 'ease',
    transitionDuration: '.15s',
    '&:hover': {
      background: 'white',
      color: 'black',
      borderColor: 'black',
      transition: 'ease',
      transitionDuration: '.15s',
    },
    '&:active': {
      background: '#eeeeee',
      transition: 'ease',
      transitionDuration: '.15s',
    }
  },
  cardUploadButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardDPCostHint: {
    fontSize: '0.75em',
    textAlign: 'center',
    color: 'gray'
  },
  cardUploadSuccessTitle: {
    fontSize: '1.25em',
    fontWeight: 'bold',
  },
  cardUploadSuccessDescription: {
    marginTop: '24px',
    fontSize: '0.75em'
  },
  cardFileCode: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2em',
    margin: '8px 0',
    padding: '10px',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: 'black',
    borderWidth: '3px',
  },
  cardFileCodeHint: {
    marginTop: '4px',
    fontSize: '0.75em'
  }
});

export default function FileUploadCard() {
  const styles = useStyles();
  const [uploaded, setUploaded] = React.useState(false);
  const fileCodeRef = React.createRef<HTMLInputElement>();
  return (
    <Card>
      <div className={styles.cardFileDetail}>
        <div className={styles.cardFileIcon}>
          <BsFileEarmarkPptFill size='48px' color='white' />
        </div>
        <h2>FileTransferPreview.pptx</h2>
        <span>File size: 1.5 MB</span>
        {
          uploaded ?
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '16px 0',
              }}
            >
              <span className={styles.cardUploadSuccessTitle}>Successfully uploaded your file!</span>
              <span className={styles.cardUploadSuccessDescription}>Your File Code is: </span>
              <input
                value='176-0005'
                className={styles.cardFileCode}
                readOnly
                ref={fileCodeRef}
                onMouseOver={() => {
                  fileCodeRef.current ? fileCodeRef.current.select() : console.error('fileCodeRef is null');
                }}
              ></input>
              <span className={styles.cardFileCodeHint}>Save your File Code, or capture this screen.</span>
            </div> :
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <select className={styles.cardSelect} defaultValue='6h'>
                <option value='1h'>Store by 1 hour</option>
                <option value='6h'>Store by 6 hours</option>
                <option value='12h'>Store by 12 hours</option>
                <option value='1d'>Store by a day</option>
                <option value='7d'>Store by 7 days</option>
              </select>
              <span className={styles.cardDPCostHint}>Data Point Cost: 1.0 DP, You have 1.7 DP Left.</span>
              <div className={styles.cardUploadButton} onClick={() => { setUploaded(true) }}>
                <span className={styles.cardUploadButtonText}>Upload File</span>
              </div>
            </div>

        }
      </div>
    </Card>
  );
}
