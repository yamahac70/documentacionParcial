import { defineConfig } from 'vitepress'
import defineVersionedConfig from 'vitepress-versioning-plugin'
// https://vitepress.dev/reference/site-config
/* import { dirname } from 'path';
import { fileURLToPath } from 'url'; */
  
//const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineVersionedConfig({
  versioning: {
    latestVersion: '1.0.0',
    sidebars: true,
    rewrites: {
      localePrefix: 'v1',

    },
    

  },
  title: "Instrucciones y explicacion appSha256",
  description: "proyecto precentado en python",
  
  rewrites: {
    localePrefix: 'v1.1',
    
    
  },
  themeConfig: {
    // https://vitepress.dev/reference/site-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],
    
    
    sidebar: [
             {
               text: 'Examples',
               items: [
                 { text: 'Instrucciones 📕', link: '/markdown-instrucciones' ,
                 items: [
                   { text: 'Cifrar📕', link: '/ins-cifrar',items:[
                     { text: 'Sha256 ⌨️', link: '/ins-cifrar-sha' },
                   ] },
                   { text: 'Decifrar📕', link: '/ins-decifrar', items:[
                     {text:"Busqueda binaria",link:"/ins-busqueda-binaria"},
                     {text:"Comprobacion de integridad",link:"/ins-comprobar-integridad"}
                   ]}
                 ]
                 }
               ]
             }
           ],
  }
},
__dirname
)


// export default defineConfig({
//   title: "Instrucciones y explicacion appSha256",
//   description: "proyecto precentado en python",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       //{ text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Instrucciones 📕', link: '/markdown-instrucciones' ,
//           items: [
//             { text: 'Cifrar📕', link: '/ins-cifrar',items:[
//               { text: 'Sha256 ⌨️', link: '/ins-cifrar-sha' },
//             ] },
//             { text: 'Decifrar📕', link: '/ins-decifrar', items:[
//               {text:"Busqueda binaria",link:"/ins-busqueda-binaria"},
//               {text:"Comprobacion de integridad",link:"/ins-comprobar-integridad"}
//             ]}
//           ]
//           }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/yamahac70' }
//     ]
//   },
  
// })
