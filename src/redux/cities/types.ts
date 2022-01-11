export type City = {
    id: number;
    name: string;
}

export type Weather = {
    iconType: string;
    description: string;
    temp: number;
    sunrise: string;
    sunset: string;
}

export type SavedCity = {
    id: number;
    name: string;
    weather: Weather;
}