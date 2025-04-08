"use client";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consentGiven = Cookie.get("cookieConsent");
    if (!consentGiven) {
      setShow(true);
    }
  }, []);

  const handleConsent = () => {
    Cookie.set("cookieConsent", "true", { expires: 1 }); //o cookie expira em 1 dia
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">
        Este site usa cookies para melhorar a sua experiência. Ao continuar
        navegando, você concorda com a nossa
        <a href="/cookies-policy" className="text-blue-400 underline">
          {" "}
          Política de Cookies
        </a>
        .
      </p>
      <button
        onClick={handleConsent}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Aceitar
      </button>
    </div>
  );
};

export default CookieConsent;
