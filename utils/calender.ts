import { createEvent, DateTime, EventStatus } from "ics";

interface eventProps {
  start: DateTime;
  duration: { hours: number; minutes: number };
  title: string;
  description: string;
  location: string;
  url: string;
  geo?: { lat: number; lon: number };
  categories: Array<string>;
  status?: EventStatus | undefined;
  busyStatus?: "TENTATIVE" | "FREE" | "BUSY" | "OOF" | undefined;
  organizer?: { name: string; email: string };
}

export const Event: eventProps = {
  start: [2025, 1, 4, 8, 30],
  duration: { hours: 9, minutes: 0 },
  title: "Clement and Perky",
  description: "This event is for the wedding ceremony of Clement and Perky",
  location: "Onitsha, Anambra, Nigeria",
  url: "https://example.com",
  geo: { lat: 6.5244, lon: 3.3792 },
  categories: ["Wedding"],
  status: "CONFIRMED",
  busyStatus: "FREE",
};

export const generateICS = (event: eventProps) => {
  return new Promise((resolve, reject) => {
    createEvent(event, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};
