# Agora Clon

## Descripción

Este proyecto es un monorepo que contiene tanto el backend como el frontend. El backend está construido con Node.js y TypeScript utilizando Express, mientras que el frontend está hecho con React y Next.js.

Sitio Web:
https://agora-blond.vercel.app/

## Instalación y Ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   ```

2. Instala las dependencias:

   ```bash
   npm i
   ```

3. Configura las variables de entorno

- Configura las variables de entorno clonando 'env.example' y editalas

4. Para ejecutar el backend servidor en modo de desarrollo entra a la carpeta `backend-app` y ejecuta:

```bash
npm run dev
```

5. Para ejecutar el backend servidor en modo de desarrollo entra a la carpeta `client-app` y ejecuta:

```bash
npm run dev
```

6. Abre la aplicación en:

- Frontend at http://localhost:3000

## Estructura del proyecto

### Frontend

Para el Frontend decidi utlizar la metodología de diseño de componentes llamado `atomic design`, esto me permitio separar en componentes base a la complejidad, y estrucutrua que tendrán los mismos diviendolos en:

- Atomos
- Moleculas
- Organismos
- Templates

Pudiendo crear componentes totalmente reutilizables dependiendo el caso de uso y manteniendo las buenas practcias.

#### Paquetes usados

Se utilizo los siguientes paquetes

- `tailwind`: Prefiero Tailwind CSS por su enfoque utility-first, que ofrece una manera eficiente de diseñar interfaces sin necesidad de escribir CSS personalizado

- `react-hook-form`: Fue utilizado debido a que facilita y ahorra tiempo al momento de realizar formularios de cualquier complejidad, teniendo métodos que facilitan el desarrollo de estos formularios tanto en tiempo como en performance, ademas que es un estandar al trabajar con React

- `tankStack-query`: TanStack Query simplifica mi gestión del estado y las solicitudes HTTP en React, ofreciendo cacheado automático y herramientas de desarrollo. Es mi opción eficiente para proyectos que buscan una integración fluida con TypeScript.

- `react-multi-carousel` es mi elección para implementar carouseles en React, gracias a su fácil configuración, soporte para múltiples elementos, navegación intuitiva y opciones de personalización

### Backend

El frontend tiene una estructura _MVC_ diviendo en

- Modelo
- Controlador
- Vista

Además me permite poder separar toda la lógica de los controladores a servicios independientes que esto nos permitira tener un código muchoas más reutlizable y legible.

#### Paquetes usados

- `Swagger`: Me permitio documentar la API para que cualquier desarrollador o persona conozca cuales son los endpoints disponibles, y como se debe llamar
