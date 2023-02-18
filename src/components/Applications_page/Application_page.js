import {Col, Image, Row, Table} from 'antd'
import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {MainApi} from "../../api";

const Application_page = () => {
    const {id} = useParams()
    const [bank, setBank] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    const columns = [
        //     {
        //     title: 'photo',
        //     dataIndex: 'photo',
        //     key: 'photo',
        //     render: (props) => {
        //         return (
        //             <img src={props[0]} alt="props" className="s-img" width={25} height={25}/>
        //         )
        //     }
        // },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Father name',
            dataIndex: 'father_name',
            key: 'father_name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Qarindoshini nomeri',
            dataIndex: 'relative_number',
            key: 'relative_number',
        },
        {
            title: 'Uyini nomeri',
            dataIndex: 'house_number',
            key: 'house_number',
        },
        {
            title: 'Qarindoshini nomeri 2',
            dataIndex: 'relative_number2',
            key: 'relative_number2',
        },
        {
            title: 'Maosh',
            dataIndex: 'maosh',
            key: 'maosh',
        }]

    const getBank = async (id) => {
        setLoading(true)
        await axios
            .get(`${MainApi}/bank/${id}`)
            .then((res) => {
                setBank([res.data?.data])
            })
            .catch((err) => {
                    new Error(err)
                }
            );
    };

    useEffect(() => {
        if (!!id) {
            getBank(id).then(() => setLoading(false))
        }
    }, [id])

    return (
        <>
            {
                !!bank.length ?
                    <div className='bg-white p-4 w-100'>
                        <h4>Hujjatlar rasmlari</h4>
                        <Row gutter={16}>
                            <Col span={4}>
                                <Image
                                    width={200}
                                    src={bank[0]?.photo?.[0]}
                                />
                            </Col>
                            <Col span={4}>
                                <Image
                                    width={200}
                                    src={bank[0]?.photo?.[1]}
                                />
                            </Col>
                            <Col span={4}>
                                <Image
                                    width={200}
                                    src={bank[0]?.photo?.[2]}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Table dataSource={bank} columns={columns} scroll={{x: "max-content"}}/>
                    </div>
                    :
                    <div>
                        No data
                    </div>
            }

        </>
    )
}

export default Application_page
