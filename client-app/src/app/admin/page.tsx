"use client";
import { Table } from "@/components";
import { usePagination } from "@/hooks";
import { useContacts } from "@/services/contacts";
import { useEffect } from "react";

export default function Admin() {
  const { currentPage, handleGoToPage } = usePagination();
  const { data, refetch } = useContacts({
    params: {
      page: currentPage,
    },
  });

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <div className="bg-secondary/10 min-h-screen w-full">
      <div className="container">
        <div className="py-10">
          <h1 className="mb-10">Contactos registrados</h1>
          <Table
            handleChangePage={handleGoToPage}
            currentPage={currentPage}
            totalPages={data?.totalPages}
            headers={[
              "",
              "Nombre",
              "Apellido",
              "Email",
              "Profesión",
              "País",
              "Negocio",
            ]}
            content={(data?.data || []).map((contact, index) => [
              <p key={index} className="dark:text-white">
                {(currentPage - 1) * 3 + index + 1}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.name}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.lastName}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.email}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.profession}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.country}
              </p>,
              <p key={index} className="dark:text-white">
                {contact.business}
              </p>,
            ])}
          />
        </div>
      </div>
    </div>
  );
}
