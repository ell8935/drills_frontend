import { useTranslation } from "react-i18next";
import Header from "./shared/components/Header/Header";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
