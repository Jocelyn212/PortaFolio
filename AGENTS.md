# AGENTS.md

## Proyecto

Portfolio personal desarrollado con Astro.

## Stack

- Astro
- TypeScript
- Tailwind CSS v4
- React 19 únicamente para componentes que requieran interactividad
- pnpm

No añadir backend ni base de datos mientras el proyecto no requiera persistencia.

## Arquitectura

- Utilizar componentes Astro por defecto.
- Utilizar React Islands solo cuando exista estado o interacción real.
- Mantener el contenido estructurado separado de los componentes cuando sea reutilizable.
- Crear componentes reutilizables cuando exista una necesidad real; evitar abstracciones innecesarias.
- Mantener `index.astro` limpio y delegar las secciones principales en componentes.
- Evitar dependencias externas cuando Astro, Tailwind o CSS nativo sean suficientes.

Estructura orientativa:

src/
├── components/
├── data/
├── layouts/
├── pages/
└── styles/

No crear carpetas adicionales sin necesidad.

## Desarrollo

- Usar TypeScript.
- Usar nombres descriptivos para componentes, variables y funciones.
- Mantener componentes pequeños y con una responsabilidad clara.
- Evitar código duplicado.
- No añadir comentarios que simplemente describan código evidente.
- Mantener JavaScript enviado al cliente al mínimo.
- No modificar decisiones de arquitectura o stack sin necesidad.

## Diseño

Implementar un diseño responsive y mobile-first.

Dirección visual:

- interfaz oscura
- navy/negro como base
- cyan/turquesa como acento principal
- azul como acento secundario
- superficies oscuras y bordes sutiles
- jerarquía tipográfica clara
- tarjetas y composiciones visuales
- animaciones y efectos discretos
- aspecto tecnológico, limpio y profesional

Evitar efectos decorativos excesivos y mantener una identidad visual consistente en toda la aplicación.

## Referencias de diseño

### Referencia visual principal

`references/portfolio-visual-reference.png`

Utilizar como referencia para lenguaje visual, composición, tarjetas, profundidad y tratamiento de los acentos cyan.

No reproducirla literalmente.

### Figma

https://www.figma.com/design/klCOENO0jzA8hpJOS3OiNM/Portfolio-Design--Community-?node-id=0-1&p=f&t=YY6eITzQ9lOOA0g1-0

Referencia de composición y jerarquía visual.

### Referencia web

https://mariana-am-portafolio.netlify.app/#sobreMi

Referencia de estructura y organización de contenidos.

Las referencias sirven como inspiración. El resultado debe tener diseño propio y coherente.

## Calidad

- HTML semántico.
- Diseño completamente responsive.
- Navegación por teclado.
- Estados `hover` y `focus` visibles.
- Contraste adecuado.
- Respetar `prefers-reduced-motion`.
- Optimizar imágenes.
- Evitar layout shifts.
- Mantener buen rendimiento y mínimo JavaScript cliente.

## Flujo de trabajo

Antes de realizar cambios:

1. Revisar la estructura existente.
2. Reutilizar componentes y patrones existentes cuando corresponda.
3. No reescribir código funcional sin una razón concreta.
4. Mantener los cambios limitados al objetivo solicitado.
5. Ejecutar las comprobaciones disponibles antes de finalizar.

No tomar decisiones de producto o contenido que no hayan sido solicitadas.