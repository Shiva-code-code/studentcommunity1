import { Routes , Route } from 'react-router-dom';


import './global.css';
import SigninForm from './auth/forms/SigninForm';
import Home from './root/pages/Home';
import SignupForm from './auth/forms/SignupForm';
import AuthLayout from './auth/AuthLayout';
import RootLauout from './root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
           <Route path="/sign-in" element={<SigninForm />} />
           <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* private routes */}
        <Route element={<RootLauout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App