import rss, {pagesGlobalToRssItems } from '@astrojs/rss';

export async function Get(context) {
    return  rss (
        {
            title: ' Alumno de Astro | BLog',
            decription: ' Mi viaje de aprendizaje de Astro',
            site: context.site,
            items: await pagesGlobalToRssItems(import.meta.glob('./**/*.md')),
            customData: `<language> en-us</language>`,
        });
}