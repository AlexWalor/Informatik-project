import LandingSection from "../landingSection";
import transition from "../../transition.jsx";
import image from "../../assets/it-og-cybersikkerhed.jpg";

const data = [
  {
    headline: "IT Sikkerhed",
    description:
      "IT-sikkerhed omfatter centrale elementer som dataflow, kryptering og netværksinfrastruktur. Fra håndtering af data til forståelse af IP-adresser og DNS, samt kritiske sikkerhedsprotokoller som SSL og TLS.",
    image: image,
    sections: [
      {
        id: "01",
        title: "Fagbegreber",
        infos: [
          {
            title: "Input",
            description:
              "The data or action you send into the database, which then gets processed.",
          },
          {
            title: "Storage",
            description:
              "The place where the Data is being stored, which then later on can be fetched using API’s or ORM’s.",
          },
          {
            title: "Process",
            description:
              "Where we handle the data, call a function, or manipulate the data.",
          },
          {
            title: "Output",
            description:
              "The result is what you can see on the screen or the data sent to another computer.",
          },
        ],
      },
      {
        id: "02",
        title: "Wires, Cables & WIFI",
        infos: [
          {
            title: "Bits",
            description:
              "A value that can be 1 (on) or 0 (off). Everything on the internet is structured by bits.",
          },
          {
            title: "Binær information",
            description:
              "A combination of bits that can be translated into data.",
          },
          {
            title: "Bandwidth (båndbredde)",
            description:
              "Maximum transmission capacity of a device. The maximum amount of bits we can send.",
          },
          {
            title: "Bitrate",
            description:
              "Number of bits that we can send over a given period of time.",
          },
          {
            title: "Latency",
            description:
              "The time it takes for a bit to travel from the source to the target.",
          },
          {
            title: "Transportformer",
            description:
              "Fiber uses light and is fast but expensive and complicated.",
          },
          {
            title: "Radiobøger",
            description:
              "A mobile way to transport data, the waves get transported into bits when received.",
          },
        ],
      },
      {
        id: "03",
        title: "Packets, routers & reliability",
        infos: [
          {
            title: "IP-Packets",
            description:
              "Some data which contains information about the source and destination address, which makes it easier to send larger parts of data/bits.",
          },
          {
            title: "Routers",
            description: "Used to transport IP-packets.",
          },
          {
            title: "Bandwidth (båndbredde)",
            description:
              "Maximum transmission capacity of a device. The maximum amount of bits we can send.",
          },
          {
            title: "Reliability (Fault tolerant)",
            description:
              "If something breaks, the IP-Packets will get sent through another way, so that it “always” works.",
          },
          {
            title: "TCP (Transmission Control Protocol)",
            description:
              "Makes sure that all of the IP-Packets have arrived, which then enables the music or image to be rendered.",
          },
          {
            title: "Redundancy",
            description:
              "Plenty of space and roads for the IP-Packets to travel.",
          },
        ],
      },
      {
        id: "04",
        title: "Encryption and public keys",
        infos: [
          {
            title: "Kryptering",
            description:
              "When you take text or keys and make it “unreadable”, to make it safer.",
          },
          {
            title: "Dekryptering",
            description:
              "When you take the “unreadable” text and make it unreadable.",
          },
          {
            title: "Standard key length (256 bit)",
            description: "The standard key used for making the encrypted text.",
          },
          {
            title: "Symmetrisk kryptering",
            description:
              "When both the sender and receiver know the key (from caesars cifre).",
          },
          {
            title: "Asymmetrisk kryptering",
            description:
              "When a public key is available for everyone, but also has a private key that only specific computers know.",
          },
        ],
      },
      {
        id: "04",
        title: "IP addresses and DNS",
        infos: [
          {
            title: "Internet",
            description:
              "The internet is a wide network, which enables different computers to connect.",
          },
          {
            title: "Internet protokollen (IP)",
            description:
              "A well-known set of rules and standards used to communicate between computers.",
          },
          {
            title: "IP adresse (IPv4 vs. IPv6)",
            description:
              "Number format unique id that is different for each user and computer. This way you can e.g. check if a user has visited the site before and stuff like that when using cookies and more advanced backend technology. IPv4 only has the capability for 4 billion unique sites. But with IPv6 there is much more capability.",
          },
          {
            title: "DNS (Domain Name System)",
            description:
              "A name or link that can open up a website. So when you type in alexanderrubino.com, you open up a unique website that belongs to that domain. You can also pass data with the domain name e.g. when using PHP or Node.js which is very helpful.",
          },
        ],
      },
    ],
  },
];

const ITSikkerhedPage = () => {
  return (
    <>
      <div className="page">
        <LandingSection data={data} />
      </div>
    </>
  );
};

export default transition(ITSikkerhedPage);
