
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Demo from "./Demo.js"
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [showDemo, setShowDemo] = useState(true);
  return (
    <QueryClientProvider  client ={queryClient}>
      <button onClick={()=> setShowDemo(!showDemo)}> Toggle Demo </button>
      {showDemo && <Demo />}
    </QueryClientProvider>
  );
}

export default App;
