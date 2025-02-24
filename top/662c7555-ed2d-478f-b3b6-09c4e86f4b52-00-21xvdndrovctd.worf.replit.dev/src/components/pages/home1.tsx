import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/home.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/pages/home.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import Navbar from "/src/components/layout/navbar.tsx";
import Hero from "/src/components/sections/hero.tsx";
import HowItWorks from "/src/components/sections/how-it-works.tsx";
import Musicians from "/src/components/sections/musicians.tsx";
import PriceTracker from "/src/components/sections/price-tracker.tsx";
import Roadmap from "/src/components/sections/roadmap.tsx";
import Contact from "/src/components/sections/contact.tsx";
export default function Home() {
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/home.tsx:11:4", "data-component-name": "div", className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/home.tsx:12:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { "data-replit-metadata": "client/src/pages/home.tsx:13:6", "data-component-name": "main", children: [
      /* @__PURE__ */ jsxDEV(Hero, { "data-replit-metadata": "client/src/pages/home.tsx:14:8", "data-component-name": "Hero" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(HowItWorks, { "data-replit-metadata": "client/src/pages/home.tsx:15:8", "data-component-name": "HowItWorks" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Musicians, { "data-replit-metadata": "client/src/pages/home.tsx:16:8", "data-component-name": "Musicians" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(PriceTracker, { "data-replit-metadata": "client/src/pages/home.tsx:17:8", "data-component-name": "PriceTracker" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Roadmap, { "data-replit-metadata": "client/src/pages/home.tsx:18:8", "data-component-name": "Roadmap" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Contact, { "data-replit-metadata": "client/src/pages/home.tsx:19:8", "data-component-name": "Contact" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/home.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/home.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBV007QUFYTixPQUFPQSxvQkFBWTtBQUFBLE1BQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQyxPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGtCQUFrQjtBQUN6QixPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLGFBQWE7QUFFcEIsd0JBQXdCQyxPQUFPO0FBQzdCLFNBQ0UsdUJBQUMsaUdBQUksV0FBVSw4Q0FDYjtBQUFBLDJCQUFDLHVHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLElBQ1AsdUJBQUMsbUdBQ0M7QUFBQSw2QkFBQyxtR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUs7QUFBQSxNQUNMLHVCQUFDLCtHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVztBQUFBLE1BQ1gsdUJBQUMsNkdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFVO0FBQUEsTUFDVix1QkFBQyxtSEFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWE7QUFBQSxNQUNiLHVCQUFDLHlHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUTtBQUFBLE1BQ1IsdUJBQUMseUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFRO0FBQUEsU0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBT0E7QUFBQSxPQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVQTtBQUVKO0FBQUNDLEtBZHVCRDtBQUFJLElBQUFDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJOYXZiYXIiLCJIZXJvIiwiSG93SXRXb3JrcyIsIk11c2ljaWFucyIsIlByaWNlVHJhY2tlciIsIlJvYWRtYXAiLCJDb250YWN0IiwiSG9tZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImhvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm9cIjtcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvaG93LWl0LXdvcmtzXCI7XG5pbXBvcnQgTXVzaWNpYW5zIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvbXVzaWNpYW5zXCI7XG5pbXBvcnQgUHJpY2VUcmFja2VyIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJpY2UtdHJhY2tlclwiO1xuaW1wb3J0IFJvYWRtYXAgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9yb2FkbWFwXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2NvbnRhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZFwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZXJvIC8+XG4gICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgIDxNdXNpY2lhbnMgLz5cbiAgICAgICAgPFByaWNlVHJhY2tlciAvPlxuICAgICAgICA8Um9hZG1hcCAvPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvcGFnZXMvaG9tZS50c3gifQ==