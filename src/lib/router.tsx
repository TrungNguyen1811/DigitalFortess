import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
const LoginPage = React.lazy(() => import('@/pages/LoginPage'));
const DashboardPage = React.lazy(() => import('@/pages/layout/DashboardLayout'));
const DashboardTable = React.lazy(() => import('@/components/dashboard/dashboard-table'));
export const ROUTER = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardTable />
        },
    ]
  },
]);
