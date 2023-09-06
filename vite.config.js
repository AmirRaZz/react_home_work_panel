import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            components: `${path.resolve(__dirname, "./src/components/*")}`,
            services: `${path.resolve(__dirname, "./src/services/*")}`,
            constants: `${path.resolve(__dirname, "./src/constants/*")}`,
            // utils: `${path.resolve(__dirname, "./src/utils/*")}`,
            common: `${path.resolve(__dirname, "./src/common/*")}`,
            hooks: `${path.resolve(__dirname, "./src/hooks/*")}`,
            public: `${path.resolve(__dirname, "./public/")}`,
            // pages: path.resolve(__dirname, "./src/pages"),
            // types: `${path.resolve(__dirname, "./src/@types")}`,
        },
    },
});
