import { setWallet } from "../redux/slices/wallet";
import { GOOGLE_TOKEN } from "constants/auth";
import Cookies from "js-cookie";
import { setIsLoggined } from "../redux/slices/auth";
import { store } from "../redux/store";
import { getAptosWallet } from "./wallet";

export const handleLogout = async () => {
  try {
    const wallet = getAptosWallet();
    await wallet.disconnect();
  } catch (err) {
    console.log({ err });
  } finally {
    const dispatch = store.dispatch;
    Cookies.remove(GOOGLE_TOKEN);
    dispatch(setIsLoggined(false));
    dispatch(setWallet({}));
  }
};
