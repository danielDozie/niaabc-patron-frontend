import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Layout } from './components/common/Layout'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Layout >
      <App />
    </Layout>
    </QueryClientProvider>
  </React.StrictMode>
)
