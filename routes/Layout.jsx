import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderContacts from "../components/HeaderContacts.jsx";
import Loader from "../components/Loader.jsx";
import Footer from "../components/Footer.jsx";
import { ErrorBoundary } from "react-error-boundary";

function ErrorDemo() {
  return(
    <p style={{ color: "red", textAlign: "center", fontSize: 20, 
      lineHeight: 2, paddingTop: 200, paddingLeft: 15, paddingRight: 15, }}>
      Something went wrong. Please try starting it again!
    </p>
  );
}

export default function Layout() {
  return (
    <>
      <HeaderContacts />
      <ErrorBoundary fallback={<ErrorDemo />}>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}