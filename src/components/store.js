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
    review:[
        {
            title:"Good Place",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
            userName:"Tobias May",
            userType:"UI/Ux Designer",
            userImage:"t1.png",
            stars:4
        },
        {
            title:"Great Place",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
            userName:"Anna Brown",
            userType:"UI/Ux Designer",
            userImage:"t2.png",
            stars:5
        },
        {
            title:"Good Place",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
            userName:"Charlotte Miller",
            userType:"UI/Ux Designer",
            userImage:"t3.png",
            stars:4
        },
        {
            title:"Great Place",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
            userName:"Sophia Jones",
            userType:"UI/Ux Designer",
            userImage:"t4.png",
            stars:5
        },
    ]
});