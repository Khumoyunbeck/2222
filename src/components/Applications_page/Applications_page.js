import { Link } from 'react-router-dom'

const Applications_page = () => {
    return (
        <div className='table-responsive mt-5'>
            <table className='table table-hover'>
                <thead className='thead-dark'>
                    <tr className='textAlign'>
                        <th scope='col'>Rasm</th>
                        <th scope='col'>ID</th>
                        <th scope='col'>Sana</th>
                        <th scope='col'>Model</th>
                        <th scope='col'>Ismi</th>
                        <th scope='col'>Havola</th>
                        <th scope='col'>Tel. raqam</th>
                        <th scope='col'>Batafsil</th>
                        <th scope='col'>O'chirish </th>
                    </tr>
                </thead>
                <tbody className='thead-dark'>
                    <tr>
                        <td style={{ width: '130px', height: '100px' }}>
                            <img
                                src='/images/Group1.jpg'
                                alt='photo'
                                style={{ objectFit: 'cover' }}
                                width='100%'
                                height='100%'
                            />
                        </td>
                        <td>12345</td>
                        <td>12.12.1212</td>
                        <td>Lacetti</td>
                        <td>Ismi</td>
                        <td>Havola</td>
                        <td>+998991234567</td>
                        <td>
                            <button
                                style={{
                                    padding: '5px 10px',
                                    backgroundColor: '#00BC1E',
                                    borderRadius: 3,
                                }}
                            >
                                <Link to={`/admin/application/123`} className='text-white'>
                                    Batafsil
                                </Link>
                            </button>
                        </td>
                        <td>
                            <button
                                // onClick={() => deleteOrder(item._id)}
                                style={{
                                    border: '1px solid black',
                                    padding: '5px 10px',
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    {/* <h1>Loading...</h1> */}
                </tbody>
            </table>
        </div>
    )
}

export default Applications_page
