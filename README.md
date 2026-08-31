# La Manada

Sitio web para La Manada, veterinaria y tienda para mascotas en Tijuana.

- Sitio publicado: https://la-manada-veterinaria.angeleplata91.chatgpt.site
- Vista por GitHub Pages: https://angel-plata-design.github.io/la-manada-veterinaria/

## GitHub Pages

El repositorio incluye una salida estática en `docs/` para GitHub Pages.
En GitHub, la sección Settings > Pages debe usar:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/docs**

Para generar la versión estática:

```bash
cd github-pages
npm install
npm run build
```

El resultado validado para GitHub Pages queda en `docs/`.
