"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var use_detect_keyboard_open_1 = __importDefault(require("use-detect-keyboard-open"));
var BottomSheet = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.compactHeight, compactHeight = _b === void 0 ? "20vh" : _b, _c = _a.fullHeight, fullHeight = _c === void 0 ? "90vh" : _c;
    var _d = (0, react_1.useState)(compactHeight), height = _d[0], setHeight = _d[1];
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setOpen = _e[1];
    var y = (0, framer_motion_1.useMotionValue)(0);
    var isKeyboardOpen = (0, use_detect_keyboard_open_1.default)();
    var handleDragEnd = function (_, info) {
        setHeight(info.offset.y < 0 ? fullHeight : compactHeight);
        setOpen(info.offset.y < 0);
    };
    var Children = typeof children === "function" ? children({ isOpen: isOpen, setOpen: setOpen }) : react_1.default.Children.only(children);
    if (!children)
        return null;
    return (react_1.default.createElement(framer_motion_1.motion.div, { drag: "y", 
        // className={cx(s.root, className, isKeyboardOpen && s.keyboardOpen)}
        style: {
            height: height,
            y: y,
        }, dragConstraints: { top: 0, bottom: 0 }, onDragEnd: handleDragEnd }, Children));
};
exports.BottomSheet = BottomSheet;
