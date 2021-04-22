import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";

import RootStore from "./RootStore/";

export interface StoreContext {
  rootStore: RootStore;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StoreContext = createContext<StoreContext | null>(null);

export const StoreProvider: React.FC = ({ children }: any) => {
  const store = useLocalStore(() => ({
    rootStore: new RootStore(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("StoreProvider has not been injected");
  }
  return store;
};
