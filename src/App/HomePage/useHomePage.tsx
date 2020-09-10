import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {toggleModalView} from 'shared/store/features/modalSlice';

const useHomePage = () => {
  const dispatch = useDispatch();
  const onButtonClick = useCallback(() => {
    dispatch(toggleModalView({isModalOpened: true}))
  }, [dispatch])

  return {
    onButtonClick
  }
}

export default useHomePage
