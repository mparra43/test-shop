import { Suspense } from "react";
import { Spinner } from "./shared/components";
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner />
        </div>
      }
    >
        {/* <HelmetProvider>
        <ToastContainer />
        <AuthProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </HelmetProvider> */}
    </Suspense>
    
  );
}

export default App;
