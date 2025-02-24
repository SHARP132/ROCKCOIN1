import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/navbar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/layout/navbar.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=cde83cc4";
import { SiRocket, SiTelegram } from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-icons_si.js?v=cde83cc4";
export default function Navbar() {
  return /* @__PURE__ */ jsxDEV("nav", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:7:4", "data-component-name": "nav", className: "fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:8:6", "data-component-name": "div", className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/navbar.tsx:9:8", "data-component-name": "Link", href: "/", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:10:10", "data-component-name": "a", className: "flex items-center gap-2 font-bold text-xl", children: [
      /* @__PURE__ */ jsxDEV(SiRocket, { "data-replit-metadata": "client/src/components/layout/navbar.tsx:11:12", "data-component-name": "SiRocket", className: "w-6 h-6 text-primary" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      "ROCKCOIN"
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:16:8", "data-component-name": "div", className: "hidden md:flex items-center gap-6", children: [
      /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:17:10", "data-component-name": "a", href: "#how-it-works", className: "hover:text-primary transition-colors", children: "How It Works" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:18:10", "data-component-name": "a", href: "#musicians", className: "hover:text-primary transition-colors", children: "For Musicians" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:19:10", "data-component-name": "a", href: "#roadmap", className: "hover:text-primary transition-colors", children: "Roadmap" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/navbar.tsx:20:10", "data-component-name": "a", href: "#contact", className: "hover:text-primary transition-colors", children: "Contact" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          "data-replit-metadata": "client/src/components/layout/navbar.tsx:21:10",
          "data-component-name": "a",
          href: "https://t.me/rockcoin123",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 transition-colors",
          children: /* @__PURE__ */ jsxDEV(SiTelegram, { "data-replit-metadata": "client/src/components/layout/navbar.tsx:27:12", "data-component-name": "SiTelegram", className: "w-5 h-5 text-primary-foreground" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/layout/navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/layout/navbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/layout/navbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVVk7QUFWWiwyQkFBcUI7QUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFN0IsU0FBU0EsVUFBVUMsa0JBQWtCO0FBRXJDLHdCQUF3QkMsU0FBUztBQUMvQixTQUNFLHVCQUFDLDhHQUFJLFdBQVUsNkhBQ2IsaUNBQUMsOEdBQUksV0FBVSxpRUFDYjtBQUFBLDJCQUFDLDhHQUFLLE1BQUssS0FDVCxpQ0FBQyw0R0FBRSxXQUFVLDZDQUNYO0FBQUEsNkJBQUMsd0hBQVMsV0FBVSwwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEwQztBQUFBO0FBQUEsU0FENUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtBO0FBQUEsSUFFQSx1QkFBQywrR0FBSSxXQUFVLHFDQUNiO0FBQUEsNkJBQUMsNEdBQUUsTUFBSyxpQkFBZ0IsV0FBVSx3Q0FBdUMsNEJBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcUY7QUFBQSxNQUNyRix1QkFBQyw0R0FBRSxNQUFLLGNBQWEsV0FBVSx3Q0FBdUMsNkJBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbUY7QUFBQSxNQUNuRix1QkFBQyw0R0FBRSxNQUFLLFlBQVcsV0FBVSx3Q0FBdUMsdUJBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkU7QUFBQSxNQUMzRSx1QkFBQyw0R0FBRSxNQUFLLFlBQVcsV0FBVSx3Q0FBdUMsdUJBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkU7QUFBQSxNQUMzRTtBQUFBLFFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFFBQU87QUFBQSxVQUNQLEtBQUk7QUFBQSxVQUNKLFdBQVU7QUFBQSxVQUVWLGlDQUFDLDRIQUFXLFdBQVUscUNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXVEO0FBQUE7QUFBQSxRQU56RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQTtBQUFBLFNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWFBO0FBQUEsT0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXNCQSxLQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBd0JBO0FBRUo7QUFBQ0MsS0E1QnVCRDtBQUFNLElBQUFDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJTaVJvY2tldCIsIlNpVGVsZWdyYW0iLCJOYXZiYXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJuYXZiYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgU2lSb2NrZXQsIFNpVGVsZWdyYW0gfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgdy1mdWxsIHotNTAgYmctYmFja2dyb3VuZC85NSBiYWNrZHJvcC1ibHVyIHN1cHBvcnRzLVtiYWNrZHJvcC1maWx0ZXJdOmJnLWJhY2tncm91bmQvNjAgYm9yZGVyLWIgYm9yZGVyLWJvcmRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IGgtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgIDxTaVJvY2tldCBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICBST0NLQ09JTlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC02XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNob3ctaXQtd29ya3NcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5Ib3cgSXQgV29ya3M8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNtdXNpY2lhbnNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5Gb3IgTXVzaWNpYW5zPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjcm9hZG1hcFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPlJvYWRtYXA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICA8YSBcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3QubWUvcm9ja2NvaW4xMjNcIiBcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS85MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNpVGVsZWdyYW0gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufSJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci50c3gifQ==