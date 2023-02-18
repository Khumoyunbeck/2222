import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Mad({dataSource, deleteMad}) {
    const [type, setType] = useState(null)
    const {lang} = useSelector(state => state.lang)
    const {name,mail,pass,phone,region,deleteOrd} = Language;

    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
        if (!!localStorage.getItem("moderator_token")) {
            setType("moderator")
        }
    }, [])


    const columns = [
        {
            title: name[lang],
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: mail[lang],
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: pass[lang],
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: phone[lang],
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: region[lang],
            dataIndex: 'region',
            key: 'region',
        },
        !(type === "moderator") ? {
            title: deleteOrd[lang],
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteMad(props)}>{deleteOrd[lang]}</Button>
                )
            }
        } : {},
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Mad;
