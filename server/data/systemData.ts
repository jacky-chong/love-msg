export const templates = {
    Birthday: [
        {
            id: "b6f91a23-84c2-4c89-9e15-5a4d2f38d1f7",
            title: "Birthday Gift",
            picture: "/media/birthday-tab/birthday.png",
            route: "/birthday",
        },
        {
            id: "b6f91a23-84c2-4c89-9e15-5a4d2f38d101",
            title: "Birthday Lover",
            picture: "/media/birthday-tab/loverBirthday.png",
            route: "/birthday",
        },
        {
            id: "b6f91a23-84c2-4c89-9e15-5a4d2f38d102",
            title: "Birthday Family",
            picture: "/media/birthday-tab/familyBirthday.png",
            route: "/birthday",
        },
        {
            id: "b6f91a23-84c2-4c89-9e15-5a4d2f38d103",
            title: "Birthday Anime",
            picture: "/media/birthday-tab/animeBirthday.png",
            route: "/birthday",
        },
    ],
};

export const templateContent: Record<
    string,
    { image: string; audio: string; video: string; previewRoute: string }
> = {
    "b6f91a23-84c2-4c89-9e15-5a4d2f38d1f7": {
        image: "/media/birthday-tab/birthday.png",
        audio: "../music/ch/just_love_you.mp3",
        video: "../media/birthday-tab/ballonConfettiExpo.mp4",
        previewRoute: "/preview",
    },
     "b6f91a23-84c2-4c89-9e15-5a4d2f38d101": {
        image: "/media/birthday-tab/loverBirthday.png",
        audio: "../music/ch/just_love_you.mp3",
        video: "../media/birthday-tab/loverBirthday.mp4",
        previewRoute: "/preview",
    },
     "b6f91a23-84c2-4c89-9e15-5a4d2f38d102": {
        image: "/media/birthday-tab/familyBirthday.png",
        audio: "../music/ch/just_love_you.mp3",
        video: "../media/birthday-tab/familyBirthday.mp4",
        previewRoute: "/preview",
    },
     "b6f91a23-84c2-4c89-9e15-5a4d2f38d103": {
        image: "/media/birthday-tab/animeBirthday.png",
        audio: "../music/ch/just_love_you.mp3",
        video: "../media/birthday-tab/animeBirthday.mp4",
        previewRoute: "/preview",
    },
};
