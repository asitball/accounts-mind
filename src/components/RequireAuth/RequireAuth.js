// import React from 'react';
// import { Navigate, useLocation,useAuth } from 'react-router-dom';
// // import {useAuth} from 'react-useFirebase-hooks/auth';
// import useFirebase from '../../hooks/useFirebase';


// const RequireAuth = ({children}) => {
//     let auth = useAuth();
//   let location = useLocation();
//     // const [user] = useAuthStat(auth);
//     const [user] =useFirebase(auth)
//     if(!user){
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//     return children
// };

// export default RequireAuth;