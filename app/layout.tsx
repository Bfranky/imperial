import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imperial Kitchen and Restaurant | Papa Ashafa, Lagos",
  description: "Premier restaurant and catering service in Papa Ashafa, Lagos. Perfect 5.0★ rating. Authentic Nigerian cuisine, continental dishes, and professional catering for all occasions. Open daily until 8:30 PM.",
  keywords: "restaurant Lagos, catering Lagos, Nigerian food, jollof rice, wedding catering, birthday catering, Papa Ashafa, Imperial Kitchen",
  openGraph: {
    title: "Imperial Kitchen and Restaurant",
    description: "Where Every Meal is Royally Prepared — Perfect 5.0★ Rating",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
