import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/sections/roadmap.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/sections/roadmap.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=cde83cc4";
import { Card, CardContent } from "/src/components/ui/card.tsx";
const roadmapItems = [
  {
    quarter: "Q2 2024",
    title: "Launch Phase",
    items: [
      "Initial ROCKCOIN release",
      "Community building",
      "Website launch"
    ]
  },
  {
    quarter: "Q3 2024",
    title: "Platform Development",
    items: [
      "Musician onboarding",
      "Beat marketplace beta",
      "Mobile app development"
    ]
  },
  {
    quarter: "Q4 2024",
    title: "Ecosystem Growth",
    items: [
      "Exchange listings",
      "Partnership announcements",
      "Community events"
    ]
  },
  {
    quarter: "Q1 2025",
    title: "Expansion",
    items: [
      "Global marketing campaign",
      "Advanced features rollout",
      "Major partnerships"
    ]
  }
];
export default function Roadmap() {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:45:4", "data-component-name": "section", id: "roadmap", className: "py-16 px-4 bg-accent/5", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:46:6", "data-component-name": "div", className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/sections/roadmap.tsx:47:8",
        "data-component-name": "motion.div",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:54:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "Project Roadmap" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:55:10", "data-component-name": "p", className: "text-muted-foreground max-w-2xl mx-auto", children: "Our journey to revolutionize music industry support through cryptocurrency" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:60:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: roadmapItems.map(
      (item, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/components/sections/roadmap.tsx:62:10",
          "data-component-name": "motion.div",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:69:14", "data-component-name": "Card", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:70:16", "data-component-name": "CardContent", className: "pt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:71:18", "data-component-name": "div", className: "text-primary font-semibold mb-2", children: item.quarter }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:72:18", "data-component-name": "h3", className: "text-xl font-semibold mb-4", children: item.title }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:73:18", "data-component-name": "ul", className: "space-y-2", children: item.items.map(
              (bullet, bulletIndex) => /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/sections/roadmap.tsx:75:18", "data-component-name": "li", className: "text-muted-foreground", children: [
                "• ",
                bullet
              ] }, bulletIndex, true, {
                fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        },
        index,
        false,
        {
          fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/roadmap.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_c = Roadmap;
var _c;
$RefreshReg$(_c, "Roadmap");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/sections/roadmap.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/sections/roadmap.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUEsaUJBVUEsS0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVlBO0FBQUE7QUFBQSxRQWxCS0g7QUFBQUEsUUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Bb0JBO0FBQUEsSUFDRCxLQXZCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBd0JBO0FBQUEsT0F0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXVDQSxLQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBeUNBO0FBRUo7QUFBQ0ksS0E3Q3VCWDtBQUFPLElBQUFXO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJyb2FkbWFwSXRlbXMiLCJxdWFydGVyIiwidGl0bGUiLCJpdGVtcyIsIlJvYWRtYXAiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwib25jZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlbGF5IiwiYnVsbGV0IiwiYnVsbGV0SW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJyb2FkbWFwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcblxuY29uc3Qgcm9hZG1hcEl0ZW1zID0gW1xuICB7XG4gICAgcXVhcnRlcjogXCJRMiAyMDI0XCIsXG4gICAgdGl0bGU6IFwiTGF1bmNoIFBoYXNlXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIFwiSW5pdGlhbCBST0NLQ09JTiByZWxlYXNlXCIsXG4gICAgICBcIkNvbW11bml0eSBidWlsZGluZ1wiLFxuICAgICAgXCJXZWJzaXRlIGxhdW5jaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgcXVhcnRlcjogXCJRMyAyMDI0XCIsXG4gICAgdGl0bGU6IFwiUGxhdGZvcm0gRGV2ZWxvcG1lbnRcIixcbiAgICBpdGVtczogW1xuICAgICAgXCJNdXNpY2lhbiBvbmJvYXJkaW5nXCIsXG4gICAgICBcIkJlYXQgbWFya2V0cGxhY2UgYmV0YVwiLFxuICAgICAgXCJNb2JpbGUgYXBwIGRldmVsb3BtZW50XCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBxdWFydGVyOiBcIlE0IDIwMjRcIixcbiAgICB0aXRsZTogXCJFY29zeXN0ZW0gR3Jvd3RoXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIFwiRXhjaGFuZ2UgbGlzdGluZ3NcIixcbiAgICAgIFwiUGFydG5lcnNoaXAgYW5ub3VuY2VtZW50c1wiLFxuICAgICAgXCJDb21tdW5pdHkgZXZlbnRzXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBxdWFydGVyOiBcIlExIDIwMjVcIixcbiAgICB0aXRsZTogXCJFeHBhbnNpb25cIixcbiAgICBpdGVtczogW1xuICAgICAgXCJHbG9iYWwgbWFya2V0aW5nIGNhbXBhaWduXCIsXG4gICAgICBcIkFkdmFuY2VkIGZlYXR1cmVzIHJvbGxvdXRcIixcbiAgICAgIFwiTWFqb3IgcGFydG5lcnNoaXBzXCJcbiAgICBdXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvYWRtYXAoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJyb2FkbWFwXCIgY2xhc3NOYW1lPVwicHktMTYgcHgtNCBiZy1hY2NlbnQvNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlByb2plY3QgUm9hZG1hcDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBPdXIgam91cm5leSB0byByZXZvbHV0aW9uaXplIG11c2ljIGluZHVzdHJ5IHN1cHBvcnQgdGhyb3VnaCBjcnlwdG9jdXJyZW5jeVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgIHtyb2FkbWFwSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiwgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGQgbWItMlwiPntpdGVtLnF1YXJ0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtcy5tYXAoKGJ1bGxldCwgYnVsbGV0SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtidWxsZXRJbmRleH0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDigKIge2J1bGxldH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvcm9hZG1hcC50c3gifQ==