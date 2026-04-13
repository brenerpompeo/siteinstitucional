import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Info, Users, Settings, Building2, LayoutGrid, Rocket, RefreshCw, BookOpen, ChevronRight, Zap, Target, ShieldCheck, Heart, Search } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { PLATAFORMAS_LIST, JORNADA_MEMBRO } from '../../data/constants';

const JORNADA_ICONS = [Target, Zap, RefreshCw, ShieldCheck];

export const PlataformasPage = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('plataformas');

  return (
    <div className=\"animate-fade-in bg-white min-h-screen\">
      <PageHero 
        category=\"Como Atuamos\"
        title=\"Plataformas de Ação\"
        description=\"O ecossistema de co-criação onde a estratégia se transforma em impacto real e mensurável.\"
        image=\"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop\"
      />

      {/* Navigation Tabs */}
      <div className=\"sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100\">
         <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
            <div className=\"flex justify-center gap-8 md:gap-16\">
               {['plataformas', 'jornada', 'governanca'].map((tab) => (
                  <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`py-8 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-un-blue' : 'text-gray-300 hover:text-gray-600'}`}
                  >
                     {tab}
                     {activeTab === tab && <div className=\"absolute bottom-0 left-0 w-full h-1 bg-un-gold animate-scale-x\"></div>}
                  </button>
               ))}
            </div>
         </div>
      </div>

      {activeTab === 'plataformas' && (
         <section className=\"py-24 animate-slide-up\">
            <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
               <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-center\">
                  <div className=\"lg:col-span-12\">
                     <SectionHeader 
                        barColor=\"bg-un-blue\"
                        badge=\"Ecossistema\"
                        title=\"Plataformas\"
                        titleAccent=\"de Engajamento\"
                        description=\"Nossas 6 plataformas são os motores que impulsionam os 10 Movimentos. Cada empresa escolhe onde atuar com base em sua materialidade e ambição.\"
                     />
                  </div>
               </div>

               <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
                  {PLATAFORMAS_LIST.map((plat) => (
                     <div key={plat.id} className=\"group p-10 bg-un-surface rounded-[3rem] border-2 border-transparent hover:border-un-blue hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl\">
                        <div className=\"flex justify-between items-start mb-10\">
                           <div className=\"w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-un-blue group-hover:text-white transition-all\">
                              <plat.icon className=\"w-8 h-8\" />
                           </div>
                           <span className=\"text-[10px] font-black uppercase tracking-widest text-un-blue-2\">Ativo</span>
                        </div>
                        <h3 className=\"text-2xl font-display font-black uppercase tracking-tighter text-un-blue leading-none mb-6\">{plat.title}</h3>
                        <p className=\"text-gray-600 font-medium leading-relaxed mb-8 h-24 overflow-hidden\">{plat.desc}</p>
                        
                        <div className=\"pt-8 border-t border-gray-100 flex items-center justify-between\">
                           <div className=\"flex -space-x-3\">
                              {[1,2,3].map(i => (
                                 <div key={i} className=\"w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center\">
                                    <Users className=\"w-3 h-3 text-gray-400\" />
                                 </div>
                              ))}
                           </div>
                           <button className=\"text-[10px] font-black uppercase tracking-widest text-un-blue hover:text-un-gold transition-colors flex items-center gap-2\">
                              Ver Plano de Trabalho <ChevronRight className=\"w-3 h-3\" />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               <div className=\"mt-24 p-12 bg-un-blue rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden\">
                  <div className=\"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 -translate-y-32 blur-3xl\"></div>
                  <div className=\"space-y-4 relative z-10\">
                     <h4 className=\"text-un-gold text-xs font-black uppercase tracking-[0.3em]\">Regra de Ouro</h4>
                     <p className=\"text-2xl font-display font-black uppercase tracking-tight max-w-xl\">Sua organização pode integrar até <span className=\"text-un-gold\">4 Plataformas</span> sem custos adicionais de participação.</p>
                  </div>
                  <Button variant=\"primary\" className=\"bg-un-gold text-un-blue hover:bg-black hover:text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest\">Quero Participar</Button>
               </div>
            </div>
         </section>
      )}

      {activeTab === 'jornada' && (
         <section className=\"py-24 animate-slide-up\">
            <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
               <SectionHeader 
                  badge=\"Workflow\"
                  title=\"Jornada Mensurável\"
                  titleAccent=\"do Membro\"
                  description=\"Um ciclo anual desenhado para garantir que o compromisso assinado se transforme em evidência de ESG.\"
               />

               <div className=\"mt-20 relative\">
                  {/* Journey Line */}
                  <div className=\"absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden lg:block -translate-y-1/2\"></div>
                  
                  <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10\">
                     {JORNADA_MEMBRO.map((item, idx) => {
                        const Icon = JORNADA_ICONS[idx];
                        return (
                           <div key={item.id} className=\"group\">
                              <div className=\"bg-white p-10 rounded-[3rem] border-2 border-gray-100 hover:border-un-gold transition-all duration-500 shadow-sm hover:shadow-xl relative\">
                                 <div className=\"absolute -top-6 left-10 w-12 h-12 bg-un-blue text-un-gold rounded-full flex items-center justify-center font-black text-xs shadow-lg\">0{idx + 1}</div>
                                 <div className=\"w-16 h-16 bg-un-surface rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform\">
                                    <Icon className=\"w-8 h-8 text-un-blue\" />
                                 </div>
                                 <h4 className=\"text-xl font-display font-black text-un-blue uppercase mb-4\">{item.title}</h4>
                                 <p className=\"text-gray-500 text-sm leading-relaxed mb-6\">{item.desc}</p>
                                 <div className=\"h-1.5 w-full bg-gray-50 rounded-full overflow-hidden\">
                                    <div className=\"h-full bg-un-gold w-1/3 group-hover:w-full transition-all duration-1000\"></div>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </section>
      )}

      {activeTab === 'governanca' && (
         <section className=\"py-24 animate-slide-up\">
            <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
               <div className=\"bg-un-blue-deep rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl\">
                  <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent\"></div>
                  
                  <div className=\"max-w-4xl mx-auto space-y-20 relative z-10\">
                     <div className=\"text-center space-y-6\">
                        <div className=\"inline-block px-4 py-2 bg-un-gold/20 text-un-gold rounded-xl text-[10px] font-black uppercase tracking-[0.3em] border border-un-gold/30\">Model of Governance</div>
                        <h2 className=\"text-5xl md:text-8xl font-display font-black uppercase leading-[0.85] tracking-tighter\">Gestão <br/><span className=\"text-un-gold\">Bipartite</span></h2>
                        <p className=\"text-xl text-white/50 font-medium tracking-tight\">O Pacto Global é a única iniciativa que une o rigor técnico da ONU com a agilidade estratégica das lideranças empresariais.</p>
                     </div>

                     <div className=\"grid grid-cols-1 md:grid-cols-2 gap-12\">
                        <div className=\"p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group\">
                           <div className=\"w-20 h-20 bg-un-blue rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform\">
                              <Settings className=\"w-10 h-10 text-un-gold\" />
                           </div>
                           <h4 className=\"text-3xl font-display font-black uppercase mb-4\">Staff Técnico</h4>
                           <p className=\"text-white/60 leading-relaxed font-medium mb-8\">Especialistas do Pacto Global responsáveis pela curadoria metodológica, frameworks globais e conexão com o quartel-general da ONU em Nova York.</p>
                           <ul className=\"space-y-4\">
                              {['Alinhamento Global', 'Assessoria Técnica', 'Gestão de Conteúdo'].map(item => (
                                 <li key={item} className=\"flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-un-gold\">
                                    <div className=\"w-1.5 h-1.5 rounded-full bg-un-gold\"></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <div className=\"p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group\">
                           <div className=\"w-20 h-20 bg-un-blue rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:-rotate-12 transition-transform\">
                              <Building2 className=\"w-10 h-10 text-un-gold\" />
                           </div>
                           <h4 className=\"text-3xl font-display font-black uppercase mb-4\">Empresa Coordenadora</h4>
                           <p className=\"text-white/60 leading-relaxed font-medium mb-8\">Líderes do setor privado eleitos para viabilizar implementações práticas, fomentar a colaboração peer-to-peer e mobilizar investimentos.</p>
                           <ul className=\"space-y-4\">
                              {['Mobilização de Pares', 'Liderança Setorial', 'Suporte à Execução'].map(item => (
                                 <li key={item} className=\"flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-un-gold\">
                                    <div className=\"w-1.5 h-1.5 rounded-full bg-un-gold\"></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* Navigation Footer */}
      <footer className=\"py-20 bg-white border-t border-gray-100\">
         <div className=\"container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12\">
            <div className=\"flex flex-col gap-2\">
               <span className=\"text-[10px] font-black uppercase tracking-[0.3em] text-gray-300\">Concluir Jornada</span>
               <div className=\"flex items-center gap-8\">
                  <button 
                  onClick={() => navigate('movimentos')}
                  className=\"group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-un-blue hover:text-un-gold transition-all\"
                  >
                  <ArrowLeft className=\"w-4 h-4 group-hover:-translate-x-2 transition-transform\" /> Movimentos 2030
                  </button>
                  <div className=\"w-px h-4 bg-gray-100\"></div>
                  <button 
                  className=\"text-xs font-black uppercase tracking-widest text-un-blue opacity-30 cursor-default\"
                  >
                  Plataformas
                  </button>
               </div>
            </div>

            <Button 
               variant=\"primary\" 
               className=\"px-12 bg-un-blue text-white hover:bg-black rounded-full shadow-2xl shadow-un-blue/30 group\"
               icon={Search}
               onClick={() => window.scrollTo(0, 0)}
            >
               Explorar Membros
            </Button>
         </div>
      </footer>
    </div>
  );
};
