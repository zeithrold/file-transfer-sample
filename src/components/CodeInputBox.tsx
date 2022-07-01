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
  const isMobile = window.innerWidth < 768;
  const inputPlaceHolder = isMobile ? 'input-enter' : 'input-enter or double-click';
  const uploadText = isMobile ? 'Want to upload file? ' : 'Or you can upload file by ';
  return (
    <>
      <input
        placeholder={inputPlaceHolder}
        className={styles.boxInput}
        maxLength={12}
        value={code}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            navigate(`/download`);
          }
        }}
        onChange={
        (e) => {
          // First delete original '-'
          const tempCode = e.target.value.replace(/-/g, '');
          // Split tempCode by 4 digit from the right
          const length = tempCode.length;
          const groupAmount = length % 4 === 0 ? length / 4 : Math.floor(length / 4) + 1;
          if (groupAmount == 1) {
            setCode(tempCode);
            return;
          }
          const result: string[] = [];
          for (let i = 0; i < groupAmount; i++) {
            const start = i == groupAmount - 1 ? 0 : length - (i + 1) * 4;
            const end = length - i * 4;
            const group = tempCode.substring(start, end);
            result.push(group);
          }
          setCode(result.reverse().join('-'));
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
        {uploadText}
        <a
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
