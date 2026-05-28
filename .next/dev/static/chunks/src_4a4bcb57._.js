(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/home/data/stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATS",
    ()=>STATS
]);
const STATS = [
    {
        value: "100+",
        label: "Projects Delivered"
    },
    {
        value: "50+",
        label: "Enterprise Clients"
    },
    {
        value: "10+",
        label: "Technology Domains"
    },
    {
        value: "24/7",
        label: "Support Coverage"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function HeroSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "ec890947e60a2188b4fdf15ab31421abad32ba3cc2c255d16489fba79785acf0") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec890947e60a2188b4fdf15ab31421abad32ba3cc2c255d16489fba79785acf0";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(85,188,188,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,188,188,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(85,188,188,0.12),rgba(255,255,255,0))]"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-secondary blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[30%] left-[30%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            y: [
                0,
                -12,
                0
            ]
        };
        t6 = {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t5,
            transition: t6,
            className: "absolute top-[28%] left-[6%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-9 items-center justify-center rounded-lg bg-secondary text-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/hero-section.tsx",
                        lineNumber: 62,
                        columnNumber: 299
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 62,
                    columnNumber: 205
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold text-accent",
                            children: "IoT Automation"
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 62,
                            columnNumber: 336
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-medium text-muted-foreground",
                            children: "Smart Systems"
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 62,
                            columnNumber: 399
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 62,
                    columnNumber: 331
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            y: [
                0,
                12,
                0
            ]
        };
        t9 = {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t8,
            transition: t9,
            className: "absolute top-[48%] right-[6%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-9 items-center justify-center rounded-lg bg-secondary text-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/hero-section.tsx",
                        lineNumber: 87,
                        columnNumber: 301
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 87,
                    columnNumber: 207
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold text-accent",
                            children: "Custom Software"
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 87,
                            columnNumber: 339
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-medium text-muted-foreground",
                            children: "Web & Mobile Apps"
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 87,
                            columnNumber: 403
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 87,
                    columnNumber: 334
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            y: [
                0,
                -8,
                0
            ],
            x: [
                0,
                6,
                0
            ]
        };
        t12 = {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            "aria-hidden": "true",
            children: [
                t0,
                t1,
                t2,
                t3,
                t4,
                t7,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: t11,
                    transition: t12,
                    className: "absolute top-[18%] right-[16%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex size-9 items-center justify-center rounded-lg bg-secondary text-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/hero-section.tsx",
                                lineNumber: 113,
                                columnNumber: 422
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 113,
                            columnNumber: 328
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-accent",
                                    children: "Cloud & SaaS"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                                    lineNumber: 113,
                                    columnNumber: 461
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-muted-foreground",
                                    children: "AWS / GCP / Azure"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                                    lineNumber: 113,
                                    columnNumber: 526
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 113,
                            columnNumber: 456
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 113,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-1.5 rounded-full bg-primary animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/hero-section.tsx",
                        lineNumber: 120,
                        columnNumber: 224
                    }, this),
                    "Modern IT & Digital Transformation"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/hero-section.tsx",
                lineNumber: 120,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-primary bg-gradient-to-r from-primary to-[#3ea9a9] bg-clip-text text-transparent",
            children: "Solutions"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[16] = t15;
        $[17] = t16;
    } else {
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    let t18;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "mt-8 text-4xl font-bold leading-tight tracking-tight text-accent sm:text-5xl md:text-6xl lg:text-7xl",
            children: [
                "Building Digital",
                t15,
                t16,
                " That",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 139,
                    columnNumber: 190
                }, this),
                "Drive Growth"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            children: "We build robust digital systems, scalable software products, and smart infrastructure that help organizations operate efficiently in today's competitive landscape."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[18] = t17;
        $[19] = t18;
    } else {
        t17 = $[18];
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            size: "lg",
            className: "shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "#services",
                children: [
                    "Explore Services",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "ml-1 size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/hero-section.tsx",
                        lineNumber: 149,
                        columnNumber: 105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/hero-section.tsx",
                lineNumber: 149,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            initial: "hidden",
            animate: "visible",
            className: "mx-auto max-w-4xl text-center",
            children: [
                t14,
                t17,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
                    className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "outline",
                            size: "lg",
                            className: "bg-white/50 backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#contact",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/hero-section.tsx",
                                lineNumber: 156,
                                columnNumber: 354
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 156,
                            columnNumber: 262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 156,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "hero",
            className: "relative flex min-h-screen items-center overflow-hidden bg-background pt-20 md:pt-24",
            "aria-label": "Hero",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    className: "relative z-10 py-16 md:py-24",
                    children: [
                        t20,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewportConfig"],
                            className: "mx-auto mt-20 max-w-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-px rounded-2xl border border-border bg-border shadow-sm overflow-hidden md:grid-cols-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS"].map(_HeroSectionSTATSMap)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/hero-section.tsx",
                                lineNumber: 163,
                                columnNumber: 338
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/hero-section.tsx",
                            lineNumber: 163,
                            columnNumber: 207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/hero-section.tsx",
                    lineNumber: 163,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/hero-section.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    return t21;
}
_c = HeroSection;
function _HeroSectionSTATSMap(stat, index) {
    const roundingClasses = index === 0 ? "rounded-tl-2xl md:rounded-l-2xl md:rounded-tr-none" : index === 1 ? "rounded-tr-2xl md:rounded-none" : index === 2 ? "rounded-bl-2xl md:rounded-none" : "rounded-br-2xl md:rounded-r-2xl md:rounded-bl-none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -2,
            backgroundColor: "var(--secondary)",
            transition: {
                duration: 0.15
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center bg-white px-6 py-6 transition-colors duration-150", roundingClasses),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold text-primary md:text-3xl",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/hero-section.tsx",
                lineNumber: 178,
                columnNumber: 133
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/hero-section.tsx",
                lineNumber: 178,
                columnNumber: 214
            }, this)
        ]
    }, stat.label, true, {
        fileName: "[project]/src/features/home/components/hero-section.tsx",
        lineNumber: 172,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SectionHeading(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "b6d545afade2f7a77d9c3898cf4fb07f1a48b72f87ed869876e47b9a263afdb5") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6d545afade2f7a77d9c3898cf4fb07f1a48b72f87ed869876e47b9a263afdb5";
    }
    const { label, title, description, align: t1, className } = t0;
    const align = t1 === undefined ? "center" : t1;
    const t2 = align === "center" && "mx-auto text-center";
    const t3 = align === "left" && "text-left";
    let t4;
    if ($[1] !== className || $[2] !== t2 || $[3] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-14 max-w-2xl", t2, t3, className);
        $[1] = className;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== label) {
        t5 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/section-heading.tsx",
            lineNumber: 44,
            columnNumber: 19
        }, this);
        $[5] = label;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold tracking-tight text-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/section-heading.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== description) {
        t7 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/section-heading.tsx",
            lineNumber: 60,
            columnNumber: 25
        }, this);
        $[9] = description;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t4 || $[12] !== t5 || $[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
            initial: "hidden",
            whileInView: "visible",
            viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewportConfig"],
            className: t4,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/section-heading.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/delivery-principles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELIVERY_PRINCIPLES",
    ()=>DELIVERY_PRINCIPLES
]);
const DELIVERY_PRINCIPLES = [
    {
        title: "Agile & Iterative",
        description: "Sprint-based delivery with regular reviews"
    },
    {
        title: "Transparent",
        description: "Weekly reports and open communication"
    },
    {
        title: "Quality First",
        description: "Rigorous QA on every deliverable"
    },
    {
        title: "On-time Delivery",
        description: "Realistic timelines with proactive updates"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/about-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$delivery$2d$principles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/delivery-principles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function AboutSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ccc18691d1a28db9f1103d125d57b6bdfcd04dd520a70cb179f5354165f1d25d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ccc18691d1a28db9f1103d125d57b6bdfcd04dd520a70cb179f5354165f1d25d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "About Us",
            title: "Empowering Businesses Through Technology",
            description: "Vyomnix is a modern IT solutions company dedicated to empowering businesses through technology. We deliver end-to-end technology solutions designed to accelerate growth, streamline operations, and future-proof your business."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/about-section.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "group rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md md:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                        className: "size-6"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/about-section.tsx",
                        lineNumber: 28,
                        columnNumber: 252
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/about-section.tsx",
                    lineNumber: 28,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-accent",
                    children: "Our Mission"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/about-section.tsx",
                    lineNumber: 28,
                    columnNumber: 290
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-muted-foreground",
                    children: "To deliver reliable, scalable, and innovative technology solutions that help businesses of all sizes achieve their digital goals with confidence and clarity."
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/about-section.tsx",
                    lineNumber: 28,
                    columnNumber: 356
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/about-section.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
                    className: "group rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md md:p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "size-6"
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/about-section.tsx",
                                lineNumber: 35,
                                columnNumber: 314
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/about-section.tsx",
                            lineNumber: 35,
                            columnNumber: 214
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-accent",
                            children: "Our Vision"
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/about-section.tsx",
                            lineNumber: 35,
                            columnNumber: 346
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 leading-relaxed text-muted-foreground",
                            children: "To be the leading IT partner for businesses across South Asia, recognized for excellence, trustworthiness, and transformative digital solutions."
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/about-section.tsx",
                            lineNumber: 35,
                            columnNumber: 411
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/about-section.tsx",
                    lineNumber: 35,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/about-section.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "bg-muted py-20 md:py-28",
            "aria-label": "About Vyomnix",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                        className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$delivery$2d$principles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELIVERY_PRINCIPLES"].map(_AboutSectionDELIVERY_PRINCIPLESMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/about-section.tsx",
                        lineNumber: 42,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/about-section.tsx",
                lineNumber: 42,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/about-section.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = AboutSection;
function _AboutSectionDELIVERY_PRINCIPLESMap(principle) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
        whileHover: {
            y: -3,
            borderColor: "rgba(85, 188, 188, 0.4)",
            transition: {
                duration: 0.2
            }
        },
        className: "rounded-xl border border-border bg-white p-5 text-center transition-colors duration-200 hover:shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold text-accent",
                children: principle.title
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/about-section.tsx",
                lineNumber: 56,
                columnNumber: 122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                children: principle.description
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/about-section.tsx",
                lineNumber: 56,
                columnNumber: 194
            }, this)
        ]
    }, principle.title, true, {
        fileName: "[project]/src/features/home/components/about-section.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICES",
    ()=>SERVICES
]);
const SERVICES = [
    {
        icon: "code",
        title: "Software & Cloud Services",
        description: "End-to-end software development, cloud infrastructure, SaaS platforms, and AI-powered digital solutions for modern enterprises.",
        tags: [
            "Custom Software",
            "Web & Mobile Apps",
            "Cloud Infrastructure",
            "ERP / CRM / POS",
            "API Integration",
            "SaaS & AI Solutions"
        ],
        subServices: [
            {
                title: "Custom Software Development",
                description: "Tailored software solutions built to your exact specifications.",
                features: [
                    "Requirements-driven architecture",
                    "Agile delivery methodology",
                    "Scalable and maintainable codebase",
                    "Cross-platform compatibility"
                ]
            },
            {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                features: [
                    "Flutter & React Native",
                    "Performance-optimized",
                    "Offline capability",
                    "App Store deployment"
                ]
            },
            {
                title: "Website Development",
                description: "Professional websites and web applications built for performance.",
                features: [
                    "Responsive & accessible",
                    "SEO-optimized",
                    "CMS integration",
                    "Fast loading & secure"
                ]
            },
            {
                title: "ERP & CRM Solutions",
                description: "Enterprise resource planning and customer relationship management.",
                features: [
                    "Modular architecture",
                    "Role-based access",
                    "Real-time reporting",
                    "Third-party integrations"
                ]
            },
            {
                title: "POS & Billing Systems",
                description: "Point-of-sale and billing platforms for retail and hospitality.",
                features: [
                    "Multi-terminal support",
                    "Inventory management",
                    "Tax compliance",
                    "Cloud sync & reporting"
                ]
            },
            {
                title: "Cloud Infrastructure & Hosting",
                description: "Reliable cloud infrastructure, server management, and hosting.",
                features: [
                    "AWS / GCP / Azure",
                    "Auto-scaling setup",
                    "99.9% uptime SLA",
                    "Security hardened"
                ]
            },
            {
                title: "API Development & Integration",
                description: "Robust APIs connecting your systems and third-party platforms.",
                features: [
                    "RESTful & GraphQL APIs",
                    "Webhook automation",
                    "OAuth & security layers",
                    "Documentation included"
                ]
            },
            {
                title: "SaaS Product Development",
                description: "Build and launch scalable software-as-a-service products.",
                features: [
                    "Multi-tenant architecture",
                    "Subscription billing",
                    "Usage analytics",
                    "CI/CD pipeline"
                ]
            },
            {
                title: "AI-powered Business Solutions",
                description: "Intelligent automation and AI tools embedded in your workflow.",
                features: [
                    "Chatbots & assistants",
                    "Predictive analytics",
                    "Document processing",
                    "ML model integration"
                ]
            },
            {
                title: "Data Analytics & Dashboards",
                description: "Visual insights and business intelligence dashboards.",
                features: [
                    "Real-time data pipelines",
                    "Custom KPI dashboards",
                    "Data export tools",
                    "Role-based views"
                ]
            },
            {
                title: "Payment Integration",
                description: "Secure payment gateways integrated into your platforms.",
                features: [
                    "Multiple gateway support",
                    "PCI-compliant",
                    "Subscription billing",
                    "Refund workflows"
                ]
            },
            {
                title: "Business Management Software",
                description: "Centralized platforms to manage operations end-to-end.",
                features: [
                    "HR & payroll modules",
                    "Task & project tools",
                    "Finance management",
                    "Audit trails"
                ]
            }
        ]
    },
    {
        icon: "cpu",
        title: "Hardware & Smart Systems",
        description: "Smart devices, IoT automation, security and monitoring, networking, and intelligent office infrastructure setup.",
        tags: [
            "Smart POS Devices",
            "IoT & Automation",
            "CCTV & Monitoring",
            "Attendance & Access",
            "Networking Setup",
            "Smart Business Devices"
        ],
        subServices: [
            {
                title: "Smart POS Devices",
                description: "Modern point-of-sale hardware including touchscreen terminals, receipt printers, and scanners.",
                features: [
                    "All-in-one POS terminals",
                    "Wireless peripherals",
                    "Cloud-connected",
                    "Durable enterprise-grade build"
                ]
            },
            {
                title: "IoT & Smart Automation",
                description: "Internet of Things solutions that automate processes and enable smart control of environments.",
                features: [
                    "Sensor networks",
                    "Remote monitoring",
                    "Automated workflows",
                    "Dashboard control panels"
                ]
            },
            {
                title: "CCTV & Monitoring Systems",
                description: "Comprehensive video surveillance and monitoring solutions for offices and retail spaces.",
                features: [
                    "HD & 4K cameras",
                    "Remote viewing",
                    "Motion detection & alerts",
                    "Cloud storage options"
                ]
            },
            {
                title: "Attendance & Access Systems",
                description: "Biometric and card-based attendance tracking and access control.",
                features: [
                    "Fingerprint & face recognition",
                    "RFID card access",
                    "Payroll integration",
                    "Audit logs"
                ]
            },
            {
                title: "Networking & Office Infrastructure",
                description: "End-to-end network design, installation, and structured cabling for office connectivity.",
                features: [
                    "Structured cabling",
                    "Wi-Fi design & deployment",
                    "Firewall setup",
                    "Network monitoring"
                ]
            },
            {
                title: "Smart Business Devices",
                description: "Procurement, setup, and MDM management of smart business displays and devices.",
                features: [
                    "Device procurement",
                    "Setup & configuration",
                    "MDM enrollment",
                    "Ongoing support"
                ]
            }
        ]
    },
    {
        icon: "megaphone",
        title: "Business & Digital Services",
        description: "Design, branding, marketing, and strategic IT consultation to strengthen your digital presence and business identity.",
        tags: [
            "UI/UX Design",
            "Branding & Identity",
            "Digital Marketing",
            "E-commerce Solutions",
            "Technical Consultation",
            "Maintenance & Support"
        ],
        subServices: [
            {
                title: "UI/UX Design",
                description: "Human-centered interface and experience design for web, mobile, and software.",
                features: [
                    "User research & personas",
                    "Wireframes & prototypes",
                    "Design systems",
                    "Usability testing"
                ]
            },
            {
                title: "Branding & Digital Identity",
                description: "Comprehensive branding services from logo design to full visual identity guidelines.",
                features: [
                    "Logo & wordmark design",
                    "Brand guidelines",
                    "Marketing collateral",
                    "Digital asset kits"
                ]
            },
            {
                title: "Digital Marketing Services",
                description: "Data-driven marketing strategies across digital channels to grow your audience.",
                features: [
                    "SEO & SEM campaigns",
                    "Social media management",
                    "Content strategy",
                    "Analytics & reporting"
                ]
            },
            {
                title: "E-commerce Solutions",
                description: "Full-featured online stores integrated with payments and logistics.",
                features: [
                    "Custom storefront design",
                    "Payment gateway setup",
                    "Inventory management",
                    "Mobile-optimized"
                ]
            },
            {
                title: "Technical Consultation",
                description: "Strategic IT advisory services helping organizations plan and implement technology.",
                features: [
                    "Technology roadmapping",
                    "Vendor evaluation",
                    "Architecture review",
                    "Security assessment"
                ]
            },
            {
                title: "Maintenance & Support",
                description: "Dedicated post-deployment support, proactive monitoring, and updates.",
                features: [
                    "SLA-based support",
                    "Proactive monitoring",
                    "Bug fixes & updates",
                    "Performance optimization"
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/common/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
;
;
;
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "bc6ebb1864e3a39e51115c9495f12789650da1743b9170c04672724f160e362f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc6ebb1864e3a39e51115c9495f12789650da1743b9170c04672724f160e362f";
    }
    const { children, variant: t1, className } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const t2 = variant === "default" && "bg-secondary text-primary";
    const t3 = variant === "outline" && "border border-border text-muted-foreground";
    let t4;
    if ($[1] !== className || $[2] !== t2 || $[3] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors", t2, t3, className);
        $[1] = className;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== children || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/badge.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/service-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCard",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icons.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function ServiceCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "388cb48b2c6349fbf6dfffe50a51b94d36a3efa8982c8091d6064ee9f96de20e") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "388cb48b2c6349fbf6dfffe50a51b94d36a3efa8982c8091d6064ee9f96de20e";
    }
    const { service } = t0;
    let t1;
    if ($[1] !== service.icon) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(service.icon);
        $[1] = service.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const Icon = t1;
    let t2;
    if ($[3] !== Icon) {
        t2 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-7"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 34,
            columnNumber: 18
        }, this);
        $[3] = Icon;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex size-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== service.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold text-accent",
            children: service.title
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = service.title;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== service.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 flex-1 leading-relaxed text-muted-foreground",
            children: service.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[9] = service.description;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== service.tags) {
        t6 = service.tags.map(_ServiceCardServiceTagsMap);
        $[11] = service.tags;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap gap-2",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t3 || $[16] !== t4 || $[17] !== t5 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            whileHover: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleOnHover"],
            className: "group flex flex-col rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg md:p-10",
            children: [
                t3,
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/service-card.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_c = ServiceCard;
function _ServiceCardServiceTagsMap(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/features/home/components/service-card.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/services-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesSection",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$service$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/service-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ServicesSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5b8e41b875171cca9cfaeecd6d22e06bee1cd20b4199166774d61eca8c8fc220") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b8e41b875171cca9cfaeecd6d22e06bee1cd20b4199166774d61eca8c8fc220";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Services",
            title: "Comprehensive IT Solutions",
            description: "From custom software development and cloud services to smart hardware installations and digital marketing \u2014 we deliver end-to-end technology solutions."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Our Services",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map(_ServicesSectionSERVICESMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/services-section.tsx",
                        lineNumber: 26,
                        columnNumber: 115
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/services-section.tsx",
                lineNumber: 26,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ServicesSection;
function _ServicesSectionSERVICESMap(service) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$service$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceCard"], {
        service: service
    }, service.title, false, {
        fileName: "[project]/src/features/home/components/services-section.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/why-choose.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WHY_CHOOSE_ITEMS",
    ()=>WHY_CHOOSE_ITEMS
]);
const WHY_CHOOSE_ITEMS = [
    {
        icon: "trending-up",
        title: "Scalable Solutions",
        description: "Our systems are architected to grow with your business — no costly rebuilds as you scale."
    },
    {
        icon: "layers",
        title: "Modern Technologies",
        description: "We use only battle-tested, modern tech stacks ensuring longevity and performance."
    },
    {
        icon: "target",
        title: "Business-Focused",
        description: "Every solution is built with your business outcomes in mind — not just technical specs."
    },
    {
        icon: "headphones",
        title: "Reliable Support",
        description: "Dedicated SLA-backed support teams available to resolve issues promptly."
    },
    {
        icon: "shield",
        title: "Secure by Design",
        description: "Security is embedded at every layer — from architecture to deployment."
    },
    {
        icon: "infinity",
        title: "End-to-End Delivery",
        description: "From ideation to post-launch — we handle the complete technology lifecycle."
    },
    {
        icon: "users",
        title: "Experienced Team",
        description: "A diverse team of engineers, designers, and strategists with proven expertise."
    },
    {
        icon: "handshake",
        title: "Long-term Partnership",
        description: "We invest in understanding your business for a relationship that delivers ongoing value."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/why-choose-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyChooseCard",
    ()=>WhyChooseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icons.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function WhyChooseCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "d5b09aec527d12ace85d59174c5c307280cbe32a111f7bf8fb5263a7bf627a48") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5b09aec527d12ace85d59174c5c307280cbe32a111f7bf8fb5263a7bf627a48";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.icon) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(item.icon);
        $[1] = item.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const Icon = t1;
    let t2;
    if ($[3] !== Icon) {
        t2 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-card.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this);
        $[3] = Icon;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-card.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== item.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-accent",
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-card.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[7] = item.title;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== item.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-relaxed text-muted-foreground",
            children: item.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-card.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = item.description;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "group rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md md:p-8",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/why-choose-card.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = WhyChooseCard;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/why-choose-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyChooseSection",
    ()=>WhyChooseSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$why$2d$choose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/why-choose.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$why$2d$choose$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/why-choose-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function WhyChooseSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3b104a75460afc81c9e2ade7b6d6a320a4d4b68601071cf96f690be7bb24d31c") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3b104a75460afc81c9e2ade7b6d6a320a4d4b68601071cf96f690be7bb24d31c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Why Choose Us",
            title: "Your Long-term Technology Partner",
            description: "We are more than a vendor \u2014 we are a technology partner committed to your success. Here's what sets Vyomnix apart."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-section.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-choose",
            className: "bg-muted py-20 md:py-28",
            "aria-label": "Why Choose Us",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$why$2d$choose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHY_CHOOSE_ITEMS"].map(_WhyChooseSectionWHY_CHOOSE_ITEMSMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/why-choose-section.tsx",
                        lineNumber: 26,
                        columnNumber: 113
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/why-choose-section.tsx",
                lineNumber: 26,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/why-choose-section.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = WhyChooseSection;
function _WhyChooseSectionWHY_CHOOSE_ITEMSMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$why$2d$choose$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhyChooseCard"], {
        item: item
    }, item.title, false, {
        fileName: "[project]/src/features/home/components/why-choose-section.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhyChooseSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/process-steps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROCESS_STEPS",
    ()=>PROCESS_STEPS
]);
const PROCESS_STEPS = [
    {
        step: 1,
        title: "Requirement Analysis",
        description: "Understanding goals, scope, and business requirements to define a clear project direction."
    },
    {
        step: 2,
        title: "Planning & Architecture",
        description: "Building the roadmap, selecting the tech stack, and designing the system architecture."
    },
    {
        step: 3,
        title: "UI/UX Design",
        description: "Creating wireframes, prototypes, and polished interface designs centered on user experience."
    },
    {
        step: 4,
        title: "Development",
        description: "Agile sprint-based development with continuous integration and iterative delivery."
    },
    {
        step: 5,
        title: "Testing & QA",
        description: "Comprehensive automated and manual testing to ensure quality and reliability."
    },
    {
        step: 6,
        title: "Deployment",
        description: "CI/CD pipeline launch, go-live execution, and production environment setup."
    },
    {
        step: 7,
        title: "Support & Maintenance",
        description: "Ongoing monitoring, updates, performance optimization, and dedicated support."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/process-step-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessStepCard",
    ()=>ProcessStepCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProcessStepCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "c8f5f7da282cfb263ded2ca4be2e2139b25bb5c6c46cd8d9220780cdc4a94406") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8f5f7da282cfb263ded2ca4be2e2139b25bb5c6c46cd8d9220780cdc4a94406";
    }
    const { step, isLast } = t0;
    let t1;
    if ($[1] !== step.step) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary font-heading text-lg font-bold text-primary",
            children: step.step
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = step.step;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isLast) {
        t2 = !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 h-full w-px bg-border md:hidden",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 33,
            columnNumber: 21
        }, this);
        $[3] = isLast;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center md:mb-6",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== step.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-accent",
            children: step.title
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[8] = step.title;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== step.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-relaxed text-muted-foreground",
            children: step.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[10] = step.description;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-10 md:pb-0",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t3 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "relative flex gap-6 md:flex-col md:gap-0 md:text-center",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_c = ProcessStepCard;
