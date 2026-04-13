import React from 'react';
import { Linkedin, Instagram, Youtube, Megaphone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-un-footer text-white pt-16 md:pt-20 lg:pt-24 border-t border-white/5">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pb-16 md:pb-24">
      {/* Coluna 1: Logo, Texto e Redes */}
      <div className="flex flex-col space-y-6">
        <a href="#/" className="hover:opacity-80 transition-opacity">
          <img 
            src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} 
            alt="Pacto Global - Rede Brasil" 
            className="h-16 md:h-20 w-auto object-contain object-left"
          />
        </a>
        <p className="text-white/60 max-w-[280px] leading-relaxed text-[13px] font-medium">
          Mobilizando o setor privado para alcançar os Objetivos de Desenvolvimento Sustentável.
        </p>
        <div>
          <h4 className="font-bold text-white text-[10px] uppercase tracking-widest mb-4 inline-block border-b-2 border-un-gold/50 pb-1 pr-8">Nas Redes</h4>
          <div className="flex gap-3 pt-2">
            {[
               { icon: Linkedin, name: 'Linkedin', url: 'https://www.linkedin.com/company/pactoglobal/' },
               { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/pactoglobalbr/' },
               { icon: Youtube, name: 'Youtube', url: 'https://www.youtube.com/user/PactoGlobalBR' },
               { icon: () => <span className="text-sm font-black leading-none">X</span>, name: 'X', url: '#' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-un-gold hover:border-un-gold hover:text-un-blue transition-all duration-300 cursor-pointer text-white/90 hover:scale-110 shadow-lg"
                  aria-label={social.name}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coluna 2: Links Úteis */}
      <div>
        <h4 className="font-bold text-white text-[10px] uppercase tracking-widest mb-6 inline-block border-b-2 border-un-gold/50 pb-1 pr-8">Links Úteis</h4>
        <ul className="space-y-4 text-[13px] font-medium text-white/60">
          <li><a href="#/sobre" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Sobre Nós</a></li>
          <li><a href="#/agenda" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Dez Princípios</a></li>
          <li><a href="#/agenda" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">ODS</a></li>
          <li><a href="#/participar" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Quem já faz parte</a></li>
          <li><a href="#/participar" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Como aderir</a></li>
        </ul>
      </div>

      {/* Coluna 3: Transparência & Políticas */}
      <div>
        <div className="mb-10">
          <h4 className="font-bold text-white text-[10px] uppercase tracking-widest mb-6 inline-block border-b-2 border-un-gold/50 pb-1 pr-8">Transparência</h4>
          <ul className="space-y-4 text-[13px] font-medium text-white/60">
             <li><a href="#/cop" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Relatórios CoP</a></li>
            <li><a href="#" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block font-bold uppercase tracking-wider text-[11px]">Governança</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white text-[10px] uppercase tracking-widest mb-6 inline-block border-b-2 border-un-gold/50 pb-1 pr-8">Políticas</h4>
          <ul className="space-y-4 text-[13px] font-medium text-white/60">
            <li><a href="#" className="hover:text-un-gold hover:translate-x-1 transition-all duration-200 inline-block text-[11px]">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>

      {/* Coluna 4: Sala de Imprensa */}
      <div className="flex flex-col">
        <h4 className="font-bold text-white text-[10px] uppercase tracking-widest mb-6 inline-block border-b-2 border-un-gold/50 pb-1 pr-8">Sala de Imprensa</h4>
        <p className="text-white/60 text-[13px] font-medium mb-6 leading-relaxed">
          Acesse releases, fotos e materiais institucionais para mídia.
        </p>
        <a
          href="#/noticias"
          className="inline-flex items-center justify-center gap-2.5 bg-un-gold text-un-blue rounded-full px-7 py-3 font-bold uppercase tracking-wider text-[10px] shadow-[0_0_20px_rgba(204,177,70,0.3)] hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 mt-2"
        >
          <Megaphone className="w-4 h-4" />
          ACESSE
        </a>
      </div>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="w-full bg-un-blue-deep border-t border-white/5 py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">
          <span>© 2026 Todos os direitos reservados</span>
          <span className="hidden md:inline w-1 h-1 bg-white/20 rounded-full"></span>
          <span>Pacto Global da ONU - Rede Brasil</span>
        </div>
        <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mr-2">Uma iniciativa de</span>
          <img src="https://unglobalcompact.org/images/logo-compact.svg" alt="UN Global Compact" className="h-6 md:h-8 w-auto invert" />
        </div>
      </div>
    </div>
  </footer>
);
