import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
    const [queryClient] = React.useState(() => new QueryClient());
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <QueryClientProvider client={queryClient}>
                <Toaster/>
                {children}
            </QueryClientProvider>
            <Footer />
        </div>
    );
};

export default Layout;
