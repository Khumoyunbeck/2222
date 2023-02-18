import React, { useEffect, useState } from 'react';
import AdminHeader from "../../components/admin_header/admin_header";
import { Link } from "react-router-dom";
import axios from "axios";
import { MainApi } from "../../api";
import { useParams } from "react-router";
import { Row, Col, Image } from "antd";

function SingleCar(props) {
    const { id } = useParams()
    const [user, setUser] = useState([])

    const geUser = async () => {
        await axios
            .get(`${MainApi}/car/${id}`)
            .then((res) => setUser(res?.data))
            .catch((err) => new Error(err));
    };

    useEffect(() => {
        geUser();
    }, [])

    return (
        <div className="d-flex">
            <AdminHeader />
            <div className="row pt-5 page_list">
                <div className="col-xl-12">
                    <div className="card-avto">
                        <div className="card-avto-body page_body_admin">
                            <div className="box page_box content_wrapper">
                                <form name="search" className="search_form">
                                    <input
                                        type="text"
                                        className="input"
                                        name="txt"
                                        onMouseOut="document.search.txt.value = ''"
                                    />
                                    <span className="deff">Search</span>
                                </form>

                            </div>
                            <div
                                className="btn btn-danger btn-sm float-right"
                            // onClick={() => logout()}
                            >
                                Chiqish
                            </div>
                            <Link
                                to="/admin/card/add"
                                className="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"
                            >
                                Avtomashina qo'shish
                            </Link>
                            <h4 className="mt-0 mb-4">Avtomobil haqida batafsil malumot</h4>
                            <div className="mainWrapper">
                                <div className="w30">
                                    <Row gutter={[16, 16]}>
                                        <Col>Madel</Col>...<Col>{user?.madel}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Marka</Col>...<Col>{user?.marka}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Color</Col>...<Col>{user?.color}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Yili</Col>...<Col>{user?.yili}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Divigitel</Col>...<Col>{user?.divigitel}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Yoqilgi</Col>...<Col>{user?.yoqilgi}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Transmission</Col>...<Col>{user?.transmission}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Kuzuv</Col>...<Col>{user?.kuzuv}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>perevod</Col>...<Col>{user?.perevod}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Narxi</Col>...<Col>{user?.narxi}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Aksiya</Col>...<Col>{user?.aksiya}</Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col>Opisaniya</Col>...<Col>{user?.opisaniya}</Col>
                                    </Row>
                                </div>
                                <div className="w70">
                                    <Row gutter={[20, 20]}>
                                        {
                                            user?.photo?.map((i, k) => {
                                                return (
                                                    <Col span={8}>
                                                        <Image
                                                            key={k}
                                                            className="sp-img"
                                                            src={i}
                                                        />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCar;
