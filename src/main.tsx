import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routing/AppRouter.tsx";
import './App.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='videographer-almaz-gimadiev'>
    <AppRouter />
  </BrowserRouter>,
)
