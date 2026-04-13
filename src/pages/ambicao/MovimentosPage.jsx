import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight, Target } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { AMBICAO_MOVIMENTOS } from '../../data/constants';
import { cn } from '../../utils/cn';

export const MovimentosPage = ({ navigate }) => {
  const [selectedMov, setSelectedMov] = useState(null);

  return (
    <div className="animate-fade-in bg-un-surface min-h-screen pb-20">
      <PageHero 
        category="Compromissos Públicos"
        title="Os 10 Movimentos"
        description="Ações coletivas e individuais com metas ambiciosas para o alcance dos Objetivos de Desenvolvimento Sustentável."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader 
            barColor="bg-un-gold"
            badge="Movimentos"
            title="Impacto Positivo em"
            titleAccent="Escala Brasil"
            description="Empresas participantes podem [e são encorajadas a] assinar os compromissos dos Movimentos. Clique para ver as metas detalhadas de cada um."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-12 md:mt-20">
            {AMBICAO_MOVIMENTOS.map((mov) => (
              <button
                key={mov.id}
                onClick={() => setSelectedMov(selectedMov?.id === mov.id ? null : mov)}
                className={cn(
                  "flex flex-col items-center text-center p-8 rounded-[2rem] transition-all duration-500 border-2 select-none h-full",
                  selectedMov?.id === mov.id 
                    ? "bg-un-blue border-un-gold shadow-2xl scale-[1.02] -translate-y-2 ring-4 ring-un-gold/20" 
                    : "bg-white border-gray-100 hover:border-un-gold/30 hover:-translate-y-1 shadow-sm"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                  selectedMov?.id === mov.id ? "bg-un-gold text-un-blue" : cn("bg-opacity-10", mov.color, "text-gray-900")
                )}>
                  <mov.icon className={cn("w-8 h-8", selectedMov?.id === mov.id ? "text-un-blue" : "text-current")} />
                </div>
                <h3 className={cn(
                  "text-lg font-display font-black uppercase tracking-tighter leading-tight mb-2",
                  selectedMov?.id === mov.id ? "text-white" : "text-un-blue"
                )}>
                  {mov.title}
                </h3>
                <div className={cn(
                  "mt-auto pt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest",
                  selectedMov?.id === mov.id ? "text-un-gold" : "text-un-blue/40"
                )}>
                  <span>{selectedMov?.id === mov.id ? "Recolher" : "Ver Metas"}</span>
                  <ChevronRight className={cn("w-3 h-3 transition-transform", selectedMov?.id === mov.id && "rotate-90")} />
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Section (Dynamic Details) */}
          <div className={cn(
            "mt-12 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
            selectedMov ? "max-h-[1000px] opacity-100 mb-12" : "max-h-0 opacity-0 mb-0"
          )}>
            {selectedMov && (
              <div className="bg-un-blue rounded-[3rem] p-8 md:p-16 text-white relative shadow-2xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <selectedMov.icon className="w-64 h-64 text-white" />
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div className="space-y-8">
                       <div className="inline-flex items-center gap-2 px-4 py-2 bg-un-gold text-un-blue rounded-full text-xs font-bold uppercase tracking-widest">
                          <Target className="w-4 h-4" />
                          Metas Ambição 2030
                       </div>
                       <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9]">
                          Movimento <br/>
                          <span className="text-un-gold">{selectedMov.title}</span>
                       </h2>
                       <p className="text-un-blue-3 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                          {selectedMov.desc}
                       </p>
                       <div className="flex flex-wrap gap-3">
                          {selectedMov.ods.map(odsNum => (
                             <div key={odsNum} className="px-4 py-2 border border-white/20 rounded-xl text-sm font-bold bg-white/5">
                                ODS {odsNum}
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
                       <h4 className="text-un-gold text-xs font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Compromissos</h4>
                       <div className="space-y-6">
                          {selectedMov.metas.map((meta, i) => (
                             <div key={i} className="flex gap-4 group">
                                <div className="mt-1 shrink-0">
                                   <CheckCircle2 className="w-5 h-5 text-un-gold" />
                                </div>
                                <p className="text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors">
                                   {meta}
                                </p>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <Button 
            variant="outline" 
            className="border-un-blue text-un-blue hover:bg-un-blue hover:text-white"
            icon={ArrowLeft}
            onClick={() => navigate('ambicao')}
          >
            Voltar para Estratégia
          </Button>
        </div>
      </section>
    </div>
  );
};
