import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx?v=mZzkrFNJqaluZunH94_uo");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cde83cc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Switch, Route } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=cde83cc4";
import { queryClient } from "/src/lib/queryClient.ts";
import { QueryClientProvider } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@tanstack_react-query.js?v=cde83cc4";
import { Toaster } from "/src/components/ui/toaster.tsx";
import NotFound from "/src/pages/not-found.tsx";
import Home from "/src/pages/home.tsx";
function Router() {
  return /* @__PURE__ */ jsxDEV(Switch, { "data-replit-metadata": "client/src/App.tsx:10:4", "data-component-name": "Switch", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:11:6", "data-component-name": "Route", path: "/", component: Home }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:12:6", "data-component-name": "Route", component: NotFound }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Router;
function App() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-replit-metadata": "client/src/App.tsx:19:4", "data-component-name": "QueryClientProvider", client: queryClient, children: [
    /* @__PURE__ */ jsxDEV(Router, { "data-replit-metadata": "client/src/App.tsx:20:6", "data-component-name": "Router" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-replit-metadata": "client/src/App.tsx:21:6", "data-component-name": "Toaster" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVU07QUFWTiwyQkFBc0I7QUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RDLFNBQVNBLG1CQUFtQjtBQUM1QixTQUFTQywyQkFBMkI7QUFDcEMsU0FBU0MsZUFBZTtBQUN4QixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFVBQVU7QUFFakIsU0FBU0MsU0FBUztBQUNoQixTQUNFLHVCQUFDLDhGQUNDO0FBQUEsMkJBQUMsNEZBQU0sTUFBSyxLQUFJLFdBQVdELFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0M7QUFBQSxJQUNoQyx1QkFBQyw0RkFBTSxXQUFXRCxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0FGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdBO0FBRUo7QUFBQ0csS0FQUUQ7QUFTVCxTQUFTRSxNQUFNO0FBQ2IsU0FDRSx1QkFBQyx3SEFBb0IsUUFBUVAsYUFDM0I7QUFBQSwyQkFBQyxnR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUNQLHVCQUFDLGtHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUTtBQUFBLE9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdBO0FBRUo7QUFBQ1EsTUFQUUQ7QUFTVCxlQUFlQTtBQUFJLElBQUFELElBQUFFO0FBQUFDLGFBQUFILElBQUE7QUFBQUcsYUFBQUQsS0FBQSIsIm5hbWVzIjpbInF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlRvYXN0ZXIiLCJOb3RGb3VuZCIsIkhvbWUiLCJSb3V0ZXIiLCJfYyIsIkFwcCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tIFwid291dGVyXCI7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuL2xpYi9xdWVyeUNsaWVudFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiQC9wYWdlcy9ub3QtZm91bmRcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL3BhZ2VzL2hvbWVcIjtcblxuZnVuY3Rpb24gUm91dGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2g+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFJvdXRlciAvPlxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL0FwcC50c3gifQ==