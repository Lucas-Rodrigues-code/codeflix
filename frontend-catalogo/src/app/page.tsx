import { Header } from "./componentes/header";
import { HeroBanner } from "./componentes/hero-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />

      <div className="space-y-12 pb-20"></div>
    </div>
  );
}
