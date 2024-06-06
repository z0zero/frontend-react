//import SidebarMenu
import SidebarMenu from "../../../components/SidebarMenu";

export default function UsersEdit() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">ADD USER</div>
            <div className="card-body">HALAMAN USER EDIT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
