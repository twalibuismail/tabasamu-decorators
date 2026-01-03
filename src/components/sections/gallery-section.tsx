import { Gallery } from "@/components/gallery";
import { title } from "@/components/primitives";

export const GallerySection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="text-center mb-8">
                <h1 className={title({ color: "rosegold" })}>Matunzio Yetu</h1>
                <p className="text-default-500 mt-2">
                    Picha za matukio mbalimbali tuliyopamba kwa upendo na ubunifu.
                </p>
            </div>

            {/* Component ya Gallery */}
            <Gallery />
        </div>
    );
};
