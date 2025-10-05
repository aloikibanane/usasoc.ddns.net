// Change every part of the website here.
import {
  Snowflake,
  Award,
  Clock,
  Users,
  Shield,
  Target,
  BookOpen,
  Mail,
  Image,
  Play,
  CheckCircle,
} from "lucide-react";

export const AboutConfig = {
  hero: {
    title: "ABOUT ASF",
    accentWord: "ASF",
    subtitle:
      "The Army Special Forces is one of the most elite units in the USAR, conducting advanced training, specialized operations, and upholding the highest standards of combat.",
    backgroundImage: "images/propaganda/image5.png",
  },

  mission: {
    title: "OUR MISSION",
    description:
      "To liberate the oppressed through unconventional warfare, special reconnaissance, and direct action missions.",
  },

  groupsSection: {
    title: "OUR",
    accentWord: "GROUPS",
    subtitle:
      "Three elite Special Forces Groups, each with specialized missions and standards",
    gridCols: 3,
    animation: { duration: 0.8 },
    groups: [
      {
        name: "10th Special Forces Group",
        badgeSrc: "images/logos/10SFG.png",
        tagline: "Gatekeepers of Special Forces Quality",
        description: "Handles recruitment and hosts the Special Forces Qualification Course (SFQC) alongside the Cold Weather Leaders Course (CWLC).",
        companies: [
          {
            name: "Whiskey Company: ",
            description:
              "Hosts SFQC for the 1st SFG and 10th SFG alongside CWLC. Specializes in scrimmages, raids, and wargames.",
          },
          {
            name: "Yankee Company: ",
            description:
              "Hosts SFQC for the 5th SFG and 10th SFG alongside CWLC. Specializes in MILSIM.",
          },
        ],
      },
      {
        name: "5th Special Forces Group",
        badgeSrc: "images/logos/5SFG.png",
        tagline: "Military Simulation Focused",
        description:
          "The 5th SFG specializes in MILSIM.",
        companies: [
          { name: "Echo Company: ", description: "Uses unconventional warfare and specializes in guerrilla warfare to attack enemies from behind and weaken them." },
          { name: "Delta Company: ", description: "Focuses on direct action. The company that would rather go offense than defense." },
        ],
      },
      {
        name: "1st Special Forces Group",
        badgeSrc: "images/logos/1SFG.png",
        tagline: "Scrimmages, Raids, and Wargames Focused",
        description:
          "The most elite group in the Army Special Forces, specializing in scrimmages, raids, and wargames, leading ASF in combat performance.",
        companies: [
          {
            name: "Alpha Company: ",
            description: "Focuses on scrimmages and raids.",
          },
          {
            name: "Bravo Company: ",
            description:
              "Focuses on wargames.",
          },
        ],
      },
    ],
  },

  dfProgram: {
    title: "DESIGNATED FIGHTER PROGRAM",
    subtitle: "An elite program where only a few manage to get in.",
    description:
      "The Designated Fighter Program (DFP) is a program in ASF intended to select only the best of the best. Each Designated Fighter gets access and priority to certain events such as operations and deployments. They show combat excellence above all others.",
    criteria: [
      "Must be an active Special Forces member",
      "Must be excellent at combat",
      "Get handpicked by DF Command if proven worthy or",
      "Pass a Designated Fighter selection",
    ],
    privileges: [
      "Priority selection for deployments and operations",
      "Recognition upon completion",
    ],
  },
};

