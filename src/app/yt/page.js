import YtClient from "./yt-client";

export const metadata = {
  title: "Online Weight Loss Intake & Assessment | Telehealth FX",
  description: "Complete our online medical intake to connect with licensed US medical providers for physician-supervised GLP-1 weight loss treatment delivered home.",
  alternates: {
    canonical: 'https://telehealthfx.com/yt/',
  },
  openGraph: {
    title: "Online Weight Loss Intake & Assessment | Telehealth FX",
    description: "Complete our online medical intake to connect with licensed US medical providers for physician-supervised GLP-1 weight loss treatment delivered home.",
    url: 'https://telehealthfx.com/yt/',
    siteName: 'Telehealth FX',
  },
};

export default function Page() {
  return <YtClient />;
}
