import React, { useEffect, useMemo, useState } from 'react';
import { Button, Checkbox, Modal, Table } from "antd";
import { useNavigate } from "react-router";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { MainApi } from "../../api";
import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";

function Cars({ dataSource, deleteCar, getCars }) {

    const navigate = useNavigate()

    const handleClick = (props) => {
        navigate(`/admin/card/${props}`)
    }

    const [type, setType] = useState(null)

    const { lang } = useSelector(state => state.lang)
    const {
        model,
        marka1,
        color1,
        color2,
        year,
        dv,
        yq,
        yqr,
        trans,
        transr,
        kuzuv,
        kuzuvru,
        opisaniyaru,
        opisaniya,
        perevod,
        perevodru,
        yurgani,
        narxi,
        aksiya,
        status,
        Batafsil,
        deleteOrd
    } = Language;

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
        if (type === "moderator" || type === "admin") {
            Modal.confirm({
                centered: true,
                title: "Rostan ham status o'zgartirmoqchimisiz",
                icon: <ExclamationCircleOutlined />,
                onOk() {
                    axios
                        .put(`${MainApi}/car/a/${id}`)
                        .then((res) => {
                            getCars()
                        })
                        .catch((err) => console.log(err));
                },
            })
        }
    };

    const columns = useMemo(() => {
        return [
            {
                title: model[lang],
                dataIndex: 'madel',
                key: 'madel',
            },
            {
                title: marka1[lang],
                dataIndex: 'marka',
                key: 'marka',
            },
            {
                title: color1[lang],
                dataIndex: 'color',
                key: 'color',
            },
            {
                title: color2[lang],
                dataIndex: 'colorru',
                key: 'colorru',
            },
            {
                title: year[lang],
                dataIndex: 'yili',
                key: 'yili',
            },
            {
                title: dv[lang],
                dataIndex: 'divigitel',
                key: 'divigitel',
            },
            {
                title: yq[lang],
                dataIndex: 'yoqilgi',
                key: 'yoqilgi',
            },
            {
                title: yqr[lang],
                dataIndex: 'yoqilgiru',
                key: 'yoqilgiru',
            },
            {
                title: trans[lang],
                dataIndex: 'transmission',
                key: 'transmission',
            },
            {
                title: transr[lang],
                dataIndex: 'transmissionru',
                key: 'transmissionru',
            },
            {
                title: kuzuv[lang],
                dataIndex: 'kuzuv',
                key: 'kuzuv',
            },
            {
                title: kuzuvru[lang],
                dataIndex: 'kuzuvru',
                key: 'kuzuvru',
            },
            {
                title: perevod[lang],
                dataIndex: 'perevod',
                key: 'perevod',
            },
            {
                title: perevodru[lang],
                dataIndex: 'perevodru',
                key: 'perevodru',
            },
            {
                title: yurgani[lang],
                dataIndex: 'yurgani',
                key: 'yurgani',
            },
            {
                title: narxi[lang],
                dataIndex: 'narxi',
                key: 'narxi',
            },
            {
                title: aksiya[lang],
                dataIndex: 'aksiya',
                key: 'aksiya',
            },
            {
                title: opisaniya[lang],
                dataIndex: 'opisaniya',
                key: 'opisaniya',
                render: function (html) {
                    return <div dangerouslySetInnerHTML={{ __html: html }} />
                }
            },
            {
                title: opisaniyaru[lang],
                dataIndex: 'opisaniyaru',
                key: 'opisaniyaru',
                render: function (html) {
                    return <div dangerouslySetInnerHTML={{ __html: html }} />
                }
            },
            {
                title: status[lang],
                dataIndex: 'data',
                key: 'data',
                render: (value) => {
                    if (type === "moderator" || type === "admin") {
                        return (
                            <Checkbox
                                onChange={e => onChange(e, value?._id)}
                                checked={value?.status}
                                disabled={value?.status}
                            />
                        )
                    } else
                        return (
                            <Button>
                                {value?.status ? "Active" : "Inactive"}
                            </Button>
                        )
                }
            },
            {
                title: Batafsil[lang],
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="primary" onClick={() => handleClick(props)}>{Batafsil[lang]}</Button>
                    )
                }
            },
            !(type === "moderator") ? {
                title: deleteOrd[lang],
                dataIndex: '_id',
                key: '_id',
                render: (props) => {
                    return (
                        <Button type="ghost" onClick={() => deleteCar(props)}>{deleteOrd[lang]}</Button>
                    )
                }
            } : {},
        ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang, type]);

    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={columns}
                scroll={{ x: "max-content" }}
            />
        </div>
    );
}

export default Cars;