export const ContactConfig = {
  hero: {
    title: "CHAIN OF COMMAND",
    accentWord: "COMMAND",
    subtitle:
      "Leadership structure and contact information for the Army Special Forces command hierarchy.",
    backgroundImage: "images/propaganda/image4.png",
  },

  overseer: [
    {
      rank: "General",
      name: "FairwelIs",
      position: "Commanding General",
      roblox:
        "https://www.roblox.com/users/2326467240/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O10.png",
    },
    {
      rank: "Lieutenant General",
      name: "NasDaily_Alpha",
      position: "Deputy Commanding General",
      roblox:
        "https://www.roblox.com/users/553357381/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O9.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "Alexis13480",
      position: "Command Sergeant Major",
      roblox:
        "https://www.roblox.com/users/553012024/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/enlisted/E9B.png",
    },
    {
      rank: "Major General",
      name: "ACertain_Nobody",
      position: "Chief of Staff",
      roblox:
        "https://www.roblox.com/users/85610835/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O8.png",
    },
  ],

  hicomMembers: [
    {
      rank: "Major General",
      name: "JoshyWagner",
      position: "Commanding Officer",
      roblox:
        "https://www.roblox.com/users/1816986602/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O8.png",
    },
    {
      rank: "Brigadier General",
      name: "ElvinAyhan",
      position: "Executive Officer",
      roblox:
        "https://www.roblox.com/users/375199292/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O7.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "ElijahIWilliams",
      position: "Regimental Sergeant Major",
      roblox:
        "https://www.roblox.com/users/104156319/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/enlisted/E9B.png",
    },
  ],

  groups: [
    {
      name: "1st Special Forces Group",
      src: "images/logos/1SFG.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "N/A",
          roblox:
            "",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "jewshoota",
          roblox:
            "https://www.roblox.com/users/632121029/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Sergeant Major",
          rank: "Sergeant Major",
          name: "ONEFOU_R",
          roblox:
            "https://www.roblox.com/users/3206949103/profile?friendshipSourceType=PlayerSearch",
        },
      ],
    },
    {
      name: "5th Special Forces Group",
      src: "images/logos/5SFG.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "xRed_v",
          roblox:
            "https://www.roblox.com/users/772617327/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "kazxrevenge",
          roblox:
            "https://www.roblox.com/users/859066350/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Sergeant Major",
          rank: "Sergeant Major",
          name: "Dead_Berry01",
          roblox:
            "https://www.roblox.com/users/2623771569/profile?friendshipSourceType=PlayerSearch",
        },
      ],
    },
    {
      name: "10th Special Forces Group",
      src: "images/logos/10SFG.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "N/A",
          roblox:
            "",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "GetRightDawg",
          roblox: "https://www.roblox.com/users/902970011/profile",
        },
        {
          position: "Group Sergeant Major",
          rank: "Sergeant Major",
          name: "Airport_imdeleteduo2",
          roblox:
            "https://www.roblox.com/users/2667322014/profile",
        },
      ],
    },
  ],

  positionDuties: {
    "Commanding General":
      "Leads the entire Army Special Operations Command (ASOC), oversees all operations, sets strategic objectives, and ensures overall mission readiness.",

    "Deputy Commanding General":
      "Assists the Commanding General in managing ASOC, oversees delegated operations, and ensures continuity of command.",

    "Command Sergeant Major":
      "Leads the enlisted advisors within ASOC, mentors senior enlisted personnel, and ensures discipline and readiness across the enlisted ranks.",

    "Chief of Staff":
      "Leads the officer staff within ASOC, coordinates planning and administration, and ensures that the General’s directives are effectively executed.",

    "Commanding Officer":
      "Leads the Special Forces unit, oversees all operations, and ensures mission readiness and team performance within ASF.",

    "Executive Officer":
      "Assists the Commanding Officer in operations and administration, and ensures operational objectives are met.",

    "Regimental Sergeant Major":
      "Senior enlisted advisor for ASF, oversees enlisted personnel, maintains discipline, and provides mentorship.",

    "Group Commanding Officer":
      "Leads a specific Special Forces group, plans missions, coordinates group training, and ensures group readiness.",

    "Group Executive Officer":
      "Assists the Group Commanding Officer in executing missions and managing the group’s administration and operations.",

    "Group Sergeant Major":
      "Senior enlisted advisor for the group, ensures discipline, provides mentorship, and monitors readiness of all enlisted members within the group.",
  },

  responseTimes: [
    {
      title: "ROUTINE INQUIRIES",
      description: "Have any general questions and/or information requests? You can request a ticket in the official Army Special Operations Command communications (Discord) server.",
      duration: "24-48h",
      icon: Clock,
    },
    {
      title: "Urgent Matters",
      description: "For any emergencies, you may contact a member of Group Staff or the Army Special Forces High Command directly.",
      duration: "3-6h",
      icon: Clock,
    },
  ],

  contactMethods: [
    {
      title: "PRIMARY CHANNEL",
      description: "Discord Server - Army Special Operations Command",
      note: "Like said, use the Army Special Operations Command communications (Discord) server for formal questions and requests by filing a ticket",
      icon: Mail,
    },
    {
      title: "OPSEC Notice",
      description:
        "All communications must follow operational security protocols. Sensitive information should only be discussed through the proper channels.",
      icon: Mail,
    },
  ],

  sections: {
    specialForcesGroups: {
      title: "SPECIAL FORCES GROUPS",
      accentWord: "GROUPS",
      subtitle:
        "Three elite groups, each with dedicated leadership",
    },
    readyToConnect: {
      title: "READY TO CONNECT?",
      secondaryTitle: "GET IN TOUCH",
      subtitle: "Reach out to ASF leadership through official channels",
      motto: "DE OPPRESSO LIBER",
    },
  },
};

