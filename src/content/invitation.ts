/**
 * All copy for the Subahu & Yashika wedding invitation.
 */

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  description: string;
  dateISO: string;
  mapsQuery: string;
  mapsUrl?: string;
}

export const invitation = {
  invocations: [
    "॥ श्री महावीराय नमः ॥",
    "॥ जय श्री बाबा गज्जा जी ॥",
  ],
  tagline: "The Beginning of Our Forever",
  subTagline: "Until We Say Forever",
  couple: {
    groom: "Subahu",
    bride: "Yashika",
    initials: "S & Y",
    title: "Subahu Weds Yashika",
    hashtag: "#SYforever",
  },
  heavenlyBlessings: {
    title: "With Heavenly Blessings of",
    elders: [
      "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
      "Smt. Usha Jain & Sh. Surinder Kumar Jain",
    ],
  },
  inviteLead:
    "together with their families, cordially invite you to celebrate the wedding celebrations of their beloved Grandson",
  story: {
    title: "Subahu & Yashika",
    subtitle: "Two souls, two families, one sacred journey",
    groom: {
      name: "Subahu",
      role: "The Groom",
      parentage: "",
      image: "https://media.invitestory.in/ever-after-bloom/src/assets/portrait-groom.jpg",
      text: "Beloved son of Mrs. Mukta Jain & Mr. Atul Jain. Walking towards forever with grace, love, and devotion.",
    },
    bride: {
      name: "Yashika",
      role: "The Bride",
      parentage: "",
      image: "https://media.invitestory.in/ever-after-bloom/src/assets/portrait-bride.jpg",
      text: "Cherished daughter of Mrs. Rashmi & Mr. Nilesh Jain, Samana. Bringing warmth, smiles, and grace as we begin our new chapter together.",
    },
  },
  shloka: {
    sanskrit: "मंगलम् भगवान वीरो, मंगलं गौतमो गणी।\nमंगलम् कुन्दकुन्दार्यो, जैन धर्मोऽस्तु मंगलम्॥",
    meaning: "Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama. Auspicious is Acharya Kundakunda, and auspicious is the Jain Dharma.",
  },
  /** ISO date-time of the Haldi ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-20T12:00:00+05:30",
  dateLabel: "Friday, 20 November 2026",
  timeLabel: "Starts from 12:00 PM onwards",
  venue: {
    name: "De javu manor, Khambra",
    address: "De javu manor, Khambra",
    mapsQuery: "DE JAVU MANOR Khambra",
    mapsUrl: "https://maps.app.goo.gl/jN5kimUfaLUD6weu9?g_st=ic",
  },
  dressCode: "Traditional & Festive Indian Elegance",
  hero: {
    kicker: "The Beginning of Our Forever",
    eyebrow: "Save the Date",
    blessing: "Until We Say Forever",
  },
  celebrations: [
    {
      id: "haldi",
      name: "Haldi",
      date: "20 November 2026",
      time: "Starts from 12:00 PM onwards",
      venue: "De javu manor, Khambra",
      address: "De javu manor, Khambra",
      description: "A cheerful afternoon drenched in golden turmeric, vibrant marigolds, and hearty laughter.",
      dateISO: "2026-11-20T12:00:00+05:30",
      mapsQuery: "DE JAVU MANOR Khambra",
      mapsUrl: "https://maps.app.goo.gl/jN5kimUfaLUD6weu9?g_st=ic",
    },
    {
      id: "hathbhara",
      name: "Hathbhara",
      date: "21 November 2026",
      time: "10:00 AM onwards",
      venue: "Shree Baba Gajja Ji Tomri",
      address: "Shree Baba Gajja Ji Tomri",
      description: "Auspicious morning ceremony invoking the sacred blessings of Shree Baba Gajja Ji.",
      dateISO: "2026-11-21T10:00:00+05:30",
      mapsQuery: "Shree baba Gajja ji Tomri",
      mapsUrl: "https://maps.app.goo.gl/dfYFxcrzvtyUmpEq6?g_st=ic",
    },
    {
      id: "sehrabandi",
      name: "Sehra Bandi",
      date: "21 November 2026",
      time: "5:30 PM onwards",
      venue: "Senate Hall, Ramada by Wyndham Jalandhar City Centre",
      address: "Senate Hall, Ramada by Wyndham Jalandhar City Centre",
      description: "The traditional ceremony of tying the sehra and showering heartfelt family blessings.",
      dateISO: "2026-11-21T17:30:00+05:30",
      mapsQuery: "Senate Hall, Ramada by Wyndham Jalandhar City Centre",
      mapsUrl: "https://maps.app.goo.gl/gNaRNwETGwFQEaX87?g_st=ic",
    },
  ] as EventItem[],
  /** For backwards compatibility with timeline component if needed */
  chapters: [
    {
      no: "I",
      title: "Haldi Ceremony",
      when: "20 November 2026 · Starts from 12:00 PM onwards",
      text: "De javu manor, Khambra — A joyous celebration drenched in sunshine, golden turmeric, and love.",
    },
    {
      no: "II",
      title: "Hathbhara",
      when: "21 November 2026 · 10:00 AM onwards",
      text: "Shree Baba Gajja Ji Tomri — Auspicious rituals and sacred blessings for a blissful future.",
    },
    {
      no: "III",
      title: "Sehra Bandi",
      when: "21 November 2026 · 5:30 PM onwards",
      text: "Senate Hall, Ramada by Wyndham Jalandhar City Centre — Tying the ceremonial sehra blessed by elders and loved ones.",
    },
  ],
  note: {
    heading: "",
    subheading: "",
  },
  compliments: {
    regards: "With Love and Regards,",
    family: "JAIN FAMILY",
    firm: "",
  },
  footer: {
    line1: "Come with your blessings, stay for the joy.",
    line2: "Celebrate the beginning of our forever.",
    signoff: "With Love & Regards, Jain Family",
  },
} as const;

export const wishes = [
  {
    from: "With Heavenly Blessings",
    text: "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
  },
  {
    from: "Blessings of Elders",
    text: "Smt. Usha Jain & Sh. Surinder Kumar Jain",
  },
  {
    from: "Parents' Love",
    text: "Mrs. Mukta Jain & Mr. Atul Jain · Mr. Nilesh Jain & Mrs. Rashmi Jain, Samana",
  },
] as const;
