"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNavBtnListeners = exports.addPlayBtnListeners = void 0;
var addPlayBtnListeners = function (emblaApi, playBtn) {
    var togglePlayBtnState = function (emblaApi) {
        var _a;
        var autoScroll = (_a = emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        var buttonText = autoScroll.isPlaying() ? 'Start' : 'Stop';
        playBtn.innerHTML = buttonText;
    };
    var onPlayBtnClick = function () {
        var _a;
        var autoScroll = (_a = emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        var playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play;
        playOrStop();
    };
    playBtn.addEventListener('click', onPlayBtnClick);
    emblaApi
        .on('autoScroll:play', togglePlayBtnState)
        .on('autoScroll:stop', togglePlayBtnState)
        .on('reInit', togglePlayBtnState);
    return function () {
        playBtn.removeEventListener('click', onPlayBtnClick);
        emblaApi
            .off('autoScroll:play', togglePlayBtnState)
            .off('autoScroll:stop', togglePlayBtnState)
            .off('reInit', togglePlayBtnState);
    };
};
exports.addPlayBtnListeners = addPlayBtnListeners;
var addNavBtnListeners = function (emblaApi) {
    var navButtons = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        navButtons[_i - 1] = arguments[_i];
    }
    var onNavClick = function () {
        var _a;
        var autoScroll = (_a = emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.plugins()) === null || _a === void 0 ? void 0 : _a.autoScroll;
        if (!autoScroll)
            return;
        var resetOrStop = autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset
            : autoScroll.stop;
        resetOrStop();
    };
    navButtons.forEach(function (navButton) {
        return navButton.addEventListener('click', onNavClick, true);
    });
    return function () {
        navButtons.forEach(function (navButton) {
            return navButton.removeEventListener('click', onNavClick, true);
        });
    };
};
exports.addNavBtnListeners = addNavBtnListeners;
