import { RiLoginBoxLine } from "react-icons/ri";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { useAccount } from "@/context/Account";
import { useNavigate } from "react-router-dom";

const accountTextMap = {
  login: {
    title: "Sign in to continue",
    subtitle: "Sign in to access all the features on this app",
    actionText: "Sign in",
    caption: "Don't have an account?",
  },
  signup: {
    title: "Create an account to continue",
    subtitle: "Create an account to access all the features on this app",
    actionText: "Sign up",
    caption: "Already have an account?",
  },
};

export const Account = () => {
  const [type, setType] = useState<"login" | "signup">("login");
  const navigation = useNavigate();
  const { setAccountDetails, toggleLoginModal, loginModalConfig } =
    useAccount();
  const [acountInput, setAccountInput] = useState({
    userId: "",
    password: "",
    repeatPassword: "",
  });

  const onChange = (key: string, value: string) => {
    setAccountInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleType = () => {
    setType((prevType) => (prevType === "login" ? "signup" : "login"));
  };

  const onSubmit = () => {
    if (type === "signup") {
      if (
        !acountInput.userId ||
        !acountInput.password ||
        !acountInput.repeatPassword
      ) {
        alert("Please fill in all fields");
        return;
      }

      if (acountInput.password !== acountInput.repeatPassword) {
        alert("Passwords do not match");
        return;
      }
      localStorage.setItem("userId", acountInput.userId);
      localStorage.setItem("password", acountInput.password);
      setAccountDetails({
        email: acountInput.userId,
        password: acountInput.password,
      });
      if (loginModalConfig.isVisible) {
        toggleLoginModal();
      }
      navigation("/");
    }

    if (type === "login") {
      const storedUserId = localStorage.getItem("userId");
      const storedPassword = localStorage.getItem("password");

      if (
        acountInput.userId === storedUserId &&
        acountInput.password === storedPassword
      ) {
        setAccountDetails({
          email: acountInput.userId,
          password: acountInput.password,
        });
        if (loginModalConfig.isVisible) {
          toggleLoginModal();
        }
        navigation("/");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="bg-[#f6f6f6] w-[420px] p-3 rounded-[12px]">
      <div className="bg-white px-8 pt-5 rounded-[12px] pb-10">
        <div className="bg-[#f8f8f8] w-10 h-10 rounded-full flex justify-center items-center mx-auto mb-4">
          <RiLoginBoxLine />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold">{accountTextMap[type].title}</p>
          <span className="text-xs text-[#a4a4a4]">
            {accountTextMap[type].subtitle}
          </span>
        </div>
        <div className="flex flex-col gap-y-5 mt-4">
          <TextInput
            label="Email or username"
            placeholder="Enter your email or username"
            onChange={(value) => onChange("userId", value)}
          />
          <TextInput
            label="Password"
            onChange={(value) => onChange("password", value)}
            placeholder="Enter your password "
          />
          {type === "signup" && (
            <TextInput
              label="Repeat password"
              onChange={(value) => onChange("repeatPassword", value)}
              placeholder="Enter your password again"
            />
          )}
          <button
            onClick={onSubmit}
            className="bg-[#5157ea] text-sm font-normal py-2 rounded-[8px] text-white"
          >
            {accountTextMap[type].actionText}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-xs text-[#888888]">
          {accountTextMap[type].caption}
          <span
            onClick={toggleType}
            className="text-[#5157ea] cursor-pointer ml-1"
          >
            {type === "signup" ? "Sign in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};
