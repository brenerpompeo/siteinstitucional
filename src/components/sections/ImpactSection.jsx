import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { IMPACT_STATS } from '../../data/constants';

// --- COMPONENTE: SEÇÃO DE IMPACTO (DATA DRIVEN) ---

export const ImpactSection = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 bg-un-blue overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-transparent to-un-blue"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-un-blue via-transparent to-un-blue"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <SectionHeader 
          inverted
          barColor="bg-un-green"
          badge="Nossa Magnitude"
          title="A maior iniciativa de"
          titleAccent="sustentabilidade corporativa do mundo."
          description="Conectando estratégias empresariais aos Dez Princípios Universais. Saiba como podemos apoiar sua empresa nessa jornada de transformação de impacto global."
          button={
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-un-blue shadow-lg"
              icon={ArrowRight}
            >
              Saiba Mais
            </Button>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 border-t border-white/10 pt-8 md:pt-12">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col group cursor-default">
              <div className="mb-2 md:mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <stat.icon className={cn("w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8", stat.color)} />
              </div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-black text-white tracking-tighter mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.value}
                </h3>
                <div className="h-1 w-6 md:w-8 bg-un-gold rounded-full mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-[8px] md:text-[10px] text-un-blue-3 uppercase tracking-wide mt-0.5 md:mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
