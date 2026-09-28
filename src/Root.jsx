import React from 'react';
import App from './App.jsx';
import { AuthProvider, useAuth } from './auth/AuthContext.jsx';
import { AuthPage } from './auth/AuthPage.jsx';
import { PatientPortal } from './auth/PatientPortal.jsx';

const Gate = () => {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-[#070b14] text-slate-400 flex items-center justify-center">Yuklanmoqda...</div>;
  if (!user) return <AuthPage />;
  return user.role === 'patient' ? <PatientPortal /> : <App />;
};

export default function Root() {
  return (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  );
}
