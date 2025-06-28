import classNames from "classnames";
import { ReactNode, useState } from "react";
import {
  TbBold,
  TbItalic,
  TbUnderline,
  TbList,
  TbListNumbers,
  TbQuote,
  TbCode,
} from "react-icons/tb";

import { IoChevronDownSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const ToolbarItem = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={classNames(
        "px-2 py-2 flex items-center justify-center rounded-[4px]",
        {
          "text-[#717171] bg-transparent": !isActive,
          "text-black bg-white": isActive,
        }
      )}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const ChatToolBar = () => {
  const [activeTool, setActiveTool] = useState<string | null>("bold");
  const InputToolBarOptions = {
    FORMATTING: [
      {
        icon: <TbBold />,
        value: "bold",
      },
      {
        icon: <TbItalic />,
        value: "italic",
      },
      {
        icon: <TbUnderline />,
        value: "underline",
      },
    ],
    LIST: [
      {
        icon: <TbList />,
        value: "list",
      },
      {
        icon: <TbListNumbers />,
        value: "ordered-list",
      },
    ],
    BLOCK: [
      {
        icon: <TbQuote />,
        value: "quote",
      },
      {
        icon: <TbCode />,
        value: "code",
      },
    ],
  };
  return (
    <div className="flex bg-[#f7f7f7] h-fit p-1 rounded-[8px]">
      <ToolbarItem onClick={() => {}} isActive>
        <div className="flex items-center gap-1">
          <span className="text-xs"> Paragraph</span>
          <IoChevronDownSharp className="text-xs" />
        </div>
      </ToolbarItem>
      <div className="flex border-r border-black/5 px-2 ">
        {InputToolBarOptions.FORMATTING.map((item, index) => (
          <ToolbarItem
            onClick={() => setActiveTool(item.value)}
            isActive={item.value === activeTool}
            key={index}
          >
            {item.icon}
          </ToolbarItem>
        ))}
      </div>
      <div className="flex items-center border-r border-black/5 px-2">
        {InputToolBarOptions.LIST.map((item, index) => (
          <ToolbarItem
            onClick={() => setActiveTool(item.value)}
            isActive={item.value === activeTool}
            key={index}
          >
            {item.icon}
          </ToolbarItem>
        ))}
      </div>
      <div className="flex px-2">
        {InputToolBarOptions.BLOCK.map((item, index) => (
          <ToolbarItem
            onClick={() => setActiveTool(item.value)}
            isActive={item.value === activeTool}
            key={index}
          >
            {item.icon}
          </ToolbarItem>
        ))}
      </div>
    </div>
  );
};

export const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <ChatToolBar />
      <div className="bg-[#ffd9d9] cursor-pointer text-red-500 h-8 w-8 flex items-center justify-center rounded-[4px]">
        <RiDeleteBin5Line />
      </div>
    </div>
  );
};
