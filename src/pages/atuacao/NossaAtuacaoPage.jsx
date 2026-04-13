import React from 'react';
import { ArrowRight, Target, Globe, Briefcase, ShieldCheck, PlayCircle, Layers } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { PILLARS_DATA } from '../../data/constants';

export const NossaAtuacaoPage = ({ navigate }) => {
  return (
    <div className="animate-fade-in bg-white min-h-screen pb-20">
      <PageHero 
        category="Visão Geral"
        title="Nossa Atuação"
        description="Conectamos a estratégia corporativa aos grandes desafios globais, transformando compromissos em impacto real por meio de Pilares, Movimentos e Plataformas de Ação."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Pilares */}
      <section className="py-24 bg-un-surface border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader 
            badge="Fundamentos"
            title="Os 4 Pilares Universais"
            titleAccent="da Sustentabilidade"
            description="Nossa atuação é estruturada sobre os 10 Princípios do Pacto Global, que se dividem em quatro pilares fundamentais para a responsabilidade corporativa."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {PILLARS_DATA.map((pilar) => (
              <div key={pilar.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md" style={{ backgroundColor: pilar.color }}>
                   <span className="text-white font-black text-2xl">{pilar.number}</span>
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-4" style={{ color: pilar.color }}>{pilar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estratégia, Movimentos e Plataformas */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Estratégia */}
             <div className="group bg-un-blue p-10 lg:p-12 rounded-[3.5rem] text-white relative shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer" onClick={() => navigate('ambicao')}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-un-gold/20 rounded-full translate-x-12 -translate-y-12 blur-3xl group-hover:bg-un-gold/30 transition-all pointer-events-none"></div>
                <Target className="w-14 h-14 text-un-gold mb-8 relative z-10" />
                <div className="inline-block px-3 py-1 bg-un-gold/20 text-un-gold rounded-full text-[10px] font-black uppercase tracking-widest mb-4 relative z-10">Ambição 2030</div>
                <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-6 relative z-10 leading-none">Estratégia</h3>
                <p className="text-white/70 mb-10 relative z-10 leading-relaxed font-medium">A grande visão para acelerar as metas da Agenda 2030 da ONU no Brasil por meio de compromissos concretos do setor privado.</p>
                <div className="flex items-center gap-2 text-un-gold font-black uppercase tracking-widest text-xs relative z-10 border-t border-white/10 pt-6 group-hover:text-white transition-colors">
                   Conhecer Estratégia <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>

             {/* Movimentos */}
             <div className="group bg-un-surface p-10 lg:p-12 rounded-[3.5rem] border-2 border-transparent hover:border-un-blue transition-all shadow-sm hover:shadow-xl cursor-pointer" onClick={() => navigate('movimentos')}>
                <Layers className="w-14 h-14 text-un-blue mb-8" />
                <div className="inline-block px-3 py-1 bg-un-blue/10 text-un-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Metas e Compromissos</div>
                <h3 className="text-4xl font-display font-black text-un-blue uppercase tracking-tighter mb-6 leading-none">10 Movimentos</h3>
                <p className="text-gray-600 mb-10 leading-relaxed font-medium">Compromissos setoriais com metas ambiciosas amparadas em frameworks globais para promover mudanças efetivas.</p>
                <div className="flex items-center gap-2 text-un-blue font-black uppercase tracking-widest text-xs border-t border-gray-200 pt-6">
                   Explorar Movimentos <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>

             {/* Plataformas */}
             <div className="group bg-un-surface p-10 lg:p-12 rounded-[3.5rem] border-2 border-transparent hover:border-un-blue transition-all shadow-sm hover:shadow-xl cursor-pointer" onClick={() => navigate('plataformas')}>
                <Globe className="w-14 h-14 text-un-blue mb-8" />
                <div className="inline-block px-3 py-1 bg-un-blue/10 text-un-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Engajamento</div>
                <h3 className="text-4xl font-display font-black text-un-blue uppercase tracking-tighter mb-6 leading-none">Plataformas</h3>
                <p className="text-gray-600 mb-10 leading-relaxed font-medium">Espaços de engajamento e co-criação onde a estratégia aprovada se transforma em projeto e iniciativa escalável.</p>
                <div className="flex items-center gap-2 text-un-blue font-black uppercase tracking-widest text-xs border-t border-gray-200 pt-6">
                   Acessar Plataformas <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Projetos CTA */}
      <section className="py-24 bg-un-gold animate-slide-up relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-400 via-un-gold to-yellow-600 opacity-30"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black text-un-blue uppercase tracking-tighter mb-6 leading-none">Projetos & Programas</h2>
            <p className="text-2xl text-un-blue/80 mb-12 max-w-2xl mx-auto font-medium tracking-tight">As iniciativas táticas e portfólios que sustentam e materializam o nosso alicerce estratégico no Brasil.</p>
            <Button 
               variant="primary"
               className="bg-un-blue text-white hover:bg-black uppercase font-black tracking-widest px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
               icon={PlayCircle}
               onClick={() => navigate('programas')}
            >
               Ver Portfólio de Projetos
            </Button>
         </div>
      </section>

    </div>
  );
};
