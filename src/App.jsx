import { Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { PhoneFilled } from "@ant-design/icons";
import { Button, message, Modal } from "antd";
import { Language } from "./lang/Languages";
import OrdersAdmin from "./pages/orders_admin/orders_admin";
import EditNews from "./pages/edit_clients/edit_clients";
import CardsAdmin from "./pages/cards/cards";
import AddCard from "./pages/add_card/add_card";
import AdminClient from "./pages/clients_admin/clients_admin";
import AddClients from "./pages/add_clients/add_clients";
import StatisticsPage from "./pages/statistics/statistics";
import Home from "./components/home/Home";
import Aboutus from "./pages/aboutus/aboutus";
import More from "./pages/more/More";
import CardsCar from "./pages/cardsCar/CardsCar";
import Komissia from "./pages/komissia/komissia";
import Vikup from "./pages/vikup/vikup";
import Otsenka from "./pages/otsenka/otsenka";
import Trade from "./pages/trade_in/trade_in";
import Sugurta from "./pages/sugurta/sugurta";
import Credit from "./pages/credit/credit";
import AutoPodbor from "./pages/autopodbor/autopodbor";
import PhotoSale from "./pages/photosale/photosale";
import Compare from "./pages/Compare/Compare";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cars from "./pages/Cars";
import CreditAuto from "./pages/CreditAuto/CreditAuto";
import Applications from "./pages/Applications/Applications";
import Polezniy from "./pages/polezniye/polezniye";
import 'antd/dist/antd.css';
import "./App.css";
import axios from "axios";
import Quality from "./pages/quality/quality";
import Vacancy from "./pages/vacancy/vacancy";
import Ourteam from "./pages/ourteam/ourteam";
import Ourclients from "./pages/ourclients/ourclients";
import RequireAuth from "./utils/privateRoute";
import UsersAdmin from "./pages/Users/Users";
import BanksAdmin from "./pages/banks/Banks";
import Check from "./pages/otsenka/otsenka";
import ModeratorsAdmin from "./pages/moderator/moderator";
import InfoPage from "./pages/InfoPage/InfoPage";
import AdminPage from "./components/admin_page/admin_page";
import CreateModerator from "./pages/create_moderator/create_moderator";
import UpdateModerator from "./pages/update_moderator/update_moderator";
import UpdateApplication from "./pages/update_application/update_application";
import CreateOrder from "./pages/create_order/create_order";
import UpdateOrder from "./pages/update_order/update_order";
import UpdateCar from "./pages/update_car/update_car";
import UpdateClients from "./pages/update_client/update_client";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import BankLogin from "./components/BankLogin/BankLogin";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModeratorLogin from "./components/ModeratorLogin/ModeratorLogin";
import MadAdmin from "./pages/madAdmin/madAdmin";
import CreateMad from "./pages/MadCreate/MadCreate";
import Contact from "./pages/contact/Contact";
import Aksiya from "./components/aksiya/Aksiya";

function App() {
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const [compare, setCompare] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const key = "updatable";

    const { lang } = useSelector((state) => state.lang);
    const { vikfourteen, m1, m2, yuborish, cancel } = Language;

    const addCompare = (car) => {
        if (!!!compare.find((item) => item._id === car._id)) {
            setCompare([...compare, car]);
            toast.success(`${car.madel} solishtirishga qo'shildi`);
        }
    };

    const onSubmit = (values) => {
        axios
            .post("https://dev-rauto.uz/order/add", values)
            .then((res) => {
                messageApi.open({
                    key,
                    type: "success",
                    content: "Ваше сообщение было отправлено успешно!!",
                    duration: 1,
                });
                setIsOpen(false);

            })
            .catch ((err) => new Error(err));
            setName("");
            setPhone("");
};

return (
    <>
        {!/admin/g.test(location.pathname) &&
            !/sign-in/g.test(location.pathname) &&
            !/sign-up/g.test(location.pathname) &&
            !/bank/g.test(location.pathname) &&
            !/user/g.test(location.pathname) &&
            !/moderator/g.test(location.pathname) &&
            !/login/g.test(location.pathname) && <Header />
        }
        <ToastContainer />
        <Routes>
            <Route path="/user" element={<AdminPage />} />
            <Route path="/aksiya" element={<Aksiya />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/moderator" element={<ModeratorLogin />} />
            <Route path="/bank" element={<BankLogin />} />
            <Route path="/admin/orders" element={<RequireAuth><OrdersAdmin /></RequireAuth>} />
            <Route path="/admin/orders/:id" element={<UpdateOrder />} />
            <Route path="/admin/orders/create" element={<CreateOrder />} />
            <Route path="/admin/news_edit/:id" element={<EditNews />} />
            <Route path="/admin/cards" element={<RequireAuth><CardsAdmin /></RequireAuth>} />
            <Route path="/admin/card/:id" element={<RequireAuth><UpdateCar /></RequireAuth>} />
            <Route path="/admin/card/add" element={<AddCard />} />
            <Route path="/admin/card/edit/:id" element={<AddCard />} />
            <Route path="/admin/clients" element={<AdminClient />} />
            <Route path="/admin/clients/add" element={<AddClients />} />
            <Route path="/admin/clients/:id" element={<UpdateClients />} />
            <Route path="/admin/statistic/all" element={<StatisticsPage />} />
            <Route path="/admin/info" element={<InfoPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/" element={<Home addCompare={addCompare} />} />
            <Route path="/moderators" element={<MadAdmin />} />
            <Route
                path="/compare"
                element={<Compare compare={compare} setCompare={setCompare} />}
            />
            <Route path="/more/:id" element={<More />} />
            <Route path="/ourclients" element={<Ourclients />} />
            <Route path="/cards" element={<CardsCar />} />
            <Route path="/komissia" element={<Komissia />} />
            <Route path="/vikupAvto" element={<Vikup />} />
            <Route path="/otsenka" element={<Otsenka />} />
            <Route path="/trade_in" element={<Trade />} />
            <Route path="/insurance" element={<Sugurta />} />
            <Route path="/creditauto" element={<Credit />} />
            <Route path="/qualitypolicy" element={<Quality />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/autopodbor" element={<AutoPodbor />} />
            <Route path="/photosale" element={<PhotoSale />} />
            <Route path="/cars" element={<Cars addCompare={addCompare} />} />
            <Route path="/credit/:id" element={<CreditAuto />} />
            <Route path="/admin/applications" element={<Applications />} />
            <Route path="/admin/users" element={<UsersAdmin />} />
            <Route path="/admin/moderators" element={<ModeratorsAdmin />} />
            <Route path="/admin/moderators/create" element={<CreateModerator />} />
            <Route path="/moderators/add" element={<CreateMad />} />
            <Route path="/admin/moderators/:id" element={<UpdateModerator />} />
            <Route path="/admin/banks" element={<BanksAdmin />} />
            <Route path="/admin/otsenka" element={<Check />} />
            <Route path="/useful" element={<Polezniy />} />
            <Route path="/admin/applications/:id" element={<UpdateApplication />} />
            <Route path="/applications/create" element={<CreditAuto />} />
            <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Button
            shape="circle"
            icon={<PhoneFilled />}
            size="large"
            color="yellow"
            className="call-button"
            onClick={() => setIsOpen(!isOpen)}
        />



        
        <Modal
            open={isOpen}
            // onOk={() => setIsOpen(!isOpen)}
            onCancel={() => setIsOpen(!isOpen)}
            footer={false}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="sale-card_wrapper">
                    <h4>{vikfourteen[lang]}</h4>
                    <br />
                    <div className="input-wrap">
                        <span className="material-symbols-outlined">person</span>
                        <input
                            {...register("ismiz", { required: true })}
                            type="text"
                            className="form-control page_title_uz"
                            placeholder={m1[lang]}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="material-symbols-outlined">phone</span>
                        <input
                            {...register("phone", { required: true })}
                            type="number"
                            className="form-control page_title_uz"
                            placeholder={m2[lang]}
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    {contextHolder}
                    <Button
                        onClick={() => {
                            
                            setIsOpen(!isOpen)
                        setName('')
                        setPhone('')
                        }}

                    >{cancel[lang]}</Button>
                    <Button
                        key="submit"
                        htmlType="submit"
                        style={{ marginLeft: "auto" }}
                    >
                        {yuborish[lang]}
                    </Button>
                </div>
            </form>
        </Modal>
        {!/admin/g.test(location.pathname) &&
            !/sign-in/g.test(location.pathname) &&
            !/sign-up/g.test(location.pathname) &&
            !/bank/g.test(location.pathname) &&
            !/user/g.test(location.pathname) &&
            !/moderator/g.test(location.pathname) &&
            !/login/g.test(location.pathname) && <Footer />}
    </>
);
}

export default App;
