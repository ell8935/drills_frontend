import { useTranslation } from "react-i18next";
import Header from "./shared/components/Header/Header";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./modules/navigation/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./shared/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId="39718749508-0un5lm7j8jlqogiu52c35ev8up7albaf.apps.googleusercontent.com">
          <AppRoutes />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
