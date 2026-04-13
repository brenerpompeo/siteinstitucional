import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Tile } from '../components/ui/Tile';
import { HeroCarousel } from '../components/sections/HeroCarousel';
import { ImpactSection } from '../components/sections/ImpactSection';
import { EventsListSection } from '../components/sections/EventsListSection';
import { PillaresSection } from '../components/sections/PillaresSection';
import { NewsSection } from '../components/sections/NewsSection';

export const HomeContent = ({ navigate }) => (
  <div className="animate-fade-in">
    <HeroCarousel />
    <ImpactSection />
    <EventsListSection />
    <PillaresSection />
    <NewsSection navigate={navigate} />

    {/* BENTO GRID SECTION: ACELERANDO O IMPACTO REGIONAL */}
    <section className="py-12 md:py-20 lg:py-32 bg-un-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader 
          barColor="bg-un-green"
          badge="Destaques"
          title="Acelerando o"
          titleAccent="Impacto Regional"
          description="Explore como as empresas brasileiras estão liderando a mudança através de movimentos estratégicos e coalisões globais."
          button={
            <Button variant="ghost" className="text-un-blue hover:text-un-blue-1 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
              Ver Tudo <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          <Tile
            size="large"
            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop"
            category="Meio Ambiente"
            color="bg-un-green" // ODS 13/14/15
            title="Movimento +Água"
            subtitle="Uma coalizão para garantir a segurança hídrica no Brasil, impactando milhões de vidas."
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop"
            category="Direitos Humanos"
            color="bg-un-blue-3"
            title="Elas Lideram 2030"
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
            category="Anticorrupção"
            color="bg-[#6E417A]" // Usando o padrão definido em constants.js
            title="Integridade Já"
          />
          <Tile
            size="wide"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            category="Liderança"
            color="bg-un-gold"
            title="Fórum de CEOs 2026"
            subtitle="Grandes líderes debatendo o futuro da economia verde no Brasil."
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            category="Global Goals"
            color="bg-un-gold"
            title="Agenda 2030"
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            category="Educação"
            color="bg-[#C5192D]" // ODS 4
            title="Academy"
          />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 md:py-32 lg:py-48 bg-un-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black uppercase mb-4 md:mb-8 tracking-tighter text-white">É hora de agir.</h2>
        <p className="text-sm md:text-lg lg:text-xl font-medium mb-8 md:mb-12 max-w-2xl mx-auto text-un-blue-3 leading-relaxed">
          Sua empresa pode ser parte da solução. Junte-se à maior rede de sustentabilidade corporativa do mundo e acelere sua transformação.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full sm:w-auto">
          <Button variant="primary" className="px-10 py-4 md:px-16 md:py-6 text-sm md:text-base shadow-[0_0_40px_-10px_#CCB146] w-full sm:w-auto uppercase tracking-widest font-bold">
            Quero Aderir
          </Button>
          <Button variant="outline" className="px-10 py-4 md:px-16 md:py-6 text-sm md:text-base border-white/20 text-white hover:bg-white hover:text-un-blue w-full sm:w-auto uppercase tracking-widest font-bold">
            Conheça os Benefícios
          </Button>
        </div>
      </div>
    </section>
  </div>
);
