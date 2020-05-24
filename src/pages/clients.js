import React from "react";
import MainLayout from "layouts/MainLayout";
import Clients from "components/Clients/Clients";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const ClientsPageWrapper = styled.div`
  padding-top: 50px;
  @media ${device.md} {
    padding-top: 25px;
  }
`;

const ClientsPage = () => {
  return (
    <>
      <ClientsPageWrapper>
        <MainLayout>
          <Clients />
        </MainLayout>
      </ClientsPageWrapper>
    </>
  );
};
export default ClientsPage;
