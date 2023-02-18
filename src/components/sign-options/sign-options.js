import React from 'react';
import {Button} from "antd";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function SignOptions({setStep}) {

    const {lang} = useSelector(state => state.lang)
    const {k,r} = Language;

    return (
        <div className="cn">
            <div className='accountbg'></div>
            <div className='accountbg1'></div>
            <div className="buttons">
                <Button type="primary" block onClick={() => setStep("login")}>
                    {k[lang]}
                </Button>
                <Button block onClick={() => setStep("register")}>{r[lang]}</Button>
            </div>
        </div>
    );
}

export default SignOptions;
