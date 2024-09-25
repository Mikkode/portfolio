/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://carrotpixel.com", // Remplace par ton URL
  generateRobotsTxt: true, // Génère aussi le fichier robots.txt
  sitemapSize: 5000, // Nombre maximum de pages par fichier de sitemap
  exclude: [], // Exclure certaines pages si nécessaire
};
