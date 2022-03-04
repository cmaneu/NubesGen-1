(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{426:function(t,e,a){"use strict";a.r(e);var n=a(56),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-being-generated-by-nubesgen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-being-generated-by-nubesgen"}},[t._v("#")]),t._v(" What is being generated by NubesGen?")]),t._v(" "),a("p",[t._v("NubesGen generates a set of Terraform or Biceps configurations. If you selected the "),a("RouterLink",{attrs:{to:"/reference/gitops-overview.html"}},[t._v("GitOps option")]),t._v(", it will also generate a GitHub Action.")],1),t._v(" "),a("h2",{attrs:{id:"infrastructure-as-code-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-as-code-configuration-files"}},[t._v("#")]),t._v(" Infrastructure as Code configuration files")]),t._v(" "),a("p",[t._v("NubesGen generates a "),a("code",[t._v(".tgz")]),t._v(" or a "),a("code",[t._v(".zip")]),t._v("file.")]),t._v(" "),a("p",[t._v("Unzipping that file provides a similar structure:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- terraform\n  |- modules\n    |- app-service\n      |- main.tf\n      |- outputs.tf\n      |- README.md\n      |- variables.tf\n    |- mysql\n      |- main.tf\n      |- outputs.tf\n      |- README.md\n      |- variables.tf\n  |- main.tf\n  |- outputs.tf\n  |- README.md\n  |- variables.tf\n")])])]),a("p",[t._v("In this example, we have a Terraform configuration that uses two modules (App Service and MySQL), that are ready for\ndeployment.")]),t._v(" "),a("p",[t._v("To deploy your infrastructure, all you need to do is initialize Terraform and apply its configuration:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terraform init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" terraform apply -auto-approve\n")])])]),a("h2",{attrs:{id:"github-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-action"}},[t._v("#")]),t._v(" GitHub Action")]),t._v(" "),a("p",[t._v("If you selected the "),a("RouterLink",{attrs:{to:"/reference/gitops-overview.html"}},[t._v("GitOps option")]),t._v(", NubesGen will generate a GitHub Action for you, which will manage the Terraform\nconfiguration automatically.")],1),t._v(" "),a("p",[t._v("That GitHub Action is located in a hidden GitHub directory, so the file structure will look similar to this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("– .github\n  |- workflows\n    |- gitops.yml\n- terraform\n  |- modules\n    |- app-service\n      |- main.tf\n      |- outputs.tf\n      |- README.md\n      |- variables.tf\n    |- mysql\n      |- main.tf\n      |- outputs.tf\n      |- README.md\n      |- variables.tf\n  |- main.tf\n  |- outputs.tf\n  |- README.md\n  |- variables.tf\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);