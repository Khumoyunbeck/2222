import React, {useState} from 'react';
import Register from "../../pages/register/register";
import Code from "./code/code";

function AdminPage(props) {
    const [step, setStep] = useState("register")
    const [k, setK] = useState("")

    let Content = () =>
        ({
            register: <Register setStep={setStep} setK={setK}/>,
            code: <Code k={k} setStep={setStep}/>,
        }[step])

    return (
        <div>
            <Content/>
        </div>
    );
}

export default AdminPage;
