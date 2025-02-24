import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/sections/how-it-works.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/sections/how-it-works.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=cde83cc4";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Coins, Music2, TrendingUp, Users } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=cde83cc4";
const features = [
  {
    icon: /* @__PURE__ */ jsxDEV(Music2, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:7:8", "data-component-name": "Music2", className: "w-12 h-12 text-primary" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    title: "Musicians Upload Beats",
    description: "Artists can upload and sell their beats directly on our platform"
  },
  {
    icon: /* @__PURE__ */ jsxDEV(Coins, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:12:8", "data-component-name": "Coins", className: "w-12 h-12 text-primary" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    title: "Fans Buy with ROCKCOIN",
    description: "Supporters use ROCKCOIN to purchase beats and support artists"
  },
  {
    icon: /* @__PURE__ */ jsxDEV(TrendingUp, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:17:8", "data-component-name": "TrendingUp", className: "w-12 h-12 text-primary" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    title: "Price Grows",
    description: "Each beat sale increases ROCKCOIN's value, benefiting all holders"
  },
  {
    icon: /* @__PURE__ */ jsxDEV(Users, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:22:8", "data-component-name": "Users", className: "w-12 h-12 text-primary" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    title: "Community Growth",
    description: "A growing ecosystem of musicians and supporters"
  }
];
export default function HowItWorks() {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:30:4", "data-component-name": "section", id: "how-it-works", className: "py-16 px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:31:6", "data-component-name": "div", className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:32:8",
        "data-component-name": "motion.div",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:39:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "How ROCKCOIN Works" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:40:10", "data-component-name": "p", className: "text-muted-foreground max-w-2xl mx-auto", children: "Our unique ecosystem connects musicians with fans through cryptocurrency" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:45:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map(
      (feature, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:47:10",
          "data-component-name": "motion.div",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:54:14", "data-component-name": "Card", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:55:16", "data-component-name": "CardContent", className: "pt-6 text-center", children: [
            feature.icon,
            /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:57:18", "data-component-name": "h3", className: "text-xl font-semibold mt-4 mb-2", children: feature.title }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/sections/how-it-works.tsx:58:18", "data-component-name": "p", className: "text-muted-foreground", children: feature.description }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
              lineNumber: 58,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        },
        index,
        false,
        {
          fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/how-it-works.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
_c = HowItWorks;
var _c;
$RefreshReg$(_c, "HowItWorks");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/sections/how-it-works.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/sections/how-it-works.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUEsSUFDRCxLQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0JBO0FBQUEsT0FoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlDQSxLQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUNBO0FBRUo7QUFBQ0UsS0F2Q3VCVDtBQUFVLElBQUFTO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDb2lucyIsIk11c2ljMiIsIlRyZW5kaW5nVXAiLCJVc2VycyIsImZlYXR1cmVzIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJIb3dJdFdvcmtzIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsIm9uY2UiLCJtYXAiLCJmZWF0dXJlIiwiaW5kZXgiLCJkZWxheSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImhvdy1pdC13b3Jrcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBDb2lucywgTXVzaWMyLCBUcmVuZGluZ1VwLCBVc2VycyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgZmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpY29uOiA8TXVzaWMyIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LXByaW1hcnlcIiAvPixcbiAgICB0aXRsZTogXCJNdXNpY2lhbnMgVXBsb2FkIEJlYXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXJ0aXN0cyBjYW4gdXBsb2FkIGFuZCBzZWxsIHRoZWlyIGJlYXRzIGRpcmVjdGx5IG9uIG91ciBwbGF0Zm9ybVwiXG4gIH0sXG4gIHtcbiAgICBpY29uOiA8Q29pbnMgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtcHJpbWFyeVwiIC8+LFxuICAgIHRpdGxlOiBcIkZhbnMgQnV5IHdpdGggUk9DS0NPSU5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBwb3J0ZXJzIHVzZSBST0NLQ09JTiB0byBwdXJjaGFzZSBiZWF0cyBhbmQgc3VwcG9ydCBhcnRpc3RzXCJcbiAgfSxcbiAge1xuICAgIGljb246IDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LXByaW1hcnlcIiAvPixcbiAgICB0aXRsZTogXCJQcmljZSBHcm93c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVhY2ggYmVhdCBzYWxlIGluY3JlYXNlcyBST0NLQ09JTidzIHZhbHVlLCBiZW5lZml0aW5nIGFsbCBob2xkZXJzXCJcbiAgfSxcbiAge1xuICAgIGljb246IDxVc2VycyBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1wcmltYXJ5XCIgLz4sXG4gICAgdGl0bGU6IFwiQ29tbXVuaXR5IEdyb3d0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZ3Jvd2luZyBlY29zeXN0ZW0gb2YgbXVzaWNpYW5zIGFuZCBzdXBwb3J0ZXJzXCJcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG93SXRXb3JrcygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImhvdy1pdC13b3Jrc1wiIGNsYXNzTmFtZT1cInB5LTE2IHB4LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Ib3cgUk9DS0NPSU4gV29ya3M8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgT3VyIHVuaXF1ZSBlY29zeXN0ZW0gY29ubmVjdHMgbXVzaWNpYW5zIHdpdGggZmFucyB0aHJvdWdoIGNyeXB0b2N1cnJlbmN5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC02XCI+XG4gICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwdC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5pY29ufVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtdC00IG1iLTJcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9ob3ctaXQtd29ya3MudHN4In0=