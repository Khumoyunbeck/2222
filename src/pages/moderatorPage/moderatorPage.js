import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";
import Mad from "../mad/mad";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import LogoutComponent from "../../components/logoutComponent/logoutComponent";

function MadAdminPage() {
    const [mads, setMads] = useState([])
    const {lang} = useSelector(state => state.lang)
    const {deleteOrd,search,home,create,list} = Language;

    const getMads = async () => {
        await axios
            .get(`${MainApi}/auth/all`)
            .then((res) => setMads(res?.data?.data))
            .catch((err) => new Error(err));
    };

    const deleteMad = id => {
        Modal.confirm({
            centered: true,
            title: deleteOrd[lang],
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/auth/${id}`)
                    .then(res => {
                        getMads()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        getMads()
    }, [])

    return (
        <div className='row pt-5 announcements_list'>
            <LogoutComponent/>
            <div className='col-xl-12'>
                <div className='box'>
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
                <Link to='/admin/orders' className='btn btn-danger btn-sm float-right'>
                    {home[lang]}
                </Link>
                <Link
                    to='add'
                    className='btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right'
                >
                    {create[lang]}
                </Link>

                <h4 className='mt-0 mb-4 pt-2'>{list[lang]}</h4>
                <Mad dataSource={mads} deleteMad={deleteMad}/>
            </div>
        </div>
    )
}

export default MadAdminPage
