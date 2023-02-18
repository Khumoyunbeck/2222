import {useLocation} from "react-router";
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Row} from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import axios from "axios";
import {MainApi} from "../../api";
import {useEffect, useState} from "react";
import Users from "../../components/users/users";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import LogoutComponent from "../../components/logoutComponent/logoutComponent";

function UsersAdmin() {
    const location = useLocation()
    const [users, setUsers] = useState([])
    const {lang} = useSelector(state => state.lang)
    const {home,search} = Language;
    const geUsers = async () => {
        await axios
            .get(`${MainApi}/user/all`)
            .then((res) => console.log(res,setUsers(res?.data?.data)))
            .catch((err) => new Error(err));
    };

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
                        <Button className='rounded' type='primary' danger>
                            <Link to='/'>{home[lang]}</Link>
                        </Button>
                    </Col>
                    <div style={{width: "100%"}}>
                            <Users dataSource={users}/>
                    </div>

                </Row>
            </div>
        </div>
    )
}

export default UsersAdmin
