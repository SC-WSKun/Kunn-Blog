import localFont from "next/font/local";

const aestera = localFont({
    src: "./fonts/Aestera.ttf",
    variable: "--font-aestera",
    weight: "100 900",
})

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export { aestera, geistMono, geistSans }