/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Overlay',
                type: 'image',
                rect: ['817px', '151px','1920px','1200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Overlay.png",'0px','0px'],
                transform: [[],[],[],['2','2']]
            },
            {
                id: 'YOU',
                type: 'image',
                rect: ['465', '569','351px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"YOU.png",'0px','0px']
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['514px', '560px','55px','40px','auto', 'auto'],
                text: "YOU",
                font: ['Arial, Helvetica, sans-serif', [9.38, "em"], "rgba(141,166,161,1.00)", "normal", "none", ""]
            },
            {
                id: 'plus',
                type: 'image',
                rect: ['829px', '574px','114px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"plus.png",'0px','0px']
            },
            {
                id: 'OUTDOORS',
                type: 'image',
                rect: ['579px', '571px','930px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OUTDOORS.png",'0px','0px']
            },
            {
                id: 'YOUTDOORS',
                type: 'image',
                rect: ['465px', '569px','1044px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"YOUTDOORS.png",'0px','0px']
            },
            {
                id: 'Logo',
                type: 'image',
                rect: ['839px', '122px','303px','378px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
            },
            {
                id: 'Shadow',
                type: 'image',
                rect: ['909px', '500','171px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Shadow.png",'0px','0px']
            },
            {
                id: 'PRESENTED-BY',
                type: 'image',
                rect: ['879px', '762px','224px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"PRESENTED-BY.png",'0px','0px']
            },
            {
                id: 'LowCountry',
                type: 'image',
                rect: ['600px', '829px','782px','204px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LowCountry.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_YOUTDOORS}": [
                ["style", "top", '589px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '469px']
            ],
            "${_Shadow}": [
                ["style", "top", '489px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '904px']
            ],
            "${_LowCountry}": [
                ["style", "top", '829px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '600px']
            ],
            "${_Logo}": [
                ["style", "top", '122px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '839px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Overlay}": [
                ["style", "top", '94px'],
                ["transform", "scaleY", '2'],
                ["transform", "scaleX", '2'],
                ["style", "opacity", '0.533155079295'],
                ["style", "left", '106px']
            ],
            "${_YOU}": [
                ["style", "top", '589px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,55,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '469px']
            ],
            "${_PRESENTED-BY}": [
                ["style", "top", '762px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '879px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(212,227,216,1.00)'],
                ["style", "width", '1920px'],
                ["style", "height", '1200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_OUTDOORS}": [
                ["style", "top", '591px'],
                ["style", "opacity", '0'],
                ["style", "left", '583px'],
                ["style", "clip", [0,55,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(141,166,161,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '518px'],
                ["style", "width", '55px'],
                ["style", "top", '580px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '40px'],
                ["style", "font-size", '9.38em'],
                ["transform", "scaleX", '1']
            ],
            "${_plus}": [
                ["style", "top", '594px'],
                ["style", "opacity", '0'],
                ["style", "left", '833px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_OUTDOORS}", "clip", [0,950,200,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,200,0]}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_OUTDOORS}", "clip", [0,950,200,950], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,950,200,0]}], position: 2500, duration: 500, easing: "easeInQuad" },
                { id: "eid79", tween: [ "transform", "${_Shadow}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid85", tween: [ "transform", "${_Shadow}", "scaleX", '0.3', { fromValue: '1'}], position: 3250, duration: 187, easing: "easeInQuad" },
                { id: "eid91", tween: [ "transform", "${_Shadow}", "scaleX", '1', { fromValue: '0.3'}], position: 3437, duration: 119, easing: "easeInQuad" },
                { id: "eid93", tween: [ "transform", "${_Shadow}", "scaleX", '1.1', { fromValue: '1'}], position: 3556, duration: 85, easing: "easeInQuad" },
                { id: "eid95", tween: [ "transform", "${_Shadow}", "scaleX", '1', { fromValue: '1.1'}], position: 3641, duration: 157, easing: "easeInQuad" },
                { id: "eid90", tween: [ "style", "${_Shadow}", "left", '904px', { fromValue: '904px'}], position: 3556, duration: 0, easing: "easeInQuad" },
                { id: "eid52", tween: [ "style", "${_Logo}", "left", '839px', { fromValue: '839px'}], position: 3000, duration: 0, easing: "easeInQuad" },
                { id: "eid50", tween: [ "style", "${_Logo}", "left", '839px', { fromValue: '839px'}], position: 3250, duration: 0, easing: "easeInQuad" },
                { id: "eid314", tween: [ "style", "${_Logo}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 947, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_Logo}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3348, duration: 89, easing: "easeInQuad" },
                { id: "eid352", tween: [ "style", "${_Logo}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3348, duration: 89, easing: "easeInQuad" },
                { id: "eid353", tween: [ "style", "${_Logo}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3348, duration: 89, easing: "easeInQuad" },
                { id: "eid354", tween: [ "style", "${_Logo}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3348, duration: 89, easing: "easeInQuad" },
                { id: "eid355", tween: [ "style", "${_Logo}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3348, duration: 89, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_Logo}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3437, duration: 204, easing: "easeInQuad" },
                { id: "eid356", tween: [ "style", "${_Logo}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3437, duration: 204, easing: "easeInQuad" },
                { id: "eid357", tween: [ "style", "${_Logo}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3437, duration: 204, easing: "easeInQuad" },
                { id: "eid358", tween: [ "style", "${_Logo}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3437, duration: 204, easing: "easeInQuad" },
                { id: "eid359", tween: [ "style", "${_Logo}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3437, duration: 204, easing: "easeInQuad" },
                { id: "eid46", tween: [ "transform", "${_Logo}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid59", tween: [ "transform", "${_Logo}", "scaleY", '0.89', { fromValue: '1'}], position: 3250, duration: 187, easing: "easeInQuad" },
                { id: "eid61", tween: [ "transform", "${_Logo}", "scaleY", '1', { fromValue: '0.89'}], position: 3437, duration: 119, easing: "easeInQuad" },
                { id: "eid64", tween: [ "transform", "${_Logo}", "scaleY", '0.9', { fromValue: '1'}], position: 3556, duration: 147, easing: "easeInQuad" },
                { id: "eid65", tween: [ "transform", "${_Logo}", "scaleY", '1', { fromValue: '0.9'}], position: 3703, duration: 95, easing: "easeInQuad" },
                { id: "eid316", tween: [ "transform", "${_Logo}", "scaleY", '1', { fromValue: '1'}], position: 3798, duration: 0, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_YOUTDOORS}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 798, easing: "easeInQuad" },
                { id: "eid315", tween: [ "style", "${_YOUTDOORS}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 947, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_TextCopy}", "left", '518px', { fromValue: '518px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_plus}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_plus}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInQuad" },
                { id: "eid300", tween: [ "style", "${_plus}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid309", tween: [ "style", "${_plus}", "opacity", '0', { fromValue: '0'}], position: 5500, duration: 0, easing: "easeInQuad" },
                { id: "eid154", tween: [ "style", "${_YOU}", "top", '589px', { fromValue: '589px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid76", tween: [ "transform", "${_Shadow}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid86", tween: [ "transform", "${_Shadow}", "scaleY", '0.3', { fromValue: '1'}], position: 3250, duration: 187, easing: "easeInQuad" },
                { id: "eid92", tween: [ "transform", "${_Shadow}", "scaleY", '1', { fromValue: '0.3'}], position: 3437, duration: 119, easing: "easeInQuad" },
                { id: "eid94", tween: [ "transform", "${_Shadow}", "scaleY", '1.1', { fromValue: '1'}], position: 3556, duration: 85, easing: "easeInQuad" },
                { id: "eid96", tween: [ "transform", "${_Shadow}", "scaleY", '1', { fromValue: '1.1'}], position: 3641, duration: 157, easing: "easeInQuad" },
                { id: "eid23", tween: [ "style", "${_OUTDOORS}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_OUTDOORS}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInQuad" },
                { id: "eid299", tween: [ "style", "${_OUTDOORS}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid308", tween: [ "style", "${_OUTDOORS}", "opacity", '0', { fromValue: '0'}], position: 5500, duration: 0, easing: "easeInQuad" },
                { id: "eid53", tween: [ "style", "${_Logo}", "top", '122px', { fromValue: '122px'}], position: 3000, duration: 0, easing: "easeInQuad" },
                { id: "eid54", tween: [ "style", "${_Logo}", "top", '83px', { fromValue: '122px'}], position: 3250, duration: 98, easing: "easeInQuad" },
                { id: "eid60", tween: [ "style", "${_Logo}", "top", '144px', { fromValue: '83px'}], position: 3348, duration: 208, easing: "easeInQuad" },
                { id: "eid89", tween: [ "style", "${_Shadow}", "top", '501px', { fromValue: '489px'}], position: 3250, duration: 306, easing: "easeInQuad" },
                { id: "eid156", tween: [ "style", "${_PRESENTED-BY}", "opacity", '1', { fromValue: '0.000000'}], position: 3702, duration: 798, easing: "easeInQuad" },
                { id: "eid343", tween: [ "style", "${_PRESENTED-BY}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 947, easing: "easeInQuad" },
                { id: "eid146", tween: [ "style", "${_TextCopy}", "top", '580px', { fromValue: '580px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid301", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid310", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '0'}], position: 5500, duration: 0, easing: "easeInQuad" },
                { id: "eid277", tween: [ "style", "${_Overlay}", "opacity", '0.533155079295', { fromValue: '0.533155079295'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid45", tween: [ "transform", "${_Logo}", "scaleX", '1', { fromValue: '0.5'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid151", tween: [ "style", "${_OUTDOORS}", "left", '583px', { fromValue: '583px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid258", tween: [ "style", "${_Overlay}", "left", '-415px', { fromValue: '106px'}], position: 0, duration: 6000 },
                { id: "eid147", tween: [ "style", "${_YOUTDOORS}", "left", '469px', { fromValue: '469px'}], position: 3798, duration: 0, easing: "easeInQuad" },
                { id: "eid152", tween: [ "style", "${_OUTDOORS}", "top", '591px', { fromValue: '591px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid155", tween: [ "style", "${_LowCountry}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 798, easing: "easeInQuad" },
                { id: "eid312", tween: [ "style", "${_LowCountry}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 947, easing: "easeInQuad" },
                { id: "eid148", tween: [ "style", "${_YOUTDOORS}", "top", '589px', { fromValue: '589px'}], position: 3798, duration: 0, easing: "easeInQuad" },
                { id: "eid13", tween: [ "style", "${_YOU}", "clip", [0,370,200,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,200,0]}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid20", tween: [ "style", "${_YOU}", "clip", [0,370,200,370], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,200,0]}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${_YOU}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid19", tween: [ "style", "${_YOU}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid302", tween: [ "style", "${_YOU}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid311", tween: [ "style", "${_YOU}", "opacity", '0', { fromValue: '0'}], position: 5500, duration: 0, easing: "easeInQuad" },
                { id: "eid150", tween: [ "style", "${_plus}", "top", '594px', { fromValue: '594px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid313", tween: [ "style", "${_Shadow}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 947, easing: "easeInQuad" },
                { id: "eid259", tween: [ "style", "${_Overlay}", "top", '-255px', { fromValue: '94px'}], position: 0, duration: 6000 },
                { id: "eid153", tween: [ "style", "${_YOU}", "left", '469px', { fromValue: '469px'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid149", tween: [ "style", "${_plus}", "left", '833px', { fromValue: '833px'}], position: 4000, duration: 0, easing: "easeInQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-28597010");
