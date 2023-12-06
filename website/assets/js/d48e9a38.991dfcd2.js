"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3790],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(t),u=r,d=g["".concat(l,".").concat(u)]||g[u]||c[u]||i;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const i={id:"ephemeralstoragelimit",title:"Container ephemeral storage limit"},o="Container ephemeral storage limit",s={unversionedId:"validation/ephemeralstoragelimit",id:"validation/ephemeralstoragelimit",title:"Container ephemeral storage limit",description:"Description",source:"@site/docs/validation/ephemeralstoragelimit.md",sourceDirName:"validation",slug:"/validation/ephemeralstoragelimit",permalink:"/gatekeeper-library/website/validation/ephemeralstoragelimit",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/validation/ephemeralstoragelimit.md",tags:[],version:"current",frontMatter:{id:"ephemeralstoragelimit",title:"Container ephemeral storage limit"},sidebar:"docs",previous:{title:"Disallow Interactive TTY Containers",permalink:"/gatekeeper-library/website/validation/disallowinteractive"},next:{title:"External IPs",permalink:"/gatekeeper-library/website/validation/externalip"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:m},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container-ephemeral-storage-limit"},"Container ephemeral storage limit"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires containers to have an ephemeral storage limit set and constrains the limit to be within the specified maximum values.\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8scontainerephemeralstoragelimit\n  annotations:\n    metadata.gatekeeper.sh/title: "Container ephemeral storage limit"\n    metadata.gatekeeper.sh/version: 1.0.1\n    description: >-\n      Requires containers to have an ephemeral storage limit set and constrains\n      the limit to be within the specified maximum values.\n\n      https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sContainerEphemeralStorageLimit\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            ephemeral-storage:\n              description: "The maximum allowed ephemeral storage limit on a Pod, exclusive."\n              type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8scontainerephemeralstoragelimit\n\n        import data.lib.exclude_update.is_update\n        import data.lib.exempt_container.is_exempt\n\n        missing(obj, field) = true {\n          not obj[field]\n        }\n\n        missing(obj, field) = true {\n          obj[field] == ""\n        }\n\n        has_field(object, field) = true {\n            object[field]\n        }\n\n        # 10 ** 21\n        storage_multiple("E") = 1000000000000000000000 { true }\n\n        # 10 ** 18\n        storage_multiple("P") = 1000000000000000000 { true }\n\n        # 10 ** 15\n        storage_multiple("T") = 1000000000000000 { true }\n\n        # 10 ** 12\n        storage_multiple("G") = 1000000000000 { true }\n\n        # 10 ** 9\n        storage_multiple("M") = 1000000000 { true }\n\n        # 10 ** 6\n        storage_multiple("k") = 1000000 { true }\n\n        # 10 ** 3\n        storage_multiple("") = 1000 { true }\n\n        # Kubernetes accepts millibyte precision when it probably shouldn\'t.\n        # https://github.com/kubernetes/kubernetes/issues/28741\n        # 10 ** 0\n        storage_multiple("m") = 1 { true }\n\n        # 1000 * 2 ** 10\n        storage_multiple("Ki") = 1024000 { true }\n\n        # 1000 * 2 ** 20\n        storage_multiple("Mi") = 1048576000 { true }\n\n        # 1000 * 2 ** 30\n        storage_multiple("Gi") = 1073741824000 { true }\n\n        # 1000 * 2 ** 40\n        storage_multiple("Ti") = 1099511627776000 { true }\n\n        # 1000 * 2 ** 50\n        storage_multiple("Pi") = 1125899906842624000 { true }\n\n        # 1000 * 2 ** 60\n        storage_multiple("Ei") = 1152921504606846976000 { true }\n\n        get_suffix(storage) = suffix {\n          not is_string(storage)\n          suffix := ""\n        }\n\n        get_suffix(storage) = suffix {\n          is_string(storage)\n          count(storage) > 0\n          suffix := substring(storage, count(storage) - 1, -1)\n          storage_multiple(suffix)\n        }\n\n        get_suffix(storage) = suffix {\n          is_string(storage)\n          count(storage) > 1\n          suffix := substring(storage, count(storage) - 2, -1)\n          storage_multiple(suffix)\n        }\n\n        get_suffix(storage) = suffix {\n          is_string(storage)\n          count(storage) > 1\n          not storage_multiple(substring(storage, count(storage) - 1, -1))\n          not storage_multiple(substring(storage, count(storage) - 2, -1))\n          suffix := ""\n        }\n\n        get_suffix(storage) = suffix {\n          is_string(storage)\n          count(storage) == 1\n          not storage_multiple(substring(storage, count(storage) - 1, -1))\n          suffix := ""\n        }\n\n        get_suffix(storage) = suffix {\n          is_string(storage)\n          count(storage) == 0\n          suffix := ""\n        }\n\n        canonify_storage(orig) = new {\n          is_number(orig)\n          new := orig * 1000\n        }\n\n        canonify_storage(orig) = new {\n          not is_number(orig)\n          suffix := get_suffix(orig)\n          raw := replace(orig, suffix, "")\n          re_match("^[0-9]+(\\\\.[0-9]+)?$", raw)\n          new := to_number(raw) * storage_multiple(suffix)\n        }\n\n        violation[{"msg": msg}] {\n          # spec.containers.resources.limits["ephemeral-storage"] field is immutable.\n          not is_update(input.review)\n\n          general_violation[{"msg": msg, "field": "containers"}]\n        }\n\n        violation[{"msg": msg}] {\n          not is_update(input.review)\n          general_violation[{"msg": msg, "field": "initContainers"}]\n        }\n\n        # Ephemeral containers not checked as it is not possible to set field.\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          storage_orig := container.resources.limits["ephemeral-storage"]\n          not canonify_storage(storage_orig)\n          msg := sprintf("container <%v> ephemeral-storage limit <%v> could not be parsed", [container.name, storage_orig])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          not container.resources\n          msg := sprintf("container <%v> has no resource limits", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          not container.resources.limits\n          msg := sprintf("container <%v> has no resource limits", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          missing(container.resources.limits, "ephemeral-storage")\n          msg := sprintf("container <%v> has no ephemeral-storage limit", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          storage_orig := container.resources.limits["ephemeral-storage"]\n          storage := canonify_storage(storage_orig)\n          max_storage_orig := input.parameters["ephemeral-storage"]\n          max_storage := canonify_storage(max_storage_orig)\n          storage > max_storage\n          msg := sprintf("container <%v> ephemeral-storage limit <%v> is higher than the maximum allowed of <%v>", [container.name, storage_orig, max_storage_orig])\n        }\n      libs:\n        - |\n          package lib.exclude_update\n\n          is_update(review) {\n              review.operation == "UPDATE"\n          }\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sContainerEphemeralStorageLimit\nmetadata:\n  name: container-ephemeral-storage-limit\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    ephemeral-storage: "500Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit-100Mi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n\n          ephemeral-storage: "100Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/example_allowed_ephemeral-storage.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit-initContainer-100Mi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  initContainers:\n    - name: init-opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n          ephemeral-storage: "100Mi"\n\n\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n          ephemeral-storage: "100Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/example_allowed_ephemeral-storage-initContainer.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit-unspecified"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "2Gi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/example_disallowed_ephemeral_storage_limit_unspecified.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit-1Pi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n\n          ephemeral-storage: "1Pi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/example_disallowed_ephemeral_storage_limit_1Pi.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ephemeral-storage-limit-initContainer-1Pi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  initContainers:\n    - name: init-opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n          ephemeral-storage: "1Pi"\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n          ephemeral-storage: "100Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/ephemeralstoragelimit/samples/container-must-have-ephemeral-storage-limit/example_disallowed_ephemeral_storage_limit_1Pi-initContainer.yaml\n"))))))}c.isMDXComponent=!0}}]);