# Resultados Electorales

Aplicación web para mejorar la consulta y visualización de documentos electorales publicados en línea. El proyecto presenta una interfaz organizada alrededor de un contenedor principal, tabla de documentos y componentes de navegación.

## Tecnologías

- Angular 15
- TypeScript
- Bootstrap 5
- RxJS
- Font Awesome

## Componentes principales

```text
src/app/
├── citizen-service/   # Servicios orientados a la ciudadanía
├── documents-table/   # Visualización tabular de documentos
├── header/ y footer/  # Estructura de navegación
├── floating-menu/     # Acciones de acceso rápido
├── right-menu/        # Navegación lateral
└── models/            # Modelos de datos
```

## Requisitos

- Node.js LTS y npm.
- Angular CLI 15, o el uso de `npx ng` a través de los scripts del proyecto.

## Ejecutar localmente

```bash
npm install
npm start
```

La aplicación se sirve en la URL local indicada por Angular.

## Comandos útiles

```bash
npm run build
npm test
```

## Alcance

Este repositorio corresponde a un proyecto estudiantil. Antes de utilizarlo con información pública real, valida la fuente de datos, accesibilidad, rendimiento y cumplimiento de los requisitos de protección de datos aplicables.
