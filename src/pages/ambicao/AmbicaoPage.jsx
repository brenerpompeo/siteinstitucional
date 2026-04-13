import React from 'react';
import { ArrowRight, Target, Users, Landmark, Globe, CheckCircle2, ShieldCheck, Zap, Star, LayoutGrid, Quote } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { AMBICAO_STATS, ODS_18_CONTEXT } from '../../data/constants';

export const AmbicaoPage = ({ navigate }) => (
  <div className=\"animate-fade-in bg-white min-h-screen\">
    <PageHero 
      category=\"Estratégia Ambição 2030\"
      title=\"Acelerando a Década da Ação no Brasil\"
      description=\"Compromissos públicos, mensuráveis e de alto impacto para transformar o setor privado brasileiro.\"
      image=\"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop\"
    />

    {/* Section: Contexto & Pioneirismo */}
    <section className=\"py-20 bg-white\">
      <div className=\"container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl\">
        <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center\">
          <div className=\"space-y-8\">
            <div className=\"inline-flex items-center gap-2 px-3 py-1 bg-un-gold/20 text-un-blue rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-un-gold/30\">
              <Star className=\"w-3 h-3 fill-un-gold\" /> Pioneirismo Brasileiro
            </div>
            <SectionHeader 
              barColor=\"bg-un-blue\"
              badge=\"Referência Global\"
              title=\"Um Modelo que\"
              titleAccent=\"Inspira o Mundo\"
            />
            <p className=\"text-gray-700 text-lg leading-relaxed\">
               Lançada em abril de 2022, a <span className=\"font-bold text-un-blue\">Ambição 2030</span> é uma iniciativa pioneira da Rede Brasil. O seu sucesso ultrapassou fronteiras, inspirando ações semelhantes no Pacto Global dos EUA e em outras redes internacionais.
            </p>
            <div className=\"flex flex-col gap-4\">
               <div className=\"p-6 bg-un-surface rounded-2xl border-l-4 border-un-gold\">
                  <p className=\"text-gray-600 text-sm leading-relaxed italic\">
                     \"Em 2020, entramos na Década da Ação. No Brasil, esse movimento ganhou força com metas mensuráveis e compromissos públicos que hoje são referência para a sede da ONU em Nova Iorque.\"
                  </p>
               </div>
            </div>
          </div>
          
          <div className=\"bg-un-blue p-10 md:p-14 rounded-[3rem] text-white relative shadow-2xl overflow-hidden group\">
            <div className=\"absolute inset-0 bg-un-gold/5 opacity-0 group-hover:opacity-100 transition-opacity\"></div>
            <div className=\"relative z-10 grid grid-cols-2 gap-8\">
              <div className=\"space-y-1\">
                <span className=\"text-4xl md:text-6xl font-display font-black text-un-gold\">{AMBICAO_STATS.organizacoes}</span>
                <p className=\"text-[10px] uppercase font-bold tracking-widest text-white/50\">Organizações Ativas</p>
              </div>
              <div className=\"space-y-1 text-right lg:text-left\">
                <span className=\"text-4xl md:text-6xl font-display font-black\">{AMBICAO_STATS.cartas}</span>
                <p className=\"text-[10px] uppercase font-bold tracking-widest text-white/50\">Cartas-Compromisso</p>
              </div>
              <div className=\"space-y-1\">
                <span className=\"text-4xl md:text-6xl font-display font-black\">{AMBICAO_STATS.trabalhadores}</span>
                <p className=\"text-[10px] uppercase font-bold tracking-widest text-white/50\">Pessoas Impactadas</p>
              </div>
              <div className=\"space-y-1 text-right lg:text-left\">
                <span className=\"text-4xl md:text-6xl font-display font-black text-un-gold\">{AMBICAO_STATS.projetosAtivos}</span>
                <p className=\"text-[10px] uppercase font-bold tracking-widest text-white/50\">Projetos em Execução</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section: ODS 18 (Destaque Brasileiro) */}
    <section className=\"py-24 bg-un-surface relative overflow-hidden\">
       <div className=\"container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl\">
          <div className=\"bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden\">
             <div className=\"absolute top-0 right-0 w-64 h-64 bg-un-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl\"></div>
             
             <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10\">
                <div className=\"space-y-8\">
                   <div className=\"inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest\">
                      Prêmio de Inovação Social - Proposta Brasil
                   </div>
                   <h2 className=\"text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none\">
                      ODS 18 <br/>
                      <span className=\"text-un-gold\">{ODS_18_CONTEXT.title}</span>
                   </h2>
                   <p className=\"text-gray-600 text-lg leading-relaxed\">
                      Reconhecendo que <strong>não há desenvolvimento sustentável sem equidade racial</strong>, o Brasil propôs e o Pacto Global incorporou o ODS 18 à sua estratégia institutional.
                   </p>
                   <div className=\"flex gap-4\">
                      {ODS_18_CONTEXT.focus.map(item => (
                         <div key={item} className=\"px-6 py-3 bg-un-surface border border-gray-100 rounded-2xl flex items-center gap-3 shadow-sm\">
                            <div className=\"w-2 h-2 bg-un-gold rounded-full\"></div>
                            <span className=\"text-xs font-black uppercase tracking-widest text-un-blue\">{item}</span>
                         </div>
                      ))}
                   </div>
                </div>
                
                <div className=\"bg-un-blue-deep rounded-[2.5rem] p-8 md:p-12 text-white relative group overflow-hidden\">
                   <Quote className=\"absolute top-8 right-8 w-16 h-16 text-white/5 group-hover:scale-110 transition-transform\" />
                   <h4 className=\"text-2xl font-display font-black uppercase mb-6\">Nossa Meta</h4>
                   <p className=\"text-white/80 text-xl font-medium leading-relaxed italic mb-8 relative z-10\">
                      \"{ODS_18_CONTEXT.goal}\"
                   </p>
                   <div className=\"pt-8 border-t border-white/10 flex items-center gap-4\">
                      <div className=\"w-12 h-12 bg-un-gold/20 rounded-xl flex items-center justify-center\">
                         <ShieldCheck className=\"text-un-gold w-6 h-6\" />
                      </div>
                      <span className=\"text-xs font-bold uppercase tracking-widest leading-tight\">Integração às Práticas ASG <br/> e Mudanças Estruturais</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    {/* Section: Modalidades (CTA Grid) */}
    <section className=\"py-24 bg-white\">
       <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
          <div className=\"text-center max-w-2xl mx-auto mb-16\">
             <SectionHeader 
               center
               badge=\"Engajamento\"
               title=\"Como Fazer\"
               titleAccent=\"Parte\"
             />
          </div>
          
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto\">
             <div className=\"bg-un-surface p-10 rounded-[3rem] border border-gray-100 hover:border-un-blue transition-all group flex flex-col h-full\">
                <div className=\"w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-un-blue group-hover:text-white transition-colors\">
                   <Target className=\"w-8 h-8\" />
                </div>
                <h3 className=\"text-3xl font-display font-black uppercase tracking-tighter mb-4\">Empresa Comprometida</h3>
                <p className=\"text-gray-500 mb-10 flex-1\">Acesso a jornadas de conhecimento, grupos de trabalho e compartilhamento de boas práticas em sustentabilidade corporativa.</p>
                <Button variant=\"outline\" className=\"mt-auto w-full border-un-blue text-un-blue hover:bg-un-blue hover:text-white\" icon={ArrowRight}>Ver Benefícios</Button>
             </div>

             <div className=\"bg-un-blue p-10 rounded-[3rem] shadow-2xl shadow-un-blue/20 hover:-translate-y-2 transition-all flex flex-col h-full\">
                <div className=\"w-16 h-16 bg-un-gold rounded-2xl flex items-center justify-center mb-10 shadow-sm\">
                   <Star className=\"w-8 h-8 text-un-blue fill-un-blue\" />
                </div>
                <h3 className=\"text-3xl font-display font-black uppercase tracking-tighter text-white mb-4\">Empresa Embaixadora</h3>
                <p className=\"text-white/60 mb-10 flex-1\">Protagonismo na viabilização das ações do Movimento. Assento consultivo, visibilidade premium e liderança setorial.</p>
                <Button variant=\"primary\" className=\"mt-auto w-full bg-un-gold text-un-blue hover:bg-white\" icon={ArrowRight}>Seja Embaixadora</Button>
             </div>
          </div>
       </div>
    </section>

    {/* Final Navigation CTA */}
    <div className=\"border-t border-gray-100\">
       <div className=\"container mx-auto px-4 py-8 flex justify-center\">
          <button 
             onClick={() => navigate('movimentos')}
             className=\"flex items-center gap-4 text-xs font-black uppercase tracking-widest text-un-blue hover:text-un-gold transition-colors\"
          >
             Próximo Passo: Conheça os 10 Movimentos <ArrowRight className=\"w-4 h-4\" />
          </button>
       </div>
    </div>
  </div>
);
