import { useTranslation } from "react-i18next";
import Header from "./shared/components/Header/Header";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./modules/navigation/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./shared/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_OAUTH_PROVIDER_CLIENT_ID!}
        >
          <AppRoutes />
          <ToastContainer />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
