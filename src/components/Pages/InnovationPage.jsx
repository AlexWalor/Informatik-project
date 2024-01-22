import LandingSection from "../landingSection";
import transition from "../../transition.jsx";
import image from "../../assets/innovation.png";

const data = [
  {
    headline: "Innovation",
    description:
      "Innovation indebærer anvendelse af 4p-modellen for at styrke forretningsideer. Håndgribelig innovation omfatter skabelse af nye ideer, fra mock-ups til prototyper, mens modellering og udviklingsprocesser bruger rutediagrammer og pseudokode. Segmentanalyse inkluderer AIDA-modellen, 3-30-3-modellen og brug af personaer.",
    image: image,
    sections: [
      {
        id: "01",
        title: "Fagbegreber",
        infos: [
          {
            title: "4p-modellen",
            description:
              "Product, Price, Place and Promotion. Elementer man som virksomhed skal have styr på for at lægge en forretningside.",
          },
          {
            title: "Håndgribelig innovation",
            description:
              "At lave/opfinde en ny ide, som har mulighed for at blive til en forretning. Ideen kan opstå fra en individuel person, eller fra en gruppe af individer.",
          },
          {
            title: "Mock-up",
            description:
              "Et lille helst bille opbygning af jeres ide, som man hurtigt kan opstille for at få en bedre ide af projektet.",
          },
          {
            title: "Prototyper",
            description:
              "Et mere avanceret og tidskrævende opbygning af jeres ide, som skal begynde at ligne det endelige produkt.",
          },
        ],
      },
      {
        id: "02",
        title: "Modellering og udviklingsprocesser",
        infos: [
          {
            title: "Rutediagram (flowchart)",
            description:
              "The way that the app should be setup, so you start on the home screen. If logged out, you get sent back to the register page. If not you can move onto other pages.",
          },
          {
            title: "Pseudokode",
            description:
              "A bit more complex and descriptive version of Flowchart, which doesn’t focus on the pages, but more what different actions are on the page.",
          },
          {
            title: "Iterativ model",
            description:
              "I en iterativ model laver man en prototype af sit produkt, hvorefter man tester og får feedback på det. Får noget feedback, og derefter forbedrer prototypen.",
          },
          {
            title: "Tænke-højt test",
            description:
              "En tænke højt test betyder, at man sætter sig sammen i grupper og skriver ned eller siger alle ideer som man kommer på.",
          },
        ],
      },
      {
        id: "03",
        title: "Segmentanalyse",
        infos: [
          {
            title: "AIDA-modellen",
            description:
              "Awareness, interest, desire and action. The four phases which need to be fulfilled in order to create a great game.",
          },
          {
            title: "3-30-3-modellen",
            description:
              "You have 3 seconds to grab a reader's attention, 30 seconds to engage them, and 3 minutes for them to spend reading the content.",
          },
          {
            title: "Personaer",
            description:
              "When you take a group of users which are under the same character description, e.g. teenage boys, and put them under one persona. Where you can then describe the whole group under one person.",
          },
        ],
      },
    ],
  },
];

const InnovationPage = () => {
  return (
    <>
      <div className="page">
        <LandingSection data={data} />
      </div>
    </>
  );
};

export default transition(InnovationPage);
