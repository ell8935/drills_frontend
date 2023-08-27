import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./modules/navigation/AppRoutes";
import theme from "./shared/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { getToken } from "./shared/utils/localStorageUtils";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_PROVIDER_CLIENT_ID!}>
          <AppRoutes />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
