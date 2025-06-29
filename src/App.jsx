import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { AccountProvider } from "./context/Account";

export default function App() {
  return (
    <BrowserRouter>
      <AccountProvider>
        <Navigation />
      </AccountProvider>
    </BrowserRouter>
  );
}
