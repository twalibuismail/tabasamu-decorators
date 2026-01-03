import { Pricing } from "@/components/pricing";
import { title } from "@/components/primitives";

export const PricingSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="text-center mb-10">
                <h1 className={title({ color: "rosegold" })}>Vifurushi Vyetu</h1>
                <p className="text-default-500 mt-4">Chagua kifurushi kinachoendana na bajeti na ukubwa wa sherehe yako.</p>
            </div>

            {/* Hapa tunaweka component ya Vifurushi tuliyotengeneza */}
            <Pricing />
        </div>
    );
};
