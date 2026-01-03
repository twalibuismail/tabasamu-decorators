import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgovzlnq");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  // Reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-6xl">

      {/* 1. Fomu ya Mawasiliano */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Tutumie Ujumbe</h2>

        {state.succeeded && (
          <Card className="bg-green-100 border-green-500">
            <CardBody className="p-4">
              <p className="text-green-700 font-semibold">✅ Ujumbe wako umetumwa kikamilifu! Tutawasiliana nawe hivi karibuni.</p>
            </CardBody>
          </Card>
        )}

        {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
          <Card className="bg-red-100 border-red-500">
            <CardBody className="p-4">
              <p className="text-red-700 font-semibold">❌ Kuna tatizo limetokea. Tafadhali jaribu tena.</p>
            </CardBody>
          </Card>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="firstName"
              label="Jina la Kwanza"
              variant="bordered"
              value={formData.firstName}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              type="text"
              name="lastName"
              label="Jina la Ukoo"
              variant="bordered"
              value={formData.lastName}
              onChange={handleInputChange}
              isRequired
            />
          </div>

          <Input
            type="email"
            name="email"
            label="Barua Pepe"
            variant="bordered"
            value={formData.email}
            onChange={handleInputChange}
            isRequired
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Input
            type="tel"
            name="phone"
            label="Namba ya Simu"
            variant="bordered"
            placeholder="0746555500"
            value={formData.phone}
            onChange={handleInputChange}
            isRequired
          />

          <Textarea
            name="message"
            label="Ujumbe Wako"
            placeholder="Nahitaji kupambiwa harusi..."
            variant="bordered"
            minRows={4}
            value={formData.message}
            onChange={handleInputChange}
            isRequired
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <Button
            type="submit"
            color="primary"
            className="w-full font-bold shadow-lg text-white"
            variant="shadow"
            isLoading={state.submitting}
            isDisabled={state.submitting}
          >
            {state.submitting ? "Inatuma..." : "Tuma Ujumbe"}
          </Button>
        </form>
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