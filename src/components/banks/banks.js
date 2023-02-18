import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Modal, Table} from "antd";
import {Link} from "react-router-dom";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";
import axios from "axios";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Banks({dataSource, getBanks, deleteApplication}) {
    const [type, setType] = useState(null)
    const {lang} = useSelector(state => state.lang)
    const {
        sure_status,
        // info_checking,
        ph,
        name,
        sername,
        father_name,
        phone,
        relative_number,
        house_number,
        relative_number2,
        salary1,
        pending,
        active,
        inactive,
        status,
        Batafsil,
        deleteOrd,
        bank_name,
        inn
    } = Language

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

    const onChange = (e, id) => {
        if (type === "bank") {
            Modal.confirm({
                centered: true,
                title: sure_status[lang],
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios
                        .put(`${MainApi}/bank/active/${id}`)
                        .then((res) => {
                            getBanks()
                        })
                        .catch((err) => console.log(err));
                },
            })
        }
    };

    const onChange1 = (e, id, pending) => {
        if (type === "moderator") {
            // if (pending)
            Modal.confirm({
                centered: true,
                title: sure_status[lang],
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios
                        .put(`${MainApi}/bank/proccess/${id}`)
                        .then((res) => {
                            getBanks()
                        })
                        .catch((err) => console.log(err));
                },
            })
            // else {
            //     toast.warn(info_checking[lang])
            // }
        }
    };

    const columns = [
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
            title: sername[lang],
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: father_name[lang],
            dataIndex: 'father_name',
            key: 'father_name',
        },
        {
            title: bank_name[lang],
            dataIndex: 'bank_name',
            key: 'bank_name',
        },
        {
            title: inn[lang],
            dataIndex: 'INN',
            key: 'INN',
        },
        {
            title: phone[lang],
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: relative_number[lang],
            dataIndex: 'relative_number',
            key: 'relative_number',
        },
        {
            title: house_number[lang],
            dataIndex: 'house_number',
            key: 'house_number',
        },
        {
            title: relative_number2[lang],
            dataIndex: 'relative_number2',
            key: 'relative_number2',
        },
        {
            title: salary1[lang],
            dataIndex: 'maosh',
            key: 'maosh',
        },
        {
            title: pending[lang],
            dataIndex: 'data',
            key: 'data',
            render: (value) => {
                if (type === "bank") {
                    return (
                        <Checkbox onChange={e => onChange(e, value?._id, value.status)} checked={value?.pending}
                                  disabled={value?.pending}/>
                    )
                } else
                    return (
                        <Button>
                            {value?.pending ? active : inactive}
                        </Button>
                    )
            }
        },
        {
            title: status[lang],
            dataIndex: 'mad',
            key: 'mad',
            render: (value) => {
                if (type === "admin") {
                    return (
                        <Checkbox onChange={e => onChange1(e, value?._id, value.pending)} checked={value?.status}
                                  disabled={value?.status}/>

                    )
                } else
                    return (
                        <Button>
                            {value?.status ? active : inactive}
                        </Button>
                    )
            }
        },
        (type === "admin") ? {
            title: Batafsil[lang],
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="primary">
                        <Link to={`/admin/applications/${props}`}>
                            {Batafsil[lang]}
                        </Link>
                    </Button>
                )
            }
        } : {},
        (type === "admin") ? {
            title: deleteOrd[lang],
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteApplication(props)}>{deleteOrd[lang]}</Button>
                )
            }
        } : {},
    ];

    return (
        <div>
            <Table dataSource={type === "moderator" ? dataSource?.filter(
                i => i?.phone?.toString() === localStorage.getItem("moderator_phone") && i?.INN?.toString() === localStorage.getItem("moderator_inn")) : dataSource}
                   columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Banks;
