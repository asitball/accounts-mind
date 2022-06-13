import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
// import {useAuth} from 'react-useFirebase-hooks/auth';

const RequireAuth = ({children}) => {
  let location = useLocation();
    const [user] =useAuthState(auth)
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;