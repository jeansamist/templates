export type Employee = {
  id: number;
  uid: string;
  fullName: string;
  avatar: string;
  grade: "Lead" | "Sr" | "Jr";
  jobTitle: string;
  joinDate: Date;
  salary: number;
  status: "Active" | "On Leave" | "Resigned";
};

export const employees: Employee[] = [
  {
    id: 1,
    uid: "EMP-001",
    fullName: "Alice Johnson",
    avatar: "https://tapback.co/api/avatar/Alice%20Johnson",
    grade: "Lead",
    jobTitle: "Engineering Manager",
    joinDate: new Date("2019-03-15"),
    salary: 115000,
    status: "Active",
  },
  {
    id: 2,
    uid: "EMP-002",
    fullName: "Michael Chen",
    avatar: "https://tapback.co/api/avatar/Michael%20Chen",
    grade: "Sr",
    jobTitle: "Senior Backend Engineer",
    joinDate: new Date("2020-07-22"),
    salary: 98000,
    status: "Active",
  },
  {
    id: 3,
    uid: "EMP-003",
    fullName: "Sofia Martinez",
    avatar: "https://tapback.co/api/avatar/Sofia%20Martinez",
    grade: "Sr",
    jobTitle: "Product Designer",
    joinDate: new Date("2021-01-10"),
    salary: 90000,
    status: "On Leave",
  },
  {
    id: 4,
    uid: "EMP-004",
    fullName: "David Brown",
    avatar: "https://tapback.co/api/avatar/David%20Brown",
    grade: "Jr",
    jobTitle: "Frontend Developer",
    joinDate: new Date("2023-05-02"),
    salary: 65000,
    status: "Active",
  },
  {
    id: 5,
    uid: "EMP-005",
    fullName: "Emma Wilson",
    avatar: "https://tapback.co/api/avatar/Emma%20Wilson",
    grade: "Lead",
    jobTitle: "Head of Marketing",
    joinDate: new Date("2018-11-30"),
    salary: 120000,
    status: "Active",
  },
  {
    id: 6,
    uid: "EMP-006",
    fullName: "Liam Patel",
    avatar: "https://tapback.co/api/avatar/Liam%20Patel",
    grade: "Sr",
    jobTitle: "DevOps Engineer",
    joinDate: new Date("2020-09-14"),
    salary: 95000,
    status: "Active",
  },
  {
    id: 7,
    uid: "EMP-007",
    fullName: "Olivia Dubois",
    avatar: "https://tapback.co/api/avatar/Olivia%20Dubois",
    grade: "Jr",
    jobTitle: "QA Analyst",
    joinDate: new Date("2022-04-18"),
    salary: 60000,
    status: "On Leave",
  },
  {
    id: 8,
    uid: "EMP-008",
    fullName: "Noah Schmidt",
    avatar: "https://tapback.co/api/avatar/Noah%20Schmidt",
    grade: "Sr",
    jobTitle: "Data Analyst",
    joinDate: new Date("2021-06-07"),
    salary: 88000,
    status: "Active",
  },
  {
    id: 9,
    uid: "EMP-009",
    fullName: "Ava Rossi",
    avatar: "https://tapback.co/api/avatar/Ava%20Rossi",
    grade: "Lead",
    jobTitle: "Product Manager",
    joinDate: new Date("2017-08-25"),
    salary: 110000,
    status: "Resigned",
  },
  {
    id: 10,
    uid: "EMP-010",
    fullName: "Ethan Williams",
    avatar: "https://tapback.co/api/avatar/Ethan%20Williams",
    grade: "Jr",
    jobTitle: "Support Engineer",
    joinDate: new Date("2023-01-12"),
    salary: 58000,
    status: "Active",
  },
];
