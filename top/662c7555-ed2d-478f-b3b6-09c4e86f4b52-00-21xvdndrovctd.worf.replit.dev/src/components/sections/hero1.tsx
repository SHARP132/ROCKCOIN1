import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/sections/hero.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/sections/hero.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=cde83cc4";
import { Button } from "/src/components/ui/button.tsx";
import { MusicIcon, TrendingUpIcon } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=cde83cc4";
import { SiTelegram } from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-icons_si.js?v=cde83cc4";
export default function Hero() {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/sections/hero.tsx:8:4", "data-component-name": "section", className: "pt-32 pb-16 px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/hero.tsx:9:6", "data-component-name": "div", className: "container mx-auto text-center", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-replit-metadata": "client/src/components/sections/hero.tsx:10:8",
      "data-component-name": "motion.div",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      children: [
        /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/components/sections/hero.tsx:15:10", "data-component-name": "h1", className: "text-4xl md:text-6xl font-bold mb-6", children: [
          "Support Musicians with",
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/sections/hero.tsx:17:12", "data-component-name": "span", className: "text-primary", children: " ROCKCOIN" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/sections/hero.tsx:20:10", "data-component-name": "p", className: "text-xl text-muted-foreground max-w-2xl mx-auto mb-8", children: "The first cryptocurrency designed to empower musicians and connect them with fans. Our price grows with every beat sold." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/hero.tsx:25:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/sections/hero.tsx:26:12", "data-component-name": "Button", size: "lg", className: "gap-2", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/sections/hero.tsx:27:14", "data-component-name": "a", href: "#musicians", children: [
            /* @__PURE__ */ jsxDEV(MusicIcon, { "data-replit-metadata": "client/src/components/sections/hero.tsx:28:16", "data-component-name": "MusicIcon", className: "w-5 h-5" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
              lineNumber: 28,
              columnNumber: 17
            }, this),
            "Join as Musician"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/sections/hero.tsx:32:12", "data-component-name": "Button", size: "lg", variant: "outline", className: "gap-2", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/sections/hero.tsx:33:14", "data-component-name": "a", href: "#price-tracker", children: [
            /* @__PURE__ */ jsxDEV(TrendingUpIcon, { "data-replit-metadata": "client/src/components/sections/hero.tsx:34:16", "data-component-name": "TrendingUpIcon", className: "w-5 h-5" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
              lineNumber: 34,
              columnNumber: 17
            }, this),
            "View Price Chart"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/sections/hero.tsx:38:12", "data-component-name": "Button", size: "lg", variant: "secondary", className: "gap-2", asChild: true, children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-replit-metadata": "client/src/components/sections/hero.tsx:39:14",
              "data-component-name": "a",
              href: "https://t.me/rockcoin123",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ jsxDEV(SiTelegram, { "data-replit-metadata": "client/src/components/sections/hero.tsx:44:16", "data-component-name": "SiTelegram", className: "w-5 h-5" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
                  lineNumber: 44,
                  columnNumber: 17
                }, this),
                "Join Community"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
              lineNumber: 39,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/hero.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Hero;
var _c;
$RefreshReg$(_c, "Hero");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/sections/hero.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/sections/hero.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JZO0FBaEJaLDJCQUF1QjtBQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QyxTQUFTQSxjQUFjO0FBQ3ZCLFNBQVNDLFdBQVdDLHNCQUFzQjtBQUMxQyxTQUFTQyxrQkFBa0I7QUFFM0Isd0JBQXdCQyxPQUFPO0FBQzdCLFNBQ0UsdUJBQUMsc0hBQVEsV0FBVSxvQkFDakIsaUNBQUMsOEdBQUksV0FBVSxpQ0FDYjtBQUFBLElBQUMsT0FBTztBQUFBLElBQVA7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUNOLFNBQVMsRUFBRUMsU0FBUyxHQUFHQyxHQUFHLEdBQUc7QUFBQSxNQUM3QixTQUFTLEVBQUVELFNBQVMsR0FBR0MsR0FBRyxFQUFFO0FBQUEsTUFDNUIsWUFBWSxFQUFFQyxVQUFVLElBQUk7QUFBQSxNQUU1QjtBQUFBLCtCQUFDLDhHQUFHLFdBQVUsdUNBQXFDO0FBQUE7QUFBQSxVQUVqRCx1QkFBQyxrSEFBSyxXQUFVLGdCQUFlLHlCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF3QztBQUFBLGFBRjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFFBRUEsdUJBQUMsNEdBQUUsV0FBVSx3REFBc0Qsd0lBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFFBRUEsdUJBQUMsZ0hBQUksV0FBVSxrREFDYjtBQUFBLGlDQUFDLG9IQUFPLE1BQUssTUFBSyxXQUFVLFNBQVEsU0FBTyxNQUN6QyxpQ0FBQyw0R0FBRSxNQUFLLGNBQ047QUFBQSxtQ0FBQywwSEFBVSxXQUFVLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQThCO0FBQUE7QUFBQSxlQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFLQTtBQUFBLFVBQ0EsdUJBQUMsb0hBQU8sTUFBSyxNQUFLLFNBQVEsV0FBVSxXQUFVLFNBQVEsU0FBTyxNQUMzRCxpQ0FBQyw0R0FBRSxNQUFLLGtCQUNOO0FBQUEsbUNBQUMsb0lBQWUsV0FBVSxhQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFtQztBQUFBO0FBQUEsZUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxVQUNBLHVCQUFDLG9IQUFPLE1BQUssTUFBSyxTQUFRLGFBQVksV0FBVSxTQUFRLFNBQU8sTUFDN0Q7QUFBQSxZQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDQyxNQUFLO0FBQUEsY0FDTCxRQUFPO0FBQUEsY0FDUCxLQUFJO0FBQUEsY0FFSjtBQUFBLHVDQUFDLDRIQUFXLFdBQVUsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPQSxLQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBU0E7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdUJBO0FBQUE7QUFBQTtBQUFBLElBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXVDQSxLQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBeUNBLEtBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EyQ0E7QUFFSjtBQUFDQyxLQS9DdUJKO0FBQUksSUFBQUk7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkJ1dHRvbiIsIk11c2ljSWNvbiIsIlRyZW5kaW5nVXBJY29uIiwiU2lUZWxlZ3JhbSIsIkhlcm8iLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBNdXNpY0ljb24sIFRyZW5kaW5nVXBJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2lUZWxlZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTMyIHBiLTE2IHB4LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIG1iLTZcIj5cbiAgICAgICAgICAgIFN1cHBvcnQgTXVzaWNpYW5zIHdpdGhcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPiBST0NLQ09JTjwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWF4LXctMnhsIG14LWF1dG8gbWItOFwiPlxuICAgICAgICAgICAgVGhlIGZpcnN0IGNyeXB0b2N1cnJlbmN5IGRlc2lnbmVkIHRvIGVtcG93ZXIgbXVzaWNpYW5zIGFuZCBjb25uZWN0IHRoZW0gd2l0aCBmYW5zLlxuICAgICAgICAgICAgT3VyIHByaWNlIGdyb3dzIHdpdGggZXZlcnkgYmVhdCBzb2xkLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJnYXAtMlwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjbXVzaWNpYW5zXCI+XG4gICAgICAgICAgICAgICAgPE11c2ljSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICBKb2luIGFzIE11c2ljaWFuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImdhcC0yXCIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcmljZS10cmFja2VyXCI+XG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nVXBJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIFZpZXcgUHJpY2UgQ2hhcnRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJnYXAtMlwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3QubWUvcm9ja2NvaW4xMjNcIiBcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTaVRlbGVncmFtIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIEpvaW4gQ29tbXVuaXR5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLnRzeCJ9