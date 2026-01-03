import { ContactForm } from "@/components/contact";
import { title } from "@/components/primitives";

export const ContactSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="text-center mb-8">
                <h1 className={title({ color: "rosegold" })}>Wasiliana Nasi</h1>
                <p className="text-default-500 mt-2">
                    Tuko hapa kukusaidia kufanikisha sherehe yako.
                </p>
            </div>

            {/* Weka Form hapa */}
            <ContactForm />

        </div>
    );
};
