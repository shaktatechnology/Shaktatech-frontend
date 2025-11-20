import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shakta Technology- Admin Panel",
  description: "Software Agency",
  icons:{
    icon: "/logo/shaktalogo.svg"
    
    
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
    </ProtectedRoute>
  );
}
