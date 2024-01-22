import LandingSection from "../landingSection";
import transition from "../../transition.jsx";
import image from "../../assets/programmering.jpg";

const data = [
  {
    headline: "Programmering",
    description:
      "Programmering omfatter HTTP og HTML for webudvikling, hvor URL'en linker til unikke hjemmesider. GET- og POST-requests håndterer dataoverførsel, mens SSL/TLS sikrer sikker datadeling. Kodningsværktøjer som editors, compilers og webbrowsere letter udviklingsprocessen med kodning af forgreninger, løkker og variabler.",
    image: image,
    sections: [
      {
        id: "01",
        title: "Fagbegreber",
        infos: [
          {
            title: "Forgrening",
            description:
              "En forgrening eller if-else statement, er et stykke kode hvor der bliver kørt noget kode ud fra om stykket er sandt eller falsk.",
          },
          {
            title: "Løkke",
            description:
              "Når man kører noget kode enten for evigt, eller indtil et kriterier ikke er opfyldt længere.",
          },
          {
            title: "Variabler",
            description:
              "En variable er et stykke kode som kan indeholde alle typer: String, Int, Boolean, Double, Array, JSON og meget mere. Det er blot et stykke kode som indeholder noget data, som vi enten kan ændre eller “kalde”.",
          },
        ],
      },
      {
        id: "02",
        title: "HTTP and HTML",
        infos: [
          {
            title: "URL",
            description:
              "En unik adresse som linker videre til en hjemmeside. Dette kunne f.eks. være https://www.dba.dk/.",
          },
          {
            title: "HTTP",
            description:
              "Det er en protokol som fortæller dit web om at åbne en port, hvori din hjemmeside kan “eksistere”. Der findes også HTTPS, som bare har tilføjet S (Security), og gør basically din hjemmeside mere sikker.",
          },
          {
            title: "HTML",
            description:
              "En kodning sprog som har til formål at lave elementer til din hjemmeside.",
          },
          {
            title: "GET-request",
            description:
              "Det ligger lidt i navnet, men det betyder at du får data. Dette bliver især benyttet med API’er hvor man f.eks. fetcher data ved et GET request. Dette bliver f.eks. kaldt når du starter en hjemmeside.",
          },
          {
            title: "POST-requests",
            description:
              "Her fetcher du ikke dater, men du uploader data. Dette kan ikke ske når du starter en hjemmeside, men kun ved hjælp af f.eks. Postman, Swagger eller en anden form for action.",
          },
          {
            title: "Cookie",
            description:
              "Data fra en hjemmeside som bliver gemt. Dette data kan senere blive fetchet igen og brugt.",
          },
          {
            title:
              "Secure Sockets Layer (SSL) og Transport Layer Security (TLS)",
            description:
              "Det er en sikkerhedsprotokol, som gør det sikkert at dele og få data igennem diverse netværks eller API’er. TLS er en opgraderet version af SSL som fikserer nogle af fejl og usikkerheder den tidligere havde.",
          },
          {
            title: "Digital Certificate",
            description:
              "En fil eller password som authenticater useren (tjekker om useren er logget ind).",
          },
        ],
      },
      {
        id: "03",
        title: "Kodningsværktøjer",
        infos: [
          {
            title: "Editor",
            description:
              "Et program som kan bruges til at organiserer og skrive sine kodnings dokumenter i. Brackets, VSCode.",
          },
          {
            title: "Compiler",
            description:
              "En compiler er et computerprogram, som oversætter et kodningssprog til et andet. Det er f.eks. det der sker med React, som bliver oversat til JavaScript.",
          },
          {
            title: "TextEdit",
            description:
              "Et tekstskrivningsprogram som kan kreere dokumenter. Dette kan bruges til .html dokumenter på mac.",
          },
          {
            title: ".txt/.htm/.css",
            description:
              "De indikerer hvilket dokument det er. Dette eksisterer med alle dokumenter: .html, .css, .js, .php og meget mere. Det er så computeren kan aflæse hvilket dokument det er.",
          },
        ],
      },
    ],
  },
];

const ProgrammeringPage = () => {
  return (
    <>
      <div className="page">
        <LandingSection data={data} />
      </div>
    </>
  );
};

export default transition(ProgrammeringPage);
