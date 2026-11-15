import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/Desktop/.gemini/antigravity/scratch/casa-do-encanador/public/images/products';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Cano PVC Soldável Marrom (Água Fria)
const canoPvcSoldavel = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="pvcBrown1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8d4b38"/>
      <stop offset="25%" stop-color="#b6664e"/>
      <stop offset="60%" stop-color="#844331"/>
      <stop offset="100%" stop-color="#5a2c1f"/>
    </linearGradient>
    <linearGradient id="pvcBrown2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7c3f2e"/>
      <stop offset="30%" stop-color="#a85942"/>
      <stop offset="70%" stop-color="#733827"/>
      <stop offset="100%" stop-color="#492217"/>
    </linearGradient>
    <linearGradient id="pvcShine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bg)"/>
  
  <!-- Sombra no Chão -->
  <ellipse cx="300" cy="380" rx="240" ry="25" fill="#cbd5e1" opacity="0.6"/>

  <g filter="url(#shadow)">
    <!-- Barra Superior 20mm -->
    <g transform="translate(60, 110)">
      <rect x="0" y="0" width="480" height="34" rx="4" fill="url(#pvcBrown2)"/>
      <rect x="0" y="2" width="480" height="8" rx="2" fill="url(#pvcShine)"/>
      <!-- Bolsa / Encaixe -->
      <rect x="440" y="-3" width="45" height="40" rx="3" fill="url(#pvcBrown1)"/>
      <ellipse cx="485" cy="17" rx="6" ry="20" fill="#492217"/>
      <ellipse cx="485" cy="17" rx="4" ry="16" fill="#2d130c"/>
    </g>

    <!-- Barra Intermediária 25mm -->
    <g transform="translate(50, 170)">
      <rect x="0" y="0" width="500" height="46" rx="5" fill="url(#pvcBrown1)"/>
      <rect x="0" y="3" width="500" height="12" rx="3" fill="url(#pvcShine)"/>
      <!-- Bolsa / Encaixe -->
      <rect x="455" y="-4" width="50" height="54" rx="4" fill="url(#pvcBrown2)"/>
      <ellipse cx="505" cy="23" rx="7" ry="27" fill="#492217"/>
      <ellipse cx="505" cy="23" rx="4" ry="22" fill="#2d130c"/>
      <text x="30" y="28" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fde047" letter-spacing="1">PVC SOLDÁVEL 25mm (3/4") - ÁGUA FRIA</text>
    </g>

    <!-- Barra Principal 50mm -->
    <g transform="translate(40, 245)">
      <rect x="0" y="0" width="520" height="74" rx="6" fill="url(#pvcBrown1)"/>
      <rect x="0" y="5" width="520" height="18" rx="4" fill="url(#pvcShine)"/>
      <!-- Bolsa / Encaixe -->
      <rect x="465" y="-5" width="60" height="84" rx="5" fill="url(#pvcBrown2)"/>
      <ellipse cx="525" cy="37" rx="10" ry="42" fill="#492217"/>
      <ellipse cx="525" cy="37" rx="6" ry="36" fill="#2d130c"/>
      <text x="30" y="44" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fde047" letter-spacing="1">PVC SOLDÁVEL 50mm (1 1/2") - PADRÃO TIGRE / KRONA</text>
    </g>
  </g>

  <!-- Tag Ilustrativa -->
  <rect x="200" y="380" width="200" height="32" rx="16" fill="#844331"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">CANO PVC ÁGUA FRIA (MARROM)</text>
