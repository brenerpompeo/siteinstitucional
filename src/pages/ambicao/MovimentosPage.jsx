import React, { useState } from 'react';
import { ArrowLeft, Target, CheckCircle2, ChevronRight, FileText, Star, Briefcase, Zap, Heart, Coins, RefreshCw, Droplets, Cloud, Trees, Search, ShieldCheck } from 'lucide-react';
import { PageHero } from '../../components/ui/PageHero';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { AMBICAO_MOVIMENTOS } from '../../data/constants';

export const MovimentosPage = ({ navigate }) => {
  const [selectedMov, setSelectedMov] = useState(null);

  return (
    <div className=\"animate-fade-in bg-white min-h-screen\">
      <PageHero 
        category=\"O Quê Fazemos\"
        title=\"10 Movimentos para Transformar o Brasil\"
        description=\"Compromissos setoriais com metas ambiciosas para acelerar os ODS na Rede Brasil.\"
        image=\"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop\"
      />

      <section className=\"py-20 bg-white\">
        <div className=\"container mx-auto px-4 md:px-8 lg:px-12\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end\">
            <SectionHeader 
              barColor=\"bg-un-gold\"
              badge=\"Compromisso Público\"
              title=\"Ambição Baseada\"
              titleAccent=\"em Ciência e Dados\"
              description=\"Os Movimentos são a materialização da Ambição 2030. Cada um possui metas específicas, amparadas por frameworks globais e adaptadas à realidade brasileira.\"
            />
            <div className=\"flex flex-wrap gap-4 pb-2\">
               <div className=\"px-6 py-4 bg-un-surface rounded-2xl border border-gray-100 flex items-center gap-3\">
                  <FileText className=\"w-5 h-5 text-un-blue\" />
                  <span className=\"text-xs font-black uppercase tracking-widest text-un-blue\">753 Cartas Assinadas</span>
               </div>
               <div className=\"px-6 py-4 bg-un-gold/20 rounded-2xl border-2 border-un-gold flex items-center gap-3\">
                  <Star className=\"w-5 h-5 text-un-blue fill-un-blue\" />
                  <span className=\"text-xs font-black uppercase tracking-widest text-un-blue\">13 Empresas Embaixadoras</span>
               </div>
            </div>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6\">
            {AMBICAO_MOVIMENTOS.map((mov) => (
              <button 
                key={mov.id}
                onClick={() => setSelectedMov(mov)}
                className={`group relative overflow-hidden aspect-square rounded-[2.5rem] transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl ${mov.color} p-8 flex flex-col justify-between text-white text-left ${selectedMov?.id === mov.id ? 'ring-4 ring-offset-4 ring-un-blue scale-105' : ''}`}
              >
                <div className=\"absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-12 -translate-y-12 blur-3xl group-hover:bg-white/20 transition-all\"></div>
                
                <div className=\"relative z-10\">
                   <div className=\"w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all shadow-lg\">
                      <mov.icon className=\"w-7 h-7\" />
                   </div>
                   <h3 className=\"text-2xl font-display font-black uppercase leading-[0.9] tracking-tighter\">{mov.title}</h3>
                </div>

                <div className=\"relative z-10 flex flex-col gap-3\">
                   <span className=\"text-[10px] font-black uppercase tracking-[0.2em] opacity-80\">ODS {mov.ods.join(', ')}</span>
                   <div className=\"flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform\">
                      Metas 2030 <ChevronRight className=\"w-4 h-4\" />
                   </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Showcase */}
      {selectedMov && (
        <section className=\"py-24 bg-un-surface border-t border-gray-100 animate-slide-up\">
          <div className=\"container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl\">
            <div className=\"bg-white p-8 md:p-20 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden\">
               <div className={`absolute top-0 left-0 w-full h-6 ${selectedMov.color}`}></div>
               <button 
                onClick={() => setSelectedMov(null)}
                className=\"absolute top-10 right-10 w-12 h-12 bg-un-surface rounded-full flex items-center justify-center text-gray-400 hover:text-un-blue hover:scale-110 transition-all\"
               >
                 <ArrowLeft className=\"w-6 h-6\" />
               </button>

               <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24\">
                  <div className=\"space-y-10\">
                     <div className=\"flex items-center gap-6\">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white ${selectedMov.color} shadow-2xl shadow-black/10`}>
                           <selectedMov.icon className=\"w-10 h-10\" />
                        </div>
                        <div className=\"space-y-1\">
                           <span className=\"text-xs font-black uppercase tracking-widest text-un-gold bg-un-blue px-3 py-1 rounded-full\">Iniciativa Brasileira</span>
                           <h2 className=\"text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-un-blue leading-none\">{selectedMov.title}</h2>
                        </div>
                     </div>
                     <p className=\"text-2xl text-gray-600 leading-relaxed font-medium tracking-tight\">{selectedMov.desc}</p>
                     
                     <div className=\"p-10 bg-un-surface rounded-[3rem] border border-gray-100 relative group\">
                        <div className=\"absolute top-0 left-0 w-2 h-full bg-un-gold opacity-30\"></div>
                        <h4 className=\"text-xs font-black uppercase tracking-[0.25em] text-un-blue mb-8 flex items-center gap-3\">
                           <Star className=\"w-5 h-5 text-un-gold fill-un-gold\" /> Exemplos de Compromisso
                        </h4>
                        <div className=\"grid grid-cols-1 gap-4\">
                           {selectedMov.metas.slice(0, 2).map((m, i) => (
                              <div key={i} className=\"p-5 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm group-hover:-translate-x-2 transition-transform\">
                                 <CheckCircle2 className=\"w-5 h-5 text-un-gold\" />
                                 <span className=\"text-sm font-bold text-un-blue leading-tight\">{m}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className=\"space-y-10\">
                     <div className=\"space-y-4\">
                        <div className=\"inline-block px-4 py-2 bg-un-blue text-white rounded-xl text-xs font-black uppercase tracking-widest\">Metas Oficiais 2030</div>
                        <h3 className=\"text-3xl font-display font-black uppercase tracking-tighter text-un-blue leading-none\">Transformação Mensurável</h3>
                     </div>
                     <div className=\"space-y-6\">
                        {selectedMov.metas.map((meta, i) => (
                          <div key={i} className=\"group flex gap-6 p-8 bg-un-surface rounded-3xl border-2 border-transparent hover:border-un-gold transition-all duration-300\">
                             <div className=\"w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0 group-hover:bg-un-blue group-hover:text-white transition-all font-black text-lg\">{i + 1}</div>
                             <p className=\"text-gray-700 text-lg font-bold leading-snug\">{meta}</p>
                          </div>
                        ))}
                     </div>
                     <div className=\"pt-6\">
                        <Button 
                           variant=\"primary\" 
                           className=\"w-full py-8 text-xl font-display font-black uppercase tracking-tighter bg-un-blue text-white shadow-2xl shadow-un-blue/30 hover:bg-black group\" 
                           icon={CheckCircle2}
                        >
                           <span className=\"group-hover:mr-4 transition-all\">Assinar Carta de Compromisso</span>
                        </Button>
                        <p className=\"text-center text-xs text-gray-400 mt-6 font-bold uppercase tracking-[0.2em]\">Junte-se às 393 organizações comprometidas</p>
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
               <span className=\"text-[10px] font-black uppercase tracking-[0.3em] text-gray-300\">A Jornada Continua</span>
               <div className=\"flex items-center gap-8\">
                  <button 
                  onClick={() => navigate('ambicao')}
                  className=\"group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-un-blue hover:text-un-gold transition-all\"
                  >
                  <ArrowLeft className=\"w-4 h-4 group-hover:-translate-x-2 transition-transform\" /> Estratégia Ambição
                  </button>
                  <div className=\"w-px h-4 bg-gray-100\"></div>
                  <button 
                  className=\"text-xs font-black uppercase tracking-widest text-un-blue opacity-30 cursor-default\"
                  >
                  Movimentos
                  </button>
               </div>
            </div>

            <Button 
               variant=\"outline\" 
               className=\"px-12 border-2 border-un-blue text-un-blue hover:bg-un-blue hover:text-white rounded-full group\"
               icon={ChevronRight}
               onClick={() => navigate('plataformas')}
            >
               Plataformas de Ação
            </Button>
         </div>
      </footer>
    </div>
  );
};
