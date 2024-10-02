// app/layout.js
export const metadata = {
  title: 'Shopping List',
  description: 'Your weekly shopping list',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
