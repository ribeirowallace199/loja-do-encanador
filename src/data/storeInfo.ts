import type { StoreInfo, Review } from '../types';

export const storeInfo: StoreInfo = {
  name: 'Loja do Encanador',
  slogan: 'Tudo em materiais de construção e hidráulica em Itaú de Minas - MG',
  description: 'Especialistas em tubos, conexões, torneiras, registros, cubas para banheiro e ferramentas hidráulicas. Atendimento técnico de confiança pelo WhatsApp e entrega ágil para obras e reformas em Itaú de Minas e região.',
  phone: '553535362325',
  phoneDisplay: '(35) 3536-2325',
  whatsapp: '553535362325',
  whatsappDisplay: '(35) 3536-2325',
  email: 'nilsonxmjunior@hotmail.com',
  instagramUrl: 'https://www.instagram.com/loja_do_encanador?igsh=eDlzNDEzY21rNjA4',
  infinitePayUrl: 'https://loja.infinitepay.io/lojadoencanador',
  address: {
    street: 'R. João Kirchner',
    number: '703-B',
    neighborhood: 'Itaú de Minas',
    city: 'Itaú de Minas',
    state: 'MG',
    zipCode: '37975-000',
    reference: 'Rua João Kirchner, 703-B (próximo à rotatória e acesso principal)',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Kirchner%2C+703-B%2C+Ita%C3%BA+de+Minas+-+MG%2C+37975-000',
    embedMapUrl: 'https://maps.google.com/maps?q=R.+Jo%C3%A3o+Kirchner,+703-B,+Ita%C3%BA+de+Minas+-+MG,+37975-000&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  businessHours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:00',
    saturday: 'Sábado: 08:00 às 12:30',
    sunday: 'Domingo: Fechada',
  },
  googleRating: {
    score: 4.9,
    totalReviews: 148,
    reviewUrl: 'https://maps.google.com/?q=Loja+do+Encanador+Rua+Joao+Kirchner+703-B+Itau+de+Minas',
  },
  delivery: {
    active: true,
    bannerText: '🚚 Fazemos Entregas Rápidas em Itaú de Minas e Região! Peça pelo WhatsApp: (35) 3536-2325',
    details: 'Entrega ágil para você não parar o serviço. Levamos canos de 6 metros, conexões, ferramentas, cubas e peças urgentes direto no seu endereço em Itaú de Minas.',
  },
};

export const googleReviews: Review[] = [
  {
    id: '1',
    author: 'Carlos Alberto Mendes',
    rating: 5,
    timeAgo: 'Há 1 semana',
    comment: 'Melhor loja de materiais hidráulicos de Itaú de Minas! Eu precisava de um adaptador que não encontrava em lugar nenhum, me atenderam super bem pelo WhatsApp (35) 3536-2325 e entregaram na obra rapidinho. Recomendo!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: '2',
    author: 'Marcos Vinícius (Encanador)',
    rating: 5,
    timeAgo: 'Há 3 semanas',
    comment: 'Sou encanador aqui na cidade e compro direto na Loja do Encanador. Tem tudo em canos, esgoto, água fria e PPR quente, além de ótimas cubas de apoio para banheiro. Preço justo e ótimo atendimento!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: '3',
    author: 'Renata Silveira',
    rating: 5,
    timeAgo: 'Há 1 mês',
    comment: 'Meu registro de chuveiro estava vazando. Mandei foto no WhatsApp da loja, me falaram qual era o reparo exato e entregaram na minha casa. Atendimento impecável!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: '4',
    author: 'Eduardo Guimarães',
    rating: 5,
    timeAgo: 'Há 2 meses',
    comment: 'Loja completíssima na Rua João Kirchner. Comprei as cubas de apoio dos banheiros, conexões e sifões sanfonados. Ainda paguei fácil pelo link do InfinitePay.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
];
