"use strict";
exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 1902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ activeSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9343);
;// CONCATENATED MODULE: ./src/useWindowSize.js

function useWindowSize() {
    const isSSR = "undefined" === "undefined";
    const [windowSize, setWindowSize] = external_react_default().useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    });
    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", changeWindowSize);
        return ()=>{
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};

;// CONCATENATED MODULE: ./src/activeSection.js



const ActiveSection = (active, animationIn, animationOut)=>{
    const { nav  } = (0,external_react_.useContext)(context/* default */.Z);
    const { width  } = useWindowSize();
    return `card-inner ${nav == active ? `animated active ${width > 1200 ? animationIn ? animationIn : "fadeInLeft" : ""}` : width > 1200 ? `animated hidden ${width > 1200 ? animationOut ? animationOut : "fadeOutLeft" : ""}` : ""}`;
};
/* harmony default export */ const activeSection = (ActiveSection);


/***/ }),

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);


const About = ({ children , animationIn , animationOut  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_activeSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("about", animationIn, animationOut),
        id: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-wrap",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 8319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _activeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1902);



const Blog = ({ children , animationIn , animationOut  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,_activeSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("blog", animationIn, animationOut),
            id: "blog",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-wrap",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);


const Contact = ({ children , animationIn , animationOut  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_activeSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("contacts", animationIn, animationOut),
        id: "contacts",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-wrap",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 3791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Home = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card-started",
        id: "home-card",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 9316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);


const Resume = ({ children , animationIn , animationOut  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_activeSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("resume", animationIn, animationOut),
        id: "resume",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-wrap",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resume);


/***/ }),

/***/ 9142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([typed_js__WEBPACK_IMPORTED_MODULE_2__]);
typed_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TypingAnimation = ({ data  })=>{
    // Create Ref element.
    const el = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__["default"](el.current, {
            strings: data ? data : [
                "Web Designer",
                "Developer",
                "Freelancer"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false
        });
        // Destropying
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "subtitle subtitle-typed",
        ref: el
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypingAnimation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);


const Work = ({ children , animationIn , animationOut  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_activeSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("works", animationIn, animationOut),
        id: "works",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-wrap",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);


/***/ }),

/***/ 3615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AboutMeClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content about",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "first-word",
                            children: "About"
                        }),
                        " Me"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-box",
                                dangerouslySetInnerHTML: {
                                    __html: bio ? bio : bio_
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "info-list",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Age . . . . ."
                                                }),
                                                " 24"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Residence . . . . ."
                                                }),
                                                " USA"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Freelance . . . . ."
                                                }),
                                                " Available"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Address . . . . ."
                                                }),
                                                " London, UK"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutMe);
const AboutMeClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content about",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "About Me"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "text-box",
                                children: /*#__PURE__*/ _jsx("p", {
                                    children: "I am Ryan Adlard, web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique."
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "info-list",
                                children: /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("strong", {
                                                    children: "Age . . . . ."
                                                }),
                                                " 24"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("strong", {
                                                    children: "Residence . . . . ."
                                                }),
                                                " USA"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("strong", {
                                                    children: "Freelance . . . . ."
                                                }),
                                                " Available"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("strong", {
                                                    children: "Address . . . . ."
                                                }),
                                                " California, USA"
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BlogClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9343);



const BlogSection = ()=>{
    const { changeNav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content blog",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Blog"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row border-line-v",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/blog/blog1.jpg",
                                                    alt: "By spite about do of allow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "date",
                                                    children: "April 28, 2020"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of allow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos…"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/blog/blog2.jpg",
                                                    alt: "By spite about do of allow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "date",
                                                    children: "April 28, 2020"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of allow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos…"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/blog/blog3.jpg",
                                                    alt: "By spite about do of allow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "date",
                                                    children: "April 28, 2020"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of allow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos…"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/blog/blog1.jpg",
                                                    alt: "By spite about do of allow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "date",
                                                    children: "April 28, 2020"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of allow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos…"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pager",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "navigation pagination",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nav-links",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "page-numbers current",
                                    children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "page-numbers",
                                    href: "#",
                                    children: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "next page-numbers",
                                    href: "#",
                                    children: "Next"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSection);
const BlogClassic = ()=>{
    const { changeNav  } = useContext(Context);
    return /*#__PURE__*/ _jsx(Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "content blog",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "title",
                    children: "Latest Posts"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row border-line-v",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-h",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ _jsxs("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog1.jpg",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "date",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "20"
                                                        }),
                                                        "Jun"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of do allow blush"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "category",
                                                children: "Design"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-h",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ _jsxs("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog2.jpg",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "date",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "19"
                                                        }),
                                                        "Jun"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "Two Before Arrow Not Relied"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "category",
                                                children: "Coding"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-h",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "box-item",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ _jsxs("a", {
                                            href: "#",
                                            onClick: ()=>changeNav("blog-post"),
                                            children: [
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog3.jpg",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "info",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "ion ion-document-text"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "date",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "20"
                                                        }),
                                                        "Jun"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "desc",
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                onClick: ()=>changeNav("blog-post"),
                                                className: "name",
                                                children: "By spite about do of do allow blush"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "category",
                                                children: "Travel"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Clients = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content clients",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Clients"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row client-items",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "client-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://www.google.com",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "images/clients/client_1.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "client-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://www.google.com",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "images/clients/client_2.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "client-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://www.google.com",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "images/clients/client_3.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "client-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "https://www.google.com",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "images/clients/client_4.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);


