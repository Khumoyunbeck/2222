import AdminHeader from "../../components/admin_header/admin_header";
import AddCardForm from "../../components/add_card_form/add_card_form";
import {useMediaQuery} from "react-responsive";

function AddCard() {
    const is1024 = useMediaQuery({query: "(max-width: 1024px)"})

  return (
    <>
        {
            !is1024 &&
            <AdminHeader />
        }
      <AddCardForm />
    </>
  );
}

export default AddCard;
