# La Manada

Sitio web para La Manada, veterinaria y tienda para mascotas en Tijuana.

- Sitio publicado: https://la-manada-veterinaria.angeleplata91.chatgpt.site
- Vista por GitHub Pages: https://angel-plata-design.github.io/la-manada-veterinaria/

## GitHub Pages

El repositorio incluye una salida estática para GitHub Pages. En GitHub, la sección
Settings > Pages debe usar **GitHub Actions** como fuente de publicación.
Si Pages aún no está activo para el repositorio, actívalo ahí primero y después
vuelve a ejecutar el workflow **Deploy GitHub Pages** desde la pestaña Actions.

Para generar la versión estática:

```bash
cd github-pages
npm install
npm run build
```

El resultado validado para GitHub Pages queda en `docs/`.
