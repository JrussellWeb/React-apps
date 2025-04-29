import universal from "./assets/universalstudios.jpg";
import nyc from "./assets/NYC.jpg";
import mexico from "./assets/mexico.jpg";

const data = [
  {
    id: 1,
    img: {
      src: universal,
      atl: "Universal Studios Hollywood",
    },
    title: "Universal Studios Hollywood",
    country: "United States",
    googleMapsLink: "https://maps.app.goo.gl/X8KfaUtnNrjjVuab6",
    dates: "24 Feb, 2024 - 26 Feb 2024",
    text: "One of the oldest and most famous Hollywood film studios still in use. Its official marketing headline is The Entertainment Capital of LA. It was initially created to offer tours of the real Universal Studios sets and is the first of many full-fledged Universal Studios theme park resorts located across the world.",
  },
  {
    id: 2,
    img: {
      src: nyc,
      atl: "NYC",
    },
    title: "NYC",
    country: "United States",
    googleMapsLink: "https://maps.app.goo.gl/Jo5cw27wNFDxk2go9",
    dates: "06 Oct 2021 - 08 Oct, 2021",
    text: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.",
  },
  {
    id: 3,
    img: {
      src: mexico,
      atl: "Ensanada Mexico",
    },
    title: "Ensanada Mexico",
    country: "Mexico",
    googleMapsLink: "https://maps.app.goo.gl/BZWSvJpckMbjWBWC9",
    dates: "26 April, 2004 - 29 April, 2004",
    text: "Ensenada is a port city on the Pacific coast of Mexico’s Baja California peninsula. At its heart is the harbor and waterfront area with the Malecón promenade.",
  },
];
export default data;