/***/ }),

/***/ 8136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ContactForm = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content contacts",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Contact Form"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "contact_form",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    id: "cform",
                                    method: "post",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col col-d-6 col-t-6 col-m-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "group-val",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "name",
                                                            placeholder: "Full Name"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col col-d-6 col-t-6 col-m-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "group-val",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            placeholder: "Email Address"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col col-d-12 col-t-12 col-m-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "group-val",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            name: "message",
                                                            placeholder: "Your Message",
                                                            defaultValue: ""
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "align-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                className: "button",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text",
                                                        children: "Send Message"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "arrow"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "alert-success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Thanks, your message is sent successfully."
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);


/***/ }),

/***/ 4955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ContactInfo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content contacts",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Get in Touch"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "map",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd",
                                    style: {
                                        border: 0,
                                        width: "100%",
                                        height: "100%"
                                    },
                                    allowFullScreen: "",
                                    loading: "lazy"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "info-list",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Address . . . . ."
                                                }),
                                                " California, USA"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Email . . . . ."
                                                }),
                                                " adlard@example.com"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Phone . . . . ."
                                                }),
                                                " +123 654 78900"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Freelance . . . . ."
                                                }),
                                                " Available"
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);


/***/ }),

/***/ 6623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aI": () => (/* binding */ FunFactWriter)
/* harmony export */ });
/* unused harmony export FunFactClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FunFact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content fuct",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Fun Fact"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row fuct-items",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fuct-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fa fa-music"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "80 Albumes Listened"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fuct-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fa fa-trophy"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "15 Awards Won"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fuct-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fa fa-coffee"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "1 000 Cups of coffee"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fuct-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fa fa-flag"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "10 Countries Visited"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunFact);
const FunFactWriter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content fuct",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "first-letter",
                    children: "Awards"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row fuct-items",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "fa fa-book"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "name",
                                    children: "New York Book Awards"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "fa fa-trophy"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "name",
                                    children: "German Book Awards"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "fa fa-coffee"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "name",
                                    children: "Costa Book Award"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "fa fa-pencil"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "name",
                                    children: "Writers Guild Awards"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "revs-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "user",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/profile.png",
                                                alt: "Ryan Adlard"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Ryan Adlard"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "Web Designer"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "clear"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const FunFactClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content fuct",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "Fun Fact"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row fuct-items",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-disc"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "80 Albumes Listened"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-trophy"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "15 Awards Won"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-coffee"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "1 000 Cups of coffee"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-3 col-t-3 col-m-6 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "fuct-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-flag"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "10 Countries Visited"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PriceClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Pricing = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content pricing",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Pricing"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row pricing-items",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pricing-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-battery-half"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Basic"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "amount",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "dollar",
                                                children: "$"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "number",
                                                children: "22"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "period",
                                                children: "hour"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "feature-list",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Web Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Advetising"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Game Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "disable",
                                                    children: "Music Writing"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "disable",
                                                    children: [
                                                        "Photography ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "new"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lnks",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            className: "lnk",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text",
                                                    children: "Buy Basic"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    class: "fa fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pricing-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-battery-full"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Pro"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "amount",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "dollar",
                                                children: "$"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "number",
                                                children: "48"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "period",
                                                children: "hour"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "feature-list",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Web Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Advetising"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Game Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "Music Writing"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        "Photography ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "new"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lnks",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            className: "lnk",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text",
                                                    children: "Buy Pro"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    class: "fa fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);
const PriceClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content pricing",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "Pricing"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row pricing-items",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "pricing-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "ion ion-speedometer speed-basic"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Basic"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "amount",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "dollar",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "number",
                                            children: "22"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "period",
                                            children: "hour"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "feature-list",
                                    children: /*#__PURE__*/ _jsxs("ul", {
                                        children: [
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Web Development"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Advetising"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Game Development"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                className: "disable",
                                                children: "Music Writing"
                                            }),
                                            /*#__PURE__*/ _jsxs("li", {
                                                className: "disable",
                                                children: [
                                                    "Photography ",
                                                    /*#__PURE__*/ _jsx("strong", {
                                                        children: "new"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "lnks",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        href: "#",
                                        className: "lnk",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text",
                                                children: "Buy Basic"
                                            }),
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-speedometer speed-basic"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "pricing-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "ion ion-speedometer"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Pro"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "amount",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "dollar",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "number",
                                            children: "48"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "period",
                                            children: "hour"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "feature-list",
                                    children: /*#__PURE__*/ _jsxs("ul", {
                                        children: [
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Web Development"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Advetising"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Game Development"
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: "Music Writing"
                                            }),
                                            /*#__PURE__*/ _jsxs("li", {
                                                children: [
                                                    "Photography ",
                                                    /*#__PURE__*/ _jsx("strong", {
                                                        children: "new"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "lnks",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        href: "#",
                                        className: "lnk",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text",
                                                children: "Buy Pro"
                                            }),
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-speedometer"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Quote = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content quote",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Quote"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "revs-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "user",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/man1.jpg",
                                                    alt: "Ryan Adlard"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Ryan Adlard"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "company",
                                                        children: "Web Designer"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "clear"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);


/***/ }),

/***/ 7142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aV": () => (/* binding */ ResumeSectionWritter),
/* harmony export */   "ab": () => (/* binding */ ResumeSectionLawyer),
/* harmony export */   "he": () => (/* binding */ ResumeSectionFitness),
/* harmony export */   "vr": () => (/* binding */ ResumeSectionMusician)
/* harmony export */ });
/* unused harmony export ResumeSectionClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ResumeSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content resume",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Resume"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "resume-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-briefcase"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Experience"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "resume-items",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item border-line-h active",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2013 - Present"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Art Director"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "Facebook Inc."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Collaborate with creative and development teams on the execution of ideas."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2011 - 2012"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Front-end Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "Google Inc."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Monitored technical aspects of the front-end delivery for several projects."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2009 - 2010"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Senior Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "Abc Inc."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Optimize website performance using latest technology."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "resume-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-university"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Education"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "resume-items",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2006 - 2008"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Art University"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "New York"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        `Bachelor's`,
                                                        " Degree in Computer Science ABC Technical Institute, Jefferson, Missouri"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2005 - 2006"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Programming Course"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "Paris"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Coursework - Git, WordPress, Javascript, iOS, Android."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "date",
                                                    children: "2004 - 2005"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Web Design Course"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "company",
                                                    children: "London"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResumeSection);
const ResumeSectionFitness = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content resume",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "first-letter",
                    children: "Resume"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-briefcase"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h active",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2013 - Present"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Fitness Trainer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Gym Club"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Inspired clients to push their hardest and do their very best."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2011 - 2012"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Cardio Trainer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "High-Intensity Complex"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Dynamic sculpting exercises for the perfect balance of cardio and strength training."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-university"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Education"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2006 - 2008"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Pace University"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Pace University is a private university with its main campus in New York City."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2005 - 2006"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Fitness Course"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Personal trainer and fitness instructor courses in London."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const ResumeSectionLawyer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content resume",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Resume"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-briefcase"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h active",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2013 - Present"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Law Director"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Facebook Inc."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Head of the Law Department which represents and advises the City in all civil."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2011 - 2012"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Lawyer Leader"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Google Inc."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Was part of a client focused organisation that makes a difference."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2009 - 2010"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Junior Lawyer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "ABC Inc."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "A fast-growing international pharmaceutical services company."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-university"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Education"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2006 - 2008"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Law University"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    `Gray's`,
                                                    " Inn, 4 ",
                                                    `Gray's`,
                                                    " Inn Place, Warwick Ct"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2005 - 2006"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Law Schools"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "The Law School of English has over 50 years experience teaching general."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2004 - 2005"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "London School"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "The London School of English has over 100 years experience teaching general."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const ResumeSectionWritter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content resume",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Resume"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-briefcase"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h active",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2013 - Present"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Writer Director"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "DBBooks"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Collaborate with creative and development teams on the execution of ideas."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2011 - 2012"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Team Leader"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "ABC Inc."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "A team leader is responsible for guiding a group of employees as they complete a project."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2009 - 2010"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Business Writer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Writer Corporation."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Corporate writing is writing for business purposes."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-university"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Education"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2006 - 2008"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "New York University"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "New York University offers 2 Creative Writing Degree programs.",
                                                    `It's`,
                                                    " a large private university in a large city."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2005 - 2006"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Writing Course"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Creative writing short courses is taught at City, University of London. Develop writing skills with professional and published authors."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2004 - 2005"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "New York School"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Brooklyn, NY, United States"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const ResumeSectionMusician = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content resume",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Resume"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-briefcase"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h active",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2018 - Present"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Schenectady Symphony Orchestra"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Third chair, first violin section."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2016 - 2018"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Utica Symphony Orchestra"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "First violin section; orchestra is currently without contract."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2014 - 2016"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Frequent freelance"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Work in: New York Capital Region for Cohoes Music Hall, Hubbard Hall Opera Theater."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-university"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: "Education"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2011 - 2014"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Peabody Institute"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Baltimore"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "M.M. in Performance, Peabody Institute ",
                                                    `–`,
                                                    " Baltimore, MD 2015."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2008 - 2011"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "American University"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "Washington"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "B.A. in Music, American University ",
                                                    `–`,
                                                    " Washington, D.C. 2012."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "date",
                                                children: "2000 - 2008"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "New York School of Music"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Great school! The teachers really care about the students."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const ResumeSectionClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content resume",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "Resume"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ _jsx("i", {
                                            className: "ion ion-briefcase"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "name",
                                        children: "Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item border-line-h active",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2013 - Present"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Art Director"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "Facebook Inc."
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Collaborate with creative and development teams on the execution of ideas."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2011 - 2012"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Front-end Developer"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "Google Inc."
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Monitored technical aspects of the front-end delivery for several projects."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2009 - 2010"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Senior Developer"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "Abc Inc."
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Optimize website performance using latest technology."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "resume-title border-line-h",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ _jsx("i", {
                                            className: "ion ion-university"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "name",
                                        children: "Education"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "resume-items",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2006 - 2008"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Art University"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "New York"
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                                children: [
                                                    `Bachelor's`,
                                                    " Degree in Computer Science ABC Technical Institute, Jefferson, Missouri"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item border-line-h",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2005 - 2006"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Programming Course"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "Paris"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Coursework - Git, WordPress, Javascript, iOS, Android."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "resume-item",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "date",
                                                children: "2004 - 2005"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Web Design Course"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "company",
                                                children: "London"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ServicesClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const data = [
    {
        icon: "fa fa-code",
        title: "Web Development",
        desc: "Modern and mobile-ready website that will help you reach all of your marketing."
    },
    {
        icon: "fa fa-music",
        title: "Music Writing",
        desc: "Music copying, writing, creating, transcription, arranging and composition services."
    },
    {
        icon: "fa fa-buysellads",
        title: "Advetising",
        desc: "Advertising services include television, radio, print, mail, and web apps."
    },
    {
        icon: "fa fa-gamepad",
        title: "Game Development",
        desc: "Developing memorable and unique mobile android, ios and video games."
    }, 
];
const Services = ({ serviceList  })=>{
    const services = serviceList ? serviceList : data;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content services",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "first-word",
                            children: "My"
                        }),
                        " Services"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row service-items border-line-v",
                    children: services.map((service, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-h",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "service-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: service.icon
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: service.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "desc",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: service.desc
                                            })
                                        })
                                    })
                                ]
                            })
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "clear"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content services",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "My Services"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row service-items border-line-v",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-h",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "service-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-code"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Web Development"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Modern and mobile-ready website that will help you reach all of your marketing."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-h",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "service-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-music-note"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Music Writing"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Music copying, transcription, arranging and composition services."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "service-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-speakerphone"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Advetising"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Advertising services include television, radio, print, mail and web."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "service-item",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "ion ion-ios-game-controller-b"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Game Development"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Developing memorable and unique mobile android, ios games."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BK": () => (/* binding */ SkillsMusican),
/* harmony export */   "DG": () => (/* binding */ SkillsLawyer),
/* harmony export */   "GB": () => (/* binding */ SkillsWritter),
/* harmony export */   "Vp": () => (/* binding */ SkillsFitness),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports SkillsPhotographer, SkillsPhotographerForAbout, SkillsClassic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Slice = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "slice",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fill"
            })
        ]
    });
