import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosLogOut, IoIosCreate } from "react-icons/io";
import { CgUserList } from "react-icons/cg";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import TaskShedules from "../../Pages/TaskShedules/TaskShedules";
import Userlist from "../../Pages/Userlist/Userlist";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import UserSubscriptionList from "../../Pages/UserSubscriptionList/UserSubscriptionList";
import AdminSubscriptionList from "../../Pages/AdminSubscriptionList/AdminSubscriptionList";
import AdminProfile from "../../Pages/AdminProfile/AdminProfile";
import useRequest from "../../Hooks/useRequest/useRequest";
import useUser from "../../Contexts/UserProvider/useUser";
import CreateSubscription from "../../Pages/CreateSubscription/CreateSubscription";
import { useEffect } from "react";
import { useState } from "react";
import { remove } from "../arrayManage";

const RouteObject = () => {
  const logout = useRequest();
  const [thisUser, setThisUser] = useUser();

  // const [routing]
  const adminItems = [
    {
      id: 1,
      name: "Profile",
      icon: BsFillPersonFill,
      path: "/dashboard",
      root: "",
      component: <AdminProfile />,
    },

    {
      id: 2,
      name: "Subscription",
      icon: MdOutlineUnsubscribe,
      path: "/dashboard/adminsub",
      root: "adminsub",
      component: <AdminSubscriptionList />,
    },
    {
      id: 3,
      name: "Create ",
      icon: IoIosCreate,
      path: "/dashboard/createsub",
      root: "createsub",
      component: <CreateSubscription />,
    },
    {
      id: 4,
      name: "update ",
      icon: IoIosCreate,
      path: "/dashboard/createsub/:id",
      root: "/dashboard/createsub/:id",
      component: <CreateSubscription />,
    },
    {
      id: 5,
      name: "User List",
      icon: CgUserList,
      path: "/dashboard/userlist",
      root: "userlist",
      component: <Userlist />,
    },
    {
      id: 6,
      name: "Logout",
      icon: IoIosLogOut,
      path: "/",
      root: "",
      component: <></>,
      action: () => {
        logout({ uri: "user/logout", method: "POST" })
          .then(() => setThisUser(null))
          .catch((err) => console.log(err));
      },
    },
  ];

  const userItems = [
    {
      id: 1,
      name: "Profile",
      icon: BsFillPersonFill,
      path: "/dashboard",
      root: "",
      component: <UserProfile />,
    },
    {
      id: 2,
      name: "Task Schedule",
      icon: BiTask,
      path: "/dashboard/taskshedule",
      root: "taskshedule",
      component: <TaskShedules />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: MdOutlineUnsubscribe,
      path: "/dashboard/usersubscription",
      root: "usersubscription",
      component: <UserSubscriptionList />,
    },
    {
      id: 4,
      name: "Logout",
      icon: IoIosLogOut,
      path: "/",
      root: "",
      component: <></>,
      action: () => {
        logout({ uri: "user/logout", method: "POST" })
          .then(() => setThisUser(null))
          .catch((err) => console.log(err));
      },
    },
  ];
  const [menuList, setMenuList] = useState(
    thisUser?.isAdmin ? adminItems : userItems
  );

  useEffect(() => {
    if (thisUser?.boughtPackages && !thisUser?.isAdmin) {
      remove(setMenuList, 3);
    } else if (!thisUser?.boughtPackages && !thisUser?.isAdmin) {
      setMenuList(userItems);
    }
    if (thisUser?.isAdmin) {
      remove(setMenuList, 3);
      remove(setMenuList, 4);
    }
  }, [thisUser]);

  // console.log(menuList);
  return {
    adminItems: adminItems,
    userItems: userItems,
    menuList: menuList,
  };
};

export default RouteObject;
