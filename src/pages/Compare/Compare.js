import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";

const Compare = ({ compare, setCompare }) => {
    const { lang } = useSelector(state => state.lang)
    const { params, del, Narxi, brend, Model, m8, year, dvigatel_hajmi, m11, kuzuv, perevod, yurgan_yoli } = Language;

    const lists = [
        { text: Narxi[lang], key: 'narxi' },
        { text: brend[lang], key: 'marka' },
        { text: Model[lang], key: 'madel' },
        { text: m8[lang], key: 'color' },
        { text: year[lang], key: 'yili' },
        { text: dvigatel_hajmi[lang], key: 'divigitel' },
        { text: m11[lang], key: 'yoqilgi' },
        { text: kuzuv[lang], key: 'kuzuv' },
        { text: perevod[lang], key: 'perevod' },
        { text: yurgan_yoli[lang], key: 'yurgani' },
    ]

    function deleteItem(id) {
        compare.forEach((item, index) => {
            if (item._id === id) {
                compare.splice(index, 1)
            }
        })
        setCompare([...compare])
    }

    return (
        <div className="wcw">
            <div className="w456">
                <table className='table table-hover ertw'>
                    <thead>
                        <tr>
                            <th>{params[lang]}</th>
                            {compare.map(car => (
                                <th className="thw">
                                    <img
                                        src={car.photo[0]}
                                        alt='rasm'
                                        className="cimg"
                                    />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {lists.map(list => (
                            <tr>
                                <th>{list.text}</th>
                                {compare.map(car => (
                                    <td>{car[list.key]}</td>
                                ))}
                            </tr>
                        ))}
                        <br />
                        {compare.length > 0 && (
                            <tr>
                                <th></th>
                                {compare.map(car => (
                                    <td>
                                        <button onClick={() => deleteItem(car._id)}>{del[lang]}</button>
                                    </td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Compare
