"use client";

import { Controller } from "react-hook-form";
import { useContactFormState } from "./hooks";
import {
  Button,
  ButtonSizeEnum,
  Input,
  InputColorEnum,
} from "@/components/Atoms";

const ContactForm = () => {
  const {
    form: { control },
    getInputError,
  } = useContactFormState();
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="Nombre*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="profession"
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="Profesión*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="Apellido*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="business"
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="Empresa*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Campo requerido",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "Dirección de correo electrónico inválida",
          },
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="Correo Electrónico*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { value, name, onChange } }) => (
          <div>
            <Input
              value={value}
              name={name}
              onChange={onChange}
              color={InputColorEnum.WHITE}
              placeholder="País*"
            />
            {getInputError(name) && (
              <p className="text-red-500 text-sm font-semibold">
                {getInputError(name).message}
              </p>
            )}
          </div>
        )}
      />
      <div>
        <Button size={ButtonSizeEnum.LG}>Envíar</Button>
      </div>
    </form>
  );
};

export { ContactForm };
