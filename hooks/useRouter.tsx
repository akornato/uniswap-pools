import React, { useContext, createContext } from "react";
import { NextRouter } from "next/router";

type Query = {
  id?: string;
};

type Router = NextRouter;

const RouterContext = createContext<Router>(undefined!);

export const RouterProvider: React.FC<{ router: NextRouter }> = ({
  children,
  router,
}) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
