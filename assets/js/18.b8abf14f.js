(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{418:function(e,t,r){"use strict";r.r(t);var a=r(56),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started-with-nubesgen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-nubesgen"}},[e._v("#")]),e._v(" Getting started with NubesGen")]),e._v(" "),r("p",[e._v("NubesGen can be used through a "),r("a",{attrs:{href:"https://nubesgen.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web interface"),r("OutboundLink")],1),e._v(" or the "),r("RouterLink",{attrs:{to:"/getting-started/command-line.html"}},[e._v("command line")]),e._v(", to generate a set of configuration files for you.")],1),e._v(" "),r("p",[e._v("Those files ("),r("RouterLink",{attrs:{to:"/getting-started/what-is-being-generated.html"}},[e._v("described here")]),e._v(") are of two different kinds:")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1),e._v(" configuration files describe the infrastructure that you want to manage.")]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/getting-started/gitops-overview.html"}},[e._v("GitOps")]),e._v(" configuration files are optional, and can fully automate the usage of Terraform.")],1)]),e._v(" "),r("h2",{attrs:{id:"using-terraform-directly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-terraform-directly"}},[e._v("#")]),e._v(" Using Terraform directly")]),e._v(" "),r("p",[e._v("This is the default option with NubesGen: you will need to apply the Terraform configuration manually. If you want a more automated setup, see the next section about GitOps.")]),e._v(" "),r("ol",[r("li",[e._v("Go to an existing GitHub repository (or create a new one), and clone it on your machine.")]),e._v(" "),r("li",[e._v("Either using the "),r("a",{attrs:{href:"https://nubesgen.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web interface"),r("OutboundLink")],1),e._v(" or the "),r("RouterLink",{attrs:{to:"/getting-started/command-line.html"}},[e._v("command line")]),e._v(", generate a NubesGen package (either a "),r("code",[e._v(".tgz")]),e._v(" or "),r("code",[e._v(".zip")]),e._v(" file). The configuration selected in NubesGen should match what is needed for your project to run (for example, if your project needs a MySQL database, select a MySQL database in NubesGen).")],1),e._v(" "),r("li",[e._v("Uncompress that file in your project's directory. You should have a new "),r("code",[e._v("terraform")]),e._v(" directory inside your project's root folder.")]),e._v(" "),r("li",[e._v("Log into Azure using the Azure CLI, for example by typing "),r("code",[e._v("az login")]),e._v(".")]),e._v(" "),r("li",[e._v("Go into the new "),r("code",[e._v("terraform")]),e._v(" folder, initialize Terraform and apply its configuration:")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" terraform\nterraform init\nterraform apply\n")])])]),r("p",[e._v("This should create a new Azure resource group, in the form "),r("code",[e._v("rg-<your-project-name>")]),e._v(", in which several resources have been created. For example, if you selected Azure App Service and Azure database for MySQL, you should have an App Service plan, App Service instance and MySQL database created in your resource group.")]),e._v(" "),r("p",[e._v("You can go to the "),r("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),r("OutboundLink")],1),e._v(" to check those resources.")]),e._v(" "),r("p",[r("img",{attrs:{src:"assets/azure-resource-group-docker.png",alt:"Resource group created by NubesGen",title:"Resource group created by NubesGen"}})]),e._v(" "),r("h2",{attrs:{id:"using-terraform-with-gitops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-terraform-with-gitops"}},[e._v("#")]),e._v(" Using Terraform with GitOps")]),e._v(" "),r("p",[e._v("Using the "),r("RouterLink",{attrs:{to:"/getting-started/gitops-overview.html"}},[e._v("GitOps option")]),e._v(", a specific GitHub Action file will be created, and this will automate:")],1),e._v(" "),r("ul",[r("li",[e._v("Running Terraform to manage the Azure infrastructure")]),e._v(" "),r("li",[e._v("Deploying your application code to that infrastructure")])])])}),[],!1,null,null,null);t.default=o.exports}}]);