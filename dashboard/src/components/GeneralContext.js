import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
  console.log("🔥 Opening Buy Window with UID:", uid);
  setIsBuyWindowOpen(true);
  setSelectedStockUID(uid);
};

const handleCloseBuyWindow = () => {
  console.log("❌ Closing Buy Window");
  setIsBuyWindowOpen(false);
  setSelectedStockUID("");
};


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {console.log("📦 isBuyWindowOpen:", isBuyWindowOpen)}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;