</svg>`;

// 2. Cano PVC Branco para Esgoto
const canoPvcEsgoto = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEsgoto" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="pvcWhite1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#f8fafc"/>
      <stop offset="70%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <filter id="shadowEsgoto" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgEsgoto)"/>
  <ellipse cx="300" cy="385" rx="250" ry="25" fill="#94a3b8" opacity="0.4"/>

  <g filter="url(#shadowEsgoto)">
    <!-- Barra Esgoto 50mm -->
    <g transform="translate(50, 120)">
      <rect x="0" y="0" width="500" height="52" rx="5" fill="url(#pvcWhite1)" stroke="#94a3b8" stroke-width="1"/>
      <rect x="0" y="3" width="500" height="12" rx="3" fill="#ffffff" opacity="0.8"/>
      <rect x="445" y="-4" width="55" height="60" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Anel de borracha preto -->
      <rect x="465" y="-2" width="6" height="56" fill="#1e293b"/>
      <ellipse cx="500" cy="26" rx="8" ry="30" fill="#64748b"/>
      <ellipse cx="500" cy="26" rx="5" ry="25" fill="#334155"/>
      <text x="30" y="32" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">CANO DE ESGOTO 50mm - SÉRIE NORMAL</text>
    </g>

    <!-- Barra Esgoto 100mm (Principal) -->
    <g transform="translate(40, 210)">
      <rect x="0" y="0" width="520" height="105" rx="6" fill="url(#pvcWhite1)" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="0" y="6" width="520" height="25" rx="4" fill="#ffffff" opacity="0.9"/>
      <rect x="455" y="-6" width="70" height="117" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <!-- Anel de borracha da junta elástica -->
      <rect x="480" y="-3" width="10" height="111" fill="#0f172a"/>
      <ellipse cx="525" cy="52" rx="14" ry="58" fill="#64748b"/>
      <ellipse cx="525" cy="52" rx="8" ry="50" fill="#1e293b"/>
      <text x="30" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="black" fill="#0369a1">CANO DE ESGOTO 100mm (4") COM JUNTA ELÁSTICA</text>
    </g>
  </g>

  <rect x="200" y="380" width="200" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">CANO PVC ESGOTO (BRANCO)</text>
</svg>`;

// 3. Conduíte Corrugado Amarelo
const conduiteAmarelo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgConduite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="30%" stop-color="#eab308"/>
      <stop offset="70%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
    <filter id="shadowConduite" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgConduite)"/>
  <ellipse cx="300" cy="380" rx="220" ry="25" fill="#ca8a04" opacity="0.3"/>

  <!-- Rolo de Conduíte Corrugado -->
  <g filter="url(#shadowConduite)">
    <!-- Círculo externo do rolo -->
    <ellipse cx="300" cy="230" rx="210" ry="130" fill="none" stroke="url(#yellowGrad)" stroke-width="50"/>
    <ellipse cx="300" cy="230" rx="160" ry="100" fill="none" stroke="#eab308" stroke-width="40"/>
    <ellipse cx="300" cy="230" rx="110" ry="70" fill="none" stroke="url(#yellowGrad)" stroke-width="35"/>
    <!-- Centro oco -->
    <ellipse cx="300" cy="230" rx="60" ry="38" fill="#fef3c7"/>
    
    <!-- Ponta saindo solta -->
    <path d="M 450 170 Q 510 200 480 300 Q 450 380 340 370" fill="none" stroke="url(#yellowGrad)" stroke-width="28" stroke-linecap="round"/>
    <!-- Boca do conduíte com textura corrugada -->
    <ellipse cx="340" cy="370" rx="14" ry="14" fill="#713f12"/>
    <ellipse cx="340" cy="370" rx="9" ry="9" fill="#422006"/>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#ca8a04"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">CONDUÍTE SANFONADO AMARELO</text>
</svg>`;

// 4. Sifão Sanfonado Universal Branco
const sifaoSanfonadoBranco = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgSifao" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="sifaoWhite" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#f1f5f9"/>
      <stop offset="80%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <filter id="shadowSifao" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgSifao)"/>
  <ellipse cx="300" cy="390" rx="210" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowSifao)">
    <!-- Porca / Rosca Superior (Entrada da Pia) -->
    <rect x="110" y="90" width="75" height="45" rx="6" fill="#0284c7"/>
    <rect x="115" y="80" width="65" height="15" rx="3" fill="#0369a1"/>
    <ellipse cx="147" cy="80" rx="32" ry="10" fill="#0f172a"/>
    <ellipse cx="147" cy="80" rx="24" ry="7" fill="#38bdf8"/>
    <!-- Copo ou adaptador -->
    <rect x="120" y="130" width="55" height="35" rx="4" fill="url(#sifaoWhite)"/>

    <!-- Tubo Sanfonado Flexível em Curva Sifonada (S) -->
    <path d="M 147 165 C 147 320 280 340 320 260 C 350 200 400 200 420 260 C 430 290 450 310 500 310" 
          fill="none" stroke="url(#sifaoWhite)" stroke-width="48" stroke-linecap="round"/>
    <!-- Aneis / Ondulações do Sanfonado -->
    <path d="M 147 165 C 147 320 280 340 320 260 C 350 200 400 200 420 260 C 430 290 450 310 500 310" 
          fill="none" stroke="#94a3b8" stroke-width="48" stroke-dasharray="7,7" stroke-linecap="round" opacity="0.6"/>

    <!-- Ponta Escalonada de Saída para o Esgoto (DN 38, 40, 48, 50mm) -->
    <g transform="translate(480, 285)">
      <rect x="0" y="0" width="20" height="50" rx="3" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="18" y="4" width="20" height="42" rx="3" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="36" y="8" width="20" height="34" rx="3" fill="#cbd5e1" stroke="#64748b"/>
      <ellipse cx="56" cy="25" rx="6" ry="17" fill="#475569"/>
    </g>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">SIFÃO SANFONADO UNIVERSAL</text>
</svg>`;

