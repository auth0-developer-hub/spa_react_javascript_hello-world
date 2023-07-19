import { withAuthenticationRequired } from '@auth0/auth0-react';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component);

  return <Component />;
}