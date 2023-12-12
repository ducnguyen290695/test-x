import { Navigate } from "react-router-dom";
import { routePath } from "router/paths";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useCallback, useEffect, useState } from "react";
import { Country, JPCode } from "models/country";

const PrivateRoute = ({
  children,
  isCheckAuth,
}: {
  children: JSX.Element;
  isCheckAuth: boolean;
}) => {
  const { isLoggined } = useSelector((state: RootState) => state.auth);
  const [coutry, setCountry] = useState<Country>();

  const getCountryInfo = useCallback(async () => {
    const ipApiUrl = process.env.REACT_APP_IP_API as string;

    try {
      const res = await (await fetch(ipApiUrl)).json();

      setCountry(res);
    } catch (err) {
      console.log({ err });
    }
  }, []);

  useEffect(() => {
    getCountryInfo();
  }, []);

  if (coutry?.countryCode === JPCode) {
    return <Navigate to={routePath.AccessError} />;
  }

  return !isCheckAuth || isLoggined ? (
    children
  ) : (
    <Navigate to={routePath.Login} />
  );
};

export default PrivateRoute;