export const CoursesConfig = {
  hero: {
    title: "ASF COURSES",
    accentWord: "COURSES",
    subtitle:
      "Training programs for Army Special Forces and USAR personnel. Learn from the best in the most harsh courses there is to offer in USAR.",
    backgroundImage: "images/propaganda/image7.png",
    decorativeBlurs: [
      { position: "top-left", size: "w-96 h-96", opacity: "bg-asf-accent/10" },
      {
        position: "bottom-right",
        size: "w-64 h-64",
        opacity: "bg-asf-accent/5",
      },
    ],
  },

  courseFeatures: [
    {
      icon: Clock,
      title: "Duration",
      value: "1 Week",
      description: "Our courses last a week",
    },
    {
      icon: Users,
      title: "Eligibility",
      value: "All USAR",
      description: "Our courses are open to all of USAR",
    },
    {
      icon: Award,
      title: "Awards",
      value: "Tabs & Badges",
      description: "Earn tabs and/or badges if you complete one of our courses",
    },
  ],

  mainCourse: {
    title: "Cold Weather Leaders Course",
    subtitle:
      "A course designed for personnel across all USAR divisions to earn the prestigious Arctic Tab. This course is known to be one of the most hard courses in all of USAR.",
    icon: Snowflake,
    description:
      "Test your limits in the harshest environments.",
    quickFacts: [
      { icon: Clock, label: "Duration", value: "1 week intensive training" },
      {
        icon: Users,
        label: "Eligibility",
        value: "Open to all of USAR",
      },
      {
        icon: Award,
        label: "Award",
        value: "Arctic Tab",
      },
    ],
    enrollLink: "https://discord.gg/yQSFux5UGb",
  },

  courseOverview: [
    {
      icon: Shield,
      title: "CLASSIFIED TRAINING",
      description: "No further details available.",
    },
    {
      icon: null,
      title: "SECURITY NOTE",
      description:
        "Course participants will receive comprehensive briefings upon enrollment and are required to maintain operational security protocols. Failure to do so will result in a blacklist.",
      highlight: true,
    },
  ],

  sections: {
    courseDetails: {
      title: "COURSE DETAILS",
      accentWord: "DETAILS",
      subtitle:
        "Information related to requirements, training, and benefits",
    },
    entryRequirements: {
      icon: BookOpen,
      title: "ENTRY REQUIREMENTS",
      list: [
        "Active member of any USAR division and must serve 1+ month",
        "Minimum rank of E4B, Corporal",
        "Must have a spotless record for the past 1 month",
        "Must be on desktop and have a working microphone",
      ],
    },
    trainingContent: {
      icon: Target,
      title: "TRAINING CONTENT",
      list: [
        "Advanced cold weather survival techniques",
        "Arctic warfare and tactical operations",
        "Leadership in extreme conditions",
        "Cold weather equipment expertise",
        "Risk management and safety protocols",
      ],
    },
    courseBenefits: [
      {
        icon: Award,
        title: "Arctic Tab",
        description:
          "Be recognized for going through hell",
      },
      {
        icon: Users,
        title: "Leadership Skills",
        description:
          "You will improve your leadership capabilities in arctic environments",
      },
      {
        icon: Snowflake,
        title: "Specialized Operations",
        description: "You will be able to conduct operations in the cold weather",
      },
    ],
  },
};

