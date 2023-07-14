import AuthLayout from './layouts/Auth';

import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp'
import Page404 from 'pages/auth/Page404';
import Page500 from 'pages/auth/Page500';
import VerifyEmail from 'pages/auth/VerifyEmail'
import ForgetPassword from 'pages/auth/ForgetPassword'

import MainMenuOLD from 'layouts/MainOLD'
import DashboardMenu from 'pages/menus/dashboard-menu/DashboardMenu';
import TransactionMenu from 'pages/menus/transaction-menu/TransactionMenu';
import ContactMenu from 'pages/menus/contact-menu/ContactMenu';
import NotificationMenu from 'pages/menus/notification-menu/NotificationMenu';
import AccountMenu from 'pages/menus/account-menu/AccountMenu';
import ChangepasswdMenu from 'pages/menus/changepasswd-menu/ChangepasswdMenu';
import TransactionDetail from 'pages/menus/transaction-menu/TransactionDetail';

import MainLayout from 'layouts/Main';

import AuthGuard from 'guards/AuthGuard';

const routes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "main",
    element: (<AuthGuard><MainMenuOLD/></AuthGuard>),
    children: [
      { index: true, element: <DashboardMenu/> },
      { path: "contact", element: <ContactMenu/>},
      { path: "notification", element: <NotificationMenu/>},
      { path: "dashboard", element: <DashboardMenu/>},
      { path: "account", element: <AccountMenu/>},
      { path: "change-password", element: <ChangepasswdMenu/>},
      { path: "transaction", children: [
        { index: true, element: <TransactionMenu/>},
        { path: ":transactionId", element: <TransactionDetail/>},
        { path: "*", element: <TransactionDetail/>},
      ]}
    ]
  },
  {
    path: "test",
    element: <MainLayout/ >,
    children: [
      { path: "contact", element: <ContactMenu/>},
      { path: "notification", element: <NotificationMenu/>},
    ]
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]

export default routes;