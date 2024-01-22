import LandingSection from "../landingSection";
import transition from "../../transition.jsx";
import image from "../../assets/gaming.jpg";

const data = [
  {
    headline: "Gaming",
    description:
      "Gaming dækker kampagnespil med både tydelig og skjult reklame, hvor gameplay handler om brugerens interaktion med spilkarakterer. Spillertyper varierer fra stræbere og udforskere til dræbere og sociale spillere.",
    image: image,
    sections: [
      {
        id: "01",
        title: "Fagbegreber",
        infos: [
          {
            title: "Explicit reklame",
            description: "Tydelige reklamer.",
          },
          {
            title: "Implicit reklame",
            description: "Skjulte reklamer.",
          },
          {
            title: "Gameplay",
            description:
              "How the user engages or uses the game. What do the characters in the game do, and how do the users engage with them.",
          },
        ],
      },
      {
        id: "02",
        title: "Spillertyper",
        infos: [
          {
            title: "Stræbere",
            description:
              "Fokus på at være bedre end de andre spillere, f.eks. i form af en highscore eller ranking.",
          },
          {
            title: "Udforskere",
            description:
              "Fokuserer på verden og historiefortællingen. Evnen til at leve sig ind i spillet.",
          },
          {
            title: "Dræbere",
            description:
              "Fokus på destruktion og magtfølelse, mulighed for at være “the bad guy”.",
          },
          {
            title: "Sociale",
            description:
              "Fokus på at have en social interaktion med andre spillere.",
          },
        ],
      },
      {
        id: "03",
        title: "Genre",
        infos: [
          {
            title: "Platform",
            description:
              " E.g. Mario is a platform, where you control a user on a typical 2D platform and go around a map.",
          },
          {
            title: "Shooting",
            description:
              "Typical shooting game where the game is resolved around shooting.",
          },
          {
            title: "Top-down",
            description: "Where you see the game from the top. E.g. Pacman.",
          },
          {
            title: "Survival",
            description:
              "A game where the primary task is to survive. E.g. Minecraft.",
          },
        ],
      },
    ],
  },
];

const KampagnespilPage = () => {
  return (
    <>
      <div className="page">
        <LandingSection data={data} />
      </div>
    </>
  );
};

export default transition(KampagnespilPage);
