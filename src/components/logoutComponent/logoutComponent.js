import React from 'react';
import "./logoutComponent.css"
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import {useNavigate} from "react-router";
import {Button} from "antd";

const LogoutComponent = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    const {lang} = useSelector(state => state.lang)
    const {lgt} = Language;
    return (
        <div className="logoutComponent">
            <Button type="primary" danger onClick={() => logout()}>
                {lgt[lang]}
            </Button>
        </div>
    );
};

export default LogoutComponent;