// 5. Sifão Sanfonado Cromado Metálico
const sifaoCromado = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgChrome" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="25%" stop-color="#cbd5e1"/>
      <stop offset="45%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="75%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="glowChrome" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#38bdf8" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgChrome)"/>

  <g filter="url(#glowChrome)">
    <!-- Porca Superior Cromada -->
    <rect x="110" y="85" width="80" height="50" rx="6" fill="url(#chromeMetal)"/>
    <ellipse cx="150" cy="85" rx="40" ry="12" fill="#e2e8f0"/>
    <ellipse cx="150" cy="85" rx="30" ry="8" fill="#1e293b"/>
    <!-- Copo Sifão Inox -->
    <rect x="120" y="130" width="60" height="60" rx="6" fill="url(#chromeMetal)"/>

    <!-- Tubo Metálico Corrugado Cromado -->
    <path d="M 150 190 C 150 330 290 350 330 260 C 360 190 410 190 440 260 C 455 300 480 310 520 310" 
          fill="none" stroke="url(#chromeMetal)" stroke-width="44" stroke-linecap="round"/>
    <path d="M 150 190 C 150 330 290 350 330 260 C 360 190 410 190 440 260 C 455 300 480 310 520 310" 
          fill="none" stroke="#ffffff" stroke-width="44" stroke-dasharray="6,8" stroke-linecap="round" opacity="0.4"/>

    <!-- Canopla de Parede Cromada -->
    <ellipse cx="525" cy="310" rx="14" ry="40" fill="url(#chromeMetal)"/>
    <ellipse cx="530" cy="310" rx="6" ry="25" fill="#0f172a"/>
  </g>

  <rect x="170" y="380" width="260" height="32" rx="16" fill="#38bdf8"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#0f172a" text-anchor="middle">SIFÃO EXTENSIVO CROMADO INOX</text>
</svg>`;

// 6. Joelhos e Conexões PVC
const joelhoPvc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgJoelho" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="pvcBrownElbow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a85942"/>
      <stop offset="40%" stop-color="#844331"/>
      <stop offset="80%" stop-color="#5a2c1f"/>
      <stop offset="100%" stop-color="#492217"/>
    </linearGradient>
    <filter id="shadowElbow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.22"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgJoelho)"/>
  <ellipse cx="300" cy="390" rx="230" ry="22" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowElbow)">
    <!-- Joelho 90° Grande (Esquerda) -->
    <g transform="translate(130, 110)">
      <path d="M 0 0 L 70 0 C 130 0 160 30 160 90 L 160 160 L 95 160 C 95 125 75 105 40 95 L 0 70 Z" 
            fill="url(#pvcBrownElbow)"/>
      <!-- Bocas do Joelho -->
      <ellipse cx="0" cy="35" rx="14" ry="35" fill="#492217"/>
      <ellipse cx="0" cy="35" rx="9" ry="27" fill="#2d130c"/>
      <ellipse cx="127" cy="160" rx="33" ry="14" fill="#492217"/>
      <ellipse cx="127" cy="160" rx="25" ry="9" fill="#2d130c"/>
      <text x="45" y="45" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fde047">90°</text>
    </g>

    <!-- Joelho 45° (Direita) -->
    <g transform="translate(350, 140)">
      <path d="M 0 30 L 60 0 L 140 80 L 100 120 L 50 65 L 0 85 Z" 
            fill="url(#pvcBrownElbow)"/>
      <ellipse cx="25" cy="58" rx="16" ry="30" fill="#492217"/>
      <ellipse cx="120" cy="100" rx="24" ry="24" fill="#492217"/>
      <text x="60" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fde047">45°</text>
    </g>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#844331"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">JOELHOS (COTOVELOS) 90° E 45°</text>
</svg>`;

