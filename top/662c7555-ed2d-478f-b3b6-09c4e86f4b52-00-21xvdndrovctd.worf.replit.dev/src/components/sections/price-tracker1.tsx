import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/sections/price-tracker.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/sections/price-tracker.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=cde83cc4";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "/@fs/home/runner/workspace/node_modules/.vite/deps/recharts.js?v=cde83cc4";
const mockPriceData = [
  { date: "Jan", price: 1e-3 },
  { date: "Feb", price: 2e-3 },
  { date: "Mar", price: 3e-3 },
  { date: "Apr", price: 25e-4 },
  { date: "May", price: 4e-3 },
  { date: "Jun", price: 45e-4 }
];
const mockBeatsData = [
  {
    month: "Jan",
    beatstars: 120,
    soundcloud: 85,
    bandcamp: 45
  },
  {
    month: "Feb",
    beatstars: 150,
    soundcloud: 95,
    bandcamp: 60
  },
  {
    month: "Mar",
    beatstars: 180,
    soundcloud: 110,
    bandcamp: 75
  },
  {
    month: "Apr",
    beatstars: 200,
    soundcloud: 130,
    bandcamp: 90
  },
  {
    month: "May",
    beatstars: 250,
    soundcloud: 160,
    bandcamp: 110
  },
  {
    month: "Jun",
    beatstars: 300,
    soundcloud: 190,
    bandcamp: 140
  }
];
export default function PriceTracker() {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:55:4", "data-component-name": "section", id: "price-tracker", className: "py-16 px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:56:6", "data-component-name": "div", className: "container mx-auto", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:57:8",
      "data-component-name": "motion.div",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      viewport: { once: true },
      className: "space-y-8",
      children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:64:10", "data-component-name": "Card", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:65:12", "data-component-name": "CardHeader", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:66:14", "data-component-name": "CardTitle", children: "ROCKCOIN Price Chart" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:68:12", "data-component-name": "CardContent", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:69:14", "data-component-name": "div", className: "h-[300px] mt-4", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:70:16", "data-component-name": "ResponsiveContainer", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(LineChart, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:71:18", "data-component-name": "LineChart", data: mockPriceData, children: [
            /* @__PURE__ */ jsxDEV(XAxis, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:72:20", "data-component-name": "XAxis", dataKey: "date" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(YAxis, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:73:20", "data-component-name": "YAxis" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Tooltip, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:74:20", "data-component-name": "Tooltip" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 74,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              Line,
              {
                "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:75:20",
                "data-component-name": "Line",
                type: "monotone",
                dataKey: "price",
                stroke: "hsl(var(--primary))",
                strokeWidth: 2
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
                lineNumber: 75,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:87:10", "data-component-name": "Card", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:88:12", "data-component-name": "CardHeader", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:89:14", "data-component-name": "CardTitle", children: "Beat Sales Across Platforms" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:91:12", "data-component-name": "CardContent", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:92:14", "data-component-name": "div", className: "h-[300px] mt-4", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:93:16", "data-component-name": "ResponsiveContainer", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:94:18", "data-component-name": "BarChart", data: mockBeatsData, children: [
            /* @__PURE__ */ jsxDEV(XAxis, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:95:20", "data-component-name": "XAxis", dataKey: "month" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(YAxis, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:96:20", "data-component-name": "YAxis" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Tooltip, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:97:20", "data-component-name": "Tooltip" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Legend, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:98:20", "data-component-name": "Legend" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Bar, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:99:20", "data-component-name": "Bar", dataKey: "beatstars", name: "Beatstars", fill: "hsl(var(--primary))" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 99,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Bar, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:100:20", "data-component-name": "Bar", dataKey: "soundcloud", name: "SoundCloud", fill: "hsl(var(--secondary))" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Bar, { "data-replit-metadata": "client/src/components/sections/price-tracker.tsx:101:20", "data-component-name": "Bar", dataKey: "bandcamp", name: "Bandcamp", fill: "hsl(var(--accent))" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
      lineNumber: 57,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/sections/price-tracker.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
_c = PriceTracker;
var _c;
$RefreshReg$(_c, "PriceTracker");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/sections/price-tracker.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/sections/price-tracker.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUVjO0FBakVkLDJCQUF1QjtBQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QyxTQUFTQSxNQUFNQyxhQUFhQyxZQUFZQyxpQkFBaUI7QUFDekQsU0FBU0MsV0FBV0MsTUFBTUMsT0FBT0MsT0FBT0MsU0FBU0MscUJBQXFCQyxRQUFRQyxVQUFVQyxXQUFXO0FBRW5HLE1BQU1DLGdCQUFnQjtBQUFBLEVBQ3BCLEVBQUVDLE1BQU0sT0FBT0MsT0FBTyxLQUFNO0FBQUEsRUFDNUIsRUFBRUQsTUFBTSxPQUFPQyxPQUFPLEtBQU07QUFBQSxFQUM1QixFQUFFRCxNQUFNLE9BQU9DLE9BQU8sS0FBTTtBQUFBLEVBQzVCLEVBQUVELE1BQU0sT0FBT0MsT0FBTyxNQUFPO0FBQUEsRUFDN0IsRUFBRUQsTUFBTSxPQUFPQyxPQUFPLEtBQU07QUFBQSxFQUM1QixFQUFFRCxNQUFNLE9BQU9DLE9BQU8sTUFBTztBQUFDO0FBR2hDLE1BQU1DLGdCQUFnQjtBQUFBLEVBQ3BCO0FBQUEsSUFDRUMsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRUgsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRUgsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRUgsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRUgsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRUgsT0FBTztBQUFBLElBQ1BDLFdBQVc7QUFBQSxJQUNYQyxZQUFZO0FBQUEsSUFDWkMsVUFBVTtBQUFBLEVBQ1o7QUFBQztBQUdILHdCQUF3QkMsZUFBZTtBQUNyQyxTQUNFLHVCQUFDLGdJQUFRLElBQUcsaUJBQWdCLFdBQVUsY0FDcEMsaUNBQUMsd0hBQUksV0FBVSxxQkFDYjtBQUFBLElBQUMsT0FBTztBQUFBLElBQVA7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUNOLFNBQVMsRUFBRUMsU0FBUyxHQUFHQyxHQUFHLEdBQUc7QUFBQSxNQUM3QixhQUFhLEVBQUVELFNBQVMsR0FBR0MsR0FBRyxFQUFFO0FBQUEsTUFDaEMsWUFBWSxFQUFFQyxVQUFVLElBQUk7QUFBQSxNQUM1QixVQUFVLEVBQUVDLE1BQU0sS0FBSztBQUFBLE1BQ3ZCLFdBQVU7QUFBQSxNQUVWO0FBQUEsK0JBQUMseUhBQ0M7QUFBQSxpQ0FBQyxxSUFDQyxpQ0FBQyxtSUFBVSxvQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFDQSx1QkFBQyx1SUFDQyxpQ0FBQyx5SEFBSSxXQUFVLGtCQUNiLGlDQUFDLHVKQUFvQixPQUFNLFFBQU8sUUFBTyxRQUN2QyxpQ0FBQyxtSUFBVSxNQUFNWixlQUNmO0FBQUEsbUNBQUMsMkhBQU0sU0FBUSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXFCO0FBQUEsWUFDckIsdUJBQUMsNkhBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTTtBQUFBLFlBQ04sdUJBQUMsaUlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUTtBQUFBLFlBQ1I7QUFBQSxjQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0MsTUFBSztBQUFBLGdCQUNMLFNBQVE7QUFBQSxnQkFDUixRQUFPO0FBQUEsZ0JBQ1AsYUFBYTtBQUFBO0FBQUEsY0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFJaUI7QUFBQSxlQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVVBLEtBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFZQSxLQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBY0EsS0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWdCQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFxQkE7QUFBQSxRQUVBLHVCQUFDLHlIQUNDO0FBQUEsaUNBQUMscUlBQ0MsaUNBQUMsbUlBQVUsMkNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBc0MsS0FEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBLFVBQ0EsdUJBQUMsdUlBQ0MsaUNBQUMseUhBQUksV0FBVSxrQkFDYixpQ0FBQyx1SkFBb0IsT0FBTSxRQUFPLFFBQU8sUUFDdkMsaUNBQUMsaUlBQVMsTUFBTUcsZUFDZDtBQUFBLG1DQUFDLDJIQUFNLFNBQVEsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFzQjtBQUFBLFlBQ3RCLHVCQUFDLDZIQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQU07QUFBQSxZQUNOLHVCQUFDLGlJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVE7QUFBQSxZQUNSLHVCQUFDLCtIQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQU87QUFBQSxZQUNQLHVCQUFDLHVIQUFJLFNBQVEsYUFBWSxNQUFLLGFBQVksTUFBSyx5QkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0U7QUFBQSxZQUNwRSx1QkFBQyx3SEFBSSxTQUFRLGNBQWEsTUFBSyxjQUFhLE1BQUssMkJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXdFO0FBQUEsWUFDeEUsdUJBQUMsd0hBQUksU0FBUSxZQUFXLE1BQUssWUFBVyxNQUFLLHdCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpRTtBQUFBLGVBUG5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUUEsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVVBLEtBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFZQSxLQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBY0E7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbUJBO0FBQUE7QUFBQTtBQUFBLElBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWtEQSxLQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBb0RBLEtBckRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FzREE7QUFFSjtBQUFDVSxLQTFEdUJMO0FBQVksSUFBQUs7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiTGVnZW5kIiwiQmFyQ2hhcnQiLCJCYXIiLCJtb2NrUHJpY2VEYXRhIiwiZGF0ZSIsInByaWNlIiwibW9ja0JlYXRzRGF0YSIsIm1vbnRoIiwiYmVhdHN0YXJzIiwic291bmRjbG91ZCIsImJhbmRjYW1wIiwiUHJpY2VUcmFja2VyIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsIm9uY2UiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcmljZS10cmFja2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIExlZ2VuZCwgQmFyQ2hhcnQsIEJhciB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5jb25zdCBtb2NrUHJpY2VEYXRhID0gW1xuICB7IGRhdGU6IFwiSmFuXCIsIHByaWNlOiAwLjAwMSB9LFxuICB7IGRhdGU6IFwiRmViXCIsIHByaWNlOiAwLjAwMiB9LFxuICB7IGRhdGU6IFwiTWFyXCIsIHByaWNlOiAwLjAwMyB9LFxuICB7IGRhdGU6IFwiQXByXCIsIHByaWNlOiAwLjAwMjUgfSxcbiAgeyBkYXRlOiBcIk1heVwiLCBwcmljZTogMC4wMDQgfSxcbiAgeyBkYXRlOiBcIkp1blwiLCBwcmljZTogMC4wMDQ1IH1cbl07XG5cbmNvbnN0IG1vY2tCZWF0c0RhdGEgPSBbXG4gIHsgXG4gICAgbW9udGg6IFwiSmFuXCIsXG4gICAgYmVhdHN0YXJzOiAxMjAsXG4gICAgc291bmRjbG91ZDogODUsXG4gICAgYmFuZGNhbXA6IDQ1XG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJGZWJcIixcbiAgICBiZWF0c3RhcnM6IDE1MCxcbiAgICBzb3VuZGNsb3VkOiA5NSxcbiAgICBiYW5kY2FtcDogNjBcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIk1hclwiLFxuICAgIGJlYXRzdGFyczogMTgwLFxuICAgIHNvdW5kY2xvdWQ6IDExMCxcbiAgICBiYW5kY2FtcDogNzVcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIkFwclwiLFxuICAgIGJlYXRzdGFyczogMjAwLFxuICAgIHNvdW5kY2xvdWQ6IDEzMCxcbiAgICBiYW5kY2FtcDogOTBcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIk1heVwiLFxuICAgIGJlYXRzdGFyczogMjUwLFxuICAgIHNvdW5kY2xvdWQ6IDE2MCxcbiAgICBiYW5kY2FtcDogMTEwXG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJKdW5cIixcbiAgICBiZWF0c3RhcnM6IDMwMCxcbiAgICBzb3VuZGNsb3VkOiAxOTAsXG4gICAgYmFuZGNhbXA6IDE0MFxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZVRyYWNrZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljZS10cmFja2VyXCIgY2xhc3NOYW1lPVwicHktMTYgcHgtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlJPQ0tDT0lOIFByaWNlIENoYXJ0PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMzAwcHhdIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e21vY2tQcmljZURhdGF9PlxuICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8WUF4aXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInByaWNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiaHNsKHZhcigtLXByaW1hcnkpKVwiIFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5CZWF0IFNhbGVzIEFjcm9zcyBQbGF0Zm9ybXM8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMDBweF0gbXQtNFwiPlxuICAgICAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXttb2NrQmVhdHNEYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJtb250aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxZQXhpcyAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCAvPlxuICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cImJlYXRzdGFyc1wiIG5hbWU9XCJCZWF0c3RhcnNcIiBmaWxsPVwiaHNsKHZhcigtLXByaW1hcnkpKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInNvdW5kY2xvdWRcIiBuYW1lPVwiU291bmRDbG91ZFwiIGZpbGw9XCJoc2wodmFyKC0tc2Vjb25kYXJ5KSlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJiYW5kY2FtcFwiIG5hbWU9XCJCYW5kY2FtcFwiIGZpbGw9XCJoc2wodmFyKC0tYWNjZW50KSlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL3ByaWNlLXRyYWNrZXIudHN4In0=