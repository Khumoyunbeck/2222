import axios from 'axios'
import { useEffect, useState } from 'react'
import Orders from "../orders/orders";
import { MainApi } from "../../api";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
// import lang from "../../lang/lang";
import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";
import LogoutComponent from "../logoutComponent/logoutComponent";

function AdminOrders() {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios
            .get(`${MainApi}/order/all`)
            .then(res => {
                setOrders(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteOrder = id => {
        Modal.confirm({
            centered: true,
            title: deleteOrd[lang],
            icon: <ExclamationCircleOutlined />,
            onOk() {
                axios
                    .delete(`${MainApi}/order/${id}`)
                    .then(res => {
                        getOrders()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        getOrders()
    }, [])

    const { lang } = useSelector(state => state.lang)
    const { search, home, list, deleteOrd } = Language;

    return (
        <div className='ml-5 admin_news_section'>
            <div className='row pt-5'>
                <LogoutComponent />
                <div className='col-12'>
                    <div className='box content_wrapper'>
                        <form name='search' className='search_form'>
                            <input
                                type='text'
                                className='input'
                                name='txt'
                                onmouseout="document.search.txt.value = ''"
                            />
                            <span className='deff'>{search[lang]}</span>
                        </form>
                    </div>
                    {" "}
                    <div className="fg">
                        <Button onClick={() => navigate("/")} type="danger">
                            {home[lang]}
                        </Button>
                        {/*<Button onClick={() => navigate("/admin/orders/create")} type="primary">*/}
                        {/*    {create[lang]}*/}
                        {/*</Button>*/}
                    </div>
                    <h4 className='mt-0 mb-4'>{list[lang]}</h4>
                    <div className='table-responsive'>
                        <Orders dataSource={orders} deleteOrder={deleteOrder} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders
