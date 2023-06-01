import detailsReducer, { crypto, initialState } from '../redux/details/detailsSlice';

const mockPayload = { };

describe('detailsSlice', () => {
  it('should handle crypto correctly', () => {
    const state = { ...initialState };
    const action = crypto(mockPayload);

    const nextState = detailsReducer(state, action);

    expect(nextState.data).toBe(mockPayload);
  });
});
