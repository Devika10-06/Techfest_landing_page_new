export const site = {
  eventDate: '2026-12-16T09:00:00+05:30',
  nav: ['Accommodation', 'Workshops', 'Competitions', 'Ignite'],
  hero: {
    eyebrow: "IIT BOMBAY'S",
    title: 'TECHFEST',
    date: '16–18 DECEMBER · 30TH EDITION',
    subtitle: "Asia's Largest Science & Technology Festival",
    theme: 'An Aetherial Renaissance',
  },
  portals: [
    { label: 'CA PROGRAM', title: 'Join the constellation', body: 'Represent Techfest at your college and unlock exclusive perks and certificates.', action: 'Join now' },
    { label: 'ABOUT TECHFEST', title: 'The 30th edition', body: "Welcome to the official website of Asia's Largest Science and Technology Festival.", action: 'Discover' },
    { label: 'MORE EVENTS', title: 'Explore the unknown', body: 'Discover events, highlights and updates from the realms ahead.', action: 'View events' },
  ],
  stats: [['1998', 'Established'], ['1.8L+', 'Annual footfall'], ['2500+', 'Colleges'], ['500+', 'Universities'], ['30', 'Editions']].map(([value, label]) => ({ value, label })),
  realms: [
    { name: 'Workshops', kicker: 'LEARN · BUILD · ASCEND', body: 'Hands-on pathways into the machines and ideas shaping tomorrow.', color: '#8b5cf6', action: 'Explore / Register' },
    { name: 'Competitions', kicker: 'ENTER THE ARENA', body: 'Bring your sharpest thinking. Leave a mark across the battlefield.', color: '#c2562b', action: 'Explore events' },
    { name: 'Lectures', kicker: 'VOICES OF THE FUTURE', body: 'A cathedral of curious minds, impossible questions and bright answers.', color: '#ffb547', action: 'Meet the speakers' },
    { name: 'Exhibitions', kicker: 'SEE WHAT IS NEXT', body: 'Step through the aetherial door into living demonstrations.', color: '#22d3ee', action: 'Enter exhibition' },
    { name: 'Ignite', kicker: 'THE NIGHT AWAKENS', body: 'A red horizon. A single flame. Login to register.', color: '#e11d2e', action: 'Login to register' },
  ],
  explore: ['International Robowars', 'Esports', 'Entrepreneurship', 'Ozone'],
  milestones: [
    ['1998', 'The first signal'], ['2002–03', 'Techfest Trophy launched'], ['2018', 'Guinness World Record'], ['2021–22', 'The Multiversal Escapade'], ['2022', 'Jio 5G launch + first drone show'], ['2026', 'An Aetherial Renaissance'],
  ],
  footer: ['Instagram', 'X', 'LinkedIn', 'Facebook', 'YouTube', 'WhatsApp'],
} as const
