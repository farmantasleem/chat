import { useAccount } from "@/context/Account";
import { CgOculus } from "react-icons/cg";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = ({ page }: { page: string }) => {
  const { accountDetails, setAccountDetails } = useAccount();

  const onLogOut = () => {
    setAccountDetails({
      email: "",
      password: "",
    });
    alert("You have been logged out");
  };
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-x-2">
        <CgOculus className="text-4xl" />
        <p className="text-sm font-semibold">foo-rum</p>
      </div>
      {page === "dashboard" && !accountDetails.email && (
        <Link to="/account">
          <div className="flex items-center gap-x-2">
            <p className="font-medium text-sm">Login</p>
            <RiLoginBoxLine />
          </div>
        </Link>
      )}

      {page === "dashboard" && accountDetails.email && (
        <div
          onClick={onLogOut}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <p className="font-medium text-sm">Log out</p>
          <RiLoginBoxLine />
        </div>
      )}

      {page === "account" && (
        <Link to="/">
          <p className="font-medium text-sm">Back to home</p>
        </Link>
      )}
    </div>
  );
};
