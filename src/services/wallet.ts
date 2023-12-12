export const getAptosWallet = () => {
  const _window = window as any;

  if ("aptos" in _window) {
    return _window?.aptos;
  } else {
    window.open(
      "https://chromewebstore.google.com/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci",
      `_blank`
    );
  }
};
