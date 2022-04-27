import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/common/Layout'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Architects } from './components/pages/architects/Architects';
import { ThemeProvider } from './components/theme/Theme';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Layout >
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="architects" element={<Architects />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