export const HomeConfig = {
  hero: {
    particles: {
      amount: 25,
      delay: 4,
      driftX: 20,
      driftY: 10,
    },
    backgroundImage: "images/propaganda/image6.png",
    title: {
      line1: "ARMY",
      line2: "SPECIAL FORCES",
    },
    motto: {
      latin: "De Oppresso Liber",
      english: "To Free the Oppressed",
    },
    ctaButtons: [
      { label: "JOIN THE ELITE", link: "/recruitment", primary: true },
      { label: "LEARN MORE", link: "/about", primary: false },
    ],
    scrollText: "SCROLL TO EXPLORE",
  },

  stats: [
    { value: 100, label: "Active Personnel", suffix: "+" },
    { value: 90, label: "Deployments/Operations Hosted", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
  ],

  marqueeTexts: [
    "FREE THE OPPRESSED",
    "STRIKE FIRST",
    "FEAR NO ONE",
    "KILL OR BE KILLED",
    "HONOR IN BLOOD",
    "NO RETREAT",
  ],
  events: [
    {
      id: "deployments",
      title: "DEPLOYMENTS",
      description:
        "Large-scale events made to challenge unit teamwork and communication.",
      action: "Click to view more →",
    },
    {
      id: "mock-operations",
      title: "MOCK OPERATIONS",
      description:
        "Exercises for practicing strategies and planning under certain scenarios.",
      action: "Click to view more →",
    },
    {
      id: "joint-events",
      title: "JOINT EVENTS",
      description:
        "Exercises or large-scale events with allied or other USAR units.",
      action: "Click to view more →",
    },
    {
      id: "breach-trainings",
      title: "BREACH TRAININGS",
      description:
        "Exercises focused on Close-Quarters Combat, entry tactics, and rapid room-clearing drills.",
      action: "Click to view more →",
    },
    {
      id: "wargames",
      title: "WARGAMES",
      description:
        "Similar to Deployments, these are full-scale battles designed to test team strategy and coordination between multiple USAR units.",
      action: "Click to view more →",
    },
    {
      id: "scrimmages",
      title: "SCRIMMAGES",
      description:
        "Competitive engagements to test team tactics, reaction time, and combat readiness against other units or internal squads.",
      action: "Click to view more →",
    },
  ],

  eventDetails: {
    deployments: {
      title: "DEPLOYMENTS",
      description:
        "Deployments are large-scale events where teams are pushed to operate under prolonged pressure, which helps test leadership, coordination, and adaptability in certain environments. For this type of event, the most common maps used are WGRV (Rural-themed), WGBM (Rural-themed with mountains), WGBV (Vietnam), WGBR (Russia), WGBA (Alaska), and WGNY (New York).",
      mechanics: {
        duration: "Typically lasts an hour or two",
        participants: "Can either be all of ASF or specific squads",
        objective:
          "The objective is to typically neutralize opposing forces or securing key objectives, under any guidelines and/or rules provided by the host(s).",
      },
    },
    "mock-operations": {
      title: "MOCK OPERATIONS",
      description:
        "Mock Operations are events based on realistic scenarios and are designed to test a teams decision-making and precision. Mock Operations can vary in size and scope, from small-scale raids to larger coordinated assaults. The type of maps used for this event are custom, meaning any map can be used as long as it is MILSIM-based.",
      mechanics: {
        duration: "Typically lasts an hour or two",
        participants: "Can either be all of ASF or specific squads",
        objective:
          "Depends on the operation plan; Capture or Kill, Hostage Rescue, VIP Transport, Raids, etc.",
      },
    },
    "joint-events": {
      title: "JOINT EVENTS",
      description:
        "Joint Events are events where ASF works alongside allied or external USAR units to practice on certain things such as combat or other activites like base tours.",
      mechanics: {
        duration: "Typically lasts an hour or two",
        participants:
          "Can either be all of ASF or specific squads",
        objective: "It depends on the Joint Event, can be related to combat and eliminating enemy forces or regular activites such as airborne training, breach training, base tours, etc.",
      },
    },
    "breach-trainings": {
      title: "BREACH TRAININGS",
      description:
        "Breach Trainings are sessions where ASF gets trained on rapid entry, room clearing, and CQB techniques.",
      mechanics: {
        duration: "30 minutes or more",
        participants: "Can either be all of ASF or specific squads",
        objective:
          "Depends, though usually the objective is to clear a specific number of killhouses, complete breaching exercises, or hostage rescue.",
      },
    },
    wargames: {
      title: "WARGAMES",
      description:
        "Wargames are similar to Deployments because they're considered large-scale battles, however, they do not grant any awards and are mainly used for practicing against allies or other USAR units. The same maps used for Deployments are used for Wargames as well.",
      mechanics: {
        duration: "Typically lasts an hour or two",
        participants: "Can either be all of ASF or specific squads",
        objective:
          "The objective is to typically neutralize opposing forces or securing key objectives, under any guidelines and/or rules provided by the host(s).",
      },
    },
    scrimmages: {
      title: "SCRIMMAGES",
      description:
        "Scrimmages are events that are competitive yet friendly 5v5 engagements against other USAR units or internal squads to evaluate team performance under pressure.",
      mechanics: {
        duration: "30 minutes or more",
        participants: "Can either be all of ASF or specific squads",
        objective:
          "The objective is to eliminate and win against the opposing team.",
      },
    },
  },

  benefits: [
    {
      title: "Combat Excellence",
      description:
        "Join an elite force recognized for combat excellence.",
    },
    {
      title: "Brotherhood",
      description:
        "Build lifelong bonds with highly trained comrades.",
    },
    {
      title: "Activity",
      description:
        "Events are hosted daily to ensure unit activity, whether combative-related or not.",
    },
    {
      title: "Presidential Recognition",
      description:
        "We are the Presidents favorite. Join and be a part of the best.",
    },
  ],

  privileges: [
    "Access to events such as operations, deployments, and more",
    "Earn the Special Forces tab after passing SFQC",
    "Recognized as part of the elite",
    "Various opportunities to get promoted",
    "Improve your leadership, decision-making, and combat skills",
  ],

  awards: [
    {
      name: "Combat Infantryman Badge",
      image: "images/awards/CIB.png",
      description:
        "Awarded to those that attend an official deployment approved by the Quartermaster Corps.",
      requirements: [
        "Attend a deployment approved by the Quartermaster Corps",
      ],
    },
    {
      name: "Marksmanship Badges",
      image: "images/awards/Marksmanship.png",
      description:
        "Awarded to those who complete the Marksmanship Qualification Course in the John F. Kennedy Special Warfare Center and School. Levels are based on performance: Expert (highest), Sharpshooter (proficient), and Marksman (basic). In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Attend the Marksmanship Qualification Course in the John F. Kennedy Special Warfare Center and School",
        "Achieve a qualifying score or higher",
      ],
    },
    {
      name: "Expert Infantryman Badge",
      image: "images/awards/EIB.png",
      description:
        "Awarded to those who complete the Expert Infantryman Badge Qualification Course in the John F. Kennedy Special Warfare Center and School, which signifies that the individual is decent at combat. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Expert Infantryman Badge Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Pathfinder Badge",
      image: "images/awards/PFB.png",
      description:
        "Awarded to those who complete the Pathfinder Badge Course in the John F. Kennedy Special Warfare Center and School, which tests your skill in navigation and air traffic control. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Pathfinder Badge Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Military Freefall Badge",
      image: "images/awards/MFFB.png",
      description:
        "Awarded to those who complete the Military Freefall Course in the John F. Kennedy Special Warfare Center and School, which signifies that you are a qualified freefall parachutist. You will also earn the title of Jumpmaster after 6 months of service. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Military Freefall Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Special Operations Diver Badge",
      image: "images/awards/Diver.png",
      description:
        "Awarded to those who complete the Combat Diver Qualification Course in the John F. Kennedy Special Warfare Center and School, which signifies that you are qualified enough to conduct underwater operations. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Combat Diver Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Ranger Tab",
      image: "images/awards/RTab.png",
      description:
        "Awarded to those who complete the Ranger School Course in the John F. Kennedy Special Warfare Center and School, which mainly tests your leadership and navigational skills in extreme conditions. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Ranger School Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Instructor Identification Badge",
      image: "images/awards/AIIB.png",
      description:
        "Awarded to those who hold an instructor position and complete the Army Instructor Course in the Recruiting and Retention College. Instructors make up a vital portion of this army, which for such, have been given an identification badge to display their contributions and efforts into pursuing the army forwards. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Be a part of the 10th Special Forces Group",
        "Complete the Army Instructor Course in the Recruiting and Retention College",
      ],
    },
    {
      name: "Army Recruiter Badge",
      image: "images/awards/ARB.png",
      description:
        "Awarded to those who hold an instructor position and complete the Army Recruiter Course in the Recruiting and Retention College. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Be a part of the 10th Special Forces Group",
        "Complete the Army Recruiter Course in the Recruiting and Retention College",
      ],
    },
    {
      name: "Army Master Instructor Identification Badge",
      image: "images/awards/MAIB.png",
      description:
        "Awarded to those who hold an instructor position and complete the Army Master Instructor Course in the Recruiting and Retention College, effectively demonstrating advanced expertise and leadership in developing future army personnel. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Be a part of the 10th Special Forces Group",
        "Complete the Army Master Instructor Course in the Recruiting and Retention College",
      ],
    },
    {
      name: "Army Master Recruiter Badge",
      image: "images/awards/MARB.png",
      description:
        "Awarded to those who hold an instructor position and complete the Army Master Recruiter Course in the Recruiting and Retention College, effectively demonstrating advanced expertise and leadership in developing future army personnel. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Be a part of the 10th Special Forces Group",
        "Complete the Army Master Recruiter Course in the Recruiting and Retention College",
      ],
    },
    {
      name: "Jungle Tab",
      image: "images/awards/JTab.png",
      description:
        "Awarded to those who complete the Jungle Operations Training Course in the 1st Infantry Division, which tests how you operate in jungle and tropical environments. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Jungle Operations Training Course in the 1st Infantry Division",
      ],
    },
    {
      name: "Driver-W Clasp",
      image: "images/awards/Driver.png",
      description:
        "Part of the Driver and Mechanic Badge series, the Driver-W Clasp is awarded to those who complete the Driver-W Course in the 1st Cavalry Division, which tests how you operate wheeled vehicles. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Driver-W Course in the 1st Cavalry Division",
      ],
    },
    {
      name: "Army Parachutist Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/US_Military_Basic_Military_Parachutist_Badge.png",
      description:
        "Awarded to those who complete a course that has an Airborne portion and serves in the unit for 2 consecutive weeks.",
      requirements: [
        "Complete the Special Forces Qualification Course and serve for 2 consecutive weeks in ASF",
      ],
    },
    {
      name: "Army Air Assault Badge",
      image: "images/awards/AAB.png",
      description:
        "Awarded to those who complete the Air Assault Course in the 101st Airborne Division, which tests your abilities on sling-load operations and rappelling. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Air Assault Course in the 101st Airborne Division",
      ],
    },
    {
      name: "Combat Medical Badge",
      image: "images/awards/CMB.png",
      description:
        "Awarded to medical personnel who directly support soldiers under fire.",
      requirements: [
        "Be a part of the 5th Special Forces Group",
        "Attend a deployment with a map that features a medical system approved by the Quartermaster Corps",
        "Heal any injured teammates during the deployment",
      ],
    },
    {
      name: "Expert Field Medical Badge",
      image: "images/awards/EFMB.png",
      description:
        "Awarded to medical personnel who complete the Expert Field Medical Badge in the John F. Kennedy Special Warfare Center and School, which tests your skills in effectively healing an injured soldier. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Be a part of the 5th Special Forces Group",
        "Complete the Expert Field Medical Badge Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "ASF Combat Service Identification Badge",
      image: "images/awards/CSIB.png",
      description:
        "Awarded to those who attend a deployment. Specific deployments may award the soldier a unique patch. The soldier cannot earn the same deployment patch multiple times.",
      requirements: [
        "Attend a deployment approved by the Quartermaster Corps",
      ],
    },
    {
      name: "NATO Combat Service Identification Badge",
      image: "images/awards/NCSIB.png",
      description:
        "Awarded to those who attend a NATO deployment. The soldier cannot earn the same deployment patch multiple times.",
      requirements: [
        "Attend a NATO deployment approved by Army Staff and the Quartermaster Corps",
      ],
    },
    {
      name: "Special Forces Tab",
      image: "images/awards/SFTab.png",
      description:
        "Awarded to those who complete the Special Forces Qualification Course and serve for 2 consecutive weeks after their graduation.",
      requirements: [
        "Complete the Special Forces Qualification Course in the Army Special Forces and serve for 2 consecutive weeks",
      ],
    },
    {
      name: "Arctic Tab",
      image: "images/awards/ATab.png",
      description:
        "Awarded to those who complete the Cold Weather Leaders Course in the Army Special Forces, which ensures you operate effectively in arctic conditions. This course is considered one of the hardest courses in all of USAR. In order to attend the course, you must meet the requirements and be recommended by your superiors.",
      requirements: [
        "Complete the Cold Weather Leaders Course in the Army Special Forces",
      ],
    },
    {
      name: "Antarctica Service Medal",
      image: "images/awards/Antarctica.png",
      description:
        "Awarded to those who attend an expedition to Antarctica without dying once.",
      requirements: [
        "Attend an expedition to Antarctica approved by the Quartermaster Corps and complete it without death",
      ],
    },
    {
      name: "Armed Forces Expeditionary Medal",
      image: "images/awards/AFExp.png",
      description:
        "Automatically given to holders of the Combat Infantryman Badge or Combat Action Badge.",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge by attending a deployment approved by the Quartermaster Corps",
      ],
    },
    {
      name: "Global War on Terrorism Expeditionary Medal",
      image: "images/awards/GWTE.png",
      description:
        "Automatically given to holders of the Combat Infantryman Badge or Combat Action Badge.",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge by attending a deployment approved by the Quartermaster Corps",
      ],
    },
    {
      name: "Armed Forces Service Medal",
      image: "images/awards/AFS.png",
      description:
        "Awarded to those who attend an expedition that doesn't have its own unique medal without dying once.",
      requirements: [
        "Attend an expedition to Mt. Everest approved by the Quartermaster Corps and complete it without death",
      ],
    },
    {
      name: "Army Overseas Service Ribbon",
      image: "images/awards/AOS.png",
      description:
        "Automatically given to holders of the Combat Infantryman Badge or Combat Action Badge.",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge by attending a deployment approved by the Quartermaster Corps",
      ],
    },
    {
      name: "Joint Service Achievement",
      image: "images/awards/JSA.png",
      description:
        "Awarded to those who attend at least fifteen joint events (deployments or operations) with allied forces after 9/10/2023.",
      requirements: [
        "Attend a joint event with an ally or against a foreign enemy which can be deployments, operations, base tours, etc.",
      ],
    },
    {
      name: "Southwest Asia Service Medal",
      image: "images/awards/SWAsia.png",
      description:
        "Awarded to those who attended operations or deployments during the Southwest Asia Campaign. Please check the Campaign Tracker on the QMC Decorations Database to see which campaign is in effect.",
      requirements: [
        "Attend four consecutive deployments approved by the Quartermaster Corps not within the same calendar week",
      ],
    },
    {
      name: "Kosovo Campaign Medal",
      image: "images/awards/Kosovo.png",
      description:
        "Awarded to those who attended operations or deployments during the Kosovo Campaign. Please check the Campaign Tracker on the QMC Decorations Database to see which campaign is in effect.",
      requirements: [
        "Complete three consecutive deployments approved by the Quartermaster Corps not within the same calendar week",
      ],
    },
    {
      name: "Afghanistan Campaign Medal",
      image: "images/awards/Afghanistan.png",
      description:
        "Awarded to those who attended operations or deployments during the Afghanistan Campaign. Please check the Campaign Tracker on the QMC Decorations Database to see which campaign is in effect.",
      requirements: [
        "Complete three consecutive deployments approved by the Quartermaster Corps not within the same calendar week",
      ],
    },
    {
      name: "Iraq Campaign Medal",
      image: "images/awards/Iraq.png",
      description:
        "Awarded to those who attended operations or deployments during the Iraq Campaign. Please check the Campaign Tracker on the QMC Decorations Database to see which campaign is in effect.",
      requirements: [
        "Complete four consecutive deployments approved by the Quartermaster Corps not within the same calendar week",
      ],
    },
    {
      name: "Army Sea Duty Medal",
      image: "images/awards/SeaDuty.png",
      description:
        "Awarded to those who participated in operations or deployments during the Army Sea Duty Campaign. Please check the Campaign Tracker on the QMC Decorations Database to see which campaign is in effect.",
      requirements: [
        "Complete three consecutive deployments approved by the Quartermaster Corps not within the same calendar week",
      ],
    },
  ],
};

