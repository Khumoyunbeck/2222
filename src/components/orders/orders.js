import React, {useEffect, useMemo, useState} from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Orders({dataSource, deleteOrder}) {
    const navigate = useNavigate()
    const [type, setType] = useState(null)

    const {lang} = useSelector(state => state.lang)
    const {name1,phone,Batafsil,deleteOrd} = Language;

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

    const columns =useMemo(() => {
        return [
            {
                title: name1[lang],
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: phone[lang],
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: Batafsil[lang],
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="ghost" onClick={() => navigate(`/admin/orders/${props}`)}>Batafsil</Button>
                    )
                }
            },
            !(type === "moderator") ? {
                title: "O'chirish",
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="ghost" onClick={() => deleteOrder(props)}>{deleteOrd[lang]}</Button>
                    )
                }
            } : {},
        ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lang]) ;

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Orders;
