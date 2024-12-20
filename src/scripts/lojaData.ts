const lojas = [
  {
    nome: 'Jogos e Cia - Acre',
    cep: '69918703',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(68) 3224-5678',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '09:00', fecha: '18:00' },
      quarta: { abre: '08:30', fecha: '18:00' },
      quinta: { abre: '09:00', fecha: '19:00' },
      sexta: { abre: '08:00', fecha: '17:00' },
      sabado: { abre: '10:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleirando - Acre',
    cep: '69911204',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(68) 3345-6789',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '19:00' },
      terca: { abre: '10:30', fecha: '19:30' },
      quarta: { abre: '11:00', fecha: '20:00' },
      quinta: { abre: '10:00', fecha: '19:00' },
      sexta: { abre: '09:30', fecha: '18:30' },
      sabado: { abre: '11:00', fecha: '16:00' },
      domingo: { abre: '12:00', fecha: '16:00' },
    },
  },
  {
    nome: 'Casa dos Meeples - Alagoas',
    cep: '57010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(82) 3123-4567',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '17:00' },
      terca: { abre: '09:00', fecha: '18:00' },
      quarta: { abre: '10:00', fecha: '19:00' },
      quinta: { abre: '09:30', fecha: '18:30' },
      sexta: { abre: '08:00', fecha: '17:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Desafios e Dados - Alagoas',
    cep: '57020-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(82) 3234-5678',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '18:00' },
      terca: { abre: '09:30', fecha: '18:30' },
      quarta: { abre: '10:00', fecha: '19:00' },
      quinta: { abre: '08:00', fecha: '17:00' },
      sexta: { abre: '09:00', fecha: '18:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Estratégia Central - Amapá',
    cep: '68903-193',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(96) 3345-6789',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:00', fecha: '19:00' },
      quarta: { abre: '10:00', fecha: '20:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'A Toca dos Tabuleiros - Amapá',
    cep: '68908-290',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(96) 3456-7890',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '09:30', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '08:30', fecha: '16:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'Épicos & Desafios - Amazonas',
    cep: '69097224',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(92) 3567-8901',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:30' },
      terca: { abre: '09:30', fecha: '18:00' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '17:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Tabuleiro da Amazônia - Amazonas',
    cep: '69087470',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(92) 3678-9012',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '10:30', fecha: '18:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Mundo dos Jogos - Bahia',
    cep: '40010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(71) 3789-0123',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:00' },
      terca: { abre: '09:00', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '15:00', fecha: '19:00' },
    },
  },
  {
    nome: 'Tabuleiros da Bahia - Bahia',
    cep: '40020-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(71) 3890-1234',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Jogo e Magia - Ceará',
    cep: '60010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(85) 3901-2345',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:30' },
      terca: { abre: '09:00', fecha: '18:00' },
      quarta: { abre: '09:30', fecha: '18:30' },
      quinta: { abre: '10:00', fecha: '19:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '11:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Reino dos Dados - Ceará',
    cep: '60020-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(85) 4012-3456',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:30' },
      terca: { abre: '10:30', fecha: '19:00' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '12:00', fecha: '17:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'Lúdico - Distrito Federal',
    cep: '72620201',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(61) 4123-4567',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '10:30', fecha: '18:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Distrito dos Meeples - Distrito Federal',
    cep: '72261049',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(61) 4234-5678',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '19:00' },
      terca: { abre: '09:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Pioneiros do Jogo - Espírito Santo',
    cep: '29148425',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(27) 4345-6789',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:30' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Espaço dos Desafios - Espírito Santo',
    cep: '29126710',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(27) 4456-7890',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Jogos & Estratégias - Goiás',
    cep: '74423377',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(62) 4567-8901',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Goiás do Tabuleiro - Goiás',
    cep: '74430120',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(62) 4678-9012',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '09:30', fecha: '18:00' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '08:30', fecha: '17:00' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'O Covil dos Meeples - Maranhão',
    cep: '65068647',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(98) 4789-0123',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '09:30', fecha: '17:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '09:00', fecha: '17:00' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Estratégias Maranhenses - Maranhão',
    cep: '65631640',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(98) 4890-1234',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '10:30', fecha: '18:30' },
      quinta: { abre: '08:30', fecha: '16:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '15:00', fecha: '19:00' },
    },
  },
  {
    nome: 'Mestre dos Jogos - Mato Grosso',
    cep: '78714228',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(65) 4901-2345',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:00' },
      terca: { abre: '09:00', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleiros Pantaneiros - Mato Grosso',
    cep: '78705266',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(65) 4012-3456',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Aventura em Tabuleiros - Mato Grosso do Sul',
    cep: '79011220',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(67) 5123-4567',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '10:30', fecha: '18:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Estratégia e Desafios - Mato Grosso do Sul',
    cep: '79011541',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(67) 5234-5678',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '19:00' },
      terca: { abre: '09:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Império dos Meeples - Minas Gerais',
    cep: '32675614',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(31) 5345-6789',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '08:30', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '18:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'Tabuleiros Mineiros - Minas Gerais',
    cep: '35058-270',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(31) 5456-7890',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:30' },
      terca: { abre: '09:30', fecha: '17:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Conquistadores do Jogo - Pará',
    cep: '66815-450',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(91) 5567-8901',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:00' },
      terca: { abre: '09:00', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Tabuleiro Amazônico - Pará',
    cep: '66010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(91) 5678-9012',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Meeples Paraibanos - Paraíba',
    cep: '58080490',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(83) 5789-0123',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:30' },
      terca: { abre: '09:00', fecha: '18:00' },
      quarta: { abre: '09:30', fecha: '18:30' },
      quinta: { abre: '10:00', fecha: '19:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'Tabuleiro & Companhia - Paraíba',
    cep: '58010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(83) 5890-1234',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:30' },
      terca: { abre: '10:30', fecha: '19:00' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Casa do Tabuleiro - Paraná',
    cep: '85814680',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(41) 5901-2345',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:30' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:30' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Jogos do Sul - Paraná',
    cep: '80010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(41) 6012-3456',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Meeples do Nordeste - Pernambuco',
    cep: '55038655',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(81) 6123-4567',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:00' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '09:30', fecha: '18:00' },
      quinta: { abre: '10:00', fecha: '18:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'O Covil do Jogo - Pernambuco',
    cep: '50010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(81) 6234-5678',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Jogos e Dados - Piauí',
    cep: '64022-400',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(86) 6345-6789',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:30' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:30' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Meeple e Companhia - Piauí',
    cep: '64010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(86) 6456-7890',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Desafio do Rio - Rio de Janeiro',
    cep: '94010-280',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(21) 6567-8901',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '09:30', fecha: '17:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '09:00', fecha: '17:00' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleiro Carioca - Rio de Janeiro',
    cep: '20010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(21) 6678-9012',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:00' },
      terca: { abre: '10:00', fecha: '18:00' },
      quarta: { abre: '10:30', fecha: '18:30' },
      quinta: { abre: '08:30', fecha: '16:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '15:00', fecha: '19:00' },
    },
  },
  {
    nome: 'Meeple Potiguar - Rio Grande do Norte',
    cep: '59612471',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(84) 6789-0123',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:00' },
      terca: { abre: '09:00', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleiro do Nordeste - Rio Grande do Norte',
    cep: '59010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(84) 6890-1234',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Lúdicos do Sul - Rio Grande do Sul',
    cep: '93295540',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(51) 6901-2345',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:00' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '09:30', fecha: '18:00' },
      quinta: { abre: '10:00', fecha: '18:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '13:00', fecha: '17:00' },
    },
  },
  {
    nome: 'Jogos Gaúchos - Rio Grande do Sul',
    cep: '90010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(51) 7012-3456',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
    {
    nome: 'Reino dos Tabuleiros - Rondônia',
    cep: '76814-064',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(69) 7123-4567',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:30' },
      terca: { abre: '09:00', fecha: '18:00' },
      quarta: { abre: '09:30', fecha: '18:30' },
      quinta: { abre: '10:00', fecha: '19:00' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '11:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleiro Rondoniense - Rondônia',
    cep: '76961-869',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(69) 7234-5678',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Jogos & Cia - Roraima',
    cep: '69317-304',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(95) 7345-6789',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:30' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Desafio Roraima - Roraima',
    cep: '69310-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(95) 7456-7890',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Tabuleiros do Sul - Santa Catarina',
    cep: '89228-710',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(48) 7567-8901',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:00' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '09:30', fecha: '18:00' },
      quinta: { abre: '10:00', fecha: '18:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Jogos Catarinenses - Santa Catarina',
    cep: '88010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(48) 7678-9012',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Império dos Meeples - São Paulo',
    cep: '13058-005',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(11) 7789-0123',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:00' },
      terca: { abre: '09:00', fecha: '17:00' },
      quarta: { abre: '10:00', fecha: '18:00' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:00' },
      sabado: { abre: '10:00', fecha: '14:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Tabuleiros Paulistas - São Paulo',
    cep: '13341-700',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(11) 7890-1234',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
  {
    nome: 'Tabuleiros Sergipanos - Sergipe',
    cep: '49072-610',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(79) 7901-2345',
    horarioFuncionamento: {
      segunda: { abre: '08:30', fecha: '17:00' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '09:30', fecha: '18:00' },
      quinta: { abre: '10:00', fecha: '18:30' },
      sexta: { abre: '09:00', fecha: '17:00' },
      sabado: { abre: '12:00', fecha: '16:00' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Jogo & Aventura - Sergipe',
    cep: '49010-000',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(79) 8012-3456',
    horarioFuncionamento: {
      segunda: { abre: '10:00', fecha: '18:00' },
      terca: { abre: '10:30', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:00' },
      quinta: { abre: '10:00', fecha: '18:00' },
      sexta: { abre: '09:30', fecha: '17:30' },
      sabado: { abre: '11:00', fecha: '15:00' },
      domingo: { abre: '14:00', fecha: '18:00' },
    },
  },
  {
    nome: 'Tabuleiros do Tocantins - Tocantins',
    cep: '77804-060',
    segmento: 'Jogos de Tabuleiro',
    numero: '1',
    telefone: '(63) 8123-4567',
    horarioFuncionamento: {
      segunda: { abre: '08:00', fecha: '16:30' },
      terca: { abre: '09:00', fecha: '17:30' },
      quarta: { abre: '10:00', fecha: '18:30' },
      quinta: { abre: '09:30', fecha: '17:30' },
      sexta: { abre: '08:00', fecha: '16:30' },
      sabado: { abre: '10:00', fecha: '14:30' },
      domingo: { abre: "fechado", fecha: "fechado" },
    },
  },
  {
    nome: 'Jornada do Tabuleiro - Tocantins',
    cep: '77818-210',
    segmento: 'Jogos de Tabuleiro',
    numero: '2',
    telefone: '(63) 8234-5678',
    horarioFuncionamento: {
      segunda: { abre: '09:00', fecha: '17:30' },
      terca: { abre: '10:00', fecha: '18:30' },
      quarta: { abre: '11:00', fecha: '19:30' },
      quinta: { abre: '09:00', fecha: '17:30' },
      sexta: { abre: '08:30', fecha: '16:30' },
      sabado: { abre: '11:00', fecha: '15:30' },
      domingo: { abre: '13:00', fecha: '17:30' },
    },
  },
];

export default lojas;
