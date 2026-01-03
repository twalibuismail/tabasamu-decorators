import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const AboutSection = () => {
    const handleClick = (e: any, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center gap-12 py-8 md:py-10">

            {/* 1. Kichwa cha Ukurasa */}
            <div className="text-center max-w-2xl">
                <h1 className={title({ color: "rosegold" })}>Kuhusu Tabasamu</h1>
                <p className="text-default-500 mt-4 text-lg">
                    Zaidi ya wapambaji, sisi ni watengenezaji wa kumbukumbu zako bora.
                </p>
            </div>

            {/* 2. Sehemu ya Historia (Picha Kushoto, Maelezo Kulia) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                <div className="w-full">
                    <Image
                        isZoomed
                        alt="Timu ya Tabasamu ikifanya kazi"
                        src="/about-team.png"
                        className="w-full object-cover h-[400px] rounded-2xl shadow-2xl"
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Safari Yetu</h2>
                    <p className="text-default-600 leading-relaxed">
                        Tabasamu Decorators ilianza kama ndoto ndogo ya kupenda urembo na mpangilio.
                        Leo, tumekuwa chaguo namba moja kwa wakazi wa Dar es Salaam wanaotafuta
                        ukamilifu, umaridadi, na rangi za kisasa kama <span className="text-[#B76E79] font-bold">Rose Gold</span>.
                    </p>
                    <p className="text-default-600 leading-relaxed">
                        Tunaamini kila sherehe ina hadithi yake. Sisi hatuweki tu maua na vitambaa;
                        tunasikiliza ndoto yako na kuichora kwenye ukumbi.
                    </p>

                    {/* Takwimu Fupi */}
                    <div className="flex gap-8 pt-4">
                        <div>
                            <p className="text-3xl font-bold text-[#B76E79]">5+</p>
                            <p className="text-sm text-gray-500">Miaka ya Uzoefu</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#B76E79]">200+</p>
                            <p className="text-sm text-gray-500">Harusi & Matukio</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Misingi Yetu (Values) */}
            <div className="w-full mt-10">
                <h2 className="text-2xl font-bold text-center mb-8">Kwa Nini Utuchague?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
                        <CardBody className="text-center py-8">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-bold text-lg mb-2">Ubunifu wa Kipekee</h3>
                            <p className="text-gray-500 text-sm">Haturudii design. Kila harusi ni mpya na ya kipekee kwako.</p>
                        </CardBody>
                    </Card>

                    {/* Card 2 */}
                    <Card className="bg-[#B76E79] text-white border-none shadow-xl transform md:-translate-y-4">
                        <CardBody className="text-center py-8">
                            <div className="text-4xl mb-4">💎</div>
                            <h3 className="font-bold text-lg mb-2">Vifaa vya Kisasa</h3>
                            <p className="text-white/90 text-sm">Tunatumia viti, meza na maua ya daraja la kwanza (Grade A).</p>
                        </CardBody>
                    </Card>

                    {/* Card 3 */}
                    <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
                        <CardBody className="text-center py-8">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-bold text-lg mb-2">Tunaenda na Wakati</h3>
                            <p className="text-gray-500 text-sm">Tunazingatia muda na tunakupa ushauri wa bure wa kitaalamu.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>

            {/* CTA Mwisho */}
            <div className="mt-8 text-center">
                <Button
                    as={Link}
                    href="#mawasiliano"
                    onClick={(e) => handleClick(e, "#mawasiliano")}
                    className="bg-[#B76E79] text-white font-bold px-8"
                    size="lg"
                    radius="full"
                    variant="shadow"
                >
                    Fanya Kazi Nasi
                </Button>
            </div>

        </div>
    );
};
