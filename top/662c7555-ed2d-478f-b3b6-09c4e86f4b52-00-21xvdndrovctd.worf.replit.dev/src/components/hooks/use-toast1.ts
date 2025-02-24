import __vite__cjsImport0_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=cde83cc4"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport0_react);
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
export { useToast, toast };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZS10b2FzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgdHlwZSB7XG4gIFRvYXN0QWN0aW9uRWxlbWVudCxcbiAgVG9hc3RQcm9wcyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdFwiXG5cbmNvbnN0IFRPQVNUX0xJTUlUID0gMVxuY29uc3QgVE9BU1RfUkVNT1ZFX0RFTEFZID0gMTAwMDAwMFxuXG50eXBlIFRvYXN0ZXJUb2FzdCA9IFRvYXN0UHJvcHMgJiB7XG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVzY3JpcHRpb24/OiBSZWFjdC5SZWFjdE5vZGVcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25FbGVtZW50XG59XG5cbmNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBBRERfVE9BU1Q6IFwiQUREX1RPQVNUXCIsXG4gIFVQREFURV9UT0FTVDogXCJVUERBVEVfVE9BU1RcIixcbiAgRElTTUlTU19UT0FTVDogXCJESVNNSVNTX1RPQVNUXCIsXG4gIFJFTU9WRV9UT0FTVDogXCJSRU1PVkVfVE9BU1RcIixcbn0gYXMgY29uc3RcblxubGV0IGNvdW50ID0gMFxuXG5mdW5jdGlvbiBnZW5JZCgpIHtcbiAgY291bnQgPSAoY291bnQgKyAxKSAlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIHJldHVybiBjb3VudC50b1N0cmluZygpXG59XG5cbnR5cGUgQWN0aW9uVHlwZSA9IHR5cGVvZiBhY3Rpb25UeXBlc1xuXG50eXBlIEFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIkFERF9UT0FTVFwiXVxuICAgICAgdG9hc3Q6IFRvYXN0ZXJUb2FzdFxuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlW1wiVVBEQVRFX1RPQVNUXCJdXG4gICAgICB0b2FzdDogUGFydGlhbDxUb2FzdGVyVG9hc3Q+XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVbXCJESVNNSVNTX1RPQVNUXCJdXG4gICAgICB0b2FzdElkPzogVG9hc3RlclRvYXN0W1wiaWRcIl1cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIlJFTU9WRV9UT0FTVFwiXVxuICAgICAgdG9hc3RJZD86IFRvYXN0ZXJUb2FzdFtcImlkXCJdXG4gICAgfVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB0b2FzdHM6IFRvYXN0ZXJUb2FzdFtdXG59XG5cbmNvbnN0IHRvYXN0VGltZW91dHMgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+KClcblxuY29uc3QgYWRkVG9SZW1vdmVRdWV1ZSA9ICh0b2FzdElkOiBzdHJpbmcpID0+IHtcbiAgaWYgKHRvYXN0VGltZW91dHMuaGFzKHRvYXN0SWQpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9hc3RUaW1lb3V0cy5kZWxldGUodG9hc3RJZClcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlJFTU9WRV9UT0FTVFwiLFxuICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICB9KVxuICB9LCBUT0FTVF9SRU1PVkVfREVMQVkpXG5cbiAgdG9hc3RUaW1lb3V0cy5zZXQodG9hc3RJZCwgdGltZW91dClcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9BU1RcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IFthY3Rpb24udG9hc3QsIC4uLnN0YXRlLnRvYXN0c10uc2xpY2UoMCwgVE9BU1RfTElNSVQpLFxuICAgICAgfVxuXG4gICAgY2FzZSBcIlVQREFURV9UT0FTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcCgodCkgPT5cbiAgICAgICAgICB0LmlkID09PSBhY3Rpb24udG9hc3QuaWQgPyB7IC4uLnQsIC4uLmFjdGlvbi50b2FzdCB9IDogdFxuICAgICAgICApLFxuICAgICAgfVxuXG4gICAgY2FzZSBcIkRJU01JU1NfVE9BU1RcIjoge1xuICAgICAgY29uc3QgeyB0b2FzdElkIH0gPSBhY3Rpb25cblxuICAgICAgLy8gISBTaWRlIGVmZmVjdHMgISAtIFRoaXMgY291bGQgYmUgZXh0cmFjdGVkIGludG8gYSBkaXNtaXNzVG9hc3QoKSBhY3Rpb24sXG4gICAgICAvLyBidXQgSSdsbCBrZWVwIGl0IGhlcmUgZm9yIHNpbXBsaWNpdHlcbiAgICAgIGlmICh0b2FzdElkKSB7XG4gICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3RJZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRvYXN0cy5mb3JFYWNoKCh0b2FzdCkgPT4ge1xuICAgICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3QuaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5tYXAoKHQpID0+XG4gICAgICAgICAgdC5pZCA9PT0gdG9hc3RJZCB8fCB0b2FzdElkID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdFxuICAgICAgICApLFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIFwiUkVNT1ZFX1RPQVNUXCI6XG4gICAgICBpZiAoYWN0aW9uLnRvYXN0SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvYXN0czogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IGFjdGlvbi50b2FzdElkKSxcbiAgICAgIH1cbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lcnM6IEFycmF5PChzdGF0ZTogU3RhdGUpID0+IHZvaWQ+ID0gW11cblxubGV0IG1lbW9yeVN0YXRlOiBTdGF0ZSA9IHsgdG9hc3RzOiBbXSB9XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gIG1lbW9yeVN0YXRlID0gcmVkdWNlcihtZW1vcnlTdGF0ZSwgYWN0aW9uKVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcihtZW1vcnlTdGF0ZSlcbiAgfSlcbn1cblxudHlwZSBUb2FzdCA9IE9taXQ8VG9hc3RlclRvYXN0LCBcImlkXCI+XG5cbmZ1bmN0aW9uIHRvYXN0KHsgLi4ucHJvcHMgfTogVG9hc3QpIHtcbiAgY29uc3QgaWQgPSBnZW5JZCgpXG5cbiAgY29uc3QgdXBkYXRlID0gKHByb3BzOiBUb2FzdGVyVG9hc3QpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfVE9BU1RcIixcbiAgICAgIHRvYXN0OiB7IC4uLnByb3BzLCBpZCB9LFxuICAgIH0pXG4gIGNvbnN0IGRpc21pc3MgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiRElTTUlTU19UT0FTVFwiLCB0b2FzdElkOiBpZCB9KVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBcIkFERF9UT0FTVFwiLFxuICAgIHRvYXN0OiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGlkLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIG9uT3BlbkNoYW5nZTogKG9wZW4pID0+IHtcbiAgICAgICAgaWYgKCFvcGVuKSBkaXNtaXNzKClcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICBkaXNtaXNzLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VUb2FzdCgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxTdGF0ZT4obWVtb3J5U3RhdGUpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChzZXRTdGF0ZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihzZXRTdGF0ZSlcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGVdKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdG9hc3QsXG4gICAgZGlzbWlzczogKHRvYXN0SWQ/OiBzdHJpbmcpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJESVNNSVNTX1RPQVNUXCIsIHRvYXN0SWQgfSksXG4gIH1cbn1cblxuZXhwb3J0IHsgdXNlVG9hc3QsIHRvYXN0IH1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxXQUFXO0FBT3ZCLE1BQU0sY0FBYztBQUNwQixNQUFNLHFCQUFxQjtBQVMzQixNQUFNLGNBQWM7QUFBQSxFQUNsQixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixjQUFjO0FBQ2hCO0FBRUEsSUFBSSxRQUFRO0FBRVosU0FBUyxRQUFRO0FBQ2YsV0FBUyxRQUFRLEtBQUssT0FBTztBQUM3QixTQUFPLE1BQU0sU0FBUztBQUN4QjtBQTBCQSxNQUFNLGdCQUFnQixvQkFBSSxJQUEyQztBQUVyRSxNQUFNLG1CQUFtQixDQUFDLFlBQW9CO0FBQzVDLE1BQUksY0FBYyxJQUFJLE9BQU8sR0FBRztBQUM5QjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFVBQVUsV0FBVyxNQUFNO0FBQy9CLGtCQUFjLE9BQU8sT0FBTztBQUM1QixhQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsR0FBRyxrQkFBa0I7QUFFckIsZ0JBQWMsSUFBSSxTQUFTLE9BQU87QUFDcEM7QUFFTyxhQUFNLFVBQVUsQ0FBQyxPQUFjLFdBQTBCO0FBQzlELFVBQVEsT0FBTyxNQUFNO0FBQUEsSUFDbkIsS0FBSztBQUNILGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFFBQVEsQ0FBQyxPQUFPLE9BQU8sR0FBRyxNQUFNLE1BQU0sRUFBRSxNQUFNLEdBQUcsV0FBVztBQUFBLE1BQzlEO0FBQUEsSUFFRixLQUFLO0FBQ0gsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsUUFBUSxNQUFNLE9BQU87QUFBQSxVQUFJLENBQUMsTUFDeEIsRUFBRSxPQUFPLE9BQU8sTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxNQUFNLElBQUk7QUFBQSxRQUN6RDtBQUFBLE1BQ0Y7QUFBQSxJQUVGLEtBQUssaUJBQWlCO0FBQ3BCLFlBQU0sRUFBRSxRQUFRLElBQUk7QUFJcEIsVUFBSSxTQUFTO0FBQ1gseUJBQWlCLE9BQU87QUFBQSxNQUMxQixPQUFPO0FBQ0wsY0FBTSxPQUFPLFFBQVEsQ0FBQ0EsV0FBVTtBQUM5QiwyQkFBaUJBLE9BQU0sRUFBRTtBQUFBLFFBQzNCLENBQUM7QUFBQSxNQUNIO0FBRUEsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsUUFBUSxNQUFNLE9BQU87QUFBQSxVQUFJLENBQUMsTUFDeEIsRUFBRSxPQUFPLFdBQVcsWUFBWSxTQUM1QjtBQUFBLFlBQ0UsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFVBQ1IsSUFDQTtBQUFBLFFBQ047QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUNILFVBQUksT0FBTyxZQUFZLFFBQVc7QUFDaEMsZUFBTztBQUFBLFVBQ0wsR0FBRztBQUFBLFVBQ0gsUUFBUSxDQUFDO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxRQUFRLE1BQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sT0FBTyxPQUFPO0FBQUEsTUFDNUQ7QUFBQSxFQUNKO0FBQ0Y7QUFFQSxNQUFNLFlBQTJDLENBQUM7QUFFbEQsSUFBSSxjQUFxQixFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBRXRDLFNBQVMsU0FBUyxRQUFnQjtBQUNoQyxnQkFBYyxRQUFRLGFBQWEsTUFBTTtBQUN6QyxZQUFVLFFBQVEsQ0FBQyxhQUFhO0FBQzlCLGFBQVMsV0FBVztBQUFBLEVBQ3RCLENBQUM7QUFDSDtBQUlBLFNBQVMsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFVO0FBQ2xDLFFBQU0sS0FBSyxNQUFNO0FBRWpCLFFBQU0sU0FBUyxDQUFDQyxXQUNkLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU8sRUFBRSxHQUFHQSxRQUFPLEdBQUc7QUFBQSxFQUN4QixDQUFDO0FBQ0gsUUFBTSxVQUFVLE1BQU0sU0FBUyxFQUFFLE1BQU0saUJBQWlCLFNBQVMsR0FBRyxDQUFDO0FBRXJFLFdBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNIO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixjQUFjLENBQUMsU0FBUztBQUN0QixZQUFJLENBQUMsS0FBTSxTQUFRO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsV0FBVztBQUNsQixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUksTUFBTSxTQUFnQixXQUFXO0FBRTNELFFBQU0sVUFBVSxNQUFNO0FBQ3BCLGNBQVUsS0FBSyxRQUFRO0FBQ3ZCLFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUSxVQUFVLFFBQVEsUUFBUTtBQUN4QyxVQUFJLFFBQVEsSUFBSTtBQUNkLGtCQUFVLE9BQU8sT0FBTyxDQUFDO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUEsRUFDRixHQUFHLENBQUMsS0FBSyxDQUFDO0FBRVYsU0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVMsQ0FBQyxZQUFxQixTQUFTLEVBQUUsTUFBTSxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsRUFDNUU7QUFDRjtBQUVBLFNBQVMsVUFBVTsiLCJuYW1lcyI6WyJ0b2FzdCIsInByb3BzIl19