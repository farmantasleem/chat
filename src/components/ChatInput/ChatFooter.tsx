import classNames from "classnames";
import { ReactNode } from "react";
import { IoMdSend, IoIosAdd } from "react-icons/io";
import { AiOutlineAudio } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import { useWithAuth } from "@/hooks/useWithAuth";

const FooterAction = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={classNames(
        "px-1 py-1 flex items-center justify-center rounded-[4px]",
        {
          "text-[#717171] bg-transparent": !isActive,
          "text-black bg-[#f0f0f0]": isActive,
        }
      )}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const ChatFooter = ({ onSend }: { onSend: () => void }) => {

  const handleAction = useWithAuth(onSend);

  return (
    <div className="flex justify-between py-2 items-center">
      <div className="flex items-center gap-x-1">
        <FooterAction isActive onClick={handleAction}>
          <IoIosAdd />
        </FooterAction>
        <FooterAction onClick={handleAction}>
          <AiOutlineAudio />
        </FooterAction>
        <FooterAction onClick={handleAction}>
          <IoVideocamOutline />
        </FooterAction>
      </div>
      <IoMdSend
        onClick={handleAction}
        className="text-[#5157ea] text-2xl cursor-pointer"
      />
    </div>
  );
};
