import React from "react";
import Card from '../../Components/Card/Card'

const cardData = [
  {
    main: "Lightning",
    title: "N-Events Lighting",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT36H3azR_pihcT82bHcUJ5wKpv-OhiX2S4g&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ow1_S4xczbcX3MfrCnaSTm-08rI0ZsQbMA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixeYT_h3reNMiNt3YNZ_odvvH7HByO3BVKQ&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF62O4lruWphbCJc2Vi4Go8GggDvRGx_mDw&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    percentage: "-10",
    time:'10'
  },
  {
    main: "Photographers",

    title: "V-Photography",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tGskehZxTZJcyzuRY1NkonuGgSZ81keJZQ&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XnHnIyUeg6tflSRkhQDmekpv9wn5Du5lpw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwjh1-vdS964KxV6w3e-p78hta9KNyGVoSw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpTGMHuW930rnShFcassHro7CDC1GOoVmZQ&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    percentage: "-15",
    time:'12'
  },
  {
    main: "Caterers",

    title: "K-Foods",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMgpVgpkcbOnW2uMPsWD0QeCVaeLHk9sK3w&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hVyyJrHwqQk69WpFkQlmhIbPs8rJepOwSA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mTT39miZu_pjIFl6pdDqGuVV43Ro60IdBA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLr_6JnhduHACWM4hluCqeOOwi2Mvig6IUIrF04othqjfN3iNYgC9y82qNEeV2PftCjU&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    percentage: "10",
    time:'24'
  },
  {
    main: "Designers",
    title: "T-Designers",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nU_yrr03_mRNyo0Ww3La97kqyjuC-gLSPw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkCOMjOrMUquIq5bjAbkqTA_-3UjDzSX3fg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCp68VNPm94O3T8QrdoY12_HVfS2oi2ChSA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2tVAN29kFgTwJTaz6-edW91UDjFRw2pX_g&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    time:'15'
  },
  {
    main: "Entertainment",

    title: "Dj",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXlW4KOdsisbJVqbnieet2n6WZ97VqHjRjQ&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LdutxOWqi4lp4UfSSeeXcSULBgr8U4CfPw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_O0iAcIK7Em6u59IH2hmGPD6jYAqyCyeV8A&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMGin43XUcKzErMpz15iVdWIFEMkSVXzJvw&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    time:'24'
  },
];

const newCardData=[
  {
    title: "Spark Lighting",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD969W9F5pMN8J6FiilZ6kCgrhQSko2CCESQ&usqp=CAU",


      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBedI1Penb_i0xbzIbVq0lj538InqNYkdFvg&usqp=CAU",
      },
      {
        url: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsjK_ce0gNOIJ0EPBtNIvDKwHGBUZyOX1rQ&usqp=CAU",

      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CaCHXlQKncdow-7sQxcZ7tIJ4Grtea6qjw&usqp=CAU",
      },
    ],
    rating: "3.5",
    location: "Kurnool",
    cost: "20,000",
    percentage: "-10",
    time:'18'
  },
  {
    title: "Star Photography",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfM6g2WtGx6HASkL28LPzbeCbaTjWnx9Bpg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyPRsYV4kM-yMWhNajudimZ3k7o9OM6Fkgg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_eWdrdg9TbwM_CH7re4Mb5rUbrrUUwKIlA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIVSm9qAMqi84XT57dNI69nr8B4y1U_x1MQ&usqp=CAU",
      },
    ],
    rating: "4.0",
    location: "Warangal",
    cost: "40,000",
    percentage: "-15",
    time:'12'
  },
  {
    title: "VKitchen-Foods",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xlK8bTqvX3r-SKwrigimT1V0yzrgzfwmTg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZJPPoX9WM6IlkB_wjRe4gAixIE2xDomuGg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5mbOTvOeApm8-TNdtx7QSiSSSZCUHrwPvg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPLf1iTDM7a182obGEgo4SMXkh0tHYPcqEg&usqp=CAU",
      },
    ],
    rating: "4.3",
    location: "Rajamundry",
    cost: "60,000",
    percentage: "10",
    time:'4'
  },
  {
    title: "M-Designers",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHaRIk6OXdH2UJ8BbdIigxDzz6cBsZk4ACQ&usqp=CAU",

      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC4ajiePozlxBAS15HawwZbgBxYUEpFMehQ&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCp68VNPm94O3T8QrdoY12_HVfS2oi2ChSA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTF8RVqOEAXzBpQIwAOKmPYaOs0mwSMy-0xg&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    time:'15'
  },
  {
    title: "sEntertainers",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMGin43XUcKzErMpz15iVdWIFEMkSVXzJvw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LdutxOWqi4lp4UfSSeeXcSULBgr8U4CfPw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_O0iAcIK7Em6u59IH2hmGPD6jYAqyCyeV8A&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXlW4KOdsisbJVqbnieet2n6WZ97VqHjRjQ&usqp=CAU",

      },
    ],
    rating: "3.5",
    location: "Kurnool",
    cost: "28,000",
    time:'20'
  },
];

