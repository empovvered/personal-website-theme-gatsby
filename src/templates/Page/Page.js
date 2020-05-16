import React from "react";
import MainLayout from "layouts/MainLayout";

const Page = ({pageContext}) => (
  <MainLayout>
    <div className="container">
      <div className="row">
        <div className="col-8 offset-4">
          {console.log(pageContext)}
        </div>
      </div>
    </div>
  </MainLayout>
);

export default Page;
