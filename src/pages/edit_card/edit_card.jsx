import AdminHeader from '../../components/admin_header/admin_header'
import EditCardForm from '../../components/edit_card/edit_card'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function EditCard() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!!!localStorage.getItem('token')) navigate('/login')
  }, [localStorage.getItem('token')])

  return (
    <div className='d-flex'>
      <AdminHeader />
      <EditCardForm />
    </div>
  );
}

export default EditCard;
