import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useModal from './useModal';

describe('The Modal', () => {
  it('should not throw an error', () => {
    renderHook(() => useModal());
  });
});
