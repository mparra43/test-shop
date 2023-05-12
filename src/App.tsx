import { ReactNode, Suspense } from "react";
import { Spinner } from "./shared/components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

type AppProviderProps = {
  children: ReactNode;
};

function App({ children }: AppProviderProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner />
        </div>
      }
    >
      <ToastContainer />
      <BrowserRouter>{children}</BrowserRouter>
    </Suspense>
  );
}

export default App;
