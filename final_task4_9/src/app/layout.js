import "./globals.css";

export const metadata = {
  title: "도서 추천 AI",
  description: "도서 추천 AI",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
