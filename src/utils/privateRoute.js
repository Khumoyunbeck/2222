import {Navigate, useLocation} from "react-router"


const RequireAuth = ({children}) => {
    let location = useLocation()
    if (
        !!localStorage.getItem('user_token')
        ||
        !!localStorage.getItem('bank_token')
        ||
        !!localStorage.getItem('admin_token')
        ||
        !!localStorage.getItem('moderator_token')
    )
        if (location.pathname === "/admin/orders" && !!localStorage.getItem('user_token')) {
            return <Navigate to="/" state={{from: location}}/>
        } else
            return children
    else return <Navigate to="/" state={{from: location}}/>
}

export default RequireAuth
