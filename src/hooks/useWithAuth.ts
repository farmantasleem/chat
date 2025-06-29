import { useAccount } from "@/context/Account";

export function useWithAuth<T extends (...args: any[]) => any>(fn: T) {
  const { accountDetails, toggleLoginModal } = useAccount();
  
  return (...args: Parameters<T>): ReturnType<T> | void => {
    const isAuthenticated = Boolean(accountDetails.email.length);
    
    if (!isAuthenticated) {
     return toggleLoginModal();
    }
    
    return fn(...args);
  };
}