const Skills = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content skills",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "My Skills"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-paint-brush"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Design"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Web Design"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "90%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Write Music"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "65%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Photoshop"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "75%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Graphic Design"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "85%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-flag"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Languages"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "90%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "German"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "60%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Italian"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "30%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "French"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "70%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list circles",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-code"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Coding"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "WordPress"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "progress p90",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "90%"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "slice",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "bar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "fill"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "PHP / MYSQL"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "progress p75",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "75%"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "slice",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "bar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "fill"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Angular / JavaScript"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "progress p85",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "85%"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "slice",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "bar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "fill"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "HTML / CSS"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "progress p95",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "95%"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "slice",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "bar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "fill"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-list"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Knowledge"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Website hosting"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "iOS and android apps"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Create logo design"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Design for print"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Modern and mobile-ready"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Advertising services include"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Graphics and animations"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Search engine marketing"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);
const SkillsFitness = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content skills",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Skills"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-bicycle"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Fitness"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Agility"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "90%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Balance"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "65%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Power"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "75%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Speed"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "85%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list dotted",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-flag"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Languages"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "90%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "German"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "60%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Italian"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "30%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "French"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "70%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-list"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Knowledge"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Fat Burn"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Body condition"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Strength training"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Faster exercise"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Bodybuilding"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Fitness training"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Cardio training"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
const SkillsLawyer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content skills",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "Skills"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "skills-list",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Oral Communication"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "90%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Written Communication"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "65%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Analytical and Logical Reasoning"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "75%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Legal Research"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "85%"
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list dotted",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-flag"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Languages"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "90%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "German"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "60%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "border-line-h",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "Italian"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "30%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "name",
                                                        children: "French"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "progress ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "percentage",
                                                            style: {
                                                                width: "70%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skills-list list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "skill-title border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-list"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Knowledge"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Client Service"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Technology Skills"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Knowledge of Substantive Law"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Legal Procedure"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Organization"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Teamwork"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "clear"
                        })
                    ]
                })
            ]
        })
    });
};
const SkillsWritter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content skills",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Skills"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skills-list",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "The Ability to Communicate"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "90%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "The Power of Observation"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "65%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Reasoning and Problem Solving"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "75%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Knowledge of Grammar, Spelling"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "85%"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "skills-list dotted",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-flag"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Languages"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "English"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "90%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "German"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "60%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Italian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "30%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "French"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "progress ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "70%"
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "skills-list list",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-list"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Knowledge"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Adaptability"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Strong Research Skills"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "The Ability to Get Focused"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Communicate"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "The Ability to Meet Deadlines"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Organizational Skills"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const SkillsMusican = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content skills",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Skills"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skills-list",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Motivation / Determination"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "90%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Violin Expertise"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "65%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "border-line-h",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Creativity"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "75%"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Guitar Expertise"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "percentage",
                                                    style: {
                                                        width: "85%"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "skills-list circles",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-music"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Read Music"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Chords"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "progress p90",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "90%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Intervals"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "progress p75",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "75%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Melody"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "progress p85",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "85%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "Pitch"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "progress p95",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "95%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "skills-list list",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-list"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: "Knowledge"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "A Tight Sense of Rhythm"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Rhythm is the heartbeat of all music"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "An Accurate Sense of Pitch"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "The Ability to “Jam”"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "An Ability to “Talk Music”"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: "Singing in Tune"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const SkillsPhotographer = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content skills",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "title",
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "first-word",
                        children: "My"
                    }),
                    " Skills"
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list circles",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fa fa-paint-brush"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Design"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Logo Design"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p90",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "90%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Web Design"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p75",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "75%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Illustration"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p85",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "85%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Photography"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p95",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "95%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list list",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fa fa-list"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Knowledge"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Website hosting"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "iOS and android apps"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Create logo design"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Design for print"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Modern and mobile-ready"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Advertising services include"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Graphics and animations"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Search engine marketing"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
const SkillsPhotographerForAbout = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "skills-list",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "skill-title border-line-h",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "fa fa-paint-brush"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Software Skills"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                            children: [
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Sketch"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "90%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Adobe Photoshop"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "65%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Adobe illustration"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "75%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Figma"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "85%"
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "skills-list dotted",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "skill-title border-line-h",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "fa fa-flag"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "name",
                                    children: "Languages"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                            children: [
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "English"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "90%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "German"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "60%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Italian"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "30%"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "French"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "progress ",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "percentage",
                                                style: {
                                                    width: "70%"
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "clear"
            })
        ]
    });
};
const SkillsClassic = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "content skills",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "title",
                children: "My Skills"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-easel"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Design"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Web Design"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "90%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Write Music"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "65%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Photoshop"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "75%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Graphic Design"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "85%"
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list dotted",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-flag"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Languages"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "English"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "90%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "German"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "60%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "border-line-h",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Italian"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "30%"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "French"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "progress ",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "percentage",
                                                        style: {
                                                            width: "70%"
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list circles",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-code"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Coding"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "WordPress"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p90",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "90%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "PHP / MYSQL"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p75",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "75%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "Angular / JavaScript"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p85",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "85%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "name",
                                                    children: "HTML / CSS"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress p95",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "95%"
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slice, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col col-d-6 col-t-6 col-m-12 border-line-v",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "skills-list list",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "skill-title border-line-h",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "ion ion-android-list"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "name",
                                            children: "Knowledge"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Website hosting"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "iOS and android apps"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Create logo design"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Design for print"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Modern and mobile-ready"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Advertising services include"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Graphics and animations"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "name",
                                                children: "Search engine marketing"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Grid
]);
const Testimonials = ()=>{
    const props = {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content testimonials",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: "Testimonials"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row testimonials-items",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col col-d-12 col-t-12 col-m-12 border-line-v",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "revs-carousel default-revs",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                ...props,
                                className: "owl-carousel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "revs-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "user",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "images/testi1.jpg",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "name",
                                                                    children: "Helen Floyd"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "company",
                                                                    children: "Art Director"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "revs-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "user",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "images/testi2.jpg",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "name",
                                                                    children: "Robert Chase"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "company",
                                                                    children: "CEO"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "revs-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "user",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "images/testi3.png",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "name",
                                                                    children: "Helen Floyd"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "company",
                                                                    children: "Art Director"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "swiper-pagination"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clear"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);


/***/ }),

