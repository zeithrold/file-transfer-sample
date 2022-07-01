import React from 'react';
import { createUseStyles } from 'react-jss';
import { BsFileEarmarkPptFill } from 'react-icons/bs';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

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
  cardDownloadButton: {
    width: '100%',
    margin: '8px 0',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1.5em',
    background: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '3px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
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
  cardDownloadButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardFileExpireHint: {
    marginTop: '4px',
    fontSize: '0.5em',
    alignSelf: 'center',
  }
});

export default function FileDownloadCard() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Card>
      <div className={styles.cardFileDetail}>
        <div className={styles.cardFileIcon}>
          <BsFileEarmarkPptFill size='48px' color='white' />
        </div>
        <h2>FileTransferPreview.pptx</h2>
        <span>File size: 1.5 MB</span>
        <div className={styles.cardDownloadButton} onClick={() => { navigate('/') }}>
          <span className={styles.cardDownloadButtonText}>Download File</span>
          <span className={styles.cardFileExpireHint}>Expires in 2 hours</span>
        </div>
      </div>
    </Card>
  );
}
