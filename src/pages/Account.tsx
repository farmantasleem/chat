import { Account as AccountComponent } from "@/components/Account";
import { BaseLayout } from "@/components/BaseLayout";

export const Account = () => {
  return (
    <BaseLayout page="account">
      <div className="flex justify-center items-center p-5">
        <AccountComponent />
      </div>
    </BaseLayout>
  );
};