// 7. Tê 90° de PVC Soldável
const tePvc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgTe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="pvcTe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b6664e"/>
      <stop offset="45%" stop-color="#844331"/>
      <stop offset="100%" stop-color="#492217"/>
    </linearGradient>
    <filter id="shadowTe" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgTe)"/>
  <ellipse cx="300" cy="385" rx="210" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowTe)" transform="translate(160, 100)">
    <!-- Barra Horizontal do Tê -->
    <rect x="0" y="110" width="280" height="75" rx="8" fill="url(#pvcTe)"/>
    <!-- Saída Superior 90° -->
    <rect x="100" y="0" width="80" height="130" rx="8" fill="url(#pvcTe)"/>
    <!-- Anéis reforçados de encaixe -->
    <rect x="-5" y="105" width="25" height="85" rx="4" fill="#a85942"/>
    <ellipse cx="0" cy="147" rx="10" ry="42" fill="#33140b"/>
    <ellipse cx="0" cy="147" rx="6" ry="34" fill="#1e0a05"/>

    <rect x="260" y="105" width="25" height="85" rx="4" fill="#a85942"/>
    <ellipse cx="280" cy="147" rx="10" ry="42" fill="#33140b"/>
    <ellipse cx="280" cy="147" rx="6" ry="34" fill="#1e0a05"/>

    <rect x="95" y="-5" width="90" height="25" rx="4" fill="#a85942"/>
    <ellipse cx="140" cy="0" rx="45" ry="10" fill="#33140b"/>
    <ellipse cx="140" cy="0" rx="36" ry="6" fill="#1e0a05"/>
  </g>

  <rect x="190" y="380" width="220" height="32" rx="16" fill="#844331"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">TÊ 90° PVC SOLDÁVEL</text>
</svg>`;

// 8. Torneira de Chuveiro / Registro de Pressão
const registroChuveiro = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgReg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="brassGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="35%" stop-color="#d97706"/>
      <stop offset="70%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="chromeShine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#cbd5e1"/>
      <stop offset="60%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadowReg" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgReg)"/>
  <ellipse cx="300" cy="385" rx="180" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowReg)">
    <!-- Base de Latão Amarelo Embutida -->
    <g transform="translate(180, 200)">
      <!-- Rosca esquerda e direita -->
      <rect x="0" y="40" width="240" height="50" rx="6" fill="url(#brassGold)"/>
      <ellipse cx="0" cy="65" rx="10" ry="25" fill="#78350f"/>
      <ellipse cx="240" cy="65" rx="10" ry="25" fill="#78350f"/>
      <!-- Castelo do registro -->
      <rect x="90" y="-40" width="60" height="90" rx="5" fill="url(#brassGold)"/>
    </g>

    <!-- Haste e Volante / Acabamento Cromado (Cruzeta C-50) -->
    <g transform="translate(300, 110)">
      <!-- Canopla de parede cromada -->
      <circle cx="0" cy="30" r="55" fill="url(#chromeShine)"/>
      <circle cx="0" cy="30" r="35" fill="#e2e8f0"/>
      <!-- Volante de Chuveiro Cruzeta 4 Pontas -->
      <rect x="-16" y="-35" width="32" height="130" rx="8" fill="url(#chromeShine)"/>
      <rect x="-65" y="14" width="130" height="32" rx="8" fill="url(#chromeShine)"/>
      <circle cx="0" cy="30" r="18" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      <text x="0" y="34" font-family="system-ui, sans-serif" font-size="10" font-weight="black" fill="#0284c7" text-anchor="middle">FRIO</text>
    </g>
  </g>

  <rect x="170" y="380" width="260" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">REGISTRO DE CHUVEIRO COM BASE</text>
</svg>`;

