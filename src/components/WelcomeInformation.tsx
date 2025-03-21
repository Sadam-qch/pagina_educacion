"use client";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import { stripHtml } from "@/util/formatText";

export default function WelcomeInformation() {
  const { institutionData } = useInstitutionData();

  return (
    <section className=" text-center">
      <h1 className="font-serif text-5xl font-bold text-gray-900 mb-6">
        Historia
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-x-6 md:space-y-0">
        <p className="text-justify text-gray-700 text-xl md:w-2/4">
          {stripHtml(institutionData?.institucion_historia)}
        </p>
        <img
          src="/img/historiaeduca.jpg"  
          alt="Historia de la Institución"
          className="w-full md:w-1/2 h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
