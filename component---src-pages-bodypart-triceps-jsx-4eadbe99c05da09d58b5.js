webpackJsonp([7182518147426],{162:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data,a=t.allMarkdownRemark.edges;return c.default.createElement("div",{className:"preview-feed"},c.default.createElement("div",{className:"page-top-banner"},c.default.createElement("h2",{className:"page-heading",style:k}," Упражнения для трицепса"),c.default.createElement(d.default,{to:"/",className:"page-btn-back"},c.default.createElement(p.default,{icon:y.default,className:"preview-btn-icon"})," Все упражнения")),a.filter(function(e){return"triceps"===e.node.frontmatter.filterby}).map(function(e){var t=e.node;return c.default.createElement(s.default,{height:200},c.default.createElement(u.default,{title:"Группа мышц - "+t.frontmatter.bodypart}),c.default.createElement("div",{className:"preview",key:t.id,style:{backgroundImage:"url("+t.frontmatter.image+")"}},c.default.createElement("div",{className:"preview-wrapper"},c.default.createElement("div",{className:"preview-containers"},c.default.createElement("div",{className:"preview-container-1"},c.default.createElement(d.default,{to:t.frontmatter.path,className:"preview-title"},t.frontmatter.title),c.default.createElement("div",null,c.default.createElement("span",{className:"preview-stats"},c.default.createElement(d.default,{to:"/bodypart/"+t.frontmatter.filterby,className:"tag tag-bodypart"},t.frontmatter.bodypart),c.default.createElement(d.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-type"},t.frontmatter.type),c.default.createElement(d.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-inventory"},t.frontmatter.inventory)),c.default.createElement("div",null,c.default.createElement(d.default,{to:"/stats/efficiency",className:"tag tag-efficiency"},c.default.createElement(p.default,{icon:h.default})," ",t.frontmatter.efficiency,"/10"),c.default.createElement(d.default,{to:"/stats/injury",className:"tag tag-injury"},c.default.createElement(p.default,{icon:b.default})," ",t.frontmatter.injury,"/10"))),c.default.createElement("p",{className:"preview-excerpt"},t.excerpt)),c.default.createElement("div",{className:"preview-container-2"},c.default.createElement(d.default,{to:t.frontmatter.path},c.default.createElement("img",{src:t.frontmatter.image,className:"preview-image"}))))),c.default.createElement(d.default,{to:t.frontmatter.path,className:"preview-btn"},"Подробнее ",c.default.createElement(p.default,{icon:v.default,className:"preview-btn-icon"}))))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=l;var n=a(2),c=r(n),f=a(3),d=r(f),m=a(5),u=r(m),i=a(10),s=r(i),o=a(6),p=r(o),g=a(7),v=r(g),E=a(11),y=r(E),N=a(9),b=r(N),w=a(8),h=r(w),k={backgroundImage:"url(https://s17.postimg.cc/5pmkzqzgv/triceps.jpg)",backgroundPosition:"center"};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-bodypart-triceps-jsx-4eadbe99c05da09d58b5.js.map