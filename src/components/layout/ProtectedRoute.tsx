import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode,  JwtPayload } from 'jwt-decode';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = localStorage.getItem('authToken');

  let user: CustomJwtPayload | null = null;

  if (token) {
    user = jwtDecode<CustomJwtPayload>(token);
    console.log(user);
  }

  if (role !== undefined && role !== user?.role) {
    localStorage.removeItem('authToken');
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
