import { Accordion, AccordionItem } from "@heroui/accordion";

export const FAQSection = () => {
    const faqs = [
        {
            question: "Je, mnafanya aina gani za matukio?",
            answer: "Tunafanya mapambo ya matukio yote ikiwa ni pamoja na Harusi, Mahafali, Birthday, Send-off, Kitchen Party, na Matukio ya Biashara. Tunaweza kupamba matukio yote kutoka ndogo hadi makubwa sana."
        },
        {
            question: "Je, mnapanga matukio nje ya Dar es Salaam?",
            answer: "Ndiyo! Tunafanya kazi Dar es Salaam na maeneo yake. Kwa matukio nje ya Dar es Salaam, tafadhali wasiliana nasi ili tujadili gharama za usafiri."
        },
        {
            question: "Ni muda gani kabla ya tukio ninapaswa kuweka booking?",
            answer: "Tunapendekeza kuweka booking angalau wiki 2-4 kabla ya tukio lako. Hata hivyo, kwa matukio makubwa kama harusi, ni bora kuweka booking miezi 2-3 mapema ili kuhakikisha unapatikana."
        },
        {
            question: "Je, mnatoa huduma ya consultation?",
            answer: "Ndiyo! Tunatoa consultation ya bure ili kujadili maono yako, chaguo za rangi, na vifurushi vyetu. Unaweza kutupigia simu au kutuma ujumbe kupanga mkutano."
        },
        {
            question: "Je, kifurushi kinajumuisha nini?",
            answer: "Kila kifurushi kinajumuisha vitu tofauti kulingana na mahitaji yako. Kifurushi cha msingi kinajumuisha mapambo ya meza kuu na viti vya VIP. Vifurushi vikubwa vinajumuisha ukumbi mzima, maua, taa, na huduma za uratibu wa tukio. Wasiliana nasi kwa maelezo kamili."
        },
        {
            question: "Je, mnatumia maua ya asili au ya bandia?",
            answer: "Tunatoa chaguo zote mbili! Vifurushi vyetu vya bei nafuu vinatumia maua ya bandia ya ubora wa juu (Grade A), wakati vifurushi vya VIP vinaweza kujumuisha maua ya asili kulingana na mapendeleo yako."
        },
        {
            question: "Je, mnaweza kubadilisha rangi za mapambo?",
            answer: "Kabisa! Ingawa tunapendekeza rangi zetu za Rose Gold na Silver, tunaweza kubadilisha rangi zozote kulingana na theme ya tukio lako. Tutajadili chaguo zako wakati wa consultation."
        },
        {
            question: "Je, malipo yanafanywa vipi?",
            answer: "Tunahitaji malipo ya awali (deposit) ya 50% wakati wa kuweka booking, na salio linalipiwa siku 3 kabla ya tukio. Tunakubali malipo kupitia M-Pesa, benki, au cash."
        },
        {
            question: "Je, mnatoa huduma ya kupanga na kuondoa mapambo?",
            answer: "Ndiyo! Timu yetu inakuja kuweka mapambo kabla ya tukio na kuyaondoa baada ya tukio. Muda wa kuweka unategemea ukubwa wa tukio, lakini kwa kawaida tunachukua masaa 2-4."
        },
        {
            question: "Je, kuna gharama za ziada?",
            answer: "Bei yetu inajumuisha kila kitu kilichotajwa kwenye kifurushi. Gharama za ziada zinaweza kutokea tu kwa mahitaji maalum au mabadiliko ya dakika za mwisho. Tutakufahamisha mapema kama kuna gharama yoyote ya ziada."
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Maswali Yanayoulizwa Mara kwa Mara
                </h2>
                <p className="text-default-600 text-lg">
                    Jibu la swali lako linaweza kuwa hapa. Kama huna jibu, wasiliana nasi!
                </p>
            </div>

            <Accordion
                variant="splitted"
                selectionMode="multiple"
            >
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        aria-label={faq.question}
                        title={
                            <span className="text-lg font-semibold text-default-900">
                                {faq.question}
                            </span>
                        }
                        className="mb-2"
                    >
                        <p className="text-default-600 leading-relaxed pb-4">
                            {faq.answer}
                        </p>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
