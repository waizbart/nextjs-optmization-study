export async function getRandomUser(): Promise<{
    name: string;
    email: string;
    avatar: string;
}> {
    const randomUser = await fetch('https://randomuser.me/api/').then(res => res.json());
    return {
        name: randomUser.results[0].name.title + ' ' + randomUser.results[0].name.first + ' ' + randomUser.results[0].name.last,
        email: randomUser.results[0].email,
        avatar: randomUser.results[0].picture.large
    };
}