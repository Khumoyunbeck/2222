import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Cars from "../cars/cars";
import axios from "axios";
import {MainApi} from "../../api";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {Language} from "../../lang/Languages";
import {useMediaQuery} from "react-responsive"
import LogoutComponent from "../logoutComponent/logoutComponent";

function AdminCards() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [cars, setCars] = useState([])
    const [type, setType] = useState("")
    const {lang} = useSelector(state => state.lang)
    const {deleteOrd, create, listCars, home, search} = Language;

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
    }, [])

    const getCars = async () => {
        await axios
            .get(`${MainApi}/car/all`)
            .then((res) => setCars(res?.data?.data))
            .catch((err) => new Error(err));
    };

    // eslint-disable-next-line no-unused-vars
    const {isLoading} = useSelector((state) => state.car);

    const deleteCar = (id) => {
        Modal.confirm({
            centered: true,
            title: deleteOrd[lang],
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/car/${id}`)
                    .then(() => {
                        dispatch(getCars());
                    })
                    .catch((err) => console.log(err));
            },
        })
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            getCars();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const data = useMemo(() => {
        return cars?.map(item => ({
            ...item,
            data: {_id: item?._id, status: item?.status}
        }))
    }, [cars])

    const is1024 = useMediaQuery({query: "(max-width: 1024px)"})

    return (
        <div className={`row pt-5 ${is1024 ? "page_list_mobile" : "page_list"} `}>
            <LogoutComponent/>
            <div className="col-xl-12">
                <div className="card-avto">
                    <div className="card-avto-body page_body_admin">
                        <div className="box page_box content_wrapper">
                            {
                                !is1024 &&
                                <form name="search" className="search_form">
                                    <input
                                        type="text"
                                        className="input"
                                        name="txt"
                                        onMouseOut="document.search.txt.value = ''"
                                    />
                                    <span className="deff">{search[lang]}</span>
                                </form>
                            }
                        </div>
                        <div
                            className="btn btn-danger btn-sm float-right mr15"
                            onClick={() => navigate("/")}
                        >
                            {home[lang]}
                        </div>
                        <Link
                            to="/admin/card/add"
                            className="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"
                        >
                            {create[lang]}
                        </Link>
                        <h4 className="mt-0 mb-4">{listCars[lang]}</h4>
                        {
                            type === "user" ?
                                <Cars
                                    dataSource={data?.filter(i => i?.userId?._id
                                        ===
                                        localStorage?.getItem("user_id"))} getCars={getCars}/>
                                :
                                <Cars
                                    dataSource={data} deleteCar={deleteCar} getCars={getCars}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCards;