export const NotFoundConfig = {};

export const FooterConfig = {
  brand: {
    logo: "images/logos/ASF.png",
    name: "Army Special Forces",
    motto: "De Oppresso Liber",
    subtitle: "To Free the Oppressed",
    description:
      "Elite warriors dedicated to unconventional warfare, special reconnaissance, and counter-terrorism operations worldwide.",
    websiteCredits: ["@getr1ghtdawg", "@notorioussoh"],
  },

  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/courses", label: "Courses" },
    { href: "/propaganda", label: "Propaganda" },
    { href: "/contact", label: "Contact" },
  ],

  externalLinks: [
    {
      href: "https://discord.com/invite/yQSFux5UGb",
      label: "Discord Server",
      external: true,
    },
    {
      href: "https://www.roblox.com/communities/3235972/Army-Special-Forces#!/affiliates",
      label: "ROBLOX Group",
      external: true,
    },
    {
      href: "https://github.com/getrightdawg/specialforces.ddns.net/tree/main",
      label: "Source Code",
      external: true,
    },
  ],

  connectBox: {
    title: "MISSION READY",
    description:
      "Serving with honor, courage, and unwavering commitment to excellence in every mission.",
  },

  footerBottom: {
    copyright: "© 2025 Army Special Forces. All rights reserved.",
    warning: "Unauthorized reproduction prohibited",
    motto: "Excellence • Honor • Courage",
    pulseDot: true,
  },
};

