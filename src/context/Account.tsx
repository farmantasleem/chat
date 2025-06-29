import React, { createContext, useContext, useState, ReactNode } from "react";

type AccountDetails = {
  email: string;
  password: string;
};

type LoginModalConfig = {
  isVisible: boolean;
};

type AccountContextType = {
  accountDetails: AccountDetails;
  setAccountDetails: React.Dispatch<React.SetStateAction<AccountDetails>>;
  loginModalConfig: LoginModalConfig;
  toggleLoginModal: () => void;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [accountDetails, setAccountDetails] = useState<AccountDetails>({
    email: "",
    password: "",
  });

  const [loginModalConfig, setLoginModalConfig] = useState<LoginModalConfig>({
    isVisible: false,
  });

  const toggleLoginModal = () => {
    setLoginModalConfig((prev) => ({
      isVisible:  !prev.isVisible,
    }));
  };

  return (
    <AccountContext.Provider
      value={{
        accountDetails,
        setAccountDetails,
        loginModalConfig,
        toggleLoginModal,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = (): AccountContextType => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
};
