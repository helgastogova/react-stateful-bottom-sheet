"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
var react_1 = require("react");
function useClickOutside(refs, callback) {
    var handleClick = function (e) {
        if (!refs.some(function (ref) { return ref.current && ref.current.contains(e.target); })) {
            return callback(e);
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("click", handleClick, true);
        return function () {
            document.removeEventListener("click", handleClick, true);
        };
    });
}
exports.useClickOutside = useClickOutside;
