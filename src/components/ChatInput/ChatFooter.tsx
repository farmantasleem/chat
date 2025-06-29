import classNames from "classnames";
import { ReactNode } from "react";
import { IoMdSend, IoIosAdd } from "react-icons/io";
import { AiOutlineAudio } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";

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
export const ChatFooter = () => {
  return (
    <div className="flex justify-between py-2 items-center">
      <div className="flex items-center gap-x-1">
        <FooterAction isActive onClick={() => {}}>
          <IoIosAdd />
        </FooterAction>
         <FooterAction  onClick={() => {}}>
          <AiOutlineAudio />
        </FooterAction>
         <FooterAction  onClick={() => {}}>
          <IoVideocamOutline />
        </FooterAction>
      </div>
      <IoMdSend className="text-[#5157ea] text-2xl cursor-pointer" />
    </div>
  );
};
