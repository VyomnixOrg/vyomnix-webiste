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
"[project]/src/features/home/components/sub-service-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubServiceCard",
    ()=>SubServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function SubServiceCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "4fa442f24a854477d73e6eb7961ec2330afd3ec7e0f9446ab9d92bbf9789db1f") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fa442f24a854477d73e6eb7961ec2330afd3ec7e0f9446ab9d92bbf9789db1f";
    }
    const { subService } = t0;
    let t1;
    if ($[1] !== subService.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-heading text-base font-semibold text-accent",
            children: subService.title
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/sub-service-card.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = subService.title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== subService.description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-relaxed text-muted-foreground flex-1",
            children: subService.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/sub-service-card.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = subService.description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== subService.features) {
        t3 = subService.features.map(_SubServiceCardSubServiceFeaturesMap);
        $[5] = subService.features;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-4 space-y-2 border-t border-border/40 pt-4",
            role: "list",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/sub-service-card.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/25 hover:shadow-md",
            children: [
                t1,
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/sub-service-card.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = SubServiceCard;
function _SubServiceCardSubServiceFeaturesMap(feature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-2 text-xs text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/sub-service-card.tsx",
                lineNumber: 67,
                columnNumber: 93
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: feature
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/sub-service-card.tsx",
                lineNumber: 67,
                columnNumber: 181
            }, this)
        ]
    }, feature, true, {
        fileName: "[project]/src/features/home/components/sub-service-card.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SubServiceCard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$sub$2d$service$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/sub-service-card.tsx [app-client] (ecmascript)");
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
function ServicesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "6f498e608d5f0d10ae337ba8fcb4f6e058e68f7670c6f047ec0f0a80bd692f04") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f498e608d5f0d10ae337ba8fcb4f6e058e68f7670c6f047ec0f0a80bd692f04";
    }
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Services",
            title: "Comprehensive IT Solutions",
            description: "From custom software development and cloud services to smart hardware installations and digital marketing \u2014 we deliver end-to-end technology solutions."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== activeCategory) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map({
            "ServicesSection[SERVICES.map()]": (service, idx)=>{
                const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(service.icon);
                const isActive = idx === activeCategory;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ServicesSection[SERVICES.map() > <button>.onClick]": ()=>setActiveCategory(idx)
                    }["ServicesSection[SERVICES.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer", isActive ? "border-primary bg-secondary/30 shadow-sm" : "border-border bg-white hover:border-primary/20 hover:bg-muted/40"),
                    children: [
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "active-service-tab",
                            className: "absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/services-section.tsx",
                            lineNumber: 36,
                            columnNumber: 393
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex size-10 items-center justify-center rounded-lg transition-colors", isActive ? "bg-primary text-white" : "bg-secondary text-primary"),
                                    children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "size-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/services-section.tsx",
                                        lineNumber: 40,
                                        columnNumber: 240
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/services-section.tsx",
                                    lineNumber: 40,
                                    columnNumber: 72
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-heading text-lg font-semibold text-accent",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/services-section.tsx",
                                    lineNumber: 40,
                                    columnNumber: 274
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/home/components/services-section.tsx",
                            lineNumber: 40,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative z-10 mt-3 text-sm text-muted-foreground line-clamp-2",
                            children: service.description
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/services-section.tsx",
                            lineNumber: 40,
                            columnNumber: 363
                        }, this)
                    ]
                }, service.title, true, {
                    fileName: "[project]/src/features/home/components/services-section.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            }
        }["ServicesSection[SERVICES.map()]"]);
        $[2] = activeCategory;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 lg:col-span-2",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 15
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            opacity: 0,
            y: -15
        };
        t6 = {
            duration: 0.25
        };
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
    }
    const t7 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"][activeCategory];
    let t8;
    if ($[10] !== t7.subServices) {
        t8 = t7.subServices.map(_ServicesSectionAnonymous);
        $[10] = t7.subServices;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== activeCategory || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t3,
                    animate: t4,
                    exit: t5,
                    transition: t6,
                    className: "grid gap-6 sm:grid-cols-2",
                    children: t8
                }, activeCategory, false, {
                    fileName: "[project]/src/features/home/components/services-section.tsx",
                    lineNumber: 97,
                    columnNumber: 70
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/services-section.tsx",
                lineNumber: 97,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[12] = activeCategory;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t2 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Our Services",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 lg:grid-cols-5",
                        children: [
                            t2,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/services-section.tsx",
                        lineNumber: 106,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/services-section.tsx",
                lineNumber: 106,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/services-section.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[15] = t2;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(ServicesSection, "5zGpXYGUcpn+QZW4bCQB8UB8o7g=");
_c = ServicesSection;
function _ServicesSectionAnonymous(sub) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$sub$2d$service$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubServiceCard"], {
        subService: sub
    }, sub.title, false, {
        fileName: "[project]/src/features/home/components/services-section.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/common/components/motion/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"],
    "MotionStaggerGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"],
    "ScrollReveal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$scroll$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"],
    "motion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/motion-stagger-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$scroll$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/motion/scroll-reveal.tsx [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ProcessStepCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "86de022339aa411c82449782b069a10a8ac1cc58d0bb0b3f5b76fc2d9b7ed29b") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86de022339aa411c82449782b069a10a8ac1cc58d0bb0b3f5b76fc2d9b7ed29b";
    }
    const { step, index } = t0;
    const isEven = index % 2 === 0;
    const t1 = isEven ? "md:flex-row-reverse" : "";
    let t2;
    if ($[1] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0", t1);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            y: -3,
            borderColor: "rgba(85, 188, 188, 0.3)",
            transition: {
                duration: 0.2
            }
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== step.step) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-bold uppercase tracking-wider text-primary",
            children: [
                "Step ",
                step.step
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[4] = step.step;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== step.title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-1 font-heading text-lg font-semibold text-accent",
            children: step.title
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = step.title;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== step.description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-relaxed text-muted-foreground",
            children: step.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = step.description;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full pl-16 md:pl-0 md:w-[44%]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: t3,
                className: "rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:shadow-md",
                children: [
                    t4,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/process-step-card.tsx",
                lineNumber: 79,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== step.step) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-6 md:left-1/2 top-6 md:top-auto flex size-12 -translate-x-1/2 md:-translate-y-0 items-center justify-center rounded-full border-2 border-primary bg-secondary font-heading text-lg font-bold text-primary z-10 shadow-sm",
            "aria-hidden": "true",
            children: step.step
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[14] = step.step;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block md:w-[44%]"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t2 || $[18] !== t7 || $[19] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            className: t2,
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/process-step-card.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[17] = t2;
        $[18] = t7;
        $[19] = t8;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
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
    if ($[0] !== "9b70ad4ed40808b385a42f9e768315dba21abde55492db76735ac5cfd3992296") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b70ad4ed40808b385a42f9e768315dba21abde55492db76735ac5cfd3992296";
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
            className: "absolute left-6 md:left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-border",
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
                        className: "relative mt-16 max-w-5xl mx-auto",
                        children: [
                            t1,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
                                className: "relative space-y-12 md:space-y-16",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$process$2d$steps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_STEPS"].map(_ProcessSectionPROCESS_STEPSMap)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/process-section.tsx",
                                lineNumber: 33,
                                columnNumber: 167
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
        index: index
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/components/motion/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/data/technologies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/common/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/utils/utils.ts [app-client] (ecmascript)");
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
function TechnologiesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "b803cc9401f723e9460d8387827dd1b724c87103303e81afd87b3a54487b30a1") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b803cc9401f723e9460d8387827dd1b724c87103303e81afd87b3a54487b30a1";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "All",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK"].map(_TechnologiesSectionTECH_STACKMap)
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const filterCategories = t0;
    let T0;
    let T1;
    let T2;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] !== selectedCategory) {
        const filteredStack = selectedCategory === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$data$2f$technologies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK"].filter({
            "TechnologiesSection[TECH_STACK.filter()]": (c_0)=>c_0.category === selectedCategory
        }["TechnologiesSection[TECH_STACK.filter()]"]);
        t7 = "technologies";
        t8 = "bg-muted py-20 md:py-28";
        t9 = "Our Technology Stack";
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"];
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: "Technology",
                title: "Our Technology Stack",
                description: "We work with a modern, carefully selected technology ecosystem \u2014 ensuring our solutions are reliable, maintainable, and aligned with industry best practices."
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        const t10 = filterCategories.map({
            "TechnologiesSection[filterCategories.map()]": (filter)=>{
                const isActive = selectedCategory === filter;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "TechnologiesSection[filterCategories.map() > <button>.onClick]": ()=>setSelectedCategory(filter)
                    }["TechnologiesSection[filterCategories.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-full px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer", isActive ? "text-primary" : "text-muted-foreground hover:bg-white hover:text-accent"),
                    children: [
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "active-tech-filter",
                            className: "absolute inset-0 rounded-full bg-secondary",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/technologies-section.tsx",
                            lineNumber: 59,
                            columnNumber: 396
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10",
                            children: filter
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/technologies-section.tsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, this)
                    ]
                }, filter, true, {
                    fileName: "[project]/src/features/home/components/technologies-section.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
        }["TechnologiesSection[filterCategories.map()]"]);
        if ($[16] !== t10) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-wrap justify-center gap-1.5 md:gap-2",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[16] = t10;
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t3 = true;
        t4 = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
        t1 = "popLayout";
        t2 = filteredStack.map(_TechnologiesSectionFilteredStackMap);
        $[2] = selectedCategory;
        $[3] = T0;
        $[4] = T1;
        $[5] = T2;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        T0 = $[3];
        T1 = $[4];
        T2 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[18] !== T0 || $[19] !== t1 || $[20] !== t2) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            mode: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[18] = T0;
        $[19] = t1;
        $[20] = t2;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== T1 || $[23] !== t10 || $[24] !== t3 || $[25] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            layout: t3,
            className: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[22] = T1;
        $[23] = t10;
        $[24] = t3;
        $[25] = t4;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== T2 || $[28] !== t11 || $[29] !== t5 || $[30] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: [
                t5,
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[27] = T2;
        $[28] = t11;
        $[29] = t5;
        $[30] = t6;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== t12 || $[33] !== t7 || $[34] !== t8 || $[35] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t7,
            className: t8,
            "aria-label": t9,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/technologies-section.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    return t13;
}
_s(TechnologiesSection, "Im5wThrHhzmaALlaN3ftG1JjEyo=");
_c = TechnologiesSection;
function _TechnologiesSectionFilteredStackMap(category) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        transition: {
            duration: 0.2
        },
        className: "rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-xs font-bold uppercase tracking-wider text-primary",
                children: category.category
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 163,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: category.technologies.map(_TechnologiesSectionFilteredStackMapCategoryTechnologiesMap)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/technologies-section.tsx",
                lineNumber: 163,
                columnNumber: 267
            }, this)
        ]
    }, category.category, true, {
        fileName: "[project]/src/features/home/components/technologies-section.tsx",
        lineNumber: 152,
        columnNumber: 10
    }, this);
}
function _TechnologiesSectionFilteredStackMapCategoryTechnologiesMap(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "bg-muted/30 hover:border-primary/20 transition-colors",
        children: tech
    }, tech, false, {
        fileName: "[project]/src/features/home/components/technologies-section.tsx",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
function _TechnologiesSectionTECH_STACKMap(c) {
    return c.category;
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
        description: "Point-of-sale systems, inventory management, and digital customer experiences.",
        highlights: [
            "POS Hardware & Systems",
            "Inventory Management",
            "Loyalty Programs",
            "Customer Apps"
        ]
    },
    {
        icon: "utensils",
        name: "Restaurants & Cafes",
        description: "POS billing platforms, ordering software, and hospitality solutions.",
        highlights: [
            "Touchscreen POS",
            "Digital Ordering",
            "Loyalty & Rewards",
            "Kitchen Displays"
        ]
    },
    {
        icon: "graduation-cap",
        name: "Education",
        description: "Learning Management Systems and smart digital campus infrastructure.",
        highlights: [
            "LMS Platforms",
            "Attendance Automation",
            "Student Portals",
            "Smart Campus IoT"
        ]
    },
    {
        icon: "building-2",
        name: "Corporate Offices",
        description: "Enterprise management platforms and secure, modern connectivity solutions.",
        highlights: [
            "ERP & CRM Platforms",
            "Intranet Systems",
            "HR & Payroll Software",
            "Network Setup"
        ]
    },
    {
        icon: "heart-pulse",
        name: "Healthcare",
        description: "Patient management systems, scheduling software, and clinic tools.",
        highlights: [
            "Patient Management",
            "Appointment Booking",
            "Billing Systems",
            "Telehealth Tools"
        ]
    },
    {
        icon: "rocket",
        name: "Startups",
        description: "Rapid MVP development and scalable architectures built to grow.",
        highlights: [
            "MVP Engineering",
            "Scalable Architectures",
            "API Development",
            "Tech Consultations"
        ]
    },
    {
        icon: "shopping-cart",
        name: "E-commerce",
        description: "Custom digital storefronts integrated with local payment systems.",
        highlights: [
            "Custom Storefronts",
            "Payment Integration",
            "Logistics Pipelines",
            "Mobile Shopping UX"
        ]
    },
    {
        icon: "building",
        name: "Enterprises",
        description: "Enterprise-grade digital systems and large-scale IT strategy.",
        highlights: [
            "Large-scale Software",
            "Systems Integration",
            "Security Auditing",
            "Digital Transformation"
        ]
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "cde0097b21e24336aba49c5c2606e2825d2edce4c68ab89043af7b45defe5537") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cde0097b21e24336aba49c5c2606e2825d2edce4c68ab89043af7b45defe5537";
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
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            borderColor: "rgba(85, 188, 188, 0.35)",
            transition: {
                duration: 0.2
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== Icon) {
        t3 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 52,
            columnNumber: 18
        }, this);
        $[4] = Icon;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== industry.name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-heading text-base font-semibold text-accent",
            children: industry.name
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[8] = industry.name;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== industry.description) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm leading-relaxed text-muted-foreground flex-1",
            children: industry.description
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[13] = industry.description;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== industry.highlights) {
        t8 = industry.highlights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 w-full border-t border-border/50 pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-bold uppercase tracking-wider text-primary",
                    children: "Key Solutions"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/industry-card.tsx",
                    lineNumber: 93,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-2.5 grid grid-cols-2 gap-x-2 gap-y-1.5",
                    role: "list",
                    children: industry.highlights.map(_IndustryCardIndustryHighlightsMap)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/industry-card.tsx",
                    lineNumber: 93,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 93,
            columnNumber: 33
        }, this);
        $[15] = industry.highlights;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t6 || $[18] !== t7 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
            whileHover: t2,
            className: "group flex flex-col items-start rounded-2xl border border-border bg-white p-6 transition-colors duration-250 hover:shadow-md",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/industry-card.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
}
_c = IndustryCard;
function _IndustryCardIndustryHighlightsMap(highlight) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-1.5 text-xs text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "size-1 shrink-0 rounded-full bg-primary/70",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/industry-card.tsx",
                lineNumber: 112,
                columnNumber: 98
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "line-clamp-1",
                children: highlight
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/industry-card.tsx",
                lineNumber: 112,
                columnNumber: 180
            }, this)
        ]
    }, highlight, true, {
        fileName: "[project]/src/features/home/components/industry-card.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
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
    if ($[0] !== "b1234b7faa3877111274dc399ca3f4e29d8c1ef42c01128dbb82f2378cb6a1bc") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b1234b7faa3877111274dc399ca3f4e29d8c1ef42c01128dbb82f2378cb6a1bc";
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
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
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
const INPUT_CLASSES = "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-accent placeholder:text-muted-foreground/45 transition-colors focus:outline-none focus:ring-2";
const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-accent";
function FormField(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "03c62bb0a0a15f64befc2b5552ba214e07c8c0857da7ae5ce1dff9a86ac24e62") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03c62bb0a0a15f64befc2b5552ba214e07c8c0857da7ae5ce1dff9a86ac24e62";
    }
    let className;
    let error;
    let id;
    let label;
    let name;
    let placeholder;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ id, label, name, type: t1, required: t2, placeholder, className, error, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = error;
        $[4] = id;
        $[5] = label;
        $[6] = name;
        $[7] = placeholder;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        className = $[2];
        error = $[3];
        id = $[4];
        label = $[5];
        name = $[6];
        placeholder = $[7];
        props = $[8];
        t1 = $[9];
        t2 = $[10];
    }
    const type = t1 === undefined ? "text" : t1;
    const required = t2 === undefined ? false : t2;
    let t3;
    if ($[11] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", className);
        $[11] = className;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== required) {
        t4 = required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-0.5 text-destructive",
            "aria-hidden": "true",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 83,
            columnNumber: 22
        }, this);
        $[13] = required;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== id || $[16] !== label || $[17] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: id,
            className: LABEL_CLASSES,
            children: [
                label,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[15] = id;
        $[16] = label;
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const t6 = error ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-border focus:border-primary focus:ring-primary/20";
    let t7;
    if ($[19] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(INPUT_CLASSES, t6);
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const t8 = error ? "true" : "false";
    const t9 = error ? `${id}-error` : undefined;
    let t10;
    if ($[21] !== id || $[22] !== name || $[23] !== placeholder || $[24] !== props || $[25] !== required || $[26] !== t7 || $[27] !== t8 || $[28] !== t9 || $[29] !== type) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: id,
            name: name,
            type: type,
            required: required,
            placeholder: placeholder,
            className: t7,
            "aria-invalid": t8,
            "aria-describedby": t9,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[21] = id;
        $[22] = name;
        $[23] = placeholder;
        $[24] = props;
        $[25] = required;
        $[26] = t7;
        $[27] = t8;
        $[28] = t9;
        $[29] = type;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== error || $[32] !== id) {
        t11 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: `${id}-error`,
            className: "mt-1.5 text-xs text-destructive",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 128,
            columnNumber: 20
        }, this);
        $[31] = error;
        $[32] = id;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] !== t10 || $[35] !== t11 || $[36] !== t3 || $[37] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t5,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t11;
        $[36] = t3;
        $[37] = t5;
        $[38] = t12;
    } else {
        t12 = $[38];
    }
    return t12;
}
_c = FormField;
function FormTextarea(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "03c62bb0a0a15f64befc2b5552ba214e07c8c0857da7ae5ce1dff9a86ac24e62") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03c62bb0a0a15f64befc2b5552ba214e07c8c0857da7ae5ce1dff9a86ac24e62";
    }
    let className;
    let error;
    let id;
    let label;
    let name;
    let placeholder;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ id, label, name, rows: t1, required: t2, placeholder, className, error, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = error;
        $[4] = id;
        $[5] = label;
        $[6] = name;
        $[7] = placeholder;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        className = $[2];
        error = $[3];
        id = $[4];
        label = $[5];
        name = $[6];
        placeholder = $[7];
        props = $[8];
        t1 = $[9];
        t2 = $[10];
    }
    const rows = t1 === undefined ? 5 : t1;
    const required = t2 === undefined ? false : t2;
    let t3;
    if ($[11] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", className);
        $[11] = className;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== required) {
        t4 = required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-0.5 text-destructive",
            "aria-hidden": "true",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 214,
            columnNumber: 22
        }, this);
        $[13] = required;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== id || $[16] !== label || $[17] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: id,
            className: LABEL_CLASSES,
            children: [
                label,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[15] = id;
        $[16] = label;
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const t6 = error ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-border focus:border-primary focus:ring-primary/20";
    let t7;
    if ($[19] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(INPUT_CLASSES, "resize-none", t6);
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const t8 = error ? "true" : "false";
    const t9 = error ? `${id}-error` : undefined;
    let t10;
    if ($[21] !== id || $[22] !== name || $[23] !== placeholder || $[24] !== props || $[25] !== required || $[26] !== rows || $[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            id: id,
            name: name,
            required: required,
            rows: rows,
            placeholder: placeholder,
            className: t7,
            "aria-invalid": t8,
            "aria-describedby": t9,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[21] = id;
        $[22] = name;
        $[23] = placeholder;
        $[24] = props;
        $[25] = required;
        $[26] = rows;
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== error || $[32] !== id) {
        t11 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: `${id}-error`,
            className: "mt-1.5 text-xs text-destructive",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 259,
            columnNumber: 20
        }, this);
        $[31] = error;
        $[32] = id;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] !== t10 || $[35] !== t11 || $[36] !== t3 || $[37] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t5,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/common/components/ui/form-field.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t11;
        $[36] = t3;
        $[37] = t5;
        $[38] = t12;
    } else {
        t12 = $[38];
    }
    return t12;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
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
        value: "+977 1 4545678",
        href: "tel:+97714545678"
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "ce076f51e23d30f0a8b1ca161ef292c1d0fd6426145a77842b705cf3f1d0faf2") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ce076f51e23d30f0a8b1ca161ef292c1d0fd6426145a77842b705cf3f1d0faf2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[3] !== errors) {
        t2 = ({
            "ContactSection[handleChange]": (e)=>{
                const { name, value } = e.target;
                setFormValues({
                    "ContactSection[handleChange > setFormValues()]": (prev)=>({
                            ...prev,
                            [name]: value
                        })
                }["ContactSection[handleChange > setFormValues()]"]);
                if (errors[name]) {
                    setErrors({
                        "ContactSection[handleChange > setErrors()]": (prev_0)=>({
                                ...prev_0,
                                [name]: ""
                            })
                    }["ContactSection[handleChange > setErrors()]"]);
                }
            }
        })["ContactSection[handleChange]"];
        $[3] = errors;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleChange = t2;
    let t3;
    if ($[5] !== formValues.email || $[6] !== formValues.message || $[7] !== formValues.name || $[8] !== formValues.subject) {
        const validate = {
            "ContactSection[validate]": ()=>{
                const newErrors = {};
                if (!formValues.name.trim()) {
                    newErrors.name = "Full name is required";
                } else {
                    if (formValues.name.trim().length < 3) {
                        newErrors.name = "Name must be at least 3 characters";
                    }
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!formValues.email.trim()) {
                    newErrors.email = "Email address is required";
                } else {
                    if (!emailRegex.test(formValues.email.trim())) {
                        newErrors.email = "Please enter a valid email address";
                    }
                }
                if (!formValues.subject.trim()) {
                    newErrors.subject = "Subject is required";
                } else {
                    if (formValues.subject.trim().length < 3) {
                        newErrors.subject = "Subject must be at least 3 characters";
                    }
                }
                if (!formValues.message.trim()) {
                    newErrors.message = "Message is required";
                } else {
                    if (formValues.message.trim().length < 10) {
                        newErrors.message = "Message must be at least 10 characters";
                    }
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }
        }["ContactSection[validate]"];
        t3 = ({
            "ContactSection[handleSubmit]": (e_0)=>{
                e_0.preventDefault();
                if (!validate()) {
                    return;
                }
                setIsSubmitting(true);
                setTimeout({
                    "ContactSection[handleSubmit > setTimeout()]": ()=>{
                        setIsSubmitting(false);
                        setIsSubmitted(true);
                        setFormValues({
                            name: "",
                            email: "",
                            subject: "",
                            message: ""
                        });
                    }
                }["ContactSection[handleSubmit > setTimeout()]"], 1200);
            }
        })["ContactSection[handleSubmit]"];
        $[5] = formValues.email;
        $[6] = formValues.message;
        $[7] = formValues.name;
        $[8] = formValues.subject;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const handleSubmit = t3;
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            label: "Contact",
            title: "Get in Touch",
            description: "Ready to start your next project or explore how Vyomnix can support your business? Reach out \u2014 we respond within one business day."
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = CONTACT_DETAILS.map(_ContactSectionCONTACT_DETAILSMap);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$motion$2f$motion$2d$stagger$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionStaggerGroup"], {
            className: "space-y-6 lg:col-span-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerChild"],
                    className: "pt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "For support inquiries:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].support}`,
                                className: "font-medium text-primary transition-colors hover:text-primary-hover underline underline-offset-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$constants$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].support
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                lineNumber: 175,
                                columnNumber: 195
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 175,
                        columnNumber: 123
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                    lineNumber: 175,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== errors.email || $[14] !== errors.message || $[15] !== errors.name || $[16] !== errors.subject || $[17] !== formValues.email || $[18] !== formValues.message || $[19] !== formValues.name || $[20] !== formValues.subject || $[21] !== handleChange || $[22] !== handleSubmit || $[23] !== isSubmitted || $[24] !== isSubmitting) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "bg-background py-20 md:py-28",
            "aria-label": "Contact Us",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 lg:grid-cols-5",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewportConfig"],
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-border bg-muted p-6 md:p-8 min-h-[400px] flex flex-col justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                        mode: "wait",
                                        children: isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.95
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.95
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: "flex flex-col items-center justify-center py-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 20,
                                                        delay: 0.1
                                                    },
                                                    className: "flex size-16 items-center justify-center rounded-full bg-secondary text-primary shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "size-8",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: "3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                            initial: {
                                                                pathLength: 0
                                                            },
                                                            animate: {
                                                                pathLength: 1
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                ease: "easeOut",
                                                                delay: 0.3
                                                            },
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 220
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 124
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 91
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.4
                                                    },
                                                    className: "mt-6 font-heading text-xl font-bold text-accent",
                                                    children: "Message Sent Successfully!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 111
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.5
                                                    },
                                                    className: "mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground",
                                                    children: "Thank you for reaching out to Vyomnix. Our team will get back to you within one business day."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        delay: 0.7
                                                    },
                                                    onClick: {
                                                        "ContactSection[<motion.button>.onClick]": ()=>setIsSubmitted(false)
                                                    }["ContactSection[<motion.button>.onClick]"],
                                                    className: "mt-8 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover underline underline-offset-4 cursor-pointer",
                                                    children: "Send another message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 206
                                                }, this)
                                            ]
                                        }, "success", true, {
                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                            lineNumber: 182,
                                            columnNumber: 438
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                            onSubmit: handleSubmit,
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-5 sm:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                            id: "contact-name",
                                                            label: "Full Name",
                                                            name: "name",
                                                            required: true,
                                                            placeholder: "Your name",
                                                            value: formValues.name,
                                                            onChange: handleChange,
                                                            error: errors.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 85
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                            id: "contact-email",
                                                            label: "Email Address",
                                                            name: "email",
                                                            type: "email",
                                                            required: true,
                                                            placeholder: "you@company.com",
                                                            value: formValues.email,
                                                            onChange: handleChange,
                                                            error: errors.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 254
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 42
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                    id: "contact-subject",
                                                    label: "Subject",
                                                    name: "subject",
                                                    required: true,
                                                    placeholder: "How can we help?",
                                                    value: formValues.subject,
                                                    onChange: handleChange,
                                                    error: errors.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 456
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$form$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormTextarea"], {
                                                    id: "contact-message",
                                                    label: "Message",
                                                    name: "message",
                                                    required: true,
                                                    placeholder: "Tell us about your project...",
                                                    value: formValues.message,
                                                    onChange: handleChange,
                                                    error: errors.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 642
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "submit",
                                                        size: "lg",
                                                        disabled: isSubmitting,
                                                        className: "w-full sm:w-auto shadow-sm",
                                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Sending...",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "ml-1 size-4 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 989
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Send Message",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                    className: "ml-1 size-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 1057
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 866
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 844
                                                }, this)
                                            ]
                                        }, "form", true, {
                                            fileName: "[project]/src/features/home/components/contact-section.tsx",
                                            lineNumber: 234,
                                            columnNumber: 263
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                                        lineNumber: 182,
                                        columnNumber: 394
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/contact-section.tsx",
                                    lineNumber: 182,
                                    columnNumber: 281
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/contact-section.tsx",
                                lineNumber: 182,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 182,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 182,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[13] = errors.email;
        $[14] = errors.message;
        $[15] = errors.name;
        $[16] = errors.subject;
        $[17] = formValues.email;
        $[18] = formValues.message;
        $[19] = formValues.name;
        $[20] = formValues.subject;
        $[21] = handleChange;
        $[22] = handleSubmit;
        $[23] = isSubmitted;
        $[24] = isSubmitting;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    return t7;
}
_s(ContactSection, "wtKEvYfRiK2FwpOFaWatvxX0meU=");
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
                    lineNumber: 261,
                    columnNumber: 292
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 261,
                columnNumber: 188
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                        children: detail.label
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 261,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm font-medium text-accent",
                        children: detail.value
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/contact-section.tsx",
                        lineNumber: 261,
                        columnNumber: 432
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/contact-section.tsx",
                lineNumber: 261,
                columnNumber: 325
            }, this)
        ]
    }, detail.label, true, {
        fileName: "[project]/src/features/home/components/contact-section.tsx",
        lineNumber: 261,
        columnNumber: 19
    }, this);
    if (detail.href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: detail.href,
            className: "block group",
            children: content
        }, detail.label, false, {
            fileName: "[project]/src/features/home/components/contact-section.tsx",
            lineNumber: 263,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: content
    }, detail.label, false, {
        fileName: "[project]/src/features/home/components/contact-section.tsx",
        lineNumber: 265,
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

//# sourceMappingURL=src_fbb12512._.js.map