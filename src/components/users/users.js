/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useState} from 'react';
import {Button, Table} from "antd/";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Users({dataSource, isbank = false, deleteBank, updateBank}) {
    const [type, setType] = useState(null)

    const {lang} = useSelector(state => state.lang)
    const {bank_name,phone,region,name,mail,pass,date,edit,del} = Language;

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

    const columns = useMemo(() => {
        return [
            isbank ? {
                title: bank_name[lang],
                dataIndex: 'bank',
                key: 'bank'
            } : {
                title: region[lang],
                dataIndex: 'region',
                key: 'region'
            },
            isbank ? {
                title: phone[lang],
                dataIndex: 'phone',
                key: 'phone'
            } : {
                title: phone[lang],
                dataIndex: 'phone',
                key: 'phone'
            },
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
                title: date[lang],
                dataIndex: 'date',
                key: 'date',
            },
            isbank ? {
                title: edit[lang],
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="ghost" onClick={() => updateBank(props)}>{edit[lang]}</Button>
                    )
                }
            } : {},
            !(type === "moderator") ? {
                title:del[lang],
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="ghost" onClick={() => deleteBank(props)}>{del[lang]}</Button>
                    )
                }
            } : {},

        ]
    },);

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Users;
