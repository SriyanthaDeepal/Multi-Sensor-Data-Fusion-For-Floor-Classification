import "@/styles/globals.css";
export const metadata = {
  title: "Camera & LiDAR Data Fusion",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
