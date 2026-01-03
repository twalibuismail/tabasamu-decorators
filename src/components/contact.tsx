import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

export const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-6xl">
      
      {/* 1. Fomu ya Mawasiliano */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Tutumie Ujumbe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="text" label="Jina la Kwanza" variant="bordered" />
          <Input type="text" label="Jina la Ukoo" variant="bordered" />
        </div>
        <Input type="email" label="Barua Pepe" variant="bordered" />
        <Input type="tel" label="Namba ya Simu" variant="bordered" placeholder="0746555500" />
        <Textarea label="Ujumbe Wako" placeholder="Nahitaji kupambiwa harusi..." variant="bordered" minRows={4} />
        
        <Button color="primary" className="w-full font-bold shadow-lg text-white" variant="shadow">
          Tuma Ujumbe
        </Button>
      </div>

      {/* 2. Taarifa za Mawasiliano (Contact Info) */}
      <div className="flex flex-col gap-6 justify-center">
        <Card className="bg-[#B76E79] text-white shadow-xl">
          <CardBody className="p-8 space-y-6">
            <h3 className="text-2xl font-bold">Wasiliana Nasi Moja kwa Moja</h3>
            <p className="text-white/80">
              Tuko tayari kukuhudumia masaa 24/7. Fika ofisini kwetu au tupigie simu.
            </p>

            <div className="space-y-4">
              {/* Simu */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/20 rounded-full">📞</div>
                <div>
                  <p className="text-sm text-white/70">Simu</p>
                  <p className="font-semibold">+255 746 555 500</p>
                </div>
              </div>

              {/* Barua Pepe */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/20 rounded-full">✉️</div>
                <div>
                  <p className="text-sm text-white/70">Barua Pepe</p>
                  <p className="font-semibold">info@tabasamu.co.tz</p>
                </div>
              </div>

              {/* Mahali */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/20 rounded-full">📍</div>
                <div>
                  <p className="text-sm text-white/70">Ofisi</p>
                  <p className="font-semibold">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>

            {/* Kitufe cha WhatsApp */}
            <Button 
              as={Link}
              href="https://wa.me/255746555500"
              isExternal
              className="w-full bg-white text-[#B76E79] font-bold mt-4"
              variant="flat"
            >
              Chati Nasi WhatsApp
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};