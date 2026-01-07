import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shakta Technology",
  description: "Software Agency",
  icons:{
    icon: "/logo/shaktalogo.ico"
    
  }
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return <>{children}</>;
}
