import "./globals.css";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";

export const metadata = {
  title: "MasalaMiles",
  description: "Discover authentic Indian street food near you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fffaf5] text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterNav />
      </body>
    </html>
  );
}
