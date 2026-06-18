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
        school: "American High School Grade 11",
        fact: "My full name has 6 words!",
        photo: "/members/Lalit Batchu.png",
      },
      {
        name: "Pradyun Kanuparthi",
        role: "Co-Founder and Co-Prez",
        school: "Mission San Jose High School Grade 11",
        fact: "I start on varsity basketball",
        photo: "/members/Pradyun Kanuparthi.png",
      },
      {
        name: "Hala Amer",
        role: "Vice President",
        school: "American High School Grade 10",
        fact: "I recently built a 3D printer.",
        photo: "/members/Hala Amer.png",
      },
    ],
  },
  {
    category: "Outreach",
    members: [
      {
        name: "Harmonie Lee",
        role: "Outreach Director",
        school: "American High School Grade 10",
        fact: "I get Chick-fil-A every week",
        photo: "/members/Harmony Lee.png",
      },
      {
        name: "Deepam Kapadia",
        role: "Outreach Director",
        school: "American High School Grade 10",
        fact: "I am a top 5% Tetris player.",
        photo: "/members/Deepam.png",
      },
      {
        name: "Anika Batra",
        role: "Outreach  Officer",
        school: "American High School Grade 10",
        fact: "I have never broken a bone.",
        photo: "/members/Anika Batra.png",
      },
      {
        name: "Anwen Li",
        role: "Outreach Officer",
        school: "American High Grade 9",
        fact: "I can speak 4 languages",
        photo: "/members/Anwen Li.jpg",
      },
    ],
  },
  {
    category: "Eco-Filament",
    members: [
      {
        name: "Saket Sandru",
        role: "Eco-Filament Director",
        school: "American High School Grade 10",
        fact: "I broke the bone in the human body thats hardest to heal",
        photo: "/members/Saket Sandru.png",
      },
      {
        name: "Nameh Gupta",
        role: "Eco-Filament Officer",
        school: "American High School Grade 10",
        fact: "I like gardening in my free time.",
        photo: "/members/Nameh Gupta.jpg",
      },
      {
        name: "Atiksh Jain",
        role: "Eco-Filament Officer",
        school: "American High School Grade 9",
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
        school: "American High School Grade 10",
        fact: "I love traveling",
        photo: "/members/Vihaan Sanghvi.png",
      },
      {
        name: "Abhay Shankar",
        role: "Fundraising Officer",
        school: "Mission San Jose High School Grade 11",
        fact: "I have a labradoodle named Milo",
        photo: "/members/Abhay Shankar.png",
      },
      {
        name: "Yuva Chandrachood",
        role: "Fundraising Officer",
        school: "American High School Grade 10",
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
        name: "Sunny Yang",
        role: "Tech to Treasure Director",
        school: "American High School Grade 10",
        fact: "I have two cats.",
        photo: "/members/Sunny Yang.png",
      },
      {
        name: "Clovis Zhang",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 10",
        fact: "I'm addicted to Pokémon Go",
        photo: "/members/Clovis Zhang.png",
      },
      {
        name: "Krishan Ranjan",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 10",
        fact: "I've visited over 15 states in the US",
        photo: "/members/Krishan Ranjan.jpg",
      },
      {
        name: "Deenadarrshan Sathiyamoorthi",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 10",
        fact: "I like to play basketball",
        photo: "/members/Deenadarrshan Sathiyamoorthi.jpg",
      },
      {
        name: "Pranav Singh",
        role: "Tech to Treasure Officer",
        school: "American High School Grade 10",
        fact: "I run on 3 hours of sleep!",
        photo: "/members/Pranav Singh.png",
      },
    ],
  },
  {
    category: "Bounce Back",
    members: [
      {
        name: "Clovis Zhang",
        role: "Bounce Back Director",
        school: "American High School Grade 10",
        fact: "I'm addicted to Pokémon Go",
        photo: "/members/Clovis Zhang.png",
      },
      {
        name: "Thomas Nguyen",
        role: "Bounce Back Officer",
        school: "American High School Grade 10",
        fact: "I like sleeping",
        photo: "/members/Thomas Nguyen.png",
      },
    ],
  },
  {
    category: "Media & Administrative",
    members: [
      {
        name: "Pradyun Kanuparthi",
        role: "Marketing Director",
        school: "Mission San Jose High School Grade 11",
        fact: "I start on varsity basketball",
        photo: "/members/Pradyun Kanuparthi.png",
      },
      {
        name: "William Lam",
        role: "Scriptwriter",
        school: "Mission San Jose High Grade 11",
        fact: "I run track and field",
        photo: "/members/William Lam.jpg",
      },
      {
        name: "Zerek Kao",
        role: "Scriptwriter",
        school: "Mission San Jose High Grade 11",
        fact: "I get no minutes on varsity basketball",
        photo: "/members/Zerek Kao.jpg",
      },
      {
        name: "Shreshta Parampalli",
        role: "Speaker",
        school: "Mission San Jose High Grade 11",
        fact: "I start on varsity basketball",
        photo: "/members/Shreshta Parampalli.jpg",
      },
      {
        name: "Advaith Dhumal Rao",
        role: "Video Editor",
        school: "Mission San Jose Grade 11",
        fact: "I was ranked number 1 in the nation for cricket in my age group last year",
        photo: "/members/Advaith Dhumal Rao.jpg",
      },
    ],
  },
  {
    category: "Other Leadership",
    members: [
      {
        name: "Linhan",
        role: "Publicist (PR)",
        school: "American High School Grade 9",
        fact: "I can count to 100 in Chinese in one breath.",
        photo: "/members/Linhan.png",
      },
      {
        name: "Ashish Swaminathan",
        role: "Secretary",
        school: "Mission San Jose Grade 11",
        fact: "I am an eclectic person, liking academia while also liking sports and leadership.",
        photo: "/members/Ashish Swaminathan.png",
        imagePosition: "center 25%",
      },
    ],
  },
  {
    category: "Website Management",
    members: [
      {
        name: "Pranav Singh",
        role: "Website Manager",
        school: "American High School Grade 10",
        fact: "I run on 3 hours of sleep!",
        photo: "/members/Pranav Singh.png",
      },
    ],
  },
];
