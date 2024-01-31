import { reactive } from "vue";

export const store =reactive ({
    socials: [
        {
            app: "Facebook",
            color: "#3744B3",
            icon: "fa-brands fa-facebook"
        },
        {
            app: "Twitter",
            color: "#7CC6C5",
            icon: "fa-brands fa-twitter"
        },
        {
            app: "Instagram",
            color: "#A329A8",
            icon: "fa-brands fa-instagram"
        },
        {
            app: "Linkedin",
            color: "#1164C2",
            icon: "fa-brands fa-linkedin"
        },
        {
            app: "Pinterest",
            color: "#B61220",
            icon: "fa-brands fa-pinterest"
        }
    ],
});