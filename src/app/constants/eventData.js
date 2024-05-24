import firstImage from "../../../public/bidImage.png";
import secondImage from "../../../public/bid1.png";
import thirdImage from "../../../public/bid2.png";

const images = {
  firstImage: firstImage,
  secondImage: secondImage,
  thirdImage: thirdImage,
};

const eventData = {
  events: [
    {
      id: 31,
      status: "Active",
      link: "/bids",
      image: images.firstImage,
      title: "Galaxy Soccer",
      details: {
        startInfo: {
          label: "Ends on",
          time: "2 days",
        },
        priceInfo: {
          label: "Price",
          amount: "0.02 sol",
        },
      },
    },
    {
      id: 32,
      status: "Upcoming",
      link: "/bids",
      image: images.secondImage,
      title: "Ball Empire",
      details: {
        startInfo: {
          label: "Ends on",
          time: "5 days",
        },
        priceInfo: {
          label: "Price",
          amount: "0.05 sol",
        },
      },
    },
    {
      id: 33,
      status: "Ended",
      link: "/bids",
      image: images.thirdImage,
      title: "Soccer Fiery",
      details: {
        startInfo: {
          label: "Ended on",
          time: "1 day ago",
        },
        priceInfo: {
          label: "Final Price",
          amount: "0.03 sol",
        },
      },
    },
  ],
};



export default eventData;