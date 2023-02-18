import {useLocation, useNavigate} from "react-router";
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Modal, Row} from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import axios from "axios";
import {MainApi} from "../../api";
import {useEffect, useState} from "react";
import Users from "../../components/users/users";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import LogoutComponent from "../../components/logoutComponent/logoutComponent";

function ModeratorsAdmin() {
    const location = useLocation()
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const {lang} = useSelector(state => state.lang)
    const {search,create,home,success} = Language;

    const geUsers = async () => {
        await axios
            .get(`${MainApi}/xodim/all`)
            .then((res) => console.log(res, setUsers(res?.data?.data)))
            .catch((err) => new Error(err));
    };

    const handleNavigate = () => {
        navigate("/admin/moderators/create")
    }

    const handleNavigateUpdate = (id) => {
        navigate(`/admin/moderators/${id}`)
    }

    const deleteBank = id => {
        Modal.confirm({
            centered: true,
            title: "Bank xodimini o'chirish",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/xodim/${id}`)
                    .then(res => {
                        geUsers()
                        toast.success(success[lang])
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        geUsers();
    }, [])

    return (
        <div className='d-flex'>
            <AdminHeader/>
            <div className='page_list'>
                <div className="pt-5">
                    <LogoutComponent/>
                </div>
                <Row>
                    <Col span={24} className='d-flex justify-content-between align-items-center py-3'>
                        <h3>
                            {location.pathname === '/admin/applications'
                                ? 'Tushgan arizalar'
                                : 'Tushgan arizalar batafsil'}
                        </h3>
                        <form className='d-flex my-auto'>
                            <Form.Item name='search' className='mb-0'>
                                <Input className='rounded'/>
                            </Form.Item>
                            <Button className='rounded' type='primary'>
                                {search[lang]}
                            </Button>
                        </form>
                        <Col>
                            <Button className='rounded' type='primary' danger>
                                <Link to='/'>{home[lang]}</Link>
                            </Button>
                            {" "}
                            <Button className='rounded' type='primary' onClick={() => handleNavigate()}>
                                {create[lang]}
                            </Button>
                        </Col>
                    </Col>
                    <div style={{width: "100%"}}>
                        <Users dataSource={users} isbank={true} deleteBank={deleteBank} updateBank={handleNavigateUpdate}/>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default ModeratorsAdmin
