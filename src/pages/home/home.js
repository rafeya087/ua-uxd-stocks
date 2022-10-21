import React, { useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Layout from '../../components/layout/layout';
import MainPage from '../../components/homePageMain';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%'
    }
  })
);
const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout show={true}>
        <MainPage />
      </Layout>
    </div>
  );
};
export default HomePage;
