import React from 'react';
import { ArrowRight, Target, Users, Landmark, Globe } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { AMBICAO_STATS } from '../../data/constants';

export const AmbicaoPage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    <PageHero 
      category="Estratégia Ambição 2030"
      title="Acelerando a Década da Ação no Brasil"
      description="Compromissos públicos, mensuráveis e de alto impacto para transformar o setor privado brasileiro."
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    />

    {/* Section: Contexto */}
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
              Em 2020, o mundo entrou na chamada <strong>Década da Ação</strong>, um chamado urgente feito pelo secretário-geral da ONU, António Guterres, para que governos, empresas e a sociedade civil acelerassem o cumprimento das metas globais da Agenda 2030.
            </p>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-un-gold pl-6 py-2">
              Lançada em abril de 2022, a Ambição 2030 é uma iniciativa que convida organizações de todo o país a assumirem compromissos públicos, mensuráveis e de alto impacto ligados aos ODS.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-un-blue p-8 rounded-3xl text-white text-center flex flex-col justify-center shadow-xl shadow-un-blue/20">
              <span className="text-4xl md:text-5xl font-display font-black text-un-gold mb-2">{AMBICAO_STATS.organizacoes}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Organizações Comprometidas</span>
            </div>
            <div className="bg-un-surface border border-gray-100 p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.compromissos}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Compromissos Públicos</span>
            </div>
            <div className="bg-un-surface border border-gray-100 p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.trabalhadores}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Trabalhadores Impactados</span>
            </div>
            <div className="bg-un-gold p-8 rounded-3xl text-un-blue text-center flex flex-col justify-center shadow-xl shadow-un-gold/20">
              <span className="text-4xl md:text-5xl font-display font-black mb-2">{AMBICAO_STATS.cartas}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Cartas Assinadas</span>
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
          {/* Card 1: Empresa Comprometida */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-black text-white uppercase mb-4">Empresa Comprometida</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Acesso a jornadas gratuitas de construção do conhecimento, incluindo eventos abertos, grupos de trabalho, cases e workshops.</p>
            <ul className="space-y-3 mb-10">
              {['Jornadas de Conhecimento', 'Eventos Abertos', 'Workshops Temáticos'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-un-gold rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Empresa Embaixadora */}
          <div className="bg-un-gold p-10 rounded-[2.5rem] shadow-2xl shadow-un-gold/20 hover:-translate-y-2 transition-all cursor-default">
            <div className="w-14 h-14 bg-un-blue text-un-gold rounded-2xl flex items-center justify-center mb-8">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-black text-un-blue uppercase mb-4">Empresa Embaixadora</h3>
            <p className="text-un-blue/70 mb-8 leading-relaxed">Para empresas que querem ter papel protagonista e viabilizar as ações do Movimento. Inclui participação premium e assento consultivo.</p>
            <ul className="space-y-3 mb-10 text-un-blue/90">
              {['Comitê Consultivo', 'Jornada Premium', 'Eventos Internacionais'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold">
                  <div className="w-1.5 h-1.5 bg-un-blue rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 bg-un-gold text-un-blue">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4 leading-none">Pronto para o Próximo Nível?</h2>
          <p className="text-lg font-medium opacity-80">Explore os 10 Movimentos e as Plataformas de Ação.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="primary" className="bg-un-blue text-white hover:bg-black shadow-xl" icon={ArrowRight}>Ver Movimentos</Button>
        </div>
      </div>
    </section>
  </div>
);
