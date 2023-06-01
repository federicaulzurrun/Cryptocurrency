import currencyReducer, { getCurrencies, initialState } from '../redux/currency/currencySlice';

const mockPayload = { };
const mockError = new Error('Fetch error');

describe('currencySlice', () => {
  it('should handle getCurrencies.pending correctly', () => {
    const state = { ...initialState };
    const action = { type: getCurrencies.pending.type };

    const nextState = currencyReducer(state, action);

    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBe(null);
  });

  it('should handle getCurrencies.fulfilled correctly', () => {
    const state = { ...initialState };
    const action = { type: getCurrencies.fulfilled.type, payload: mockPayload };

    const nextState = currencyReducer(state, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.currency).toBe(mockPayload);
  });

  it('should handle getCurrencies.rejected correctly', () => {
    const state = { ...initialState };
    const action = { type: getCurrencies.rejected.type, error: mockError };

    const nextState = currencyReducer(state, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(mockError.message);
  });
});
