// Jersey Images
import firstJersey from "../../../public/Images/IJ1.png"
import secondJersey from "../../../public/Images/IJ2.png"
import thirdJersey from "../../../public/Images/IJ3.png"
import fourthJersey from "../../../public/Images/IJ4.png"
import fifthJersey from "../../../public/Images/IJ5.png"
import sixthJersey from "../../../public/Images/IJ6.png"
import seventhJersey from "../../../public/Images/IJ7.png"

// Trophies Images
import firstTrophy from "../../../public/Images/T1.png";
import secondTrophy from "../../../public/Images/T2.png";
import thirdTrophy from "../../../public/Images/T3.png";
import fourthTrophy from "../../../public/Images/T4.png";
import fifthTrophy from "../../../public/Images/T5.png";
import sixthTrophy from "../../../public/Images/T6.png";
import seventhTrophy from "../../../public/Images/T7.png";

// Moments Image
import firstMoment from "../../../public/Images/M1.png";
import secondMoment from "../../../public/Images/M2.png";
import thirdMoment from "../../../public/Images/M3.png";
import fourthMoment from "../../../public/Images/M4.png";
import fifthMoment from "../../../public/Images/M5.png";
import sixthMoment from "../../../public/Images/M6.png";
import seventhMoment from "../../../public/Images/M7.png";

// Jersey Images
const jerseyImages = [
 firstJersey,
 secondJersey,
 thirdJersey,
 fourthJersey,
 fifthJersey,
 sixthJersey,
 seventhJersey
];

// Trophies Images
const trophyImages = [
firstTrophy,
secondTrophy,
 thirdTrophy,
 fourthTrophy,
 fifthTrophy,
 sixthTrophy,
 seventhTrophy
];

// Moments Images
const momentImages = [
firstMoment,
secondMoment,
 thirdMoment,
 fourthMoment,
 fifthMoment,
 sixthMoment,
 seventhMoment
];





// const jerseyItems = [];
// const trophyItems = [];
// const momentItems = [];

// // Add jersey items
// for (let i = 0; i < 7; i++) {
//   jerseyItems.push({
//     id: i + 1,
//     name: `#Jersey - ${(i + 1).toString().padStart(4, "0")}`,
//     title: "Soccer Jersey",
//     imageURL: jerseyImages[i],
//     category: "Jersey",
//   });
// }

// // Add trophy items
// for (let i = 0; i < 7; i++) {
//   trophyItems.push({
//     id: i + 1,
//     name: `#Trophy - ${(i + 1).toString().padStart(4, "0")}`,
//     title: "Trophy",
//     imageURL: trophyImages[i],
//     category: "Trophy",
//   });
// }

// // Add moment items
// for (let i = 0; i < 7; i++) {
//   momentItems.push({
//     id: i + 1,
//     name: `#Moment - ${(i + 1).toString().padStart(4, "0")}`,
//     title: "Special Moment",
//     imageURL: momentImages[i],
//     category: "Moment",
//   });
// }

// console.log(jerseyItems, trophyItems, momentItems);




// Jersey Images Paths
// const jerseyImages = [
//     "../../../public/Images/IJ1.png",
//     "../../../public/Images/IJ2.png",
//     "../../../public/Images/IJ3.png",
//     "../../../public/Images/IJ4.png",
//     "../../../public/Images/IJ5.png",
//     "../../../public/Images/IJ6.png",
//     "../../../public/Images/IJ7.png"
// ];

// // Trophy Images Paths
// const trophyImages = [
//     "../../../public/Images/T1.png",
//     "../../../public/Images/T2.png",
//     "../../../public/Images/T3.png",
//     "../../../public/Images/T4.png",
//     "../../../public/Images/T5.png",
//     "../../../public/Images/T6.png",
//     "../../../public/Images/T7.png"
// ];

// // Moments Images Paths
// const momentImages = [
//     "../../../public/Images/M1.png",
//     "../../../public/Images/M2.png",
//     "../../../public/Images/M3.png",
//     "../../../public/Images/M4.png",
//     "../../../public/Images/M5.png",
//     "../../../public/Images/M6.png",
//     "../../../public/Images/M7.png"
// ];

// Define the interface for a jersey item
interface Item {
    id: number;
    name: string;
    title: string;
    imageURL: string;
    category: string;
}

const jerseyItems: Item[] = [];
const trophyItems: Item[] = [];
const momentItems: Item[] = [];


// Add jersey items
for (let i = 0; i < 7; i++) {
  jerseyItems.push({
    id: i + 1,
    name: `#Jersey - ${(i + 1).toString().padStart(4, "0")}`,
    title: "Soccer Jersey",
    imageURL: jerseyImages[i].src,
    category: "Jersey",
  });
}

// Add trophy items
for (let i = 0; i < 7; i++) {
  trophyItems.push({
    id: i + 1,
    name: `#Trophy - ${(i + 1).toString().padStart(4, "0")}`,
    title: "Trophy",
    imageURL: trophyImages[i].src,
    category: "Trophy",
  });
}

// Add moment items
for (let i = 0; i < 7; i++) {
  momentItems.push({
    id: i + 1,
    name: `#Moment - ${(i + 1).toString().padStart(4, "0")}`,
    title: "Special Moment",
    imageURL: momentImages[i].src,
    category: "Moment",
  });
}

// console.log(jerseyItems, trophyItems, momentItems);


export {jerseyItems, trophyItems, momentItems}