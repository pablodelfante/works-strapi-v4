/***
 * Solución para el error de miniatura de imagen
 * https://forum.strapi.io/t/strapi-v4-broken-image-even-when-the-images-link-works-cloudinary/14143/3
 * https://forum.strapi.io/t/strapi-v4-broken-image-even-when-the-images-link-works-cloudinary/14143/3
*/

module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', `https://res.cloudinary.com/`],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
