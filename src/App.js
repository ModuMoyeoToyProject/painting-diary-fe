import React, { useState } from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import WriteComponent from "./component/write/WriteComponent";
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';

const queryClient = new QueryClient();

function App() {
  const [isWrite, setIsWrite] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <Footer setIsWrite={setIsWrite}/>
          {isWrite && <WriteComponent setIsWrite={setIsWrite} />}
        </div>
    </QueryClientProvider>
  );
}

export default App;
