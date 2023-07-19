import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/admin-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import { AuthenticationGuard } from "./components/authentication-guard";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
      <Route path="/admin" element={<AuthenticationGuard component={AdminPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
