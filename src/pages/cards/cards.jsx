import AdminHeader from "../../components/admin_header/admin_header";
import AdminCards from "../../components/card_pages/card_pages";
import {useMediaQuery} from "react-responsive"


function CardsAdmin() {

    const is1024 = useMediaQuery({query: "(max-width: 1024px)"})

    return (
        <div className="d-flex">
            {
                !is1024 &&
                <AdminHeader/>
            }
            <AdminCards/>
        </div>
    );
}

export default CardsAdmin;
