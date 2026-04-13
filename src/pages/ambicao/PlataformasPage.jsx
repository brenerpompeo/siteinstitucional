import React from 'react';
import { ArrowLeft, CheckCircle2, Info, Users, Settings, Building2 } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { PLATAFORMAS_LIST } from '../../data/constants';

export const PlataformasPage = ({ navigate }) => (
  <div className="animate-fade-in bg-un-surface min-h-screen pb-20">
    <PageHero 
      category="Estrutura de Ação"
      title="Plataformas de Ação"
      description="Espaços de engajamento, aprendizado e co-criação de soluções para os desafios da agenda sustentável."
      image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    />

    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <SectionHeader 
              barColor="bg-un-blue"
              badge="Funcionamento"
              title="Acelerando"
              titleAccent="o Engajamento"
            />
            <div className="bg-un-blue p-8 rounded-[2.5rem] text-white shadow-xl">
              <h4 className="text-un-gold text-xs font-bold uppercase tracking-widest mb-6">Regras de Participação</h4>
              <ul className="space-y-4">
                 {[
                   'Empresas podem integrar até 4 Plataformas sem custos adicionais.',
                   'Indicação de até 3 pontos-focais para cada plataforma.',
                   'Participação mínima de 50% nas reuniões trimestrais.'
                 ].map((text, i) => (
                   <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0 mt-0.5" />
                      {text}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATAFORMAS_LIST.map((plat) => (
              <div key={plat.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-un-surface rounded-xl flex items-center justify-center mb-6 group-hover:bg-un-blue group-hover:text-white transition-colors">
                  <plat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-black text-un-blue uppercase mb-3 leading-tight">{plat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Section */}
        <div className="bg-un-blue-deep rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="relative z-10 max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4 tracking-tighter">Gestão <span className="text-un-gold">Bipartite</span></h2>
                 <p className="text-white/60">Um modelo de governança colaborativo e transparente.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/10">
                    <div className="w-14 h-14 bg-un-blue rounded-2xl flex items-center justify-center shrink-0">
                       <Settings className="w-7 h-7 text-un-gold" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Pacto Global</h4>
                       <p className="text-white/60 text-sm leading-relaxed">Conta com uma pessoa técnica gestora da área de Impacto para coordenação metodológica e alinhamento com a sede em NY.</p>
                    </div>
                 </div>

                 <div className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/10">
                    <div className="w-14 h-14 bg-un-blue rounded-2xl flex items-center justify-center shrink-0">
                       <Building2 className="w-7 h-7 text-un-green" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Empresa Coordenadora</h4>
                       <p className="text-white/60 text-sm leading-relaxed">A pessoa representante é eleita trienalmente via votação pelas empresas participantes da própria Plataforma.</p>
                    </div>
                 </div>
              </div>

              <div className="mt-12 p-6 bg-un-gold/10 rounded-2xl border border-un-gold/20 flex items-center gap-4 text-un-gold text-sm font-medium">
                 <Info className="w-5 h-5 shrink-0" />
                 Este modelo garante que as iniciativas sejam relevantes tanto tecnicamente quanto para a realidade das operações de negócio.
              </div>
           </div>
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
