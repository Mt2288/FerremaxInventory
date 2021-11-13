import FormProductos from "../../components/FormProductos";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

const EditProduct = () => {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
          <TopBar />
          {/* <!-- End of Topbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-left mb-4">
              <h1 className="h3 mb-0 text-gray-800">Actualizar Producto</h1>
            </div>
            <FormProductos />

            {/* Content page */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
};

export default EditProduct;
