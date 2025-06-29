import { ReactNode } from "react";
import { Header } from "./Header";
import { useAccount } from "@/context/Account";
import Modal from "../Modal";
import { Account } from "../Account";

export const BaseLayout = ({ children,page = "dashboard" }: { children: ReactNode;page?:string }) => {
  const { loginModalConfig, toggleLoginModal } = useAccount();

  return (
    <div>
      <Header page={page}/>
      <div className="h-screen w-screen flex flex-col justify-start items-center p-5">
        {children}
      </div>
      {loginModalConfig.isVisible && (
        <Modal onClose={toggleLoginModal}>
          <Account />
        </Modal>
      )}
    </div>
  );
};
