import { routes } from "../../Routes";
import { useRoutes } from "react-router-dom";

function RouteAll() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default RouteAll;
