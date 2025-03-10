"use client";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

interface HeaderProps {
  title: string
}

export default function Header({title}:HeaderProps) {

  return (
    <>

      {/* Cabecera con imagen de fondo RESPONSIVA y FIJA */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen text-3xl text-white bg-center"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UPEA_2.jpg/1280px-UPEA_2.jpg')",
        }}
      >
        {/* Contenido de la cabecera */}
        <div className="relative z-10 p-6 px-6 mx-auto text-center">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