// 9. Torneira de Jardim / Tanque com Bico
const torneiraJardim = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgTorn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="chromeTorn" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadowTorn" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.22"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgTorn)"/>
  <ellipse cx="300" cy="390" rx="190" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowTorn)" transform="translate(160, 100)">
    <!-- Rosca de Parede (Esquerda) -->
    <rect x="0" y="110" width="60" height="40" rx="4" fill="url(#chromeTorn)"/>
    <ellipse cx="0" cy="130" rx="8" ry="20" fill="#334155"/>
    <ellipse cx="60" cy="130" rx="10" ry="35" fill="url(#chromeTorn)"/>

    <!-- Corpo da Torneira -->
    <path d="M 60 115 L 180 115 C 220 115 240 140 240 180 L 240 230 L 195 230 L 195 180 C 195 160 180 150 160 150 L 60 150 Z" 
          fill="url(#chromeTorn)"/>

    <!-- Alavanca Superior 1/4 de volta (Amarela ou Vermelha) -->
    <g transform="translate(170, 70)">
      <rect x="-10" y="20" width="20" height="25" rx="3" fill="#64748b"/>
      <rect x="-50" y="0" width="100" height="20" rx="10" fill="#dc2626"/>
      <circle cx="0" cy="10" r="6" fill="#ffffff"/>
    </g>

    <!-- Bico com estrias para prender Mangueira -->
    <g transform="translate(195, 230)">
      <rect x="5" y="0" width="35" height="15" rx="2" fill="#d97706"/>
      <rect x="8" y="15" width="29" height="10" rx="2" fill="#b45309"/>
      <rect x="11" y="25" width="23" height="10" rx="2" fill="#d97706"/>
      <rect x="14" y="35" width="17" height="10" rx="2" fill="#b45309"/>
      <ellipse cx="22" cy="45" rx="8" ry="4" fill="#451a03"/>
    </g>
  </g>

  <rect x="160" y="380" width="280" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">TORNEIRA JARDIM COM BICO PARA MANGUEIRA</text>
</svg>`;

// 10. Mangueira de Jardim Trançada
const mangueiraJardim = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgHose" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
    <linearGradient id="greenHose" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="30%" stop-color="#16a34a"/>
      <stop offset="70%" stop-color="#15803d"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
    <filter id="shadowHose" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgHose)"/>
  <ellipse cx="300" cy="385" rx="210" ry="25" fill="#15803d" opacity="0.25"/>

  <g filter="url(#shadowHose)">
    <!-- Espirais do Rolo de Mangueira Verde -->
    <ellipse cx="300" cy="225" rx="210" ry="125" fill="none" stroke="url(#greenHose)" stroke-width="45"/>
    <!-- Trama trançada (malha de poliéster) -->
    <ellipse cx="300" cy="225" rx="210" ry="125" fill="none" stroke="#ffffff" stroke-width="45" stroke-dasharray="3,6" opacity="0.3"/>

    <ellipse cx="300" cy="225" rx="160" ry="95" fill="none" stroke="url(#greenHose)" stroke-width="40"/>
    <ellipse cx="300" cy="225" rx="160" ry="95" fill="none" stroke="#ffffff" stroke-width="40" stroke-dasharray="3,6" opacity="0.3"/>

    <ellipse cx="300" cy="225" rx="110" ry="65" fill="none" stroke="url(#greenHose)" stroke-width="35"/>
    <ellipse cx="300" cy="225" rx="55" ry="35" fill="#dcfce7"/>

    <!-- Ponta da mangueira com Esguicho Laranja -->
    <path d="M 460 170 Q 520 220 480 310 L 410 330" fill="none" stroke="url(#greenHose)" stroke-width="26" stroke-linecap="round"/>
    <!-- Esguicho / Bico regulador -->
    <g transform="translate(370, 315) rotate(10)">
      <rect x="0" y="0" width="35" height="24" rx="4" fill="#f97316"/>
      <rect x="30" y="4" width="20" height="16" rx="3" fill="#ea580c"/>
      <rect x="48" y="7" width="10" height="10" rx="2" fill="#ca8a04"/>
    </g>
  </g>

  <rect x="170" y="380" width="260" height="32" rx="16" fill="#16a34a"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">MANGUEIRA TRANÇADA (POR METRO)</text>
</svg>`;

