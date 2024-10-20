import img1 from "../images/about-money.png"
import img2 from "../images/about-trust.png"
import img3 from "../images/about-travel.png"
import darjeeling from "../images/consult.jpg"
import darjeeling2 from "../images/darjeeling2.jpg"
import silkroute from "../images/silkroute.jpg"
import silkroute2 from "../images/silkroute2.jpg"
import andaman from "../images/andaman.jpg"
import andaman2 from "../images/andaman2.jpg"
import and1 from "../images/tours/andamantour.jpg"
import and2 from "../images/tours/andamantour2.jpg"
import and3 from "../images/tours/andamantour3.jpg"
import silk1 from "../images/tours/silk1.jpg"
import silk2 from "../images/tours/silk2.jpg"
import silk3 from "../images/tours/silk3.jpg"
import silk4 from "../images/tours/silk4.jpg"

export const aboutCards = [
    {
        id: 1,
        img: img1,
        title: "Value For Money",
        desc: "We craft tailor-made itineraries based on your preferences and interests, ensuring a perfect blend of comfort and adventure.We offer budget-friendly travel packages without compromising on quality, allowing you to explore more for less."
    },
    {
        id: 2,
        img: img2,
        title: "Safe and Trustworthy",
        desc: "As a West Bengal-based agency, we provide authentic local insights and hidden gems in all the regions we cover. We prioritize your safety, ensuring that all accommodations and transportation providers meet the highest standards."
    },
    {
        id: 3,
        img: img3,
        title: "Full Travel guidance",
        desc: "From accommodation and transportation to activities and guided tours, we handle everything so you can enjoy a hassle-free experience.From accommodation and transportation to activities and guided tours, we handle everything so you can enjoy a hassle-free experience."
    },
]



// TODO:
export const tours = [
    {
        id: 1,
        img: darjeeling,
        img2: darjeeling2,
        place: "Darjeeling",
        days: "6",
        places: "Tinchule, lamahata, mirik lake, Gopal dhara Tea Garden, Local",
        dates: "29/11/24 , 21/12/24, 10/03/25, 13/03/25, 16/03/25.",
        price: "10,000",
        routes: false,

    },
    {
        id: 2,
        img: andaman,
        img2: andaman2,
        place: "Andaman",
        days: "7",
        places: "Roos Island, Celular Jail, Havelock, Neel Deep",
        dates: "02/10/24, 09/10/24, 20/01/25, 27/01/25",
        price: "36,000",
        routes: true,
        trend: true,
        route: [
            {
                day: 1,
                description: "Arrival at Port Blair by flight. Check into the hotel. After lunch, visit Corbyn’s Cove Beach and then proceed to Cellular Jail to witness the Light and Sound Show. Stay overnight at Port Blair."
            },
            {
                day: 2,
                description: "Journey to Baratang Island to see the Jarawa area. The trip includes a boat and car ride through Jarwa territory. Visit the limestone caves and mud volcano. Return to Port Blair in the evening."
            },
            {
                day: 3,
                description: "After breakfast, visit Ross Island, which was the capital of the British during their rule over the Andaman. In the afternoon, head to Chidiya Tapu (Sunset Point). Stay overnight at Port Blair."
            },
            {
                day: 4,
                description: "Early morning, take a boat ride to Havelock Island to enjoy Radha Nagar Beach (Beach No. 1). After lunch, travel to Neil Island. Stay overnight at Neil Island."
            },
            {
                day: 5,
                description: "After breakfast, explore Neil Island and visit Bharatpur Beach, Laxmanpur Beach, and Sitapur Beach. Enjoy the scenic beauty of natural bridges and engage in recreational activities like snorkeling. Stay overnight at Neil Island."
            },
            {
                day: 6,
                description: "Early morning, return to Port Blair. After lunch, visit prominent landmarks such as Cellular Jail, Chatham Saw Mill, Gandhi Park, and the local beaches. Stay overnight at Port Blair."
            },
            {
                day: 7,
                description: "Check out from the hotel and head to the airport for the return flight to Kolkata. End of the tour."
            }
        ]

    },
    {
        id: 3,
        img: silkroute,
        img2: silkroute2,
        place: "Silk Route",
        days: "6",
        places: "Zig zag, Old Baba Mandir, Ganesh Tample",
        dates: "10/12/2024 (Any day min 6 pax)",
        price: "10,000",
        routes: false,

    },
]


export const gallery_andaman = [
    {
        id: 1,
        img: and1
    },
    {
        id: 2,
        img: and2
    },
    {
        id: 3,
        img: and3
    },
]

export const gallery_silk = [
    {
        id: 1,
        img: silk1,
    },
    {
        id: 2,
        img: silk2,
    },
    {
        id: 3,
        img: silk3,
    },
    {
        id: 4,
        img: silk4,
    },
]