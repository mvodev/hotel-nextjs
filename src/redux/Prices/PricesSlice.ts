import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'src/redux/reduces';

type PricesState = {
  prices: [number, number]
};

const initialState: PricesState = {
  prices: [5000, 10000]
};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrices: (state, action: PayloadAction<[number, number]>) => {
      state.prices = action.payload;
    }
  },
});

const { setPrices } = pricesSlice.actions;

const selectPrices = (state: RootState): [number, number] => state.prices.prices;

export default pricesSlice.reducer;

export { setPrices, selectPrices };
