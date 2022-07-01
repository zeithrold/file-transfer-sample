import React from 'react';
import { createUseStyles } from 'react-jss';
import FileDownloadCard from '../components/FileDownloadCard';
// import FileUploadCard from '../components/FileUploadCard';

const useStyles = createUseStyles({
  uploadPageRoot: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default function FileDownloadPage() {
  const styles = useStyles();
  return (
    <div className={styles.uploadPageRoot}>
      <FileDownloadCard />
    </div>
  )
}
