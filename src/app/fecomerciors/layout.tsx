import Footer from "@/components/fecomerciors/Footer";
import Header from "@/components/fecomerciors/Header";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
