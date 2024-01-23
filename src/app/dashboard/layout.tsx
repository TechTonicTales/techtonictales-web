import NavDock from "../_components/navDock";

export const metadata = {
  title: "TechTonicTales",
  description: "Blogs about tech, programming, and more",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <NavDock />
    </main>
  );
}
