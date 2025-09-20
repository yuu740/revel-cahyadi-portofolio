// Impor 'type' dari interface untuk memberi tipe pada data
import type { AboutData } from "../interfaces/about.interface";

// Ekspor data sebagai konstanta bertipe (typed constant)
export const ABOUT_DATA: AboutData = {
  personalInfo: [
    { label: "Place of Birth", value: "Jakarta" },
    { label: "Date of Birth", value: "November 9th, 2004" },
    {
      label: "Address",
      value:
        "Jl Petojo Barat IV No 3, Petojo Utara, Gambir, Jakarta Pusat, 10130",
    },
    { label: "Gender", value: "Male" },
    { label: "Marital Status", value: "Single" },
  ],
  contactInfo: [
    { label: "Email", value: "revelcahyadi2004@gmail.com" },
    { label: "Phone Number", value: "+62 858 7153 5281" },
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/revel-cahyadi" },
    { name: "GitHub", url: "https://github.com/yuu740" },
  ],
};