export const NavigationConfig = {
  logo: {
    src: "images/logos/Badge.png",
    alt: "ASF Logo",
    title: "ARMY SPECIAL FORCES",
    subtitle: "De Oppresso Liber",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/courses", label: "Courses" },
    { href: "/propaganda", label: "Propaganda" },
    { href: "/contact", label: "Contact" },
  ],
  ctaButton: {
    href: "/recruitment",
    label: "JOIN NOW",
    primary: true,
  },
};

export const PropagandaConfig = {
  hero: {
    title: "ASF PROPAGANDA",
    accentWord: "PROPAGANDA",
    subtitle:
      "Check out our community. Witness the achievements of the Army Special Forces and find reasons to join.",
    backgroundImage: "images/propaganda/image3.png",
  },

  stats: [
    { label: "Image Assets", icon: Image, valueKey: "galleryImages" },
    { label: "Video Assets", icon: Play, valueKey: "videos" },
  ],

  missionHighlights: [
    {
      videoSrc: "videos/highlight1.mp4",
      title: "Army Staff Wargames Clutch",
      description:
        "A video showing an individual named xRed_v getting flanked from both sides of a compound on WGRV, then proceeding to clutch up and win the wargames match against the 101st Airborne Division.",
    },
  ],

  galleryImages: [
    { src: "images/propaganda/image1.png", credit: "Credits: Durrryz" },
    { src: "images/propaganda/image2.png", credit: "Credits: 616Mythic" },
    {
      src: "images/propaganda/image3.png",
      credit: "Credits: ReflectionsOfSilence",
    },
    { src: "images/propaganda/image4.png", credit: "Credits: CaptainZingers" },
    { src: "images/propaganda/image5.png", credit: "Credits: WillT1422" },
    {
      src: "images/propaganda/image6.png",
      credit: "Credits: spectreflame1, mintyfreshoreo",
    },
    { src: "images/propaganda/image7.png", credit: "Credits: @teleportedduck" },
    {
      src: "images/propaganda/image8.png",
      credit: "Credits: mpiskotogrooooo, ElijahIWilliams",
    },
    { src: "images/propaganda/image9.png", credit: "Credits: @lucifer712" },
    { src: "images/propaganda/image10.png", credit: "Credits: kpel1111" },
    { src: "images/propaganda/image11.png", credit: "Credits: N/A" },
    { src: "images/propaganda/image12.png", credit: "Credits: ChenShohry1" },
    { src: "images/propaganda/image13.png", credit: "Credits: ChenShohry1" },
    { src: "images/propaganda/image14.png", credit: "Credits: ChenShohry1" },
    { src: "images/propaganda/image15.png", credit: "Credits: kazxrevenge" },
    { src: "images/propaganda/image16.png", credit: "Credits: kazxrevenge" },
    {
      src: "images/propaganda/image17.png",
      credit: "Credits: the_rainbowman63",
    },
    {
      src: "images/propaganda/image18.png",
      credit: "Credits: the_rainbowman63, @seijins, @uyjd",
    },
    {
      src: "images/propaganda/image19.png",
      credit: "Credits: @teleportedduck",
    },
    {
      src: "images/propaganda/image20.png",
      credit: "Credits: anfrarc",
    },
  ], 

  videos: [
    {
      src: "videos/asf1.mp4",
      credit: "mintyfreshoreo, C6mpact",
      quote: "Enter the room. Own the fight.",
    },
    {
      src: "videos/asf2.mp4",
      credit: "C6mpact",
      quote: "No fear. No mercy. No escape.",
    },
    {
      src: "videos/asf3.mp4",
      credit: "mintyfreshoreo, C6mpact",
      quote: "Hunt them down.",
    },
    {
      src: "videos/asf4.mp4",
      credit: "@kaylenyy",
      quote: "Perfection is real here.",
    },
    {
      src: "videos/asf5.mp4",
      credit: "mintyfreshoreo, C6mpact",
      quote: "Every second. Every shot. Every move counts.",
    },
    {
      src: "videos/asf6.mp4",
      credit: "mintyfreshoreo",
      quote: "Do you have what it takes?",
    },
    {
      src: "videos/asoc1.mp4",
      credit: "mintyfreshoreo",
      quote:
        "They will find you. Pray, you're going straight to the afterlife.",
    },
  ],

  sections: {
    missionHighlights: {
      title: "MISSION HIGHLIGHTS",
      accentWord: "HIGHLIGHTS",
      subtitle:
        "Achievements showcasing Special Forces excellence",
    },
    visualGallery: {
      title: "VISUAL GALLERY",
      accentWord: "GALLERY",
      subtitle:
        "Imagery capturing the essence of Army Special Forces operations and culture",
      decorativeBlur: {
        position: "top-right",
        size: "w-64 h-64",
        opacity: "bg-asf-accent/5",
      },
    },
    videoGallery: {
      title: "VIDEO GALLERY",
      accentWord: "GALLERY",
      subtitle:
        "Video content showcasing Army Special Operations Command Special Forces training, operations, and capabilities",
    },
  },

  hallOfFame: {
    title: "HALL OF FAME",
    accentWord: "FAME",
    subtitle: "Celebrating the most outstanding members in ASF history",
    previewLength: 100,
    fame: [
      {
        username: "MichaelMightBite",
        robloxId: 1242059834,
        expanded: false,
        description:
          "was a highly respected Commander of ASF. He was a strong leader who engaged regularly with members, listened to their feedback, and acted on it with wisdom. Under his leadership, ASF stayed on its feet without dissolving and remained well organized.",
      },
      {
        username: "Tvctical",
        robloxId: 88803732,
        expanded: false,
        description:
          "was among the best Sergeant Majors of ASF. Renowned for his reliability and trustworthiness, he carried out duties quickly and efficiently, earning rapid promotions. As ASOC HICOM, he kept the community entertained and active by organizing events and implementing significant changes, ensuring ASF’s stability and growth.",
      },
      {
        username: "xRed_v",
        robloxId: 772617327,
        expanded: false,
        description:
          "was known as one of ASF’s finest Sergeant Majors. A strong leader and attentive listener, he consistently acted with fairness and composure. His leadership revived struggling groups, brought them back to peak activity, and introduced creative improvements that showed his dedication to both ASF and its members.",
      },
      {
        username: "NasDaily_Alpha",
        robloxId: 553357381,
        expanded: false,
        description:
          "was regarded as one of the greatest Commanders of ASF. His outstanding leadership skills kept the group organized, active, and stable. Through his motivation and vision, he built a legacy that left a lasting mark on ASF’s history.",
      },
      {
        username: "616Mythic",
        robloxId: 3820566083,
        expanded: false,
        description:
          "has been serving in ASF since August 22, 2024, up until August 22, 2025. He quickly became one of ASF's most impactful members. Recognized multiple times as Personnel of the Week, he was appointed as ASF’s Head Developer, creating games and maps for the community, including for the CWLC. Ever since his enlistment, he has been recognized across the ASF community for his dedication, creativity, and unwavering hard work.",
      },
    ],
  },
};

