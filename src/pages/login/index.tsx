import Box from "components/Box";
import Flex from "components/Flex";
import Text from "components/Text";
import { imagePath } from "constants/imagePath";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { routePath } from "router/paths";
import Cookies from "js-cookie";
import { GOOGLE_TOKEN } from "constants/auth";
import { useDispatch } from "react-redux";
import { setIsLoggined } from "../../redux/slices/auth";
import { useCallback } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      Cookies.set(GOOGLE_TOKEN, JSON.stringify(tokenResponse));
      localStorage.setItem(GOOGLE_TOKEN, JSON.stringify(tokenResponse));
      navigate(routePath.Home);
      dispatch(setIsLoggined(true));
    },
    onError: () => {
      window.prompt("Login error!");
    },
    flow: "auth-code",
    redirect_uri: "postmessage",
  });

  const handleLauchApp = useCallback(() => {
    navigate(routePath.Home);
  }, [navigate]);

  return (
    <Box padding="20px">
      <Flex padding="0 60px 0px 20px" marginTop="50px">
        <Box width="50%">
          <Text fontSize="69px" color="white" lineHeight="90px">
            Explore and Earn
          </Text>

          <Flex>
            <Text
              fontSize="69px"
              color="white"
              lineHeight="90px"
              marginRight="30px"
            >
              on
            </Text>
            <img src={imagePath.logo} width="135px" height="83px" alt="" />
          </Flex>

          <Flex
            width="45%"
            borderRadius="32px"
            overflow="hidden"
            backgroundColor="white"
            padding="10px"
            justifyContent="space-between"
            marginTop="10px"
          >
            <input
              style={{
                all: "unset",
                flex: 1,
              }}
              type="text"
            />
            <Text
              width="118px"
              height="30px"
              backgroundColor="#f5b4bb"
              borderRadius="32px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Sign up
            </Text>
          </Flex>

          <Flex
            width="45%"
            padding="10px"
            justifyContent="space-between"
            fontWeight="700"
            marginTop="20px"
          >
            <Text
              width="118px"
              height="40px"
              backgroundColor="#7bb8f1"
              borderRadius="32px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              padding="0px 30px"
              cursor="pointer"
              onClick={handleLogin}
            >
              Log in
            </Text>

            <Text
              width="118px"
              height="40px"
              backgroundColor="white"
              borderRadius="32px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="0px 30px"
              cursor="pointer"
              onClick={handleLauchApp}
            >
              Launch App
            </Text>
          </Flex>
        </Box>

        <Flex width="50%" justifyContent="right">
          <Flex
            borderRadius="20px"
            overflow="hidden"
            width="225px"
            backgroundColor="white"
            flexDirection="column"
            alignItems="center"
            height="fit-content"
            padding="15px"
          >
            <img src={imagePath.logo} width="135px" height="83px" alt="" />

            <Text color="#8795AF" fontSize="12px">
              test Front end interview 1
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        borderRadius="20px"
        backgroundColor="rgba(255,255,255, 0.5)"
        border="1px solid rgba(255,255,255, 0.5)"
        padding="50px 150px"
        marginTop="80px"
      >
        <Flex flexDirection="column" alignItems="center">
          <Text
            fontSize="49px"
            lineHeight="64px"
            color="#17344F"
            fontWeight="500"
          >
            $1.80B
          </Text>
          <Text color="#596F78">30 Day Volume</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Text
            fontSize="49px"
            lineHeight="64px"
            color="#17344F"
            fontWeight="500"
          >
            $0.84B
          </Text>
          <Text color="#596F78">Managed on testX.fie</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Text
            fontSize="49px"
            lineHeight="64px"
            color="#17344F"
            fontWeight="500"
          >
            $21.43M
          </Text>
          <Text color="#596F78">Total Collateral Automated</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
