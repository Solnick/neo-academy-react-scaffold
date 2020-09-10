import React, { FunctionComponent } from 'react';
import { Dialog, Button } from '@material-ui/core';
import useModal from './useModal';
import styles from './styles.module.scss';

const Modal: FunctionComponent = () => {
  const {
    isModalOpened,
    onSubmitButtonClick,
    onCloseDialog
  } = useModal();

  return (
    <Dialog
      open={isModalOpened}
      onClose={onCloseDialog}
      onBackdropClick={onCloseDialog}
      onEscapeKeyDown={onCloseDialog}
      aria-labelledby="simple-dialog"
    >
      <div className={styles.container}>
        <h3 className={styles.title}>A modal opened using redux</h3>
        <p>Click button to dispatch closeModal action</p>
        <Button
          data-test-id="modal-apply-button"
          className={styles.submitButton}
          color="primary"
          variant="contained"
          onClick={onSubmitButtonClick}
        >
          Click
        </Button>
      </div>
    </Dialog>
  );
};

export default Modal;
