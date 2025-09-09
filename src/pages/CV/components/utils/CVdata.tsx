import { Education, Job, VolunteerJob } from "../../../../types"

export const Jobs: Job[] = [
  {
    id: 1,
    title: "Sommerstudent",
    organization: "twoday AS",
    location: "Oslo",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    description:
      "Utplassert hos Utlendingsdirektoratet (UDI) med utviklingsprosjekt i hvordan effektivisere digitaliseringen av UDI sitt fysiske papirarkiv ved hjelp av Kunstig Intelligens (KI)",
    technologies: ["React", "TypeScript", "Dotnet", "Azure"],
  },
  {
    id: 2,
    title: "Orakeltjenesten",
    organization: "NTNU IT",
    location: "Trondheim",
    startDate: "Feb 2024",
    endDate: null,
    description:
      "IT-brukerstøtte for studenter ved NTNU. Innebærer blant annet arbeidsoppgaver som programvare-hjelp og NTNU-konto problemer.",
  },
  {
    id: 3,
    title: "Førstegangstjenesten",
    organization: "Akershus Kommandantskap",
    location: "Oslo",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    description:
      "Utplassert på Akershus Festning i Oslo. Stilling som vaktsoldat, senere lagfører for et vaktlag på 12 personer. Arbeid med planlegging, organisering, trening, punktlighet og ordentlighet. Arbeidsoppgaver: Sikring av vakthold på Akershus Festning.",
  },
  {
    id: 4,
    title: "Varehusmedarbeider",
    organization: "Jula Tønsberg",
    location: "Tønsberg",
    startDate: "Apr 2020",
    endDate: "Aug 2022",
    description:
      "Arbeid med varepåfyll, rydding, betjening av kasse, betjening av kundeservice og salg til kunder i varehus. Hadde også stilling som daglig leder når det var behov.",
  },
]

export const VolunteerJobs: VolunteerJob[] = [
  {
    id: 1,
    title: "Drift- og utviklingskomiteen",
    organization: "Online Linjeforening",
    location: "Trondheim",
    startDate: "Sep 2022",
    endDate: null,
    description: (
      <span>
        Drift- og utviklingskomiteen (DotKom) er en komite innenfor Online linjeforening for informatikere ved NTNU.
        Arbeidsoppgaver går ut på å drifte og vedlikeholde{" "}
        <a href="https://online.ntnu.no/" className="text-blue-500">
          Online sin nettside
        </a>{" "}
        samt opprette nye prosjekter og hjelpe brukere som har tekniske problemer.
      </span>
    ),
  },
  {
    id: 2,
    title: "Bank- og Økonomikomiteen",
    organization: "Online Linjeforening",
    location: "Trondheim",
    startDate: "Feb 2023",
    endDate: "Jun 2025",
    description:
      "Bank- og Økonomikomiteen (Bankom) er en komite innenfor Online linjeforening for informatikere ved NTNU. Arbeidsoppgaver går ut på å passe på Online og mer spesifikt Drift- og utviklingskomiteen sin økonomi, opprette budsjett og føre regnskap.",
  },
]

export const Educations: Education[] = [
  {
    id: 1,
    title: "Studiespesialisering med realfag",
    institution: "Greveskogen Videregående skole",
    location: "Tønsberg",
    startDate: "Aug 2017",
    endDate: "Jun 2020",
  },
  {
    id: 2,
    title: "Bachelor i Informatikk",
    institution: "Norges Teknisk-naturvitenskaplige universitet (NTNU)",
    location: "Trondheim",
    startDate: "Aug 2022",
    endDate: "Jun 2025",
  },
  {
    id: 3,
    title: "Master i Informatikk, Software Engineering",
    institution: "Norges Teknisk-naturvitenskaplige universitet (NTNU)",
    location: "Trondheim",
    startDate: "Aug 2025",
    endDate: null,
  },
]
