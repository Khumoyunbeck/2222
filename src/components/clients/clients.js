import React, {useEffect, useMemo, useState} from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router";
// import lang from "../../lang/lang";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Clients({dataSource, deleteClient}) {
    const navigate = useNavigate()
    const [type, setType] = useState(null)

    const {lang} = useSelector(state => state.lang)
    const {ph,name,region,date,deleteOrd,Batafsil} = Language;

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
        {
            title: ph[lang],
            dataIndex: 'photo',
            key: 'photo',
            render: (props) => {
                return (
                    <img src={props[0]} alt="props" className="s-img" width={25} height={25}/>
                )
            }
        },
        {
            title: name[lang],
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: region[lang],
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: date[lang],
            dataIndex: 'data',
            key: 'data',
        },
        {
            title: Batafsil[lang],
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => navigate(`/admin/clients/${props}`)}>{Batafsil[lang]}</Button>
                )
            }
        },
        !(type === "moderator") ? {
            title: deleteOrd[lang],
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteClient(props)}>{deleteOrd[lang]}</Button>
                )
            }
        } : {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ]},[lang]
    );

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Clients;
