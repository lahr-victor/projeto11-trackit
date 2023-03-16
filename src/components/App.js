import GlobalStyle from "../assets/styles/GlobalStyle";
import ResetStyle from "../assets/styles/ResetStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HabitsPage } from "../pages/HabitsPage/HabitsPage";
import { HistoryPage } from "../pages/HistoryPage/HistoryPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { TodayPage } from "../pages/TodayPage/TodayPage";

export function App() {
  return (
      <>
          <ResetStyle />
          <GlobalStyle />

          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegistrationPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/historico" element={<HistoryPage />} />
                <Route path="/hoje" element={<TodayPage />} />
            </Routes>
          </BrowserRouter>
      </>
  );
}