import { BrowserRouter } from "./RouterProvider";
import { QueryClientProvider } from "./QueryClientProvider";

export const Provider = () => {
  return (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  );
};
