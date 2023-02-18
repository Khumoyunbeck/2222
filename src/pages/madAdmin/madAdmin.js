import AdminHeader from "../../components/admin_header/admin_header";
import MadAdminPage from "../moderatorPage/moderatorPage";

function MadAdmin() {

    return (
        <div className="d-flex">
            <AdminHeader />
            <MadAdminPage />
        </div>
    );
}

export default MadAdmin;
