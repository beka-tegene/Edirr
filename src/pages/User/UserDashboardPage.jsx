import React, { useState } from "react";
import CreateEdirr from "../../components/UserDashboard/Dashboard/CreateEdirr";
import UserDashboard from "../../components/UserDashboard/Dashboard/UserDashboard";
import UserLayout from "../../components/UserDashboard/UserLayout/UserLayout";

const UserDashboardPage = () => {
  const [createEdirr, setCreateEdirr] = useState(false);
  const modelHandlerDisplay = () => {
    setCreateEdirr(true);
  };
  const modelHandlerHidden = () => {
    setCreateEdirr(false);
  };
  return (
    <UserLayout>
      {createEdirr && <CreateEdirr onHidden={modelHandlerHidden} />}

      <UserDashboard onCreate={modelHandlerDisplay} />
    </UserLayout>
  );
};

export default UserDashboardPage;
