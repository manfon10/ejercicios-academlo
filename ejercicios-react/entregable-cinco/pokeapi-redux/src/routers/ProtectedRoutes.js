import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

    const name = useSelector(state => state.nameUser);

    if(true){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
};                        

export default ProtectedRoutes;