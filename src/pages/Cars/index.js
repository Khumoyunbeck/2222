/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Checkbox, Col, Collapse, Input, message, Radio, Row, Select, Slider} from 'antd'
import {Language} from '../../lang/Languages'
import {getCars} from '../../store/car/car'
import CardCar from '../../components/card_car/Card_car'
import axios from "axios";
import {MainApi} from "../../api";

const Car = ({addCompare}) => {
    const dispatch = useDispatch()
    const [year, setYear] = useState(2000)
    const [kilometr, setKilometr] = useState(0)
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [carsData, setCarsData] = useState([])

    const {lang} = useSelector(state => state.lang)
    const {cars} = useSelector(state => state.car)

    const {madel, m8, yili, yoqilgi, transmission, yurgani, narxi, kredit,filter,load,oq,yok,qfr,sy,kl,my,qr,ql,bn,gb,dl,er,gd,gz,ma,av,kt,ke} = Language

    const handleSubmit = () => {
        axios.get(`${MainApi}/car/query?yili_dan=${year}&yurgani_dan=${kilometr}&narxi_dan=${price}&madel=${type}`).then(r => {
            setCarsData(r?.data?.data)
        }).catch(err => message.error(err))
    }

    const handleLoad = () => {
      window.location.reload()
    }

    useEffect(() => {
        dispatch(getCars())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!!cars) {
            setCarsData(cars?.data)
        }
    }, [cars])

    return (
        <Row gutter={20}>
            <Col md={4}>
                <div style={{backgroundColor: '#f6f6f6'}}>
                    <Collapse bordered={false}>
                        {/* Model */}
                        <Collapse.Panel header={madel[lang]} key={1}>
                            <Select style={{width: '100%'}} value={type} onChange={e => setType(e)}>
                                {[
                                    {value: 'Damas DLX', name: 'Damas DLX'},
                                    {value: 'Damas Labo', name: 'Damas Labo'},
                                    {value: 'Matiz', name: 'Matiz'},
                                    {value: 'Matiz Best', name: 'Matiz Best'},
                                    {value: 'Nexia DOHS', name: 'Nexia DOHS'},
                                    {value: 'Nexia SOHS', name: 'Nexia SOHS'},
                                    {value: 'Nexia-3 1-поз/pozit', name: 'Nexia-3 1-поз/pozit'},
                                    {value: 'Nexia-3 2-поз/pozit', name: 'Nexia-3 2-поз/pozit'},
                                    {value: 'Nexia-3 3-поз/pozit', name: 'Nexia-3 3-поз/pozit'},
                                    {value: 'Nexia-3 4-поз/pozit', name: 'Nexia-3 4-поз/pozit'},
                                    {value: 'Spark 1-поз/pozit', name: 'Spark 1-поз/pozit'},
                                    {value: 'Spark 1-евро поз/pozit', name: 'Spark 1-евро поз/pozit'},
                                    {value: 'Spark 2-поз/pozit', name: 'Spark 2-поз/pozit'},
                                    {value: 'Spark 2-евро поз/pozit', name: 'Spark 2-евро поз/pozit'},
                                    {value: 'Spark 3-поз/pozit', name: 'Spark 3-поз/pozit'},
                                    {value: 'Spark 3-евро поз/pozit', name: 'Spark 3-евро поз/pozit'},
                                    {value: 'Spark 4-поз/pozit', name: 'Spark 4-поз/pozit'},
                                    {value: 'Spark 4-евро поз/pozit', name: 'Spark 4-евро поз/pozit'},
                                    {value: 'Cobalt 1-поз/pozit', name: 'Cobalt 1-поз/pozit'},
                                    {value: 'Cobalt 2-поз/pozit', name: 'Cobalt 2-поз/pozit'},
                                    {
                                        value: 'Cobalt 2-евро поз/pozit',
                                        name: 'Cobalt 2-евро поз/pozit',
                                    },
                                    {value: 'Cobalt 3-поз/pozit', name: 'Cobalt 3-поз/pozit'},
                                    {value: 'Cobalt 4-поз/pozit', name: 'Cobalt 4-поз/pozit'},
                                    {
                                        value: 'Cobalt 4-евро поз/pozit',
                                        name: 'Cobalt 4-евро поз/pozit',
                                    },
                                    {
                                        value: 'Lacetti 1-п L-COMFORT PLUS',
                                        name: 'Lacetti 1-п L-COMFORT PLUS',
                                    },
                                    {
                                        value: 'Lacetti Full CDX A/T Elegant Plus',
                                        name: 'Lacetti Full CDX A/T Elegant Plus',
                                    },
                                    {value: 'Lacetti L-Style MT', name: 'Lacetti L-Style MT'},
                                    {value: 'Lacetti L-Style AT', name: 'Lacetti L-Style AT'},
                                    {value: 'Malibu-1 1-поз/pozit', name: 'Malibu-1 1-поз/pozit'},
                                    {value: 'Malibu-1 2-поз/pozit', name: 'Malibu-1 2-поз/pozit'},
                                    {value: 'Malibu-1 3-поз/pozit', name: 'Malibu-1 3-поз/pozit'},
                                    {value: 'Malibu-2 2.0L LTZ', name: 'Malibu-2 2.0L LTZ'},
                                    {value: 'Malibu-2 2-поз/pozit', name: 'Malibu-2 2-поз/pozit'},
                                    {value: 'Malibu-2 3-поз/pozit', name: 'Malibu-2 3-поз/pozit'},
                                    {
                                        value: 'Tracker-2 1.0T LT AT FWD',
                                        name: 'Tracker-2 1.0T LT AT FWD',
                                    },
                                    {
                                        value: 'Tracker-2 LT AT Redline 1.0L',
                                        name: 'Tracker-2 LT AT Redline 1.0L',
                                    },
                                    {
                                        value: 'Equinox AT 1LT FWD MH',
                                        name: 'Equinox AT 1LT FWD MH',
                                    },
                                    {
                                        value: 'Equinox AT 1LT AWD MH',
                                        name: 'Equinox AT 1LT AWD MH',
                                    },
                                    {
                                        value: 'Equinox AT 3LT AWD MH',
                                        name: 'Equinox AT 3LT AWD MH',
                                    },
                                    {
                                        value: 'Traverse Начальная комплектация',
                                        name: 'Traverse Начальная комплектация',
                                    },
                                    {
                                        value: 'Traverse Premier MY22',
                                        name: 'Traverse Premier MY22',
                                    },
                                    {value: 'Trailblazer LTZ 6АT', name: 'Trailblazer LTZ 6АT'},
                                    {
                                        value: 'Tahoe Начальная комплектация',
                                        name: 'Tahoe Начальная комплектация',
                                    },
                                    {value: 'Tahoe RST MY22', name: 'Tahoe RST MY22'},
                                ].map(item => (
                                    <Select.Option value={item.value} key={item.name}>
                                        {item.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Collapse.Panel>
                        {/* Year */}
                        <Collapse.Panel header={yili[lang]} key={2}>
                            <Slider
                                min={2000}
                                max={2023}
                                defaultValue={year}
                                onChange={value => setYear(value)}
                                onAfterChange={value => setYear(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={year} onChange={value => setYear(value?.target?.value)}/>
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Rangi */}
                        <Collapse.Panel header={m8[lang]} key={3}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{width: '100%'}}
                            >
                                <Row>
                                    {[
                                        {label: oq[lang], value: 'white'},
                                        {label: yok[lang], value: 'light-gray'},
                                        {label: qfr[lang], value: 'light-black'},
                                        {label: sy[lang], value: 'yellow-green'},
                                        {label: kl[lang], value: 'gray'},
                                        {label: my[lang], value: 'blue'},
                                        {label: qr[lang], value: 'black'},
                                        {label: ql[lang], value: 'red'},
                                    ].map(item => (
                                        <Col span={12} key={item.label}>
                                            <Checkbox value={item.value}>{item.label}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Yurgani */}
                        <Collapse.Panel header={yurgani[lang]} key={4}>
                            <Slider
                                min={0}
                                max={100000}
                                defaultValue={kilometr}
                                onChange={value => setKilometr(value)}
                                onAfterChange={value => setKilometr(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={kilometr} addonAfter='km'
                                           onChange={value => setKilometr(value?.target?.value)}
                                    />
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Yoqilgi turi */}
                        <Collapse.Panel header={yoqilgi[lang]} key={5}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{width: '100%'}}
                            >
                                <Row>
                                    {[
                                        {value: 'Бензин', name: bn[lang]},
                                        {value: 'Газ-Бензин', name: gb[lang]},
                                        {value: 'Дизель', name: dl[lang]},
                                        {value: 'Электрокар', name: er[lang]},
                                        {value: 'Гибрид', name: gd[lang]},
                                        {value: 'Газ', name: gz[lang]},
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Checkbox value={item.value}>{item.name}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Transmission */}
                        <Collapse.Panel header={transmission[lang]} key={6}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{width: '100%'}}
                            >
                                <Row>
                                    {[
                                        {value: 'Mexanika', name: ma[lang]},
                                        {value: 'Avtomat', name: av[lang]},
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Checkbox value={item.value}>{item.name}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Price */}
                        <Collapse.Panel header={narxi[lang]} key={7}>
                            <Slider
                                min={10000000}
                                max={10000000000}
                                defaultValue={price}
                                onChange={value => setPrice(value)}
                                onAfterChange={value => setPrice(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={price} addonAfter="so'm"
                                           onChange={value => setPrice(value?.target?.value)}/>
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Kredit */}
                        <Collapse.Panel header={kredit[lang]} key={8}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{width: '100%'}}
                            >
                                <Row>
                                    {[
                                        {value: false, name: kt[lang]},
                                        {value: false, name: ke[lang]},
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Radio defaultChecked={item.value}>{item.name}</Radio>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                    </Collapse>
                </div>
                <div className="submit">
                    <Button onClick={() => handleSubmit()} type="primary">{filter[lang]}</Button>
                    <Button onClick={() => handleLoad()} type="danger" className="ml20">{load[lang]}</Button>
                </div>
            </Col>
            <Col md={20}>
                <Row style={{width: "100%"}}>
                    {carsData?.length > 0 &&
                    carsData?.map((car, index) => {
                            if (car.status) {
                                return (
                                    <Col xl={8} l={8} md={12} sm={24}>
                                        <CardCar key={index} car={car} addCompare={addCompare}/>
                                    </Col>
                                )
                            }
                        }
                    )}
                </Row>
            </Col>
        </Row>
    )
}

export default Car
