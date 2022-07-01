import React from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
  boxInput: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '12px',
    marginBottom: '12px',
    // marginBottom: '12px',
    fontSize: '1.5em',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: 'black',
    borderWidth: '3px',
  },
  boxText: {
    // marginTop: '12px',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  boxClick: {
    textDecorationLine: 'underline',
    color: 'black'
  }
});

export default function CodeInputBox() {
  const styles = useStyles();
  const [code, setCode] = React.useState('');
  const [filePath, setFilePath] = React.useState('');
  const fileRef = React.createRef<HTMLInputElement>();
  const navigate = useNavigate();
  return (
    <>
      <input
        placeholder="input or double-click"
        className={styles.boxInput}
        onChange={
        (e) => {
          setCode(e.target.value);
        }}
        onDoubleClick={() => {
          if (fileRef.current) {
            fileRef.current.click();
          } else {
            console.error('fileRef is null');
          }
        }}
      >
      </input>
      <span className={styles.boxText}>
        Or you can upload file by <a
          href='#'
          className={styles.boxClick}
          onClick={() => {
            fileRef.current ? fileRef.current.click() : console.error('fileRef is null')
          }}>
            click here
          </a>
          .
        </span>
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={(e) => {
          setFilePath(e.target.value);
          navigate(`/upload`);
        }}/>
    </>
  );
}
