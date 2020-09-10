import modalReducer, { toggleModalView, initialState } from '../modalSlice';

describe('modal reducers', () => {
  test('Modal should be closed initially and have initial values', () => {
    expect(modalReducer(undefined, { type: undefined })).toEqual(initialState);
  });
  test('should handle toggleView when passing true', () => {
    expect(
      modalReducer(
        initialState,
        toggleModalView({
          isModalOpened: true
        })
      )
    ).toEqual({
      ...initialState,
      isModalOpened: true
    });
  });
  test('should handle toggleView when passing false', () => {
    expect(
      modalReducer(
        initialState,
        toggleModalView({
          isModalOpened: false
        })
      )
    ).toEqual({
      ...initialState,
      isModalOpened: false
    });
  });
});
