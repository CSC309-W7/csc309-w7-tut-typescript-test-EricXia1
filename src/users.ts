import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: 24 },
  { name: "Jim", age: 25 },
];

function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.age === "number"
  );
}

function isUserArray(arr: any): arr is User[] {
  return Array.isArray(arr) && arr.every(isUser);
}

export function getUsersData(): User[] {
  if (isUserArray(apiResponse)) {
    return apiResponse;
  }
  throw new Error("apiresponse failed type check");
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}