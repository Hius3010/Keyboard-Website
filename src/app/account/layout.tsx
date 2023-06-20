import { Footer } from "@/components";

export const metadata = {
  title: "Testing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
    bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8z6lAIFNDZPt_a1IS5RWvk_HT-XtMIXR-BA&usqp=CAU')] 
    bg-cover"
    >
      {children}
      <Footer />
    </div>
  );
}
