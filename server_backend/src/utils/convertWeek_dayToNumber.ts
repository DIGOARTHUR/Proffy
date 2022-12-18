export default function convertWeek_dayToNumber(week_day: string) {
  
    interface _week_day {
        "domingo": string;
        "segunda-feira": string;
        "terça-feira": string;
        "quarta-feira": string;
        "quinta-feira": string;
        "sexta-feira": string;
        "sábado": string;
    }
    const week_day_Options = {
        "domingo": 0,
        "segunda-feira": 1,
        "terça-feira": 2,
        "quarta-feira": 3,
        "quinta-feira": 4,
        "sexta-feira": 5,
        "sábado": 6,
    }

    const option = week_day.replace(" ", "-").toLowerCase()

    const week_dayNumber = week_day_Options[option as keyof _week_day]

    return week_dayNumber;
}