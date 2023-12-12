import { createSlice } from "@reduxjs/toolkit";
import { WalletAccount } from "../../models/wallet";

export interface WalletState {
  wallet: WalletAccount;
}

const initialState: WalletState = {
  wallet: {} as WalletAccount,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { setWallet } = walletSlice.actions;

export default walletSlice.reducer;
