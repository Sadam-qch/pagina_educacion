# Sitio web de la Carrera de: CIENCIAS DE LA EDUCACION

## 🛠️ Tecnologías Utilizadas

- [**Next.js**](https://nextjs.org/) (v.15): Framework basado en React que permite construir aplicaciones web modernas, eficientes y con capacidades de renderizado en el servidor.
- [**React**](https://reactjs.org/) (v.19): Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.
- [**Node.js**](https://nodejs.org/) (v.22): Entorno de ejecución para JavaScript, utilizado para desarrollar el backend de la aplicación.
- [**Taiwind CSS**](https://tailwindcss.com/): (v.3 )framework de CSS utilitario que permite diseñar interfaces de usuario rápidamente usando clases predefinidas en lugar de escribir CSS manualmente.

## ⚙️ INSTALACIÓN  
Para la instalación, lee el archivo [/INSTALL.md](./INSTALL.md).


## 📁 Estructura del proyecto

```
src/
├── app/                    # Rutas y componentes de página (Next.js 15 App Router)
├── components/             # Componentes reutilizables
├── hooks/                  # Hooks personalizados
├── lib/                    # Utilidades
├── types/                  # Tipos y interfaces globales
├── utils/                  # Utilidades y helpers
```

## 🎨 Personalización del diseño

Modifica los archivos en `src/app/globals.css` para personalizar los temas claro y oscuro:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #f56224; 
  --secondary: #0A02B0;
  --tertiary: #000001;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estas pautas:

1. Haz fork del repositorio
2. Crea una nueva rama (`git checkout -b feat/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Haz push a la rama (`git push origin feat/amazing-feature`)
5. Abre un Pull Request

## 📞 Contacto

Para más información, contacta a: [Maribel Carola](mailto:m.c.c.mabel21@gmail.com)
