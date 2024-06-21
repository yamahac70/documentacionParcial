import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Instrucciones y explicacion appSha256",
  description: "proyecto precentado en python",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yamahac70' }
    ]
  }
})
