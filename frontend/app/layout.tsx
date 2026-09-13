import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "Employee Welfare Management System",
  description:
  "Personalized employee welfare recommendation platform",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


return (

<html lang="en">

<body>

{children}

</body>

</html>

);


}