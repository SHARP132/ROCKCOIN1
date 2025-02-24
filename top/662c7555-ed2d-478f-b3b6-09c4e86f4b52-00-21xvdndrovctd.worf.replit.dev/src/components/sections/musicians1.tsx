import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/sections/musicians.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/sections/musicians.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=cde83cc4";
import { Button } from "/src/components/ui/button.tsx";
import { Check } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=cde83cc4";
const benefits = [
  "Direct fan support through cryptocurrency",
  "Increased visibility in the music community",
  "Additional revenue stream from beat sales",
  "Grow with the ROCKCOIN ecosystem",
  "Access to dedicated musician features",
  "Connect with a supportive community"
];
export default function Musicians() {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:16:4", "data-component-name": "section", id: "musicians", className: "py-16 px-4 bg-accent/5", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:17:6", "data-component-name": "div", className: "container mx-auto", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:18:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/sections/musicians.tsx:19:10",
        "data-component-name": "motion.div",
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:25:12", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "For Musicians" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:26:12", "data-component-name": "p", className: "text-muted-foreground mb-8", children: "Join the revolution in music monetization. ROCKCOIN provides a new way to connect with fans and earn from your music." }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:31:12", "data-component-name": "ul", className: "space-y-4 mb-8", children: benefits.map(
            (benefit, index) => /* @__PURE__ */ jsxDEV(
              motion.li,
              {
                "data-replit-metadata": "client/src/components/sections/musicians.tsx:33:14",
                "data-component-name": "motion.li",
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: index * 0.1 },
                viewport: { once: true },
                className: "flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxDEV(Check, { "data-replit-metadata": "client/src/components/sections/musicians.tsx:41:18", "data-component-name": "Check", className: "text-primary" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
                    lineNumber: 41,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:42:18", "data-component-name": "span", children: benefit }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
                    lineNumber: 42,
                    columnNumber: 19
                  }, this)
                ]
              },
              index,
              true,
              {
                fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
                lineNumber: 33,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/sections/musicians.tsx:47:12", "data-component-name": "Button", size: "lg", children: "Start Earning with ROCKCOIN" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
        lineNumber: 19,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/sections/musicians.tsx:50:10",
        "data-component-name": "motion.div",
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        className: "relative aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:57:12", "data-component-name": "div", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:58:14", "data-component-name": "div", className: "w-32 h-32 rounded-full bg-primary/20 animate-pulse" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/musicians.tsx:60:12", "data-component-name": "div", className: "text-6xl", children: "🎸" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/musicians.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
_c = Musicians;
var _c;
$RefreshReg$(_c, "Musicians");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/sections/musicians.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/sections/musicians.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBLElBV0E7QUFBQSxPQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNENBLEtBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E4Q0EsS0EvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdEQTtBQUVKO0FBQUNLLEtBcER1QlQ7QUFBUyxJQUFBUztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiQnV0dG9uIiwiQ2hlY2siLCJiZW5lZml0cyIsIk11c2ljaWFucyIsIm9wYWNpdHkiLCJ4IiwiZHVyYXRpb24iLCJvbmNlIiwibWFwIiwiYmVuZWZpdCIsImluZGV4IiwiZGVsYXkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtdXNpY2lhbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IGJlbmVmaXRzID0gW1xuICBcIkRpcmVjdCBmYW4gc3VwcG9ydCB0aHJvdWdoIGNyeXB0b2N1cnJlbmN5XCIsXG4gIFwiSW5jcmVhc2VkIHZpc2liaWxpdHkgaW4gdGhlIG11c2ljIGNvbW11bml0eVwiLFxuICBcIkFkZGl0aW9uYWwgcmV2ZW51ZSBzdHJlYW0gZnJvbSBiZWF0IHNhbGVzXCIsXG4gIFwiR3JvdyB3aXRoIHRoZSBST0NLQ09JTiBlY29zeXN0ZW1cIixcbiAgXCJBY2Nlc3MgdG8gZGVkaWNhdGVkIG11c2ljaWFuIGZlYXR1cmVzXCIsXG4gIFwiQ29ubmVjdCB3aXRoIGEgc3VwcG9ydGl2ZSBjb21tdW5pdHlcIlxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNpYW5zKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwibXVzaWNpYW5zXCIgY2xhc3NOYW1lPVwicHktMTYgcHgtNCBiZy1hY2NlbnQvNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+Rm9yIE11c2ljaWFuczwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItOFwiPlxuICAgICAgICAgICAgICBKb2luIHRoZSByZXZvbHV0aW9uIGluIG11c2ljIG1vbmV0aXphdGlvbi4gUk9DS0NPSU4gcHJvdmlkZXMgYSBuZXcgd2F5XG4gICAgICAgICAgICAgIHRvIGNvbm5lY3Qgd2l0aCBmYW5zIGFuZCBlYXJuIGZyb20geW91ciBtdXNpYy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtYi04XCI+XG4gICAgICAgICAgICAgIHtiZW5lZml0cy5tYXAoKGJlbmVmaXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19XG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2JlbmVmaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCI+U3RhcnQgRWFybmluZyB3aXRoIFJPQ0tDT0lOPC9CdXR0b24+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZSByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeS8yMCB0by1hY2NlbnQvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8yMCBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bFwiPvCfjrg8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9tdXNpY2lhbnMudHN4In0=