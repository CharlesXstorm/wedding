import React from "react";
import { Event, generateICS } from "@/utils/calender";

const DateButton = () => {
  const saveDate = async () => {
    try {
      const icsFile: any = await generateICS(Event);
      const blob = new Blob([icsFile], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "event.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.log("Unable to generate event file:",error);
    }
  };
  return (
    <button type="button" onClick={saveDate} className="datebtn">
      save the date.
    </button>
  );
};

export default DateButton;