/***/ 7027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_ContentContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/activeSection.js + 1 modules
var activeSection = __webpack_require__(1902);
;// CONCATENATED MODULE: ./src/components/BlogPost.js


const BlogPostNew = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `blog blog-post ${(0,activeSection/* default */.Z)("blog-post")}`,
        id: "blog-card",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card-wrap",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content blog-single",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Blog Post"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row border-line-v",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col col-m-12 col-t-12 col-d-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "post-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "h-title",
                                        children: "Procuring Education on Consulted Assurance in Do"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-detail",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "date",
                                                children: "April 28, 2020"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "cat-links",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Design"
                                                    }),
                                                    ", ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Music"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "byline",
                                                children: [
                                                    " ",
                                                    "by",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "admin"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "blog-image",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/blog/blog1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                                children: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing sex."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-style",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Greatest properly off ham exercise all."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Unsatiable invitation its possession nor off."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "All difficulty estimating unreserved increasing the solicitude."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "post-text-bottom",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "social-share",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Share"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "share-btn share-btn-facebook",
                                                        title: "Share on Facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "ion ion-social-facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "share-btn share-btn-twitter",
                                                        title: "Share on Twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "ion ion-social-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "share-btn share-btn-linkedin",
                                                        title: "Share on Linkedin",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "ion ion-social-linkedin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "share-btn share-btn-reddit",
                                                        title: "Share on Reddit",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "ion ion-social-reddit"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "share-btn share-btn-pinterest",
                                                        title: "Share on Pinterest",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "ion ion-social-pinterest"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "tags-links",
                                                children: [
                                                    "Taggs: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "code"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "html"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "plugin"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "wordpress"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "navigation post-navigation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nav-links",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-previous",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "post-nav-next post-nav-text",
                                            children: "Prev"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-next",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "post-nav-prev post-nav-text",
                                            children: "Next"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "post-comments",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title_inner",
                                    children: "3 Comments"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row border-line-v comments-row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col col-m-12 col-t-12 col-d-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "comments",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "comment post-comment",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "comment",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "comment-image image",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/man1.jpg",
                                                                className: "avatar",
                                                                height: 80,
                                                                width: 80,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "comment-desc desc",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "comment-name name",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-author",
                                                                            children: "John Doe"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-time",
                                                                            children: "8:16 pm"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-date",
                                                                            children: "April 28, 2020"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-reply",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "comment-reply-link",
                                                                                href: "#",
                                                                                children: "Reply"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "comment-text",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione tacimates vituperatoribus, ut mutat delenit est."
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "children",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "comment post-comment",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "comment",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "comment-image image",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "images/man1.jpg",
                                                                    className: "avatar",
                                                                    height: 80,
                                                                    width: 80,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "comment-desc desc",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "comment-name name",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "comment-author",
                                                                                children: "John Doe"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "comment-time",
                                                                                children: "8:16 pm"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "comment-date",
                                                                                children: "April 28, 2020"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "comment-reply",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "comment-reply-link",
                                                                                    href: "#",
                                                                                    children: "Reply"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "comment-text",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione tacimates vituperatoribus, ut mutat delenit est."
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "comment post-comment",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "comment",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "comment-image image",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/man1.jpg",
                                                                className: "avatar",
                                                                height: 80,
                                                                width: 80,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "comment-desc desc",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "comment-name name",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-author",
                                                                            children: "John Doe"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-time",
                                                                            children: "8:16 pm"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-date",
                                                                            children: "April 28, 2020"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "comment-reply",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "comment-reply-link",
                                                                                href: "#",
                                                                                children: "Reply"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "comment-text",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione tacimates vituperatoribus, ut mutat delenit est."
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "post-comments",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title",
                                children: "Leave a Comment"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row border-line-v",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col col-m-12 col-t-12 col-d-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "post-box",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                id: "cform",
                                                method: "post",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col col-d-12 col-t-12 col-m-12",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "group-val",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "Full Name"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col col-d-12 col-t-12 col-m-12",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "group-val",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                        name: "message",
                                                                        placeholder: "Your Message",
                                                                        defaultValue: ""
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "align-left",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            className: "button",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text",
                                                                    children: "Add Comment"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "arrow"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "alert-success",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Thanks, your message is sent successfully."
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const BlogPost = (BlogPostNew);
const BlogPostClassic = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "card-inner blog blog-post animated",
        id: "blog-card",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card-wrap",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content blog-single",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Blog Post"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row border-line-v",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col col-m-12 col-t-12 col-d-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "post-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Procuring Education on Consulted Assurance in Do"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "blog-detail",
                                        children: "Posted 12 June 2016"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "blog-image",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/blog/blog1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                                children: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing sex."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-style",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Greatest properly off ham exercise all."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "Unsatiable invitation its possession nor off."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "All difficulty estimating unreserved increasing the solicitude."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Comments"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row border-line-v",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col col-m-12 col-t-12 col-d-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "post-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "post-comments",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "images/man1.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "comment-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "name",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        children: [
                                                                            "John Doe ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "1 hour ago"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "Reply"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "images/man1.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "comment-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "name",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        children: [
                                                                            "John Doe ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "3 hour ago"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "Reply"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "images/man1.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "comment-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "name",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        children: [
                                                                            "John Doe ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "6 hour ago"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "Reply"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Leave a Comment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row border-line-v",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col col-m-12 col-t-12 col-d-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "post-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        id: "cform",
                                        method: "post",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col col-d-12 col-t-12 col-m-12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "group-val",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                name: "name",
                                                                placeholder: "Full Name"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col col-d-12 col-t-12 col-m-12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "group-val",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                name: "message",
                                                                placeholder: "Your Message",
                                                                defaultValue: ""
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "align-left",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    className: "button",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text",
                                                            children: "Add Comment"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "alert-success",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Thanks, your message is sent successfully."
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9343);
;// CONCATENATED MODULE: ./src/layout/ContentContainer.js




const ContentContainer = ({ children , blog  })=>{
    const { nav  } = (0,external_react_.useContext)(context/* default */.Z);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: nav === "blog-post" ? blog === "classic" ? /*#__PURE__*/ jsx_runtime_.jsx(BlogPostClassic, {}) : /*#__PURE__*/ jsx_runtime_.jsx(BlogPost, {}) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const layout_ContentContainer = (ContentContainer);


/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TypingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9142);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_2__]);
_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const headerMenus = [
    {
        title: "About",
        link: "about",
        icon: "icon fa fa-user-o"
    },
    {
        title: "Resume",
        link: "resume",
        icon: "icon fa fa-list-alt"
    },
    {
        title: "Works",
        link: "works",
        icon: "icon fa fa-object-ungroup"
    },
    {
        title: "Blog",
        link: "blog",
        icon: "icon fa fa-commenting-o"
    },
    {
        title: "Contact",
        link: "contacts",
        icon: "icon fa fa-envelope-o"
    }, 
];
const Header = ({ noSideBarBtn , menus , animationText  })=>{
    const { changeNav , nav , changeSideBar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sctionScroll = ()=>{};
        window.addEventListener("scroll", sctionScroll);
    }, []);
    const headerMenus_ = menus ? menus : headerMenus;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "profile",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "title",
                        children: "Ryan Adlard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "subtitle subtitle-typed",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            data: animationText
                        })
                    })
                ]
            }),
            !noSideBarBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                onClick: ()=>changeSideBar(true),
                className: "menu-btn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "top-menu menu-minimal",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: headerMenus_.map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${nav === menu.link ? "active" : ""}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: `#${menu.link}`,
                                onClick: ()=>changeNav(menu.link),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: menu.icon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "link",
                                        children: menu.title
                                    })
                                ]
                            })
                        }, i))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ContentModal.js



