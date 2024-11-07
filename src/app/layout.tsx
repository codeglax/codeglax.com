import { Metadata } from "next";
import "@/styles/tailwind.css";


export const metadata: Metadata = {
  title: "Code Glax",
  description: "Innovating modern, efficient, scalable software suit and developing the business empire you dreamt of 😊",
  authors: [
    { name: "MdShafikulIslam1", url: "179398ssshofik@gmail.com" },
    { name: "Md Mahi Kaishar", url: "github.com/mdmahikaishar <mahikaishar@gmail.com>" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
