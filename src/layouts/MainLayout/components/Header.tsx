import Flex from "components/Flex";
import Text from "components/Text";
import { imagePath } from "constants/imagePath";
import { useCallback } from "react";
import { getAptosWallet } from "services/wallet";
import { truncate } from "utils/common";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleLogout } from "services/auth";
import { useDispatch } from "react-redux";
import { setWallet } from "../../../redux/slices/wallet";

const menu = [
  {
    title: "Products",
    link: "",
  },
  {
    title: "Protocols",
    link: "",
  },
  {
    title: "Tokens",
    link: "",
  },
  {
    title: "Use Cases",
    link: "",
  },
];

const Header = () => {
  const { wallet } = useSelector((state: RootState) => state.wallet);
  const { isLoggined } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleConnectWallet = useCallback(async () => {
    const wallet = getAptosWallet();

    try {
      await wallet.connect();
      const account = await wallet.account();
      dispatch(setWallet(account));
    } catch (error) {
      console.error({ error });
      window.prompt("Error!");
    }
  }, []);

  return (
    <Flex height="140px" alignItems="center" gap="120px" padding="0 20px">
      <img src={imagePath.logo} width="260px" alt="" />

      <Flex
        flex={1}
        fontWeight="700"
        fontSize="24px"
        color="#596F78"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#f7bdcc"
        borderRadius="12px"
        padding="15px 15px 15px 40px"
      >
        {menu?.map((item) => (
          <Text color="#596F78" textDecoration="unset">
            {item?.title}
          </Text>
        ))}

        <Flex gap="10px">
          <Flex
            backgroundColor="white"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            borderRadius="32px"
            padding="5px 10px"
            alignItems="center"
            gap="5px"
            cursor="pointer"
          >
            <img src={imagePath.walletIcon} width="27px" height="27px" alt="" />
            <Text onClick={handleConnectWallet}>
              {!!wallet?.address
                ? truncate(wallet?.address)
                : `Connect Wallet ->`}
            </Text>
          </Flex>

          {isLoggined && (
            <Flex
              backgroundColor="white"
              boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
              borderRadius="32px"
              padding="5px 10px"
              alignItems="center"
              gap="5px"
              cursor="pointer"
            >
              <Text onClick={handleLogout}>Logout</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
