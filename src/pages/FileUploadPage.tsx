import React from 'react';
import { createUseStyles } from 'react-jss';
import FileUploadCard from '../components/FileUploadCard';

const useStyles = createUseStyles({
  uploadPageRoot: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default function FileUploadPage() {
  const styles = useStyles();
  return (
    <div className={styles.uploadPageRoot}>
      <FileUploadCard />
    </div>
  )
}
