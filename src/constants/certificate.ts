import type { Certificate } from "../interfaces/certificate.interface";
import ProgateBootCampFrontend from "../assets/documents/certificate/ProgateBootCampFrontEnd.pdf";
import ProgateBootCampHTML from "../assets/documents/certificate/ProgateBootCampHTMLCSS.pdf";
import ProgateBootCampJS from "../assets/documents/certificate/ProgateBootCampJS.pdf";
import ProgateBootCampPython from "../assets/documents/certificate/ProgateBootCampPython.pdf";
import ProgateBootCampSQL from "../assets/documents/certificate/ProgateBootCampSQL.pdf";
import UNTARAchievement from "../assets/documents/certificate/UNT(AR)HackathonAchievement.pdf";
export const CERTIFICATES_DATA: Certificate[] = [
  {
    title: "Progate Bootcamp Frontend",
    issuer: "Progate",
    fileUrl: ProgateBootCampFrontend,
  },
  {
    title: "Progate Bootcamp HTML/CSS",
    issuer: "Progate",
    fileUrl: ProgateBootCampHTML,
  },
  {
    title: "Progate Bootcamp JS",
    issuer: "Progate",
    fileUrl: ProgateBootCampJS,
  },
  {
    title: "Progate Bootcamp Python",
    issuer: "Progate",
    fileUrl: ProgateBootCampPython,
  },
  {
    title: "Progate Bootcamp SQL",
    issuer: "Progate",
    fileUrl: ProgateBootCampSQL,
  },
  {
    title: "UNTAR Hackathon Achievement",
    issuer: "UNTAR",
    fileUrl: UNTARAchievement,
  },
];
