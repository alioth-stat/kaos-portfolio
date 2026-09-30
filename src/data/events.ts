export type Event = {
  when?: string
  title: string
  text: string
  projects?: string[]
}

export const eventsByYear: { year: string; events: Event[] }[] = [
  {
    year: '2026',
    events: [
      {
        when: 'Septiembre',
        title: 'Decentralized AI Hackathon, ISD Summit Panamá',
        text: 'Cinco prototipos de IA descentralizada con QVAC, uno por reto: Philips, Ovnicom, Caja de Ahorros, Psy Models y el Desafío General. En todos, la inferencia corre en el dispositivo.',
        projects: ['colmena', 'puente', 'sentinel-aml', 'sentinel-dns', 'philips'],
      },
      {
        title: 'Hackathon Caja de Ahorros ITSE',
        text: 'Equipo 07, DELTA Black. Construimos Delta-Swarm: alerta temprana de fuga de depósitos, con cada acción aprobada por una persona.',
        projects: ['delta-swarm'],
      },
      {
        title: 'Beca Fundación Deveaux',
        text: 'Becario de la Fundación Deveaux mientras curso el Técnico Superior en Inteligencia Artificial en el ITSE.',
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        title: 'Hackathon ITSE–MUPA',
        text: 'Primer lugar con Conecta Panamá, una súper-app de educación, comercio local y asistente de IA para comunidades desatendidas.',
        projects: ['conecta-panama'],
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        title: 'Breakthrough Junior Challenge',
        text: 'Campeón del Voto Popular regional (América Central y del Sur) y semifinalista global, entre los ~30 mejores de más de 2,300 participantes.',
      },
      {
        title: 'SECUBICAR',
        text: 'Primer lugar en el Proyecto de Física y en la Olimpiada de Biología.',
      },
      {
        title: 'Química en la Cocina, III Competencia',
        text: 'Primer lugar.',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        title: 'Club de Ciencias, CBS del Carmen',
        text: 'Vocero del club.',
      },
    ],
  },
]
