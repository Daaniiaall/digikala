"use client"
import { Provider } from "react-redux";
import { store } from "./store";

import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