const Content = ({ content , close  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade popup-box-inline mfp-ready"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-inline-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "popup-2",
                                className: "popup-box mfp-fade",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: content.outerHTML
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>close(),
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        children: "\xd7"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ContentModal = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: content , 1: setContent  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const popupLink = document.querySelectorAll(".has-popup-media");
            for(let i = 0; i < popupLink.length; i++){
                const element = popupLink[i];
                element.addEventListener("click", ()=>{
                    setOpen(true);
                    const hidenElement = element.parentElement.getElementsByClassName("mfp-hide")[0];
                    const content_ = hidenElement.getElementsByClassName("content")[0];
                    setContent(content_);
                });
            }
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: open && /*#__PURE__*/ jsx_runtime_.jsx(Content, {
            content: content,
            close: ()=>{
                setContent(null);
                setOpen(false);
            }
        })
    });
};
/* harmony default export */ const popup_ContentModal = (ContentModal);

;// CONCATENATED MODULE: ./src/components/popup/ImageGallery.js


const ImgView = ({ close , imgs  })=>{
    const images = imgs.length > 0 ? imgs : [
        "images/works/work6.jpg",
        "images/works/work1.jpg",
        "images/works/work5.jpg", 
    ];
    const { 0: photoIndex , 1: setPhotoIndex  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "postion-realtive",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade mfp-ready",
                onClick: ()=>close()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                className: "mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-image-holder",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-content imgGallery_popup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mfp-iframe-scaler",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: `100%`
                                                },
                                                className: "mfp-img",
                                                src: images[photoIndex]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Previous (Left arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-left mfp-prevent-close",
                            onClick: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Next (Right arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-right mfp-prevent-close",
                            onClick: ()=>{
                                setPhotoIndex((photoIndex + 1) % images.length);
                            // console.log(photoIndex, images[photoIndex]);
                            }
                        })
                    ]
                })
            })
        ]
    });
};
const ImageGallery = ()=>{
    const { 0: imgs , 1: setImgs  } = (0,external_react_.useState)([]);
    const { 0: view , 1: setView  } = (0,external_react_.useState)(false);
    const { 0: imgContainer , 1: setImgContainer  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const imgGallery = document.querySelectorAll(".has-popup-gallery");
            for(let i = 0; i < imgGallery.length; i++){
                const gallery = imgGallery[i];
                gallery.addEventListener("click", ()=>{
                    setView(true);
                    let mfpHideItem = gallery.getElementsByClassName("mfp-hide")[0];
                    let img = mfpHideItem.getElementsByTagName("a");
                    setImgContainer(img);
                });
            }
        }, 1000);
        let img_ = [];
        for(let i = 0; i < imgContainer.length; i++){
            const element = imgContainer[i];
            let href = element.getAttribute("href");
            img_.push(href);
        }
        setImgs(img_);
    }, [
        view
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: view && /*#__PURE__*/ jsx_runtime_.jsx(ImgView, {
            imgs: imgs,
            close: ()=>{
                setView(false);
                setImgs([]);
            }
        })
    });
};
/* harmony default export */ const popup_ImageGallery = (ImageGallery);