// 11. Engate Flexível Inox para Pia e Vaso
const engateInox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEngate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="inoxMesh" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <filter id="shadowEngate" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgEngate)"/>
  <ellipse cx="300" cy="385" rx="200" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowEngate)">
    <!-- Conector de Rosca Macho (Esquerda) -->
    <g transform="translate(100, 200)">
      <rect x="0" y="0" width="35" height="30" rx="3" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="35" y="-5" width="25" height="40" rx="4" fill="#94a3b8" stroke="#475569"/>
    </g>

    <!-- Mangueira em Malha Trançada de Aço Inox em Curva -->
    <path d="M 160 215 C 220 215 250 120 330 120 C 410 120 420 280 470 280" 
          fill="none" stroke="url(#inoxMesh)" stroke-width="26" stroke-linecap="round"/>
    <!-- Trama cruzada de inox -->
    <path d="M 160 215 C 220 215 250 120 330 120 C 410 120 420 280 470 280" 
          fill="none" stroke="#ffffff" stroke-width="26" stroke-dasharray="2,4" opacity="0.7"/>

    <!-- Porca Sextavada Cromada com Borracha (Direita) -->
    <g transform="translate(470, 260)">
      <rect x="0" y="0" width="30" height="40" rx="4" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="25" y="3" width="18" height="34" rx="3" fill="#0284c7"/>
      <ellipse cx="43" cy="20" rx="5" ry="17" fill="#0f172a"/>
    </g>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">ENGATE FLEXÍVEL INOX (PIA E VASO)</text>
</svg>`;

// 12. Fita Veda Rosca
const fitaVedaRosca = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgTape" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="blueCase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <filter id="shadowTape" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgTape)"/>
  <ellipse cx="300" cy="385" rx="180" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowTape)" transform="translate(190, 100)">
    <!-- Carretel Azul de Veda Rosca -->
    <circle cx="110" cy="110" r="105" fill="url(#blueCase)"/>
    <!-- Centro do Carretel -->
    <circle cx="110" cy="110" r="50" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4"/>
    <circle cx="110" cy="110" r="22" fill="#0284c7"/>

    <!-- Fita Branca PTFE saindo do rolo -->
    <path d="M 110 5 C 190 5 240 60 260 140 L 225 145 C 210 80 170 35 110 35 Z" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
    
    <text x="110" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="black" fill="#ffffff" text-anchor="middle">FITA VEDA ROSCA</text>
    <text x="110" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="black" fill="#ffffff" text-anchor="middle">100% PTFE • 18mm</text>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">FITA VEDA ROSCA PROFISSIONAL</text>
</svg>`;

// 13. Cola de Cano PVC (Adesivo Plástico)
const colaPvc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="glueTube" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <filter id="shadowGlue" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgGlue)"/>
  <ellipse cx="300" cy="385" rx="180" ry="20" fill="#94a3b8" opacity="0.3"/>

  <g filter="url(#shadowGlue)" transform="translate(180, 80) rotate(15)">
    <!-- Tubo / Bisnaga de Cola Vermelha e Branca -->
    <path d="M 40 40 L 160 40 L 145 230 L 55 230 Z" fill="url(#glueTube)" stroke="#7f1d1d" stroke-width="2"/>
    <!-- Dobra traseira do tubo -->
    <rect x="52" y="225" width="96" height="18" rx="2" fill="#94a3b8"/>
    <!-- Bico dosador -->
    <path d="M 85 40 L 85 10 L 115 10 L 115 40 Z" fill="#ffffff" stroke="#cbd5e1"/>
    <rect x="92" y="-12" width="16" height="22" rx="2" fill="#ef4444"/>
    <!-- Gota transparente de cola escorrendo -->
    <path d="M 100 -12 C 95 -25 90 -35 100 -40 C 110 -35 105 -25 100 -12 Z" fill="#38bdf8" opacity="0.8"/>

    <!-- Rótulo do Tubo -->
    <rect x="58" y="70" width="84" height="120" fill="#ffffff" rx="4"/>
    <text x="100" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="black" fill="#dc2626" text-anchor="middle">ADESIVO</text>
    <text x="100" y="115" font-family="system-ui, sans-serif" font-size="16" font-weight="black" fill="#0f172a" text-anchor="middle">PVC</text>
    <text x="100" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">SOLDA A FRIO</text>
    <rect x="68" y="145" width="64" height="8" rx="4" fill="#0284c7"/>
  </g>

  <rect x="180" y="380" width="240" height="32" rx="16" fill="#dc2626"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">ADESIVO PLÁSTICO / COLA PVC</text>
