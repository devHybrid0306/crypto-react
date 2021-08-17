/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICrypto } from '../../../types/crypto';
import { RootState } from '../../store';

export interface CryptoState {
  status: 'idle' | 'loading' | 'failed';
  currentCryptoIds: number[];
  cryptoList: Array<ICrypto>;
}

const CRYPTO_DATA = [
  {
    id: 1,
    name: 'Bitcoin',
    currency: 'BTC',
    change_value: 2280.66,
    change_percentage: 5.19,
    buy: 4324.75,
    sell: 4668.93,
    src: 'https://www.linkpicture.com/q/ic_bitcoin.png',
    bkg_color: '#ffefd8',
  },
  {
    id: 2,
    name: 'Ethereum',
    currency: 'ETH',
    change_value: 312.2938,
    change_percentage: 6.19,
    buy: 312.2938,
    sell: 321.9382,
    src: 'https://www.linkpicture.com/q/ic_ethereum.png',
    bkg_color: '#efefef',
  },
  {
    id: 3,
    name: 'Apple',
    currency: 'AAPL',
    change_value: -8.41,
    change_percentage: -0.49,
    buy: 4324.75,
    sell: 4668.93,
    src: 'https://www.linkpicture.com/q/ic_apple.png',
    bkg_color: '#f0f0f0',
  },
  {
    id: 4,
    name: 'Alphabet',
    currency: 'GOOG',
    change_value: 5480.66,
    change_percentage: 5.19,
    buy: 4324.75,
    sell: 4668.93,
    src: 'https://www.linkpicture.com/q/ic_alphabet.png',
    bkg_color: '#dcefff',
  },
  {
    id: 5,
    name: 'Amazon',
    currency: 'AMZN',
    change_value: 5480.66,
    change_percentage: 5.19,
    buy: 4324.75,
    sell: 4668.93,
    src: 'https://www.linkpicture.com/q/ic_amazon.png',
    bkg_color: '#efefef',
  },
  {
    id: 6,
    name: 'Commerzb',
    currency: 'CBK.DE',
    change_value: -0.41,
    change_percentage: -0.49,
    buy: 4324.75,
    sell: 4668.93,
    src: 'https://www.linkpicture.com/q/ic_commerzb.png',
    bkg_color: '#f3dbb6',
  },
];

const initialState: CryptoState = {
  status: 'loading',
  currentCryptoIds: [],
  cryptoList: CRYPTO_DATA,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    selectNewCrypto: (state, action: PayloadAction<number>) => {
      const index = state.currentCryptoIds.findIndex((id) => id === action.payload);
      if (index === -1) {
        state.currentCryptoIds = [...state.currentCryptoIds, action.payload];
      } else {
        state.currentCryptoIds = state.currentCryptoIds.filter((el) => el !== action.payload);
      }
    },
  },
});

export const { selectNewCrypto } = cryptoSlice.actions;

export const selectCrypto = (state: RootState) => state.crypto;

export default cryptoSlice.reducer;
