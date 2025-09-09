export const templates = {
    Birthday: [
        {
            id: "b6f91a23-84c2-4c89-9e15-5a4d2f38d1f7",
            title: "Birthday template",
            picture: "/images/birthday-tab/birthday.png",
            route: "/birthday",
        },
    ],
};

export const templateContent: Record<
    string,
    { image: string; audio: string; video: string; previewRoute: string }
> = {
    "b6f91a23-84c2-4c89-9e15-5a4d2f38d1f7": {
        image: "/images/birthday-tab/birthday.png",
        audio: "../music/ch/just_love_you.mp3",
        video: "../images/birthday-tab/ballonConfettiExpo.mp4",
        previewRoute: "/preview",
    },
};
