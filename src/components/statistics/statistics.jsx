import {useEffect, useState} from 'react'
import pageIcon from '../../images/landing-page.png'
import priceTag from '../../images/price-tag.png'
import order from '../../images/order.png'
import axios from 'axios'
import {MainApi} from "../../api";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import LogoutComponent from "../logoutComponent/logoutComponent";


function Statistics() {
    const [user, setUser] = useState(0)
    const [car, setCar] = useState(0)
    const [client, setClient] = useState(0)
    const [bank, setBank] = useState(0)
    const [mad, setMad] = useState(0)
    const [ord, setOrd] = useState(0)

    const {lang} = useSelector(state => state.lang)
    const {users, cars, clients, apps, banks, orders_all, statistikasi} = Language

    useEffect(() => {
        axios.get(`${MainApi}/user/all`)
            .then((data) => {
                setUser(data?.data?.data?.length)
            });

    }, [])


    useEffect(() => {
        axios.get(`${MainApi}/car/all`)
            .then((data) => {
                setCar(data?.data?.data?.length)
            });
    }, [])


    useEffect(() => {
        axios.get(`${MainApi}/client/all`)
            .then((data) => {
                setClient(data?.data?.data?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/bank/all`)
            .then((data) => {
                setBank(data?.data?.data?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/xodim/all`)
            .then((data) => {
                setMad(data?.data?.data?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/order/all`)
            .then((data) => {
                setOrd(data?.data?.data?.length)
            });
    }, [])

    return (
        <>
            <div className="row pt-3 statistics_wrapper">
                <LogoutComponent/>
                <h3>{statistikasi[lang]}</h3>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={priceTag} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">{users[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {user}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={car} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">{cars[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {car}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={order} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">{clients[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {client}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">{apps[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {bank}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">{banks[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {mad}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">{orders_all[lang]}</h5>
                            </div>
                            <h3 className="mt-4">
                                {ord}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
