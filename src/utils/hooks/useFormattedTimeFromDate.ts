import { useMemo } from "react";

const useFormattedTimeFromDate = (date: Date = new Date()) =>
    useMemo(() => {
        const rawHour = date.getHours();
        const rawMinute = date.getMinutes();

        const hour = String(rawHour).replace(/\b(\d)\b/, "0$1");
        const minute = String(rawMinute).replace(/\b(\d)\b/, "0$1");

        return { hour, minute };
    }, [date]);

export default useFormattedTimeFromDate;
