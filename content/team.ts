export interface TeamMember {
  name: string;
  role: string;
  school: string;
  fact: string;
  photo: string;
  imagePosition?: string;
}

export interface TeamGroup {
  category: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    category: "Executives",
    members: [
      {
        name: "Lalit Batchu",
        role: "Co-Founder and Co-Prez",
        school: "American High School Grade 12",
        fact: "My full name has 6 words!",
        photo: "/members/Lalit Batchu.webp",
      },
      {
        name: "Pradyun Kanuparthi",
        role: "Co-Founder and Co-Prez",
        school: "Mission San Jose High School Grade 12",
        fact: "I start on varsity basketball",
        photo: "/members/Pradyun Kanuparthi.png",
      },
      {
        name: "Hala Amer",
        role: "Vice President",
        school: "American High School Grade 11",
        fact: "I recently built a 3D printer.",
        photo: "/members/Hala Amer.png",
      },
    ],
  },
  {
    category: "Outreach",
    members: [
      {
        name: "Deepam Kapadia",
        role: "Outreach Director",
        school: "American High School Grade 11",
        fact: "I am a top 5% Tetris player.",
        photo: "/members/Deepam.png",
      },
      {
        name: "Anika Batra",
        role: "Outreach Officer",
        school: "American High School Grade 11",
        fact: "I have never broken a bone.",
        photo: "/members/Anika Batra.png",
      },
    ],
  },
  {
    category: "Eco-Filament",
    members: [
      {
        name: "Saket Sandru",
        role: "Eco-Filament Director",
        school: "American High School Grade 11",
        fact: "I broke the bone in the human body thats hardest to heal",
        photo: "/members/Saket Sandru.png",
      },
      {
        name: "Nameh Gupta",
        role: "Eco-Filament Officer",
        school: "American High School Grade 11",
        fact: "I like gardening in my free time.",
        photo: "/members/Nameh Gupta.jpg",
      },
      {
        name: "Atiksh Jain",
        role: "Eco-Filament Officer",
        school: "American High School Grade 10",
        fact: "I have traveled to 15 countries.",
        photo: "/members/Atiksh Jain.png",
      },
    ],
  },
  {
    category: "Fundraising",
    members: [
      {
        name: "Vihaan Sanghvi",
        role: "Fundraising Director",
        school: "American High School Grade 11",
        fact: "I love traveling",
        photo: "/members/Vihaan Sanghvi.png",
      },
      {
        name: "Abhay Shankar",
        role: "Fundraising Officer",
        school: "Mission San Jose High School Grade 12",
        fact: "I have a labradoodle named Milo",
        photo: "/members/Abhay Shankar.png",
      },
      {
        name: "Yuva Chandrachood",
        role: "Fundraising Officer",
        school: "American High School Grade 11",
        fact: "I am 6'1",
        photo: "/members/Yuva Chandrachood.png",
        imagePosition: "70% 25%",
      },
    ],
  },
  {
    category: "Tech to Treasure",
    members: [
      {
        name: "Clovis Zhang",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 11",
        fact: "I'm addicted to Pokémon Go",
        photo: "/members/Clovis Zhang.png",
      },
      {
        name: "Krishan Ranjan",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 11",
        fact: "I've visited over 15 states in the US",
        photo: "/members/Krishan Ranjan.jpg",
      },
      {
        name: "Deenadarrshan Sathiyamoorthi",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 11",
        fact: "I like to play basketball",
        photo: "/members/Deenadarrshan Sathiyamoorthi.jpg",
      },
      {
        name: "Aarush Chavali",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 11",
        fact: "I can type up to 120 words per minute.",
        photo: "/members/Aarush Chavali.webp",
      },
      {
        name: "Arya Marker",
        role: "Tech to Treasure Officer",
        school: "Mission San Jose High School Grade 12",
        fact: "I've played piano for 5+ years!",
        photo: "/members/Arya Marker.webp",
      },
    ],
  },
  {
    category: "Bounce Back",
    members: [
      {
        name: "Clovis Zhang",
        role: "Bounce Back Director",
        school: "American High School Grade 11",
        fact: "I'm addicted to Pokémon Go",
        photo: "/members/Clovis Zhang.png",
      },
      {
        name: "Thomas Nguyen",
        role: "Bounce Back Officer",
        school: "American High School Grade 11",
        fact: "I like sleeping",
        photo: "/members/Thomas Nguyen.png",
      },
    ],
  },
  {
    category: "Other Leadership",
    members: [
      {
        name: "Ashish Swaminathan",
        role: "Secretary",
        school: "Mission San Jose Grade 12",
        fact: "I am an eclectic person, liking academia while also liking sports and leadership.",
        photo: "/members/Ashish Swaminathan.png",
        imagePosition: "center 25%",
      },
    ],
  },
];