export const RecruitmentConfig = {
  hero: {
    title: "JOIN THE ELITE",
    accentWord: "ELITE",
    subtitle:
      "Thinking about joining? Here's what you need to know to become part of the Army Special Forces.",
    backgroundImage: "images/propaganda/image11.png",
    readySection: {
      title: "YOUR JOURNEY STARTS HERE",
      subtitle: "Show true dedication and become part of the elite",
      motto: "DE OPPRESSO LIBER",
    },
  },

  requirements: [
    {
      title: "Account Age",
      text: "Both your Roblox and Discord account must be at least 3 months old.",
      icon: Clock,
    },
    {
      title: "Clean Record",
      text: "You must not have any recent dishonorable discharges within ASF.",
      icon: Shield,
    },
    {
      title: "Blacklist Status",
      text: "You must not be blacklisted from the Army Special Operations Command.",
      icon: CheckCircle,
    },
    {
      title: "Account Status",
      text: "You must not use an alternate account and your Roblox account must have its inventory on public.",
      icon: Users,
    },
  ],

  processSteps: [
    {
      step: "1",
      title: "Selection/Application Process",
      text: "Attend an ASF (group-restricted) selection or apply through applications in the #open-positions forum within the USAR community server.",
    },
    {
      step: "2",
      title: "Phase Role Request",
      text: "Once you pass your selection or application, you will need to file a phase role request to be enrolled in SFQC within the ASF server (you might need to undergo a quick combat evaluation before requesting your phase roles if you passed an application).",
    },
    {
      step: "3",
      title: "SFQC Training",
      text: "After you receive your roles, you will be placed in SFQC. You will need to complete all 3 course phases designed for your specified group and/or company to graduate and become a Special Forces member.",
    },
  ],

  faqs: [
    {
      question: "How long does SFQC take?",
      answer:
        "The Special Forces Qualification Course is divided into 3 phases for each group. You are required to complete the pipeline under a week. Failure to do so, without notice, will result in a removal from the course.",
    },
    {
      question: "Is SFQC hard?",
      answer:
        "As long as you follow simple instructions and have a decent level of combat skill, you will pass it with flying colors.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Prior MILSIM or combat experience is required. SFQC is a course, not a school, you will be evaluated on combat multiple times. Dedication and discipline are expected.",
    },
    {
      question: "What are the reasons to be removed from SFQC?",
      answer:
        "Common reasons can be failing one of the courses, failing to complete the pipeline within 7 days after passing a selection/application, caught cheating in one of the courses, resulting in a blacklist, and lastly begging or direct messaging any staff/instructor to host a course.",
    },
    {
      question: "Can I attempt to join ASF while being in another unit?",
      answer:
        "If you are in a unit, you are able to attend any ASF selections or apply through applications and pass them, however, you must discharge once you graduate in SFQC.",
    },
    {
      question: "What if I don't have time to complete SFQC?",
      answer:
        "If you are in SFQC and you don't have time to complete it, you can contact any available Company Staff for an extension (Leave of Absence) or for a formal removal from the course.",
    },
    {
      question: "What does each phase in SFQC have?",
      answer:
        "It depends on the group and/or company you're joining. You will receive more information once you're in SFQC.",
    },
  ],
};

export default {
  AboutConfig,
  ContactConfig,
  CoursesConfig,
  HomeConfig,
  NotFoundConfig,
  FooterConfig,
  NavigationConfig,
  PropagandaConfig,
  RecruitmentConfig,
};
