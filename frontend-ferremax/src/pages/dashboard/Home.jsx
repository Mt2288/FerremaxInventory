import React from "react";
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
const Home = () => {
  return (
    <React.Fragment>
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
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Home</h1>
              </div>

              {/* Content page */}
              {/* <!-- Content Row --> */}
              <div class="row">
                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div class="col-xl-6 col-md-6 mb-4">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur expedita ad vitae harum assumenda enim error perferendis unde veritatis animi, culpa, dignissimos, odit accusantium fuga blanditiis rem cum impedit.</p>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div class="col-xl-6 col-md-6 mb-4">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis nihil eius quia sunt atque assumenda, incidunt odio quos, odit officiis voluptatibus cumque culpa fuga facilis placeat inventore est? Harum.</p>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
