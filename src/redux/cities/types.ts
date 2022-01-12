export type City = {
    id: number;
    name: string;
};

export type Weather = {
    iconId: number;
    description: string;
    temp: number;
    sunrise: number;
    sunset: number;
};

export type SavedCity = {
    id: number;
    name: string;
    weather: Weather;
};