var _c;
__turbopack_context__.k.register(_c, "ProcessStepCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/process-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessSection",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$process$2d$steps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/process-steps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$process$2d$step$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/process-step-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProcessSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "a02015e8663568822f037122afe56c4ab09df29dd6fd424fe77b2140fc50b0e1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a02015e8663568822f037122afe56c4ab09df29dd6fd424fe77b2140fc50b0e1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Our Process",
            title: "How We Work",
            description: "Our structured delivery process ensures every project is planned carefully, executed with precision, and supported after launch."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-section.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-6 right-6 left-6 hidden h-px bg-border md:block",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-section.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "process",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Our Process",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t1,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                                className: "relative grid gap-0 md:grid-cols-7 md:gap-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$process$2d$steps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_STEPS"].map(_ProcessSectionPROCESS_STEPSMap)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/process-section.tsx",
                                lineNumber: 33,
                                columnNumber: 143
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/process-section.tsx",
                        lineNumber: 33,
                        columnNumber: 113
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/process-section.tsx",
                lineNumber: 33,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-section.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = ProcessSection;
function _ProcessSectionPROCESS_STEPSMap(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$process$2d$step$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessStepCard"], {
        step: step,
        isLast: index === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$process$2d$steps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_STEPS"].length - 1
    }, step.step, false, {
        fileName: "[project]/src/features/home/components/process-section.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProcessSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/technologies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TECH_STACK",
    ()=>TECH_STACK
]);
const TECH_STACK = [
    {
        category: "Frontend",
        technologies: [
            "React",
            "Next.js",
            "Vue.js",
            "TypeScript",
            "Tailwind CSS"
        ]
    },
    {
        category: "Backend",
        technologies: [
            "Node.js",
            "Python",
            "Laravel",
            "Django",
            "FastAPI"
        ]
    },
    {
        category: "Mobile",
        technologies: [
            "Flutter",
            "React Native",
            "Kotlin",
            "Swift"
        ]
    },
    {
        category: "Database",
        technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Firebase"
        ]
    },
    {
        category: "Cloud",
        technologies: [
            "AWS",
            "Google Cloud",
            "Azure",
            "Vercel",
            "DigitalOcean"
        ]
    },
    {
        category: "DevOps",
        technologies: [
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Nginx",
            "Terraform"
        ]
    },
    {
        category: "AI & Analytics",
        technologies: [
            "OpenAI",
            "TensorFlow",
            "Apache Kafka",
            "Power BI",
            "Grafana"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/technologies-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechnologiesSection",
    ()=>TechnologiesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/technologies.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function TechnologiesSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "d50a2661b31b551ccf33ebfc46551839a9fdc4ce4f1ebfa69215f3aa44bf61b5") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d50a2661b31b551ccf33ebfc46551839a9fdc4ce4f1ebfa69215f3aa44bf61b5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Technology",
            title: "Our Technology Stack",
            description: "We work with a modern, carefully selected technology ecosystem \u2014 ensuring our solutions are reliable, maintainable, and aligned with industry best practices."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "technologies",
            className: "bg-muted py-20 md:py-28",
            "aria-label": "Our Technology Stack",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                        className: "space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK"].map(_TechnologiesSectionTECH_STACKMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/technologies-section.tsx",
                        lineNumber: 28,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 28,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = TechnologiesSection;
function _TechnologiesSectionTECH_STACKMap(category) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
        className: "rounded-xl border border-border bg-white p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
                children: category.category
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 36,
                columnNumber: 127
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: category.technologies.map(_TechnologiesSectionTECH_STACKMapCategoryTechnologiesMap)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 36,
                columnNumber: 241
            }, this)
        ]
    }, category.category, true, {
        fileName: "[project]/src/features/home/components/technologies-section.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
function _TechnologiesSectionTECH_STACKMapCategoryTechnologiesMap(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        children: tech
    }, tech, false, {
        fileName: "[project]/src/features/home/components/technologies-section.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TechnologiesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/data/industries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INDUSTRIES",
    ()=>INDUSTRIES
]);
const INDUSTRIES = [
    {
        icon: "shopping-bag",
        name: "Retail",
        description: "POS systems, inventory management, and customer-facing solutions."
    },
    {
        icon: "utensils",
        name: "Restaurants & Cafes",
        description: "Order management, billing platforms, and loyalty programs."
    },
    {
        icon: "graduation-cap",
        name: "Education",
        description: "LMS platforms, student portals, and smart campus infrastructure."
    },
    {
        icon: "building-2",
        name: "Corporate Offices",
        description: "ERP, CRM, HR systems, and large-scale IT infrastructure."
    },
    {
        icon: "heart-pulse",
        name: "Healthcare",
        description: "Patient management, appointment booking, and telehealth."
    },
    {
        icon: "rocket",
        name: "Startups",
        description: "MVP development, scalable architecture, and rapid deployment."
    },
    {
        icon: "shopping-cart",
        name: "E-commerce",
        description: "Custom storefronts, payment gateways, and logistics integration."
    },
    {
        icon: "building",
        name: "Enterprises",
        description: "Enterprise-grade software, intranet platforms, and IT strategy."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/industry-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustryCard",
    ()=>IndustryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icons.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function IndustryCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "3aedb22d72053c88274408c1bae75c4b3142effc0ea3a1ed926f13c493e4cc16") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aedb22d72053c88274408c1bae75c4b3142effc0ea3a1ed926f13c493e4cc16";
    }
    const { industry } = t0;
    let t1;
    if ($[1] !== industry.icon) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(industry.icon);
        $[1] = industry.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const Icon = t1;
    let t2;
    if ($[3] !== Icon) {
        t2 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-6"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this);
        $[3] = Icon;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== industry.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-accent",
            children: industry.name
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[7] = industry.name;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== industry.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
            children: industry.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = industry.description;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: "group flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center transition-all hover:border-primary/30 hover:shadow-md",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = IndustryCard;
var _c;
__turbopack_context__.k.register(_c, "IndustryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/industries-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesSection",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$industries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/industries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$industry$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/industry-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function IndustriesSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "bf57eaa621f46ef73c6c5f1272159268141fbd4e521c68d7ef10467597048837") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf57eaa621f46ef73c6c5f1272159268141fbd4e521c68d7ef10467597048837";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Industries",
            title: "Industries We Serve",
            description: "We've built solutions across a broad range of industries, adapting our technology stack and methodologies to the unique requirements of each sector."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industries-section.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "industries",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Industries We Serve",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                        className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$industries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDUSTRIES"].map(_IndustriesSectionINDUSTRIESMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/industries-section.tsx",
                        lineNumber: 26,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/industries-section.tsx",
                lineNumber: 26,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industries-section.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = IndustriesSection;
function _IndustriesSectionINDUSTRIESMap(industry) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$industry$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndustryCard"], {
        industry: industry
    }, industry.name, false, {
        fileName: "[project]/src/features/home/components/industries-section.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "IndustriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaSection",
    ()=>CtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function CtaSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "919c5c66e01ceb940a0667a5c15a653d67e4bee7b30bc1d6906969efe45b955e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "919c5c66e01ceb940a0667a5c15a653d67e4bee7b30bc1d6906969efe45b955e";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold tracking-tight text-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight",
            children: "Ready to Transform Your Business?"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/cta-section.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
            children: "Let's discuss how Vyomnix can support your digital goals. Our team responds within one business day."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/cta-section.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            size: "lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "#contact",
                children: [
                    "Start a Conversation",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "ml-1 size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/cta-section.tsx",
                        lineNumber: 31,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/cta-section.tsx",
                lineNumber: 31,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/cta-section.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-secondary py-20 md:py-28",
            "aria-label": "Call to action",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewportConfig"],
                    className: "mx-auto max-w-3xl text-center",
                    children: [
                        t0,
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
                            children: [
                                t2,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#services",
                                        children: "View Our Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/cta-section.tsx",
                                        lineNumber: 38,
                                        columnNumber: 380
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/cta-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 329
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/home/components/cta-section.tsx",
                            lineNumber: 38,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/cta-section.tsx",
                    lineNumber: 38,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/cta-section.tsx",
                lineNumber: 38,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/cta-section.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = CtaSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/common/components/ui/form-field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormField",
    ()=>FormField,
    "FormTextarea",
    ()=>FormTextarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
;
;
;
const INPUT_CLASSES = "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-accent placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-accent";
function FormField(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f2a04515b0d79d22a3469e1f9b0b9f319d270dbff736e5574ebadd54579473a2") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2a04515b0d79d22a3469e1f9b0b9f319d270dbff736e5574ebadd54579473a2";
    }
    const { id, label, name, type: t1, required: t2, placeholder, className } = t0;
    const type = t1 === undefined ? "text" : t1;
    const required = t2 === undefined ? false : t2;
    let t3;
    if ($[1] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className);
        $[1] = className;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== id || $[4] !== label) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: id,
            className: LABEL_CLASSES,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[3] = id;
        $[4] = label;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== id || $[7] !== name || $[8] !== placeholder || $[9] !== required || $[10] !== type) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: id,
            name: name,
            type: type,
            required: required,
            placeholder: placeholder,
            className: INPUT_CLASSES
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = id;
        $[7] = name;
        $[8] = placeholder;
        $[9] = required;
        $[10] = type;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t3 || $[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c = FormField;
function FormTextarea(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f2a04515b0d79d22a3469e1f9b0b9f319d270dbff736e5574ebadd54579473a2") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2a04515b0d79d22a3469e1f9b0b9f319d270dbff736e5574ebadd54579473a2";
    }
    const { id, label, name, rows: t1, required: t2, placeholder, className } = t0;
    const rows = t1 === undefined ? 5 : t1;
    const required = t2 === undefined ? false : t2;
    let t3;
    if ($[1] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className);
        $[1] = className;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== id || $[4] !== label) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: id,
            className: LABEL_CLASSES,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[3] = id;
        $[4] = label;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(INPUT_CLASSES, "resize-none");
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== id || $[8] !== name || $[9] !== placeholder || $[10] !== required || $[11] !== rows) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            id: id,
            name: name,
            required: required,
            rows: rows,
            placeholder: placeholder,
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[7] = id;
        $[8] = name;
        $[9] = placeholder;
        $[10] = required;
        $[11] = rows;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_c1 = FormTextarea;
var _c, _c1;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormTextarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/contact-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/form-field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/constants/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const CONTACT_DETAILS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "Email",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].email,
        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].email}`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        label: "Phone",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].phone,
        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].phone.replace(/\s/g, "")}`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        label: "Location",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].address,
        href: null
    }
];
function ContactSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "1b43d876962721ef112578a34284d5754756ee060c18b29701c60ba3d54d69d4") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b43d876962721ef112578a34284d5754756ee060c18b29701c60ba3d54d69d4";
    }
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = function handleSubmit(e) {
            e.preventDefault();
            setIsSubmitted(true);
            setTimeout({
                "ContactSection[handleSubmit > setTimeout()]": ()=>setIsSubmitted(false)
            }["ContactSection[handleSubmit > setTimeout()]"], 4000);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleSubmit = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Contact",
            title: "Get in Touch",
            description: "Ready to start your next project or explore how Vyomnix can support your business? Reach out \u2014 we respond within one business day."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = CONTACT_DETAILS.map(_ContactSectionCONTACT_DETAILSMap);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
            className: "space-y-6 lg:col-span-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "For support enquiries:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].support}`,
                                className: "font-medium text-primary transition-colors hover:text-primary-hover",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].support
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                lineNumber: 69,
                                columnNumber: 178
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 69,
                        columnNumber: 106
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                    lineNumber: 69,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-5 sm:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                    id: "contact-name",
                    label: "Full Name",
                    name: "name",
                    required: true,
                    placeholder: "Your name"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                    lineNumber: 78,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                    id: "contact-email",
                    label: "Email Address",
                    name: "email",
                    type: "email",
                    required: true,
                    placeholder: "you@company.com"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                    lineNumber: 78,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
            id: "contact-subject",
            label: "Subject",
            name: "subject",
            required: true,
            placeholder: "How can we help?",
            className: "mt-5"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormTextarea"], {
            id: "contact-message",
            label: "Message",
            name: "message",
            required: true,
            placeholder: "Tell us about your project...",
            className: "mt-5"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== isSubmitted) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Contact Us",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 lg:grid-cols-5",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewportConfig"],
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "rounded-2xl border border-border bg-muted p-6 md:p-8",
                                    children: [
                                        t4,
                                        t5,
                                        t6,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm font-medium text-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 534
                                                    }, this),
                                                    "Thank you! We'll get back to you soon."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                lineNumber: 91,
                                                columnNumber: 425
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                size: "lg",
                                                className: "w-full sm:w-auto",
                                                children: [
                                                    "Send Message",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "ml-1 size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 688
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                lineNumber: 91,
                                                columnNumber: 615
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                            lineNumber: 91,
                                            columnNumber: 388
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                    lineNumber: 91,
                                    columnNumber: 281
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                lineNumber: 91,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 91,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 91,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[8] = isSubmitted;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_s(ContactSection, "y0UBtSRcKf2AGGJv1w8GuwACgkA=");
_c = ContactSection;
function _ContactSectionCONTACT_DETAILSMap(detail) {
    const Icon = detail.icon;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
        className: "flex items-start gap-4 rounded-xl border border-border bg-muted p-5 transition-shadow hover:shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "size-5"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                    lineNumber: 101,
                    columnNumber: 292
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 101,
                columnNumber: 188
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                        children: detail.label
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 101,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm font-medium text-accent",
                        children: detail.value
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 101,
                        columnNumber: 430
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 101,
                columnNumber: 325
            }, this)
        ]
    }, detail.label, true, {
        fileName: "[project]/src/features/home/components/contact-section.tsx",
        lineNumber: 101,
        columnNumber: 19
    }, this);
    if (detail.href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: detail.href,
            className: "block",
            children: content
        }, detail.label, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 103,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: content
    }, detail.label, false, {
        fileName: "[project]/src/features/home/components/contact-section.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4a4bcb57._.js.map