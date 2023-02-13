import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./page-loader";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};
