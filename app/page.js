import Navbar from "./components/Navbar";
import Content from "./components/Content";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 font-main bg-main relative">
      <Navbar />
    </main>
  );
}