const sCardData=[
  {
    main: "Lightning",
    title: "iLighting",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGoyz62N2arDsb0y8HB_TvsWLpMleH5f-fg&usqp=CAU",


      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fZIwIaVgaZGAiBdumk0GPvGmIHbknBuc9Q&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0w7rg9Uy2uYYNFeaE0Sf5rNhqw31B77vFw&usqp=CAU",

      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIj_Co0TTkptt1QZeJclx2hU4t1atIaP_lQ&usqp=CAU",
      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    percentage: "-10",
    time:'10'
  },
  {
    title: "iStudios",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFhB4L38vWFIZAYOYIOT37KE2SkDF0nq0xQ&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QoE9UQUiL_q79j0cnk2C7_9uD1ScOQvWvg&usqp=CAU",

      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3efa_C8NlUpry9fdrLJ4MjsdSCTvVg6ZhJA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOUdmWn258USkO8lS_M4zAFlW7z57JX4qlA&usqp=CAU",
      },
    ],
    rating: "4.8",
    location: "Hyderabad",
    cost: "80,000",
    percentage: "-5",
    time:'12'
  },
  {
    title: "TSpoon",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWSaZR1j4dH7tO4LQmfspJjHfMf50sOG2bA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27p_2H7VUSkonjSSIASgLprJmtdYoBZdZMA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tgLG4Mp0RVNCnPQx2hTvm6toKMxQsEUUWg&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWSaZR1j4dH7tO4LQmfspJjHfMf50sOG2bA&usqp=CAU",
      },
    ],
    rating: "3.8",
    location: "Khammam",
    cost: "25,000",
    percentage: "10",
    time:'24'
  },
  {
    main: "Designing",
    title: "iDesigners",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfSTMCSxAxddUusSIgxsgQMwtaAtN6-fEbeiVuUw-mZTuTjY1LulI5vBGbRjB0vzw0pk&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfSTMCSxAxddUusSIgxsgQMwtaAtN6-fEbeiVuUw-mZTuTjY1LulI5vBGbRjB0vzw0pk&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCp68VNPm94O3T8QrdoY12_HVfS2oi2ChSA&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2tVAN29kFgTwJTaz6-edW91UDjFRw2pX_g&usqp=CAU",
      },
    ],
    rating: "3.6",
    location: "Vijayawada",
    cost: "35,000",
    time:'15'
  },
  {
    title: "Rockers",
    image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_O0iAcIK7Em6u59IH2hmGPD6jYAqyCyeV8A&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LdutxOWqi4lp4UfSSeeXcSULBgr8U4CfPw&usqp=CAU",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMGin43XUcKzErMpz15iVdWIFEMkSVXzJvw&usqp=CAU",

      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXlW4KOdsisbJVqbnieet2n6WZ97VqHjRjQ&usqp=CAU",

      },
    ],
    rating: "4.5",
    location: "Visakhapatnam",
    cost: "30,000",
    time:'24'
  },
]

const SliderCard = () => {
  return (
    <div className="flex flex-wrap gap-x-[54px] mt-10">
      <div className="flex flex-col ">
        {cardData.map((item) => (
          <div key={item.id} className="">
            <h1 className="text-3xl font-bold ">{item.main}</h1>
            <Card
              imageSrc={item.image}
              imageAlt={item.title}
              title={item.title}
              rating={item.rating}
              location={item.location}
              cost={item.cost}
              promotion={item}
              time={item.time}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {newCardData.map((item) => (
          <div key={item.id}>
            <div className="h-9"></div>
            <Card
              imageSrc={item.image}
              imageAlt={item.title}
              title={item.title}
              rating={item.rating}
              location={item.location}
              cost={item.cost}
              promotion={item}
              time={item.time}

            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {sCardData.map((item) => (
          <div key={item.id}>
            <div className="h-9"></div>
            <Card
              imageSrc={item.image}
              imageAlt={item.title}
              title={item.title}
              rating={item.rating}
              location={item.location}
              cost={item.cost}
              promotion={item}
              time={item.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
