interface ArticleItem {
    id?: number,
    date: string,
    image: string,
    fallbackImage: string,
    altText: string,
    mainTag: string,
    mainTagColor: string,
    mainTagBackgroundColor: string,
    minutesRead: number,
    title: string,
    intro: string,
    subtitleFirst: string,
    paragraphFirst: string,
    imageSecond: string,
    fallbackImageSecond: string,
    altTextSecond: string,
    subtitleSecond: string,
    paragraphSecond: string,
    publisher: string
}

interface DriverItem {
    id: number,
    image: string,
    raceNumber: number,
    points: number,
    wins: number,
    team: string,
    teamLogo: string,
    firstName: string,
    lastName: string,
    //driverLogo: string | null,
    //driverWebsite: string | null,
    age: number,
    experience: number,
    worldChampionships: number,
    fastestLaps: number,
    polePositions: number,
    nationality: string,
    countryFlag: string,
    twitter: string | null,
    facebook: string | null,
    instagram: string | null
}

interface TeamItem {
    id: number,
    team: string,
    teamName: string,
    teamLogo: string,
    points: number,
    wins: number,
    podiums: number,
    firstDriver: string,
    firstDriverName: string,
    secondDriver: string,
    secondDriverName: string,
    originCountry: string,
    firstEntry: number,
    worldChampionships: number,
    fastestLaps: number,
    polePositions: number,
    twitter: string | null,
    facebook: string | null,
    instagram: string | null
}

interface GrandPrixItem {
    id: number,
    circuitImage: string,
    circuitName: string,
    headerImage: string,
    country: string,
    flag: string,
    gpWeekend: string,
    gpDate: string,
    gpHour: string,
    timeUntilGP: string,
}

export type { ArticleItem, DriverItem, TeamItem, GrandPrixItem }