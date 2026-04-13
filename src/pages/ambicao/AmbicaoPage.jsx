import React from 'react';
import { ArrowRight, Target, Users, Landmark, Globe, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { AMBICAO_STATS, ODS_18_CONTEXT } from '../../data/constants';

export const AmbicaoPage = ({ navigate }) => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    <PageHero 
      category="Estratégia Ambição 2030"
      title="Acelerando a Década da Ação no Brasil"
      description="Compromissos públicos, mensuráveis e de alto impacto para transformar o setor privado brasileiro."
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    />

    {/* Section: Contexto & Stats */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader 
              barColor="bg-un-blue"
              badge="O Chamado"
              title="Década da Ação"
              titleAccent="Pacto Global"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Em 2020, o mundo entrou na <strong>Década da Ação</strong>. Lançada em abril de 2022, a Ambição 2030 convida organizações a assumirem compromissos públicos e mensuráveis ligados aos ODS.
            </p>
            
            <div className="p-6 bg-un-surface rounded-2xl border-l-4 border-un-gold">
               <h4 className="text-sm font-bold uppercase tracking-widest text-un-blue mb-2">Impacto Consolidado (Out/2025)</h4>
               <p className="text-gray-600 text-sm">Crescimento de <strong>{AMBICAO_STATS.crescimentoPlataformas}</strong> no número de empresas participantes das Plataformas de Ação em relação ao ano anterior.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-un-blue p-8 rounded-3xl text-white text-center flex flex-col justify-center shadow-xl shadow-un-blue/20">
              <span className="text-4xl md:text-5xl font-display font-black text-un-gold mb-2">{AMBICAO_STATS.organizacoes}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Organizações Comprometidas</span>
            </div>
            <div className="bg-un-surface border border-gray-100 p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.projetosAtivos}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Projetos em Execução</span>
            </div>
            <div className="bg-un-surface border border-gray-100 p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.embaixadoras}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Empresas Embaixadoras</span>
            </div>
            <div className="bg-un-gold p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center shadow-xl shadow-un-gold/20">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.cartas}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Cartas de Compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section: ODS 18 (Destaque Brasileiro) */}
    <section className="py-24 bg-un-surface relative overflow-hidden">
       <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-un-gold/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Iniciativa Brasileira
                   </div>
                   <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                      ODS 18 <br/>
                      <span className="text-un-gold">{ODS_18_CONTEXT.title}</span>
                   </h2>
                   <p className="text-gray-600 text-lg leading-relaxed">
                      O Pacto Global – Rede Brasil incorporou o ODS 18 à sua estratégia, reconhecendo que <strong>não há desenvolvimento sustentável sem equidade racial</strong>.
                   </p>
                </div>
                
                <div className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ODS_18_CONTEXT.focus.map(item => (
                         <div key={item} className="p-6 bg-un-surface rounded-2xl border border-gray-100 flex items-center gap-4">
                            <Users className="w-6 h-6 text-un-gold" />
                            <span className="text-sm font-bold text-un-blue">{item}</span>
                         </div>
                      ))}
                   </div>
                   <div className="p-8 bg-un-blue text-white rounded-3xl shadow-lg">
                      <p className="text-sm font-medium italic opacity-90">\"{ODS_18_CONTEXT.goal}\"</p>
                      <div className="mt-6 flex items-center gap-3">
                         <Target className="w-5 h-5 text-un-gold" />
                         <span className="text-xs uppercase tracking-widest font-bold">Foco em Práticas ASG</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    {/* Section: Modalidades de Engajamento */}
    <section className="py-24 bg-un-blue-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Como sua empresa<br/><span className="text-un-gold">participa?</span></h2>
          <p className="text-white/60 text-lg">Escolha o nível de ambição e protagonismo na jornada 2030.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-black text-white uppercase mb-4">Empresa Comprometida</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Acesso a jornadas de conhecimento, eventos abertos, grupos de trabalho e workshops temáticos.</p>
          </div>

          <div className="bg-un-gold p-10 rounded-[2.5rem] shadow-2xl shadow-un-gold/20 hover:-translate-y-2 transition-all cursor-default">
            <div className="w-14 h-14 bg-un-blue text-un-gold rounded-2xl flex items-center justify-center mb-8">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-black text-un-blue uppercase mb-4">Empresa Embaixadora</h3>
            <p className="text-un-blue/70 mb-8 leading-relaxed">Protagonismo na viabilização de ações. Inclui participação em comitês consultivos e jornadas premium.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 bg-un-gold text-un-blue">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4 leading-none text-un-blue">Pronto para o Próximo Nível?</h2>
          <p className="text-lg font-medium opacity-80">Explore os 10 Movimentos e as Plataformas de Ação.</p>
        </div>
        <div className=\"flex gap-4\">
           <Button variant=\"primary\" className=\"bg-un-blue text-white hover:bg-black shadow-xl\" icon={ArrowRight} onClick={() => navigate('movimentos')}>Ver Movimentos</Button>
        </div>
      </div>
    </section>
  </div>
);
