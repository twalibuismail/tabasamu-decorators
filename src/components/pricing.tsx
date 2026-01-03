import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";

export const Pricing = () => {
  // Data za Vifurushi
  const plans = [
    {
      name: "Tulia",
      desc: "Sherehe ndogo (Birthday, Kitchen Party)",
      price: "Shaba",
      features: ["Mapambo ya Meza Kuu", "Kiti cha VIP", "Sehemu ya Picha (Photo Booth)", "Rangi za Msingi"],
      color: "default", // Kijivu
    },
    {
      name: "Furahi",
      desc: "Sherehe za Kati (Send-off, Mahafali)",
      price: "Fedha",
      features: ["Ukumbi Mzima", "Viti vya Wageni & Vitambaa", "Maua ya Bandia (Grade A)", "Taa za Urembo (Mood Lights)"],
      color: "primary", // Hii itachukua Rose Gold (Popular)
      isPopular: true,
    },
    {
      name: "Tabasamu",
      desc: "Sherehe Kubwa (Harusi, VIP)",
      price: "Dhahabu",
      features: ["Full Decor (Ukumbi & Nje)", "Maua Mubashara (Natural)", "Zulia Jekundu/Nyeupe", "Event Coordination"],
      color: "secondary", // Kijivu kilichokoza au Rose Gold tofauti
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`p-4 border-2 transition-all duration-300 ${plan.isPopular
            ? "border-[#B76E79] shadow-xl shadow-[#B76E79]/20 hover:shadow-2xl hover:shadow-[#B76E79]/40 hover:scale-105 relative"
            : "border-transparent hover:border-default-200 hover:shadow-lg"
            }`}
        >
          <CardHeader className="flex flex-col items-start gap-2 pb-6">
            {plan.isPopular && (
              <Chip
                className="bg-gradient-to-r from-[#B76E79] to-[#D48E98] text-white font-bold"
                size="sm"
              >
                ⭐ Inapendwa Zaidi
              </Chip>
            )}
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-default-500 text-sm">{plan.desc}</p>
          </CardHeader>

          <Divider />

          <CardBody className="py-8 gap-4">
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#B76E79]">✓</span>
                  <span className="text-default-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardBody>

          <CardFooter>
            <Button
              onPress={() => window.open(`https://wa.me/255746555500?text=Habari, nahitaji kifurushi cha ${plan.name}`, '_blank')}
              className="w-full font-semibold"
              color={plan.isPopular ? "primary" : "default"}
              variant={plan.isPopular ? "shadow" : "bordered"}
            >
              Chagua {plan.name}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};