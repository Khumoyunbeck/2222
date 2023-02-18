import React from 'react'
import team0 from "../../assets/img/p.jpg"
import { useSelector } from 'react-redux'
import team1 from "../../images/team1.png"
import team2 from "../../images/team2.png"
import team3 from "../../images/team3.png"
import team4 from "../../images/team4.png"
import team5 from "../../images/team5.png"
import { Language } from '../../lang/Languages'

function Ourteam() {
    const { lang } = useSelector(state => state.lang)

    const { a9 } = Language
    const { tm1 } = Language
    const { tm2 } = Language
    const { tm3 } = Language
    const { tm4 } = Language
    const { tm5 } = Language
    const { tm6 } = Language
    const { tm7 } = Language
    const { tm8 } = Language
    const { tm9 } = Language
    const { tm10 } = Language
    const { tm11 } = Language
    const { tm12 } = Language
    const { tm13 } = Language
    const { tm14 } = Language
    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{a9[lang]}</h2>
                <span></span>
            </div>
            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team0} className="team-img-two" alt='img0' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm1[lang]}</li>
                                    <li className='team_list'><span className="material-symbols-outlined">
                                        work
                                    </span>{tm2[lang]}</li>
                                    <li className='team_list'><span className="material-symbols-outlined">
                                        phone
                                    </span>+998 90 770 10 20
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team5} className="team-img-two" alt='img5' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm3[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm2[lang]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team2} className="team-img-two" alt='img1' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm4[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm2[lang]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team1} className="team-img-two" alt='img2' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm5[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm2[lang]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team4} className="team-img-two" alt='img3' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm6[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm7[lang]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={team3} className="team-img-two" alt='img4' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm8[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm7[lang]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={""} className="team-img-two" alt='img4' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm9[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm10[lang]}</li>
                                    <li className='team_list'>
                                        +998 97 650 10 00
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={""} className="team-img-two" alt='img4' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm11[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm12[lang]}</li>
                                    <li className='team_list'>
                                        +998 97 000 85 85
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src={""} className="team-img-two" alt='img4' />
                            <div className='card-body text-center'>
                                <ul>
                                    <li>{tm13[lang]}</li>
                                    <li className='team_list'><span class="material-symbols-outlined">
                                        work
                                    </span>{tm14[lang]}</li>
                                    <li className='team_list'>
                                        +998 90 915 54 94
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Ourteam
