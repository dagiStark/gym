import { Dumbbell } from "lucide-react";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";

import serviceImage1 from "@/assets/services/serviceImage1.jpg";
import serviceImage2 from "@/assets/services/serviceImage2.jpg";
import serviceImage3 from "@/assets/services/serviceImage3.jpg";
import serviceImage4 from "@/assets/services/serviceImage4.jpg";
import serviceImage5 from "@/assets/services/serviceImage5.jpg";
import serviceImage6 from "@/assets/services/serviceImage6.jpg";

import coach1 from "@/assets/coaches/coach1.jpg";
import coach2 from "@/assets/coaches/coach2.jpg";
import coach3 from "@/assets/coaches/coach3.jpg";
import coach4 from "@/assets/coaches/coach4.jpg";

export const swiperData = [
  {
    id: 1,
    bgImg: image3,
    slogan: "Keep your body",
    title: "Burning",
    desc: "Get ready to burn off some serious fat with our high quality products.",
  },
  {
    id: 2,
    bgImg: image2,
    slogan: "Just Believe In",
    title: "Yourself",
    desc: "We are here to help you achieve your goals.",
  },
  {
    id: 3,
    bgImg: image1,
    slogan: "Grow Your Body",
    title: "Strength",
    desc: "Make your body stronger with our high quality products.",
  },
];

export const historyData = [
  { id: 1, amount: "1200", text: "Members" },
  { id: 2, amount: "120", text: "Expert Trainers" },
  { id: 3, amount: "13", text: "Years of Experience" },
  { id: 4, amount: "368", text: "GYMs" },
];

export const servicesData = [
  {
    id: 1,
    serviceImg: serviceImage4,
    icon: Dumbbell,
    title: "Fitness",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 2,
    serviceImg: serviceImage3,
    icon: Dumbbell,
    title: "Yoga",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 3,
    serviceImg: serviceImage2,
    icon: Dumbbell,
    title: "Gym",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 4,
    serviceImg: serviceImage1,
    icon: Dumbbell,
    title: "Aerobics",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 5,
    serviceImg: serviceImage5,
    icon: Dumbbell,
    title: "Boxing",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 6,
    serviceImg: serviceImage3,
    icon: Dumbbell,
    title: "Yoga",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 7,
    serviceImg: serviceImage2,
    icon: Dumbbell,
    title: "Gym",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
  {
    id: 8,
    serviceImg: serviceImage6,
    icon: Dumbbell,
    title: "Zumba",
    desc: "Get ready to burn off some serious fat with our high quality products.",
    link: "#services",
  },
];

export const trainersData = [
  {
    id: 1,
    trainerImg: coach1,
    name: "Dr. John Smith",
    role: "Body Building Coach",
  },
  {
    id: 2,
    trainerImg: coach2,
    name: "Dr. John Doe",
    role: "Gym Trainer",
  },
  {
    id: 3,
    trainerImg: coach4,
    name: "Mr. Lilly Doe",
    role: "Prof. fitness coach",
  },
  {
    id: 4,
    trainerImg: coach3,
    name: "Jack Reigns",
    role: "Prof. wrestling coach",
  },
];

export const exercises = [
  {
    id: 1,
    trainerImg: "https://source.unsplash.com/random/?warmup",
    name: "Warm up",
    duration: 15,
    sets: 3,
    calories: 100,
  },
  {
    id: 2,
    trainerImg: "https://source.unsplash.com/random/?deadlift",
    name: "Shoulder Workout",
    duration: 20,
    sets: 4,
    calories: 150,
  },
  {
    id: 3,
    trainerImg: "https://source.unsplash.com/random/?yoga",
    name: "Yoga Session",
    duration: 55,
    sets: 5,
    calories: 250,
  },
  {
    id: 4,
    trainerImg: "https://source.unsplash.com/random/?squat",
    name: "Leg Workout",
    duration: 18,
    sets: 4,
    calories: 120,
  },
];

export const navbarData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: " Plan",
    link: "/pricing-plan",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];
