import React, {useEffect, useState} from 'react';
import SignOptions from "../sign-options/sign-options";
import UserLogin from "../../pages/user_login/user_login";
import Register from "../../pages/register";
import { useNavigate } from 'react-router';

function AdminPage(props) {
    const [step, setStep] = useState("enter")
    const navigate = useNavigate()

    let Content = () =>
        ({
            enter: <SignOptions setStep={setStep}/>,
            register: <Register/>,
            login: <UserLogin/>,
            phone:""
        }[step])
useEffect(() => {
    if(localStorage.getItem("user_token")){
        navigate("/admin/cards")
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[localStorage.getItem("user_token")])
    return (
        <div>
            <Content/>
        </div>
    );
}

export default AdminPage;
