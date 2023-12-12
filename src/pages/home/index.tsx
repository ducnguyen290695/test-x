import Flex from "components/Flex";
import Text from "components/Text";

const HomePage = () => {
  return (
    <Flex
      padding="20px"
      justifyContent="center"
      alignItems="center"
      height="90%"
    >
      <Text color="white" fontWeight="700" fontSize="70px">
        Welcome
      </Text>
    </Flex>
  );
};

export default HomePage;