</svg>`;

// 14. Cuba de Apoio Redonda (Branca Cerâmica)
const cubaRedonda = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgBowl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="ceramicWhite" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#f8fafc"/>
      <stop offset="80%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <filter id="shadowBowl" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="15" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgBowl)"/>
  <ellipse cx="300" cy="385" rx="220" ry="25" fill="#94a3b8" opacity="0.4"/>

  <g filter="url(#shadowBowl)">
    <!-- Corpo da Cuba Redonda (Perspectiva Frontal/Superior) -->
    <path d="M 120 180 C 120 330 480 330 480 180 Z" fill="url(#ceramicWhite)" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Borda Superior Esmaltada -->
    <ellipse cx="300" cy="180" rx="180" ry="75" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
    <!-- Interior côncavo da cuba -->
    <ellipse cx="300" cy="182" rx="160" ry="60" fill="url(#ceramicWhite)"/>
    <!-- Brilho de esmalte cerâmico -->
    <path d="M 160 180 Q 200 210 260 215" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.9"/>

    <!-- Furo da Válvula de Escoamento -->
    <ellipse cx="300" cy="205" rx="22" ry="10" fill="#94a3b8"/>
    <ellipse cx="300" cy="205" rx="14" ry="6" fill="#1e293b"/>
  </g>

  <rect x="170" y="380" width="260" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">CUBA DE APOIO REDONDA BRANCA</text>
</svg>`;

// 15. Cuba de Apoio Quadrada (Cerâmica)
const cubaQuadrada = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgSquare" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="ceramicSquare" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="85%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <filter id="shadowSquare" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="15" flood-opacity="0.22"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bgSquare)"/>
  <ellipse cx="300" cy="385" rx="220" ry="25" fill="#94a3b8" opacity="0.4"/>

  <g filter="url(#shadowSquare)">
    <!-- Base e paredes externas da cuba quadrada -->
    <path d="M 140 180 L 190 310 L 410 310 L 460 180 Z" fill="url(#ceramicSquare)" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Borda superior em perspectiva -->
    <polygon points="300,120 460,180 300,240 140,180" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
    <!-- Interior profundo da cuba -->
    <polygon points="300,135 435,182 300,230 165,182" fill="url(#ceramicSquare)"/>
    
    <!-- Furo da Válvula no fundo -->
    <ellipse cx="300" cy="195" rx="20" ry="10" fill="#94a3b8"/>
    <ellipse cx="300" cy="195" rx="12" ry="6" fill="#1e293b"/>
  </g>

  <rect x="160" y="380" width="280" height="32" rx="16" fill="#0284c7"/>
  <text x="300" y="401" font-family="system-ui, sans-serif" font-size="12" font-weight="black" fill="#ffffff" text-anchor="middle">CUBA DE APOIO QUADRADA MODERNA</text>
</svg>`;

// Escrever todos os arquivos
const items = {
  'cano-pvc-soldavel.svg': canoPvcSoldavel,
  'cano-pvc-esgoto.svg': canoPvcEsgoto,
  'conduite-amarelo.svg': conduiteAmarelo,
  'sifao-sanfonado-branco.svg': sifaoSanfonadoBranco,
  'sifao-sanfonado-cromado.svg': sifaoCromado,
  'joelho-pvc.svg': joelhoPvc,
  'te-pvc.svg': tePvc,
  'registro-chuveiro.svg': registroChuveiro,
  'torneira-jardim.svg': torneiraJardim,
  'mangueira-jardim.svg': mangueiraJardim,
  'engate-inox.svg': engateInox,
  'fita-veda-rosca.svg': fitaVedaRosca,
  'cola-pvc.svg': colaPvc,
  'cuba-redonda.svg': cubaRedonda,
  'cuba-quadrada.svg': cubaQuadrada,
};

for (const [file, content] of Object.entries(items)) {
  fs.writeFileSync(path.join(outDir, file), content.trim(), 'utf-8');
  console.log('Gerado:', file);
}
