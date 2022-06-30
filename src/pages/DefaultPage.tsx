import React from 'react';
import { Outlet } from 'react-router-dom';
import CloudCommonHeader from '../components/CloudCommonHeader';
import NavigationBar from '../components/NavigationBar';
import { createUseStyles } from 'react-jss';
import DemoWarningHeader from '../components/DemoWarningHeader';

const useStyles = createUseStyles({
  defaultRoot: {
    padding: '24px',
  }
});

export default function DefaultPage() {
  const styles = useStyles();
  return (
    <div>
      <CloudCommonHeader />
      <DemoWarningHeader />
      <NavigationBar />
      <main className={styles.defaultRoot}>
        <Outlet />
      </main>
    </div>
  );
}
