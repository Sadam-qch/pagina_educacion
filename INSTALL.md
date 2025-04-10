# Manual de instalación

## 1. Requerimientos

| Nombre   | Versión | Descripción                            | Instalación            |
| -------- | ------- | -------------------------------------- | ---------------------- |
| `NodeJS` | ^22     | Entorno de programación de JavaScript. | https://nodejs.org/en/ |
| `NPM`    | ^10     | Gestor de paquetes de NodeJS.          | Se instala con node js |

## 2. Instalación

### Clonación del proyecto

```bash
# Clonación del proyecto
git clone https://gitlab.com/utic4615510/ciencias-educacion-web.git

# Ingresamos dentro de la carpeta del proyecto
cd ciencias-educacion-web
```

### Instalación de dependencias

```bash
# Instalamos dependencias de NPM
npm install
```

### Archivos de configuración.

Copiar el `.env.sample` y modificar los valores que sean necesarios (para más detalles revisa la sección **Variables
de entorno**).

```bash
# copia el archivo (Linux)
cp .env.example .env 
```

### Despliegue de la aplicación

```bash
# Ejecución en modo DESARROLLO
npm run dev

# Ejecución en modo PRODUCCIÓN
npm run build
npm run start
```

### Variables de entorno


| Variable                     | Valor por defecto                      | Descripción                                           |
| ---------------------------- | -------------------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_APP_NAME`       | `ciencias de la educación`              | Nombre de la aplicación.                             |
| `NEXT_PUBLIC_API_URL`        | `https://serviciopagina.upea.bo`      | URL base del backend para las solicitudes a la API.  |
| `NEXT_PUBLIC_INSTITUCION_ID` | `12`                                   | ID de la institución asociada a la aplicación.       |
| `NEXT_PUBLIC_CARRERA_ID`     | `4`                                    | ID de la carrera asociada dentro de la institución.  |