;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const VideoPopup_js = (VideoPopup);

;// CONCATENATED MODULE: ./src/utils.js
const createSkillsDot = ()=>{
    var skills_dotted = document.querySelectorAll(".skills-list.dotted .progress");
    skills_dotted.forEach((skill)=>{
        skill.insertAdjacentHTML("beforeend", '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let percentage = skill.getElementsByClassName("percentage")[0];
        percentage.insertAdjacentHTML("beforeend", '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let width = skill.clientWidth, da = percentage.getElementsByClassName("da")[0];
        da.style.width = `${width}px`;
    });
};
const dotResize = ()=>{
    window.addEventListener("resize", ()=>{
        var skills_dotted = document.querySelectorAll(".skills-list.dotted .progress");
        skills_dotted.forEach((skill)=>{
            let width = skill.clientWidth, da = skill.getElementsByClassName("da")[0];
            da.style.width = `${width + 1}px`;
        });
    });
};

;// CONCATENATED MODULE: ./src/layout/Background.js

const Background = ({ bg , img  })=>{
    switch(bg){
        case "blured":
            return /*#__PURE__*/ jsx_runtime_.jsx(BackgroundBlured, {});
        case "gradient":
            return /*#__PURE__*/ jsx_runtime_.jsx(BackgroundGradient, {});
        case "img":
            return /*#__PURE__*/ jsx_runtime_.jsx(BackgroundImg, {
                img: img
            });
        case "regular":
            return /*#__PURE__*/ jsx_runtime_.jsx(RegularBackground, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(BackgroundBlured, {});
    }
};
/* harmony default export */ const layout_Background = (Background);
const BackgroundBlured = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "blured-background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
        ]
    });
};
const BackgroundGradient = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "background gradient",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "bg-bubbles",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {})
            ]
        })
    });
};
const BackgroundImg = ({ img  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "background",
        style: {
            backgroundImage: `url(${img})`
        }
    });
};
const RegularBackground = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "background"
    });
};

// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9343);
;// CONCATENATED MODULE: ./src/layout/ContentSidebar.js



const ContentSidebar = ()=>{
    const { sidebar , changeSideBar  } = (0,external_react_.useContext)(context/* default */.Z);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "s_overlay",
                style: {
                    display: sidebar ? "block" : "none"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `content-sidebar ${sidebar ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sidebar-wrap search-form",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                            id: "secondary",
                            className: "widget-area",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "search-2",
                                    className: "widget widget_search",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "screen-reader-text",
                                                    children: "Search for:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "search",
                                                    className: "search-field",
                                                    placeholder: "Search …",
                                                    defaultValue: "",
                                                    name: "s"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "submit",
                                            className: "search-submit",
                                            defaultValue: "Search"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: "widget widget_recent_entries",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "widget-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "widget-title-span",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "first-word",
                                                        children: "Recent"
                                                    }),
                                                    " Posts"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Creativity Is More Than"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Designing the perfect"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Music Player Design"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "A Song And Dance Act"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "By spite about do of allow"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: "widget widget_recent_comments",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "widget-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "widget-title-span",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "first-word",
                                                        children: "Recent"
                                                    }),
                                                    " Comments"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "recentcomments",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "comment-author-link",
                                                            children: "JOHN SMITH"
                                                        }),
                                                        " on",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Creativity Is More Than"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "recentcomments",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "comment-author-link",
                                                            children: "ADAM SMITH"
                                                        }),
                                                        " on",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Creativity Is More Than"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "recentcomments",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "comment-author-link",
                                                            children: "admin"
                                                        }),
                                                        " on",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Designing the perfect"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "recentcomments",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "comment-author-link",
                                                            children: "admin"
                                                        }),
                                                        " on",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Designing the perfect"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "recentcomments",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "comment-author-link",
                                                            children: "James"
                                                        }),
                                                        " on",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Designing the perfect"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: "widget widget_archive",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "widget-title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "widget-title-span",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "first-letter",
                                                    children: "Archives"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "November 2018"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: "widget widget_categories",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "widget-title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "widget-title-span",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "first-letter",
                                                    children: "Categories"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "cat-item cat-item-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Design"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "cat-item cat-item-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Music"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    className: "widget widget_meta",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "widget-title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "widget-title-span",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "first-letter",
                                                    children: "Meta"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Log in"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Entries feed"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Comments feed"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "WordPress.org"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "close",
                        onClick: ()=>changeSideBar(false)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_ContentSidebar = (ContentSidebar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ children , noSkin , bg , containerCls , bgImgUrl , animationIn , animationOut ,  })=>{
    (0,external_react_.useEffect)(()=>{
        return ()=>{
            dotResize();
            setTimeout(createSkillsDot, 1000);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_js, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageGallery, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ContentModal, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page ${!noSkin ? "new-skin" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Background, {
                        bg: bg,
                        img: bgImgUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${containerCls ? containerCls : "container opened layout-rounded-style minimal-icons-style"}`,
                        "data-animation-in": animationIn ? animationIn : "fadeInLeft",
                        "data-animation-out": animationOut ? animationOut : "fadeOutLeft",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_ContentSidebar, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;