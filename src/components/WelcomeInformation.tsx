"use client";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import { stripHtml } from "@/util/formatText";

export default function WelcomeInformation() {
  const { institutionData } = useInstitutionData();

  return (
    <main className="flex flex-col items-center">
      <section>
        <div>
          <div className="container p-6 px-6 mx-auto text-center ">
            <h1 className="p-6 font-serif text-5xl font-bold text-gray-900">
              Historia
            </h1>
            <p className="text-justify text-gray-700 text-1xl ">
              {stripHtml(institutionData?.institucion_historia)}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
