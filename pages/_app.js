import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <NativeBaseProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NativeBaseProvider>
    </Context>
  );
}

export default MyApp;
