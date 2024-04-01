import { ContactForm } from "@/components/Molecules";

const Contact = () => {
  return (
    <section className="bg-text text-white py-24 rounded-2xl">
      <div className="w-full container">
        <h2 className="text-white text-[32px] font-semibold">
          Suscríbete a nuestro <br />
          newsletter
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export { Contact };
