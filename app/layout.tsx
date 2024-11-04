import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies",
  },
  description: "Developed by Keon Oh Kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
