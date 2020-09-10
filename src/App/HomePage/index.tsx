import React from 'react';
import styles from './styles.module.scss';
import { Button } from '@material-ui/core';
import Modal from './Modal';
import useHomePage from './useHomePage';

const HomePage = () => {
  const { onButtonClick } = useHomePage();

  return (
    <>
      <Modal/>
      <div className={styles.container}>
        Home
        <Button
          variant="contained"
          color="primary"
          onClick={onButtonClick}
        >
          redux opened modal
        </Button>
      </div>
    </>
  );
}

export default HomePage;
