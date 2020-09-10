import { useCallback } from 'react';
import {toggleModalView} from 'shared/store/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'shared/store/rootReducer';

const useModal = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector((state: RootState) => state.modal.isModalOpened);

  const onCloseDialog = useCallback(() => {
    dispatch(toggleModalView({isModalOpened: false}));
  }, [dispatch])

  const onSubmitButtonClick = useCallback(() => {
    onCloseDialog();
  }, [onCloseDialog]);

  return {
    onSubmitButtonClick,
    isModalOpened,
    onCloseDialog
  };
};

export default useModal;
