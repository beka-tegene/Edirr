import React from "react";
import MyAccount from "../../components/UserDashboard/MyAccount/MyAccount";
import UserLayout from "../../components/UserDashboard/UserLayout/UserLayout";

const Profile = () => {
  return (
    <UserLayout>
      <MyAccount />
    </UserLayout>
  );
};

export default Profile;
