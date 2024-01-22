import LandingSection from "../landingSection";
import transition from "../../transition.jsx";
import image from "../../assets/interaktionsdesign.jpg";

const data = [
  {
    headline: "Interaktionsdesign",
    description:
      "Innovation indebærer anvendelse af 4p-modellen for at styrke forretningsideer. Håndgribelig innovation omfatter skabelse af nye ideer, fra mock-ups til prototyper, mens modellering og udviklingsprocesser bruger rutediagrammer og pseudokode. Segmentanalyse inkluderer AIDA-modellen, 3-30-3-modellen og brug af personaer.",
    image: image,
    sections: [
      {
        id: "01",
        title: "Fagbegreber",
        infos: [
          {
            title: "Interaktion",
            description:
              "When an action is triggered upon user interaction, when a user hovers or clicks a button, it is expected to react to the state.",
          },
          {
            title: "Kommunikationsproces",
            description:
              "Afsenderen har et budskab med sit layout og hjemmeside, man kan blandt andet lave en knap tydelig for at tydeliggøre at brugeren skal klikke på denne knap.",
          },
          {
            title: "Laswells kommunikationsmodel",
            description:
              "En model til at hjælpe med hvordan en hjemmeside eller app skal opbygges. Hvem afsender et budskab, og hvad siger de, og gennem hvilken kanal sendes det, til hvem og hvilken effekt har dette?",
          },
          {
            title: "Brugervenlighed",
            description:
              "Når et system er intuitivt og nemt at bruge. Man skal ikke tænke når man bruger hjemmesiden.",
          },
          {
            title: "Brugergrænseflade",
            description:
              "Bindeleddet mellem brugeren og systemet, som skal være brugervenligt og nemt at bruge for useren.",
          },
        ],
      },
      {
        id: "02",
        title: "Normans 7 designprincipper",
        infos: [
          {
            title: "Visibility",
            description:
              "En funktion skal være tydelig og genkendelig for modtageren. ",
          },
          {
            title: "Constraint",
            description:
              "Når en hjemmeside indbyder brugeren til at udforske videre. Dette ses blandt andet på hjemmesider, når de placerer et billede i bunden af siden, som indikerer, at de skal scroll videre.",
          },
          {
            title: "Mapping",
            description: "Mapping er opsætning af diverse knapper eller lign.",
          },
          {
            title: "Consistency",
            description:
              "Brug samme layout principper og farver som er genkendelige.",
          },
          {
            title: "Feedback",
            description: "Brugeren skal have respons på sine handlinger.",
          },
        ],
      },
      {
        id: "03",
        title: "Typografi",
        infos: [
          {
            title: "Fonte",
            description:
              "En stil eller styling man kan tilføje til noget tekst.",
          },
          {
            title: "Serif/sans serif (med og uden fødder)",
            description:
              "Serif fonte er fonte med fødder, hvilket gør dem mere læselige (f.eks. times new roman). Sans serif font er fonte uden fødder, hvilket gør dem mere enkle og simple.",
          },
          {
            title: "Display-Typografi fonte",
            description:
              "Er fonte som er unikke og lidt vilde. De bliver typisk brugt til at skabe opmærksomhed og kreere en stemning. F.eks. en kinesisk hjemmeside kunne der bruges lidt 'kinesisk' font.",
          },
        ],
      },
      {
        id: "04",
        title: "Farveassociationer",
        infos: [
          {
            title: "Rød",
            description:
              "Dynamik og aktivitet. Varm, hektisk, ophidsende, fare, krig, blod, kærlighed.",
          },
          {
            title: "Orange",
            description:
              "Optimisme og livsglæde, men ellers er orange en neutral farve.",
          },
          {
            title: "Gul",
            description:
              "Advarsel, solens farve, den stærke kontrastfarve, opmærksomhed, glæde.",
          },
          {
            title: "Grøn",
            description:
              "Ro, balance, vækst, planterigets farve (organisk indtryk), håb, beroligende.",
          },
          {
            title: "Blå",
            description:
              "Kvalitet, kontrol, seriøsitet, klinisk, professionel, troværdig.",
          },
          {
            title: "Sort",
            description:
              "Alvor, stramhed, død, uheld, ondskab, oprør, men også erotik og elegance.",
          },
          {
            title: "Hvid",
            description: "Uskyld, renhed, begyndelse, ro, det gode.",
          },
        ],
      },
      {
        id: "05",
        title: "Gestaltlovene",
        infos: [
          {
            title: "Loven om nærhed",
            description:
              "Elementer som er tæt på hinanden opfanges som om de hænger sammen.",
          },
          {
            title: "Loven lighed",
            description:
              "Ens elementer opfattes som om de har samme funktion. F.eks. to røde knapper forventes at have en lignende handling, eller i hvert fald en handling med feedback.",
          },
          {
            title: "Loven om lukkethed",
            description:
              "Hvis to grupper skal forestilles at være ens, så er det vigtigt at elementerne i grupperne opstilles ens.",
          },
          {
            title: "Loven om kontinuitet og symmetri",
            description:
              "Designet skal ikke opfattes som uordentligt og forvirrende. Man skal placere elementet der hvor brugeren forventer den er, da de dermed ikke behøver at tænke når de bruger hjemmesiden.",
          },
          {
            title: "Loven om figur/baggrund - prægnans",
            description:
              "Når man opstillet icon-button så er det vigtigt at have en baggrund, da det egentlig er der fokuset først opfanges, og dens farve indikerer egentlig før selve ikonet hvad funktionen er.",
          },
          {
            title: "Loven om erfaring",
            description:
              "Alvor, stramhed, død, uheld, ondskab, oprør, men også erotik og elegance.",
          },
          {
            title: "Loven om erfaring",
            description:
              "Det er vigtigt  at køre på brugerens erfaring, brug ikoner som forbindes med funktionen i andre programmer, eller opstil layoutet som det forventes.",
          },
        ],
      },
    ],
  },
];

const InteraktionsdesignPage = () => {
  return (
    <>
      <div className="page">
        <LandingSection data={data} />
      </div>
    </>
  );
};

export default transition(InteraktionsdesignPage);
