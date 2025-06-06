/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  args: () => (/* binding */ args),
  main: () => (/* binding */ main)
});

;// external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// ./node_modules/libram/dist/utils.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Type guard against null value
 *
 * @param value Value that could be null
 * @returns Confirmation that the value is not null
 */
function utils_notNull(value) {
  return value !== null;
}
/**
 * Type guard against nullish value
 *
 * @param value Value that could be null or undefined
 * @returns Confirmation that the value is not null nor undefined
 */
function notNullish(value) {
  return utils_notNull(value) && value !== undefined;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function utils_clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function utils_chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function utils_sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */
function sumNumbers(addends) {
  return utils_sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */
function utils_arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */
function invertMap(map) {
  var returnValue = new Map();
  var _iterator = _createForOfIteratorHelper(map),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function utils_maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value: value,
        item: item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Let Typescript see that you're working with tuples!
 *
 * @param args A spread array to interpret as a tuple
 * @returns The given arg, its type now interpreted as a tuple
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */
function makeByXFunction(source) {
  return function (options, alternateSource) {
    var _options$val;
    var val = undelay(alternateSource !== null && alternateSource !== void 0 ? alternateSource : source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 * @deprecated KoLMafia now supports the `flat` and `flatMap` methods
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = _createForOfIteratorHelper(arr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        var child = flat(item, depth - 1);
        flatArray = flatArray.concat(child);
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}
/**
 * @param array Array to select from
 * @returns Random item from array
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */
var tc = word => word.charAt(0).toUpperCase() + word.slice(1);
;// ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_aprilShowerGlobsCollected", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat405", "lastNoncombat406", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = [];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem"];
;// ./node_modules/libram/dist/propertyTyping.js

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function propertyTyping_isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
/**
 * Determine whether a property has an Item value
 *
 * @param property Property to check
 * @returns Whether the supplied property has an Item value
 */
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}
;// ./node_modules/libram/dist/property.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function property_toConsumableArray(r) { return property_arrayWithoutHoles(r) || property_iterableToArray(r) || property_unsupportedIterableToArray(r) || property_nonIterableSpread(); }
function property_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function property_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function property_arrayWithoutHoles(r) { if (Array.isArray(r)) return property_arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function property_slicedToArray(r, e) { return property_arrayWithHoles(r) || property_iterableToArrayLimit(r, e) || property_unsupportedIterableToArray(r, e) || property_nonIterableRest(); }
function property_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function property_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return property_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? property_arrayLikeToArray(r, a) : void 0; } }
function property_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function property_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function property_arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function property_get(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (propertyTyping_isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== undefined ? _default : value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof external_kolmafia_namespaceObject.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
  return value;
}
/**
 * Increment a property
 *
 * @param property Numeric property to increment
 * @param delta Number by which to increment
 * @param max Maximum value to set
 * @returns New value
 */

function increment(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.min(max, value + delta);
  return _set(property, nextValue);
}
/**
 * Decrement a property
 *
 * @param property Numeric property to decrement
 * @param delta Number by which to decrement
 * @param min Maximum value to set
 * @returns New value
 */
function decrement(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.max(min, value - delta);
  return _set(property, nextValue);
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = property_slicedToArray(_Object$entries[_i], 2),
      prop = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = property_slicedToArray(_ref, 1),
      prop = _ref2[0];
    return [prop, property_get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperty(property, value, callback) {
  return withProperties(_defineProperty({}, property, value), callback);
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = property_slicedToArray(_ref3, 2),
      choice = _ref4[0],
      option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withChoice(choice, value, callback) {
  return withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);
    _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = property_slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = (0,external_kolmafia_namespaceObject.propertyExists)(propertyName) ? property_get(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = property_slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];
        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          (0,external_kolmafia_namespaceObject.removeProperty)(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, property_toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (property_get(property, 0) < value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (property_get(property, 0) > value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = property_get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== property_get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = property_slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
}();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));
;// ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers", "Last Available"];
var stringModifiersSet = new Set(stringModifiers);
var booleanModifiers = ["Softcore Only", "Single Equip", "Always Fumble", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Randomly", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Alters Page Text", "Attacks Can't Miss", "Pirate", "Blind", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"];
var booleanModifiersSet = new Set(booleanModifiers);
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent", "Avoid Attack", "Damage vs. Bugbears", "Damage vs. Werewolves", "Damage vs. Zombies", "Damage vs. Ghosts", "Damage vs. Vampires", "Damage vs. Skeletons", "Damage vs. Undead", "RAM", "Lantern", "Raw Combat Rate"];
var numericModifiersSet = new Set(numericModifiers);
var multiStringModifiers = ["Effect", "Rollover Effect", "Conditional Skill (Equipped)", "Conditional Skill (Inventory)", "Lantern Element"];
var multiStringModifiersSet = new Set(multiStringModifiers);
;// ./node_modules/libram/dist/modifier.js
var _templateObject;
function modifier_typeof(o) { "@babel/helpers - typeof"; return modifier_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, modifier_typeof(o); }
function modifier_slicedToArray(r, e) { return modifier_arrayWithHoles(r) || modifier_iterableToArrayLimit(r, e) || modifier_unsupportedIterableToArray(r, e) || modifier_nonIterableRest(); }
function modifier_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function modifier_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function modifier_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function modifier_toConsumableArray(r) { return modifier_arrayWithoutHoles(r) || modifier_iterableToArray(r) || modifier_unsupportedIterableToArray(r) || modifier_nonIterableSpread(); }
function modifier_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function modifier_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return modifier_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? modifier_arrayLikeToArray(r, a) : void 0; } }
function modifier_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function modifier_arrayWithoutHoles(r) { if (Array.isArray(r)) return modifier_arrayLikeToArray(r); }
function modifier_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function modifier_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function modifier_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? modifier_ownKeys(Object(t), !0).forEach(function (r) { modifier_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : modifier_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function modifier_defineProperty(e, r, t) { return (r = modifier_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function modifier_toPropertyKey(t) { var i = modifier_toPrimitive(t, "string"); return "symbol" == modifier_typeof(i) ? i : i + ""; }
function modifier_toPrimitive(t, r) { if ("object" != modifier_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != modifier_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/**
 * Type guard that determines if a given string is a boolean modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid boolean modifier
 */
function isBooleanModifier(modifier) {
  return booleanModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a numeric modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid numeric modifier
 */
function isNumericModifier(modifier) {
  return numericModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a string modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid string modifier
 */
function isStringModifier(modifier) {
  return stringModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a multistring modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid multistring modifier
 */
function isMultiStringModifier(modifier) {
  return multiStringModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a valid modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid modifier
 */
function isValidModifier(modifier) {
  return isNumericModifier(modifier) || isBooleanModifier(modifier) || isStringModifier(modifier) || isMultiStringModifier(modifier);
}
/**
 * Get the value of a modifier
 *
 * @param name Modifier name
 * @param subject Subject of modifier
 * @returns Value of modifier
 */
function modifier_get(name, subject) {
  if (isBooleanModifier(name)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }
  if (isNumericModifier(name)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }
  if (isStringModifier(name)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }
  if (isMultiStringModifier(name)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringsModifier)(name) : (0,external_kolmafia_namespaceObject.stringsModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 *
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */
function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = modifier_objectSpread(modifier_objectSpread({}, modifiers1), modifiers2);
  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (isNumericModifier(modifier)) {
        var _modifiers1$modifier, _modifiers2$modifier;
        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }
      if (isBooleanModifier(modifier)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;
        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
      if (isMultiStringModifier(modifier)) {
        var _modifiers1$modifier3, _modifiers2$modifier3;
        returnValue[modifier] = [].concat(modifier_toConsumableArray((_modifiers1$modifier3 = modifiers1[modifier]) !== null && _modifiers1$modifier3 !== void 0 ? _modifiers1$modifier3 : []), modifier_toConsumableArray((_modifiers2$modifier3 = modifiers2[modifier]) !== null && _modifiers2$modifier3 !== void 0 ? _modifiers2$modifier3 : []));
      }
    }
  }
  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 *
 * @param modifiers Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */
function mergeModifiers() {
  for (var _len = arguments.length, modifiers = new Array(_len), _key = 0; _key < _len; _key++) {
    modifiers[_key] = arguments[_key];
  }
  return modifiers.reduce((a, b) => pairwiseMerge(a, b), {});
}
/**
 * Prints the modtrace to the log.
 * Example: printModtrace("Meat Drop") or printModtrace(["Item Drop", "Booze Drop"])
 *
 * @param inputModifiers A string (or string[]) containing the modtrace lookup term(s).
 * @param baseModifier A string where all the info about modifiers in the string[] array can be grabbed with this one lookup term. (Automatically generated in most cases)
 * @param componentColor The print color for the sum returned for each input modifier
 * @param totalColor The print color for the total sum over every input modifier
 * @returns void
 */
function printModtrace(inputModifiers,
// the user's list of modifiers to look up
baseModifier) {
  var _htmlOutput$match, _htmlOutput$match2;
  var componentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "purple";
  var totalColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "blue";
  if (typeof inputModifiers === "string") return printModtrace([inputModifiers], inputModifiers);else if (inputModifiers.length === 0) return;else if (!baseModifier) {
    return inputModifiers.filter(mod1 => !inputModifiers.some(mod2 => mod2 !== mod1 && mod1.includes(mod2))).forEach(baseMod => printModtrace(inputModifiers.filter(mod => mod.includes(baseMod)), baseMod));
  }
  var htmlOutput = cliExecuteOutput("modtrace ".concat(baseModifier));
  // The list of matched modifiers that mafia returns
  var modtraceModifiers = Array.from((_htmlOutput$match = htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _htmlOutput$match !== void 0 ? _htmlOutput$match : []).map(s => s.slice(1, -5)).slice(2);
  if (!modtraceModifiers.some(modifier => modifier.toLowerCase() === baseModifier.toLowerCase())) {
    return print("Could not find exact string match of ".concat(baseModifier, " in ").concat(inputModifiers.toString()), "red");
  }
  var initialVal = baseModifier.toLowerCase() === "familiar weight" ? (() => {
    var wt = familiarWeight(myFamiliar());
    print("[Familiar Weight] Base weight (".concat(wt, ")"));
    return wt;
  })() : 0;
  var modifierVals = new Map(modtraceModifiers.map(modifier => [modifier, initialVal])); // Maps modifier name to its value
  var lowerCaseModifiers = inputModifiers.map(modifier => modifier.toLowerCase());
  Array.from((_htmlOutput$match2 = htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g))) !== null && _htmlOutput$match2 !== void 0 ? _htmlOutput$match2 : []).slice(1).map(s => s.slice(4, -5)).forEach(s => {
    var _s$replace$match;
    var rowArr = Array.from((_s$replace$match = s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _s$replace$match !== void 0 ? _s$replace$match : []).map(s => s.slice(1, -5));
    var rowName = rowArr[1];
    rowArr.slice(2).filter((e, idx) => idx % 2 === 0).forEach((e, idx) => {
      var _modifierVals$get;
      var val = parseFloat(e);
      modifierVals.set(modtraceModifiers[idx], ((_modifierVals$get = modifierVals.get(modtraceModifiers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);
      if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
        print("[".concat(modtraceModifiers[idx], "] ").concat(rowName, " (").concat(val.toFixed(1), ")"));
      }
    });
  });
  var total = sum(modtraceModifiers, modifier => {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      var _modifierVals$get2;
      var modVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;
      if (have($effect(_templateObject || (_templateObject = _taggedTemplateLiteral(["Bow-Legged Swagger"])))) && modifier.includes("Weapon Damage")) {
        print("[".concat(modifier, "] Bow-Legged Swagger (").concat(modVal.toFixed(1), ")"));
        modVal *= 2;
      }
      print("".concat(modifier, " => ").concat(modVal.toFixed(1)), componentColor);
      return modVal;
    } else return 0;
  });
  print("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), totalColor);
}
/**
 * Take the sum of a modifier over an array of Skills, Effects, and Items
 *
 * @param modifier A NumericModifier that we want to find the total value of
 * @param subjects A rested array of Skills, Effects, and Items that we want to find the total value of
 * @returns The sum of the appropriate modifier for all of the subjects
 */
function getTotalModifier(modifier) {
  for (var _len2 = arguments.length, subjects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    subjects[_key2 - 1] = arguments[_key2];
  }
  return sum(subjects, subject => modifier_get(modifier, subject));
}
function parseModifierString(modifiers) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$numeric = _ref.numeric,
    numeric = _ref$numeric === void 0 ? Number : _ref$numeric,
    _ref$str = _ref.str,
    str = _ref$str === void 0 ? String : _ref$str,
    _ref$bool = _ref.bool,
    bool = _ref$bool === void 0 ? val => val === "true" : _ref$bool,
    _ref$multiString = _ref.multiString,
    multiString = _ref$multiString === void 0 ? val => val.split(",") : _ref$multiString;
  return Object.entries(splitModifiers(modifiers)).reduce((acc, _ref2) => {
    var _ref3 = modifier_slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return modifier_objectSpread(modifier_objectSpread({}, acc), {}, modifier_defineProperty({}, key, isBooleanModifier(key) ? bool(value) : isNumericModifier(key) ? numeric(value) : isMultiStringModifier(key) ? multiString(value) : str(value)));
  }, {});
}
/**
 * Translate a pref into a `Modifiers` object by wrapping mafia's `splitModifiers`
 * @param pref The name of the mafia preference in question
 * @param parsers Optional object to help translate fields into their appropriate values
 * @param parsers.numeric How to translate the values from `splitModifiers` into numbers for numeric modifiers; defaults to Number
 * @param parsers.str How to translate the values from `splitModifiers` into strings for string modifiers; defaults to String
 * @param parsers.bool How to translate the values from `splitModifiers` into booleans for boolean modifiers; defaults to comparing to the string `"true"`
 * @param parsers.multiString How to translate the values from `splitModifiers` into string[]s for multistring modifiers; defaults to splitting by a comma
 * @returns A `Modifiers` object corresponding to the given preference.
 */
function parseModifiers(pref) {
  var parsers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return parseModifierString(getProperty(pref), parsers);
}
var overloadedStringModifier = (thing, modifier) => thing instanceof Effect ? stringModifier(thing, modifier) : thing instanceof Item ? stringModifier(thing, modifier) : stringModifier(thing, modifier);
/**
 * Compile together all `Modifiers` something has
 * @param thing An Item, Effect, or string to check all modifiers of
 * @returns A `Modifiers` object corresponding to the givem Effect, Item, or string
 */
function allModifiers(thing) {
  return parseModifierString(overloadedStringModifier(thing, "Modifiers"));
}
;// ./node_modules/libram/dist/template-string.js


var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0,external_kolmafia_namespaceObject.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,external_kolmafia_namespaceObject.print)(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var template_string_$effect = createSingleConstant(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var $familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var template_string_$items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
var $modifier = createSingleConstant(external_kolmafia_namespaceObject.Modifier, external_kolmafia_namespaceObject.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
var $modifiers = createPluralConstant(external_kolmafia_namespaceObject.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(external_kolmafia_namespaceObject.Path, external_kolmafia_namespaceObject.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
;// ./node_modules/libram/dist/lib.js
function lib_typeof(o) { "@babel/helpers - typeof"; return lib_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, lib_typeof(o); }
var lib_templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52;
function lib_toConsumableArray(r) { return lib_arrayWithoutHoles(r) || lib_iterableToArray(r) || lib_unsupportedIterableToArray(r) || lib_nonIterableSpread(); }
function lib_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function lib_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function lib_arrayWithoutHoles(r) { if (Array.isArray(r)) return lib_arrayLikeToArray(r); }
function lib_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, lib_toPropertyKey(o.key), o); } }
function lib_createClass(e, r, t) { return r && lib_defineProperties(e.prototype, r), t && lib_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function lib_toPropertyKey(t) { var i = lib_toPrimitive(t, "string"); return "symbol" == lib_typeof(i) ? i : i + ""; }
function lib_toPrimitive(t, r) { if ("object" != lib_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != lib_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function lib_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == lib_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function lib_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = lib_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function lib_slicedToArray(r, e) { return lib_arrayWithHoles(r) || lib_iterableToArrayLimit(r, e) || lib_unsupportedIterableToArray(r, e) || lib_nonIterableRest(); }
function lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function lib_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return lib_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lib_arrayLikeToArray(r, a) : void 0; } }
function lib_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function lib_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function lib_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function lib_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
/** @module GeneralLibrary */





/**
 * Determines the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 * @returns Maximum number of songs for player
 */
function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof external_kolmafia_namespaceObject.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof external_kolmafia_namespaceObject.Effect ? (0,external_kolmafia_namespaceObject.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */
function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */
function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 * @returns Number of songs
 */
function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Determine whether player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 * @returns Whether player can remember another song
 */
function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Determine the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 * @returns Locations for monster
 */
function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Determine the player's remaining liver space
 *
 * @category General
 * @returns Remaining liver space
 */
function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Determine the player's remaining stomach space
 *
 * @category General
 * @returns Remaining stomach space
 */
function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Determine the player's remaining spleen space
 *
 * @category General
 * @returns Remaining spleen space
 */
function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function lib_have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof external_kolmafia_namespaceObject.Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */
function lib_haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0,external_kolmafia_namespaceObject.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determine whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 * @returns Whether the vote wanderer is due
 */
function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Whether the wanderer is due
 */
function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }
  if (wanderer === Wanderer.Kramco) {
    return true;
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }
  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */
function getKramcoWandererChance() {
  var fights = property_get("_sausageFights");
  var lastFight = property_get("_lastSausageMonsterTurn");
  var totalTurns = (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();
  if (fights < 1) {
    return lastFight === totalTurns && (0,external_kolmafia_namespaceObject.myTurncount)() < 1 ? 0.5 : 1.0;
  }
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Determines the chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 * @returns Chance that the familiar wanderer is due (as a number between 0 and 1)
 */
function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];
  if (totalFights < 4) {
    return probability[totalFights];
  }
  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Determines the chance the player will encounter the specified wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Chance that the specified wanderer is due (as a number between 0 and 1)
 */
function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }
  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);
  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }
  return 0.0;
}
/**
 * Determines whether the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 * @returns Whether it is the player's current familiar
 */
function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
var foldGroupCache = new Map();
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @param cache Whether to query the fold group cache
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (cache) {
    var cached = foldGroupCache.get(item);
    if (cached !== undefined) return cached;
  }
  var result = Object.entries((0,external_kolmafia_namespaceObject.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = lib_slicedToArray(_ref, 2),
      a = _ref3[1];
    var _ref4 = lib_slicedToArray(_ref2, 2),
      b = _ref4[1];
    return a - b;
  }).map(_ref5 => {
    var _ref6 = lib_slicedToArray(_ref5, 1),
      i = _ref6[0];
    return external_kolmafia_namespaceObject.Item.get(i);
  });
  var _iterator = lib_createForOfIteratorHelper(result),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
/**
 * Determines the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 * @returns List of items in the zap group
 */
function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
var banishSource = banisher => {
  if (banisher.toLowerCase() === "saber force") return $skill(_templateObject2 || (_templateObject2 = lib_taggedTemplateLiteral(["Use the Force"])));
  if (banisher.toLowerCase() === "nanorhino") return $skill(_templateObject3 || (_templateObject3 = lib_taggedTemplateLiteral(["Unleash Nanites"])));
  var item = toItem(banisher);
  if ($items(_templateObject4 || (_templateObject4 = lib_taggedTemplateLiteral(["none, training scroll:  Snokebomb, tomayohawk-style reflex hammer"]))).includes(item)) {
    return toSkill(banisher);
  }
  return item;
};
/**
 * Translate mafia's multi-dimensional array prefs into a multi-dimensional array
 * @param prop The name of the mafia string property to process
 * @param outerDelimiter The "outer" delimiter, which separates tuples from eachother
 * @param innerDelimiter The "inner" delimieter, which separates the elements of tuples from eachother
 * @param mappers An array of string => whatever mapping functions that turn this into the actual objects we want
 * @returns An array of typed tuples, based on the given inputs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function multiSplit(prop, outerDelimiter, innerDelimiter, mappers) {
  var initialSplit = get(prop).split(outerDelimiter).filter(Boolean);
  var multiDimensionalArray = outerDelimiter === innerDelimiter ? chunk(initialSplit, mappers.length) : initialSplit.map(entry => entry.split(innerDelimiter));
  return multiDimensionalArray.map(tup => mappers.map((func, index) => func(tup[index])));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function getBanishedMonsters() {
  return new Map(multiSplit("banishedMonsters", ":", ":", [toMonster, banishSource, Number]).map(_ref7 => {
    var _ref8 = lib_slicedToArray(_ref7, 2),
      monster = _ref8[0],
      source = _ref8[1];
    return [source, monster];
  }));
}
/**
 * Determines whether the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 * @returns Whether item is usable
 */
function canUse(item) {
  var path = myPath();
  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject5 || (_templateObject5 = lib_taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }
  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }
  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }
  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 * @returns The thing specified or `null`
 */
function noneToNull(thing) {
  var type = MafiaClasses.find(t => thing instanceof t);
  return type && thing === type.none ? null : thing;
}
/**
 * Parse the sort of range that KoLmafia encodes as a string
 * @param range KoLmafia-style range string
 * @returns Tuple of integers representing range
 */
function getRange(range) {
  var _range$match$slice$ma, _range$match;
  var _ref9 = (_range$match$slice$ma = (_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(v => parseInt(v))) !== null && _range$match$slice$ma !== void 0 ? _range$match$slice$ma : [0],
    _ref0 = lib_slicedToArray(_ref9, 2),
    lower = _ref0[0],
    upper = _ref0[1];
  return [lower, Number.isNaN(upper) || upper === undefined ? lower : upper];
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value for range
 */
function getAverage(range) {
  var _getRange = getRange(range),
    _getRange2 = lib_slicedToArray(_getRange, 2),
    min = _getRange2[0],
    max = _getRange2[1];
  return (min + max) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */
function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */
function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get the player id from a player name (if it exists)
 * @param name the name of the player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns the player id if the player exists, or handles according to onMissing
 */
function getPlayerIdFromName(name) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  var playerId = getPlayerId(name);
  // KoLmafia returns the input when not found
  if (playerId === name) {
    if (onMissing === "throw") {
      throw new Error("Player not found: ".concat(name));
    }
    return null;
  }
  return parseInt(playerId);
}
/**
 * Get the player id from a player name (if it exists)
 * @param id the id of the player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns the player id if the player exists, or handles according to onMissing
 */
function getPlayerNameFromId(id) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  var playerName = getPlayerName(id);
  // KoLmafia returns the input when not found
  if (playerName === id.toString()) {
    if (onMissing === "throw") {
      throw new Error("Player not found: ".concat(playerName));
    }
    return null;
  }
  return playerName;
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns Object containing id and name of player if it exists, or handles according to onMissing
 */
function getPlayerFromIdOrName(idOrName) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  if (typeof idOrName === "number") {
    var name = getPlayerNameFromId(idOrName, onMissing);
    if (name === null) return null;
    return {
      name: name,
      id: idOrName
    };
  } else {
    var id = getPlayerIdFromName(idOrName, onMissing);
    if (id === null) return null;
    // load from KoLmafia to get the right capitalization
    var _name = getPlayerName(id);
    return {
      name: _name,
      id: id
    };
  }
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  function EnsureError(cause, reason) {
    var _this;
    lib_classCallCheck(this, EnsureError);
    _this = _callSuper(this, EnsureError, ["Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")]);
    _this.name = "Ensure Error";
    return _this;
  }
  _inherits(EnsureError, _Error);
  return lib_createClass(EnsureError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;
    if (item.discardable) {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > Math.max(2 * (0,external_kolmafia_namespaceObject.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : (0,external_kolmafia_namespaceObject.autosellPrice)(item));
    } else {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : 0);
    }
    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Determines the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 * @returns Weight-coefficient
 */
function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = lib_taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = lib_taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Determines the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose fairy multiplier you're interested in
 * @returns Weight-coefficient
 */
function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject8 || (_templateObject8 = lib_taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject9 || (_templateObject9 = lib_taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  // Assumes you're using LED candle; returns effective weight multiplier
  if (familiar === $familiar(_templateObject0 || (_templateObject0 = lib_taggedTemplateLiteral(["Jill-of-All-Trades"])))) return 1.5;
  // Working out the multiplier based on the Item Drop at 1lb
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject1 || (_templateObject1 = lib_taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = lib_taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = lib_taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return (0,external_kolmafia_namespaceObject.holiday)().split("/").flatMap(holiday => {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  });
}
/**
 * Determines whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 *
 * @returns Whether urls can be safely visited
 */
function canVisitUrl() {
  if (currentRound()) {
    logger.debug("Current round is ".concat(currentRound(), "; you're in combat."));
    return false;
  }
  if (inMultiFight()) {
    logger.debug("You're in a multifight.");
    return false;
  }
  if (choiceFollowsFight()) {
    logger.debug("A choice follows this fight.");
    return false;
  }
  if (handlingChoice()) {
    logger.debug("You're currently in a choice adventure");
    return false;
  }
  return true;
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 *
 * @param baseDamage Base damage
 * @param element Element
 * @returns damage after factoring in resistances
 */
function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = lib_taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = lib_taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = lib_taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = lib_taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = lib_taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = lib_taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = lib_taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = lib_taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = lib_taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = lib_taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = lib_taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = lib_taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = lib_taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = lib_taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = lib_taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = lib_taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = lib_taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = lib_taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = lib_taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = lib_taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = lib_taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = lib_taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = lib_taggedTemplateLiteral(["cold"])))]]);
/**
 * Get information from telescope
 *
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */
function telescope() {
  return Object.fromEntries(Object.entries({
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  }).filter(_ref1 => {
    var _ref10 = lib_slicedToArray(_ref1, 2),
      value = _ref10[1];
    return value;
  }));
}
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */
function examine(thing) {
  var url = thing instanceof Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @param alternateSource An optional alternate way of determining which Stat to choose by.
 * @returns The option corresponding to your primestat.
 */
var byStat = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @param alternateSource An optional anternate way of determining which Class to choose by.
 * @returns The option corresponding to your player class.
 */
var byClass = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myClass)().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */
function lib_directlyUse(item) {
  return (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */
function unequip(thing) {
  if (thing instanceof Slot) return equip(thing, $item.none);
  var failedSlots = Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if (equippedItem(s) !== thing) return false;
    // Filter the slot out if we succeed at unequipping it
    return !unequip(s);
    // This leaves only slots that do contain the item but that we failed to unequip
  });
  if (failedSlots.length) logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
  return failedSlots.length === 0;
}
/**
 * @returns a Date object corresponding to the current in-game day, at midnight
 */
function gameDay() {
  var _todayToString$match;
  var _map = ((_todayToString$match = todayToString().match(/(\d{4})(\d{2})(\d{2})/)) !== null && _todayToString$match !== void 0 ? _todayToString$match : []).map(Number),
    _map2 = lib_slicedToArray(_map, 4),
    year = _map2[1],
    month = _map2[2],
    day = _map2[3];
  return new Date(year, month - 1, day, 0, 0, 0);
}
/**
 * @param [type="all"] the type of crafting to check for free crafts
 * @returns the number of free crafts available of that type
 */
function freeCrafts() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var effectCrafts = effect => Math.floor(haveEffect(effect) / 5);
  var all = (lib_have($skill(_templateObject35 || (_templateObject35 = lib_taggedTemplateLiteral(["Rapid Prototyping"])))) ? 5 - get("_rapidPrototypingUsed") : 0) + (lib_have($skill(_templateObject36 || (_templateObject36 = lib_taggedTemplateLiteral(["Expert Corner-Cutter"])))) ? 5 - get("_expertCornerCutterUsed") : 0) + effectCrafts($effect(_templateObject37 || (_templateObject37 = lib_taggedTemplateLiteral(["Inigo's Incantation of Inspiration"])))) + effectCrafts($effect(_templateObject38 || (_templateObject38 = lib_taggedTemplateLiteral(["Craft Tea"])))) + effectCrafts($effect(_templateObject39 || (_templateObject39 = lib_taggedTemplateLiteral(["Cooking Concentrate"]))));
  var food = type === "food" ? 5 - get("_cookbookbatCrafting") : 0;
  var smith = type === "smith" ? 5 - get("_thorsPliersCrafting") : 0;
  var booze = 0; // currently there is no booze specific free crafting skill
  return all + food + smith + booze;
}
var realmTypes = (/* unused pure expression or super */ null && (["spooky", "stench", "hot", "cold", "sleaze", "fantasy", "pirate", "cyber"]));
var todayOrAlways = x => get("_".concat(x, "Today")) || get("".concat(x, "Always"));
/**
 * @param identifier which realm to check for
 * @returns if that realm is available
 */
function realmAvailable(identifier) {
  switch (identifier) {
    case "fantasy":
      return todayOrAlways("fr");
    case "pirate":
      return todayOrAlways("pr");
    case "cyber":
      return todayOrAlways("cr");
    default:
      return todayOrAlways("".concat(identifier, "Airport"));
  }
}
/**
 * Compute the currently available Lucky Gold Ring Currencies
 * @param realm the realm type to consider
 * @returns The currency for the given zone
 */
function realmCurrency(realm) {
  switch (realm) {
    case "sleaze":
      return $item(_templateObject40 || (_templateObject40 = lib_taggedTemplateLiteral(["Beach Buck"])));
    case "spooky":
      return $item(_templateObject41 || (_templateObject41 = lib_taggedTemplateLiteral(["Coinspiracy"])));
    case "stench":
      return $item(_templateObject42 || (_templateObject42 = lib_taggedTemplateLiteral(["FunFunds\u2122"])));
    case "cold":
      return $item(_templateObject43 || (_templateObject43 = lib_taggedTemplateLiteral(["Wal-Mart gift certificate"])));
    case "hot":
      return $item(_templateObject44 || (_templateObject44 = lib_taggedTemplateLiteral(["Volcoino"])));
    case "fantasy":
      return $item(_templateObject45 || (_templateObject45 = lib_taggedTemplateLiteral(["Rubee\u2122"])));
    default:
      return null;
  }
}
/**
 * Compute which Lucky Gold Ring currencies are currently available
 * @returns a list of currently available currencies
 */
function lgrCurrencies() {
  return realmTypes.filter(realm => realmAvailable(realm) && !(realm === "hot" && get("_luckyGoldRingVolcoino"))).map(realmCurrency).filter(notNull);
}
var ACCOUNT_COMBAT_FLAGS = (/* unused pure expression or super */ null && (["aabosses", "wowbar", "bothcombatinterf", "compactmanuel", "eternalmrj", "disablelovebugs", "boringdarts"]));
/**
 * Get the current value of all of your account's combat setting flags
 * @param flags An array of the flags you want to get, defaults to all of them
 * @returns An array of objects that contain the flags and their values as booleans
 */
function getCombatFlags() {
  var flags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [].concat(ACCOUNT_COMBAT_FLAGS);
  var accountPage = visitUrl("account.php?tab=combat");
  return flags.map(flag => ({
    flag: flag,
    value: xpath(accountPage, "//*[@id=\"opt_flag_".concat(flag, "\"]/label/input[@type='checkbox']@checked"))[0] === "checked"
  }));
}
/**
 * Sets the given combat setting flags on your account
 *
 * @param flags A spread array of objects that contain a flag and its desired value; these look like the return value of `getCombatFlags`
 * @returns the result of the associated `visitUrl` call
 */
function setCombatFlags() {
  for (var _len2 = arguments.length, flags = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    flags[_key2] = arguments[_key2];
  }
  return visitUrl("account.php?".concat(([].concat(lib_toConsumableArray(flags.flatMap(_ref11 => {
    var flag = _ref11.flag,
      value = _ref11.value;
    return ["actions[]=flag_".concat(flag), "flag_".concat(flag, "=").concat(Number(value))];
  })), ["action=Update", "am=1", "ajax=1", "pwd"]).join("&"), true)));
}
/**
 * Perform a given action with certain combat setting flags set, returning them to their initial values if possible
 *
 * @param action The action you want to do with the given combat setting flags
 * @param flags A spread array of objects that contain a combat setting flag and its desired value; these look like the return value of `getCombatFlags`
 * @returns The result of the action
 */
function withCombatFlags(action) {
  for (var _len3 = arguments.length, flags = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    flags[_key3 - 1] = arguments[_key3];
  }
  var initialValues = getCombatFlags(flags.map(_ref12 => {
    var flag = _ref12.flag;
    return flag;
  }));
  try {
    return action();
  } finally {
    setCombatFlags.apply(void 0, lib_toConsumableArray(initialValues));
  }
}
/**
 * Determines whether you currently have an effect intrinsically
 * @param effect The effect in question
 * @returns Whether you have that effect as an intrinsic. Alternately you could just have over 2147483647 turns of that effect, but that seems unlikely.
 */
function haveIntrinsic(effect) {
  return haveEffect(effect) >= 2147483647;
}
/**
 * Extracts a map of gained items from a string, for example from the result
 * of a combat.
 *
 * NOTE: Make sure you trust the source of that text.
 *
 * @param text The text to extract items from
 * @returns A map of items and their quantities
 */
function extractItems(text) {
  return new Map(Object.entries(kolmafiaExtractItems(text)).map(_ref13 => {
    var _ref14 = lib_slicedToArray(_ref13, 2),
      itemName = _ref14[0],
      quantity = _ref14[1];
    return [Item.get(itemName), quantity];
  }));
}
function makeScalerCalcFunction(cache, pattern) {
  return function (monster) {
    var _find, _pattern$exec$slice, _pattern$exec;
    var current = cache.get(monster);
    if (current !== undefined) return (0,external_kolmafia_namespaceObject.monsterEval)(current);
    var result = (_find = ((_pattern$exec$slice = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec.slice(1)) !== null && _pattern$exec$slice !== void 0 ? _pattern$exec$slice : []).find(m => m !== undefined)) !== null && _find !== void 0 ? _find : "0";
    cache.set(monster, result);
    return (0,external_kolmafia_namespaceObject.monsterEval)(result);
  };
}
var scalerRates = new Map();
var scalerCaps = new Map();
var SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/;
var SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/;
/**
 * Calculate & return the scaling rate of a monster--`0` for non-scalers.
 * @param monster The monster to check
 * @returns The current scaling rate of the monster, based on your current in-game state
 */
var getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN);
/**
 * Calculate & return the scaling cap of a monster--`0` for non-scalers.
 * @param monster The monster to check
 * @returns The current scaling cap of the monster, based on your current in-game state
 */
var getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
/**
 * Wrap a specified action in mafia's `batchOpen` and `batchClose`
 *
 * @param action Action to perform while using mafia's batching feature
 * @returns The return value of the action
 */
function withBatch(action) {
  batchOpen();
  try {
    return action();
  } finally {
    batchClose();
  }
}
var makeBulkFunction = action => items => {
  (0,external_kolmafia_namespaceObject.batchOpen)();
  var _iterator2 = lib_createForOfIteratorHelper(items.entries()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = lib_slicedToArray(_step2.value, 2),
        item = _step2$value[0],
        quantity = _step2$value[1];
      action(quantity, item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return (0,external_kolmafia_namespaceObject.batchClose)();
};
/*
 * Autosell items in bulk
 */
var bulkAutosell = makeBulkFunction(external_kolmafia_namespaceObject.autosell);
/*
 * Closet items in bulk
 * Note: each item transfer will still consume one request
 */
var bulkPutCloset = makeBulkFunction(external_kolmafia_namespaceObject.putCloset);
/*
 * Display items in bulk
 */
var bulkPutDisplay = makeBulkFunction(external_kolmafia_namespaceObject.putDisplay);
/*
 * Deposit items into your clan stash in bulk
 */
var bulkPutStash = makeBulkFunction(external_kolmafia_namespaceObject.putStash);
/*
 * Remove items from your closet in bulk
 * Note: each item transfer will still consume one request
 */
var bulkTakeCloset = makeBulkFunction(external_kolmafia_namespaceObject.takeCloset);
/*
 * Remove items from your display case in bulk
 */
var bulkTakeDisplay = makeBulkFunction(external_kolmafia_namespaceObject.takeDisplay);
/*
 * Remove items from your shop in bulk
 */
var bulkTakeShop = makeBulkFunction(external_kolmafia_namespaceObject.takeShop);
/*
 * Withdraw items from your clan stash in bulk
 * Note: each item transfer will still consume one request
 */
var bulkTakeStash = makeBulkFunction(external_kolmafia_namespaceObject.takeStash);
/*
 * Remove items from your Hagnk's in bulk
 */
var bulkTakeStorage = makeBulkFunction(external_kolmafia_namespaceObject.takeStorage);
/*
 * Mallsell items in bulk
 */
var bulkPutShop = items => {
  batchOpen();
  var _iterator3 = lib_createForOfIteratorHelper(items.entries()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = lib_slicedToArray(_step3.value, 2),
        item = _step3$value[0],
        _step3$value$ = _step3$value[1],
        quantity = _step3$value$.quantity,
        limit = _step3$value$.limit,
        price = _step3$value$.price;
      if (quantity) {
        putShop(price, limit !== null && limit !== void 0 ? limit : 0, quantity, item);
      } else {
        putShop(price, limit !== null && limit !== void 0 ? limit : 0, item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return batchClose();
};
/*
 * Coinmaster-sell items to the same coinmaster in bulk
 */
var bulkSell = (coinmaster, items) => {
  batchOpen();
  var _iterator4 = lib_createForOfIteratorHelper(items.entries()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = lib_slicedToArray(_step4.value, 2),
        item = _step4$value[0],
        quantity = _step4$value[1];
      sell(coinmaster, quantity, item);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return batchClose();
};
/*
 * Reprice items in your mallstore in bulk
 */
var bulkRepriceShop = items => {
  batchOpen();
  var _iterator5 = lib_createForOfIteratorHelper(items.entries()),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = lib_slicedToArray(_step5.value, 2),
        item = _step5$value[0],
        _step5$value$ = _step5$value[1],
        limit = _step5$value$.limit,
        price = _step5$value$.price;
      if (limit) {
        repriceShop(price, limit, item);
      } else {
        repriceShop(price, item);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return batchClose();
};
/**
 * Calculate the total weight of a given familiar, including soup & modifiers
 * @param familiar The familiar to use--defaults to your current one
 * @param considerAdjustment Whether to include your `weightAdjustment` in the calculation
 * @returns The total weight of the given familiar
 */
function totalFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,external_kolmafia_namespaceObject.myFamiliar)();
  var considerAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return utils_clamp(utils_clamp((0,external_kolmafia_namespaceObject.familiarWeight)(familiar), lib_have(template_string_$effect(_templateObject46 || (_templateObject46 = lib_taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, Infinity) + familiar.soupWeight + (considerAdjustment ? (0,external_kolmafia_namespaceObject.weightAdjustment)() : 0) + (familiar.feasted ? 10 : 0), 1, Infinity);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
var regularFamiliarTagSet = new Set(regularFamiliarTags);
var pokefamUltTags = Object.freeze(["ult_bearhug", "ult_sticktreats", "ult_owlstare", "ult_bloodbath", "ult_pepperscorn", "ult_rainbowstorm"]);
var SPECIAL_ULTS = new Map([[template_string_$familiar(_templateObject47 || (_templateObject47 = lib_taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [template_string_$familiar(_templateObject48 || (_templateObject48 = lib_taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [template_string_$familiar(_templateObject49 || (_templateObject49 = lib_taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [template_string_$familiar(_templateObject50 || (_templateObject50 = lib_taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [template_string_$familiar(_templateObject51 || (_templateObject51 = lib_taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [template_string_$familiar(_templateObject52 || (_templateObject52 = lib_taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);
/**
 * Type guard function to determine if a tag is a regular familiar tag or a pokefam ult
 * @param tag The familiar tag to check
 * @returns Asserts that `tag` is a `RegularFamiliarTag`
 */
function isRegularFamiliarTag(tag) {
  return regularFamiliarTagSet.has(tag);
}
/**
 * Find the tags (used in mumming trunk, stillsuit, etc) for a given familiar, EXCLUDING special tags used for pokefam ults
 * @param familiar The familiar in question
 * @returns An array of the familiar's tags
 */
function getRegularFamiliarTags(familiar) {
  return familiar.attributes.split("; ").filter(isRegularFamiliarTag);
}
/**
 * Find the tags (used in mumming trunk, stillsuit, etc) for a given familiar, INCLUDING special tags used for pokefam ults
 * @param familiar The familiar in question
 * @returns An array of the familiar's tags
 */
function getAllFamiliarTags(familiar) {
  var _SPECIAL_ULTS$get;
  return [].concat(lib_toConsumableArray(getRegularFamiliarTags(familiar)), lib_toConsumableArray((_SPECIAL_ULTS$get = SPECIAL_ULTS.get(familiar)) !== null && _SPECIAL_ULTS$get !== void 0 ? _SPECIAL_ULTS$get : []));
}
/**
 * Determines the cost of acquiring an item taking into account your valueOfInventory preference
 *
 * @param item The item to check the price of
 * @param quantity the number of items to acquire
 * @returns The total value of the items
 */
function getAcquirePrice(item) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (quantity <= 0) return 0;
  var currentAmount = availableAmount(item);
  var amountNeeded = Math.max(0, quantity - currentAmount);
  var retrieveCost = retrievePrice(item, currentAmount + quantity) - retrievePrice(item, currentAmount);
  var mallMinPrice = Math.max(100, 2 * autosellPrice(item));
  // If it's easy to meatpaste, just rely on retrieveCost
  if (craftType(item) === "Meatpasting" && retrieveCost > 0) {
    return retrieveCost;
  }
  if (isNpcItem(item) && npcPrice(item) > 0 && npcPrice(item) < mallPrice(item)) {
    // If it's best handled through NPC shops, handle it through NPC shops
    return quantity * npcPrice(item);
  }
  if (item.tradeable) {
    if (mallPrice(item) === mallMinPrice) {
      // Value the ones you have at autosell, because that's what you'd sell them at
      // Value the ones you need to buy at the price you'd buy them at
      return clamp(currentAmount, 0, quantity) * autosellPrice(item) + amountNeeded * mallPrice(item);
    }
    if (mallPrice(item) > mallMinPrice) {
      // Value them all at mall price
      // regardless of whether you already owned them
      return quantity * mallPrice(item);
    }
    // The fallthrough case here is that the mallprice is somehow below mall min
    // That shouldn't really happen
    return quantity * autosellPrice(item);
  }
  if (item.discardable) {
    return lib_have(item, quantity) ? quantity * autosellPrice(item) : Infinity;
  }
  // If it can't be traded or discarded, and we're passing into this function, it's free
  // There might some day be specific items we don't want to value like this, because you receive only a limited number
  // We'll burn that bridge when we come to it.
  return 0;
}
;// ./node_modules/libram/dist/resources/2007/CandyHearts.js
var CandyHearts_templateObject, CandyHearts_templateObject2, CandyHearts_templateObject3, CandyHearts_templateObject4, CandyHearts_templateObject5, CandyHearts_templateObject6, CandyHearts_templateObject7;
function CandyHearts_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var summonSkill = template_string_$skill(CandyHearts_templateObject || (CandyHearts_templateObject = CandyHearts_taggedTemplateLiteral(["Summon Candy Heart"])));
var libramChance = 1.0 / 6;
var libramExpected = new Map([[template_string_$item(CandyHearts_templateObject2 || (CandyHearts_templateObject2 = CandyHearts_taggedTemplateLiteral(["green candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject3 || (CandyHearts_templateObject3 = CandyHearts_taggedTemplateLiteral(["lavender candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject4 || (CandyHearts_templateObject4 = CandyHearts_taggedTemplateLiteral(["orange candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject5 || (CandyHearts_templateObject5 = CandyHearts_taggedTemplateLiteral(["pink candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject6 || (CandyHearts_templateObject6 = CandyHearts_taggedTemplateLiteral(["white candy heart"]))), libramChance], [template_string_$item(CandyHearts_templateObject7 || (CandyHearts_templateObject7 = CandyHearts_taggedTemplateLiteral(["yellow candy heart"]))), libramChance]]);
/**
 * @returns true if the player can Summon Candy Heart
 */
function CandyHearts_have() {
  return lib_have(summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected() {
  return libramExpected;
}
;// ./node_modules/libram/dist/resources/2008/DivineFavors.js
var DivineFavors_templateObject, DivineFavors_templateObject2, DivineFavors_templateObject3, DivineFavors_templateObject4, DivineFavors_templateObject5, DivineFavors_templateObject6, DivineFavors_templateObject7;
function DivineFavors_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var DivineFavors_summonSkill = template_string_$skill(DivineFavors_templateObject || (DivineFavors_templateObject = DivineFavors_taggedTemplateLiteral(["Summon Party Favor"])));
/**
 * @returns true if the player can Summon Party Favors
 */
function DivineFavors_have() {
  return lib_have(DivineFavors_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function DivineFavors_expected() {
  var rareSummons = property_get("_favorRareSummons");
  var totalRareChance = 1.0 / Math.pow(2, rareSummons + 1);
  var commonChance = (1.0 - totalRareChance) / 3;
  var rareChance = totalRareChance / 3;
  return new Map([[template_string_$item(DivineFavors_templateObject2 || (DivineFavors_templateObject2 = DivineFavors_taggedTemplateLiteral(["divine blowout"]))), commonChance], [template_string_$item(DivineFavors_templateObject3 || (DivineFavors_templateObject3 = DivineFavors_taggedTemplateLiteral(["divine can of silly string"]))), commonChance], [template_string_$item(DivineFavors_templateObject4 || (DivineFavors_templateObject4 = DivineFavors_taggedTemplateLiteral(["divine noisemaker"]))), commonChance], [template_string_$item(DivineFavors_templateObject5 || (DivineFavors_templateObject5 = DivineFavors_taggedTemplateLiteral(["divine champagne flute"]))), rareChance], [template_string_$item(DivineFavors_templateObject6 || (DivineFavors_templateObject6 = DivineFavors_taggedTemplateLiteral(["divine champagne popper"]))), rareChance], [template_string_$item(DivineFavors_templateObject7 || (DivineFavors_templateObject7 = DivineFavors_taggedTemplateLiteral(["divine cracker"]))), rareChance]]);
}
;// ./node_modules/libram/dist/resources/2009/LoveSongs.js
var LoveSongs_templateObject, LoveSongs_templateObject2, LoveSongs_templateObject3, LoveSongs_templateObject4, LoveSongs_templateObject5, LoveSongs_templateObject6, LoveSongs_templateObject7;
function LoveSongs_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var LoveSongs_summonSkill = template_string_$skill(LoveSongs_templateObject || (LoveSongs_templateObject = LoveSongs_taggedTemplateLiteral(["Summon Love Song"])));
var LoveSongs_libramChance = 1.0 / 6;
var LoveSongs_libramExpected = new Map([[template_string_$item(LoveSongs_templateObject2 || (LoveSongs_templateObject2 = LoveSongs_taggedTemplateLiteral(["love song of disturbing obsession"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject3 || (LoveSongs_templateObject3 = LoveSongs_taggedTemplateLiteral(["love song of icy revenge"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject4 || (LoveSongs_templateObject4 = LoveSongs_taggedTemplateLiteral(["love song of naughty innuendo"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject5 || (LoveSongs_templateObject5 = LoveSongs_taggedTemplateLiteral(["love song of smoldering passion"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject6 || (LoveSongs_templateObject6 = LoveSongs_taggedTemplateLiteral(["love song of sugary cuteness"]))), LoveSongs_libramChance], [template_string_$item(LoveSongs_templateObject7 || (LoveSongs_templateObject7 = LoveSongs_taggedTemplateLiteral(["love song of vague ambiguity"]))), LoveSongs_libramChance]]);
/**
 * @returns true if the player can Summon Love Song
 */
function LoveSongs_have() {
  return lib_have(LoveSongs_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function LoveSongs_expected() {
  return LoveSongs_libramExpected;
}
;// ./node_modules/libram/dist/resources/2010/Brickos.js
var Brickos_templateObject, Brickos_templateObject2, Brickos_templateObject3;
function Brickos_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var Brickos_summonSkill = template_string_$skill(Brickos_templateObject || (Brickos_templateObject = Brickos_taggedTemplateLiteral(["Summon BRICKOs"])));
/**
 * @returns true if the player can Summon BRICKOs
 */
function Brickos_have() {
  return lib_have(Brickos_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function Brickos_expected() {
  var eyeSummons = property_get("_brickoEyeSummons");
  var eyeChance = eyeSummons === 3 ? 0.0 : eyeSummons === 0 ? 0.5 : 1.0 / 3.0;
  return new Map([[template_string_$item(Brickos_templateObject2 || (Brickos_templateObject2 = Brickos_taggedTemplateLiteral(["BRICKO eye brick"]))), eyeChance], [template_string_$item(Brickos_templateObject3 || (Brickos_templateObject3 = Brickos_taggedTemplateLiteral(["BRICKO brick"]))), 3.0 - eyeChance]]);
}
;// ./node_modules/libram/dist/resources/2011/Gygaxian.js
var Gygaxian_templateObject, Gygaxian_templateObject2, Gygaxian_templateObject3, Gygaxian_templateObject4, Gygaxian_templateObject5, Gygaxian_templateObject6, Gygaxian_templateObject7;
function Gygaxian_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var Gygaxian_summonSkill = template_string_$skill(Gygaxian_templateObject || (Gygaxian_templateObject = Gygaxian_taggedTemplateLiteral(["Summon Dice"])));
var Gygaxian_libramChance = 1.0 / 6;
var Gygaxian_libramExpected = new Map([[template_string_$item(Gygaxian_templateObject2 || (Gygaxian_templateObject2 = Gygaxian_taggedTemplateLiteral(["d4"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject3 || (Gygaxian_templateObject3 = Gygaxian_taggedTemplateLiteral(["d6"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject4 || (Gygaxian_templateObject4 = Gygaxian_taggedTemplateLiteral(["d8"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject5 || (Gygaxian_templateObject5 = Gygaxian_taggedTemplateLiteral(["d10"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject6 || (Gygaxian_templateObject6 = Gygaxian_taggedTemplateLiteral(["d12"]))), Gygaxian_libramChance], [template_string_$item(Gygaxian_templateObject7 || (Gygaxian_templateObject7 = Gygaxian_taggedTemplateLiteral(["d20"]))), Gygaxian_libramChance]]);
/**
 * @returns true if the player can Summon Dice
 */
function Gygaxian_have() {
  return lib_have(Gygaxian_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function Gygaxian_expected() {
  return Gygaxian_libramExpected;
}
;// ./node_modules/libram/dist/resources/2012/Resolutions.js
var Resolutions_templateObject, Resolutions_templateObject2, Resolutions_templateObject3, Resolutions_templateObject4, Resolutions_templateObject5, Resolutions_templateObject6, Resolutions_templateObject7, Resolutions_templateObject8, Resolutions_templateObject9, Resolutions_templateObject0;
function Resolutions_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var Resolutions_summonSkill = template_string_$skill(Resolutions_templateObject || (Resolutions_templateObject = Resolutions_taggedTemplateLiteral(["Summon Resolutions"])));
var commonChance = 0.98 / 6;
var rareChance = 0.02 / 3;
var Resolutions_libramExpected = new Map([[template_string_$item(Resolutions_templateObject2 || (Resolutions_templateObject2 = Resolutions_taggedTemplateLiteral(["resolution: be feistier"]))), commonChance], [template_string_$item(Resolutions_templateObject3 || (Resolutions_templateObject3 = Resolutions_taggedTemplateLiteral(["resolution: be happier"]))), commonChance], [template_string_$item(Resolutions_templateObject4 || (Resolutions_templateObject4 = Resolutions_taggedTemplateLiteral(["resolution: be sexier"]))), commonChance], [template_string_$item(Resolutions_templateObject5 || (Resolutions_templateObject5 = Resolutions_taggedTemplateLiteral(["resolution: be smarter"]))), commonChance], [template_string_$item(Resolutions_templateObject6 || (Resolutions_templateObject6 = Resolutions_taggedTemplateLiteral(["resolution: be stronger"]))), commonChance], [template_string_$item(Resolutions_templateObject7 || (Resolutions_templateObject7 = Resolutions_taggedTemplateLiteral(["resolution: be wealthier"]))), commonChance], [template_string_$item(Resolutions_templateObject8 || (Resolutions_templateObject8 = Resolutions_taggedTemplateLiteral(["resolution: be kinder"]))), rareChance], [template_string_$item(Resolutions_templateObject9 || (Resolutions_templateObject9 = Resolutions_taggedTemplateLiteral(["resolution: be luckier"]))), rareChance], [template_string_$item(Resolutions_templateObject0 || (Resolutions_templateObject0 = Resolutions_taggedTemplateLiteral(["resolution: be more adventurous"]))), rareChance]]);
/**
 * @returns Whether the player can Summon Resolutions
 */
function Resolutions_have() {
  return lib_have(Resolutions_summonSkill);
}
/**
 * @returns Map containing the chance of an item to be summoned
 */
function Resolutions_expected() {
  return Resolutions_libramExpected;
}
;// ./node_modules/libram/dist/resources/2013/PulledTaffy.js
var PulledTaffy_templateObject, PulledTaffy_templateObject2, PulledTaffy_templateObject3, PulledTaffy_templateObject4, PulledTaffy_templateObject5, PulledTaffy_templateObject6, PulledTaffy_templateObject7, PulledTaffy_templateObject8;
function PulledTaffy_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var PulledTaffy_summonSkill = template_string_$skill(PulledTaffy_templateObject || (PulledTaffy_templateObject = PulledTaffy_taggedTemplateLiteral(["Summon Taffy"])));
/**
 * @returns true if the player can Summon Taffy
 */
function PulledTaffy_have() {
  return lib_have(PulledTaffy_summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function PulledTaffy_expected() {
  var rareSummons = property_get("_taffyRareSummons");
  var yellowSummons = property_get("_taffyYellowSummons");
  var onlyYellow = yellowSummons === 0 && rareSummons === 3;
  var totalRareChance = rareSummons < 4 ? 1.0 / Math.pow(2, rareSummons + 1) : 0.0;
  var commonChance = (1.0 - totalRareChance) / 4;
  var rareChance = onlyYellow ? 0.0 : totalRareChance / (3 - property_get("_taffyYellowSummons"));
  var yellowChance = yellowSummons === 1 ? 0.0 : onlyYellow ? totalRareChance : rareChance;
  return new Map([[template_string_$item(PulledTaffy_templateObject2 || (PulledTaffy_templateObject2 = PulledTaffy_taggedTemplateLiteral(["pulled blue taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject3 || (PulledTaffy_templateObject3 = PulledTaffy_taggedTemplateLiteral(["pulled orange taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject4 || (PulledTaffy_templateObject4 = PulledTaffy_taggedTemplateLiteral(["pulled violet taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject5 || (PulledTaffy_templateObject5 = PulledTaffy_taggedTemplateLiteral(["pulled red taffy"]))), commonChance], [template_string_$item(PulledTaffy_templateObject6 || (PulledTaffy_templateObject6 = PulledTaffy_taggedTemplateLiteral(["pulled indigo taffy"]))), rareChance], [template_string_$item(PulledTaffy_templateObject7 || (PulledTaffy_templateObject7 = PulledTaffy_taggedTemplateLiteral(["pulled green taffy"]))), rareChance], [template_string_$item(PulledTaffy_templateObject8 || (PulledTaffy_templateObject8 = PulledTaffy_taggedTemplateLiteral(["pulled yellow taffy"]))), yellowChance]]);
}
;// ./node_modules/libram/dist/resources/LibramSummon.js
var LibramSummon_templateObject, LibramSummon_templateObject2, LibramSummon_templateObject3, LibramSummon_templateObject4, LibramSummon_templateObject5, LibramSummon_templateObject6, LibramSummon_templateObject7, LibramSummon_templateObject8, LibramSummon_templateObject9, LibramSummon_templateObject0, LibramSummon_templateObject1, LibramSummon_templateObject10, LibramSummon_templateObject11, LibramSummon_templateObject12;
function LibramSummon_slicedToArray(r, e) { return LibramSummon_arrayWithHoles(r) || LibramSummon_iterableToArrayLimit(r, e) || LibramSummon_unsupportedIterableToArray(r, e) || LibramSummon_nonIterableRest(); }
function LibramSummon_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function LibramSummon_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return LibramSummon_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? LibramSummon_arrayLikeToArray(r, a) : void 0; } }
function LibramSummon_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function LibramSummon_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function LibramSummon_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function LibramSummon_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }










/**
 *
 * @param summonSkill The libram summoning skill
 * @returns map containing the chance of an item to be summoned
 */
function expectedLibramSummon(summonSkill) {
  switch (summonSkill) {
    case $skill(LibramSummon_templateObject || (LibramSummon_templateObject = LibramSummon_taggedTemplateLiteral(["Summon Candy Heart"]))):
      return candyHeartsExpected();
    case $skill(LibramSummon_templateObject2 || (LibramSummon_templateObject2 = LibramSummon_taggedTemplateLiteral(["Summon Party Favor"]))):
      return divineFavorsExpected();
    case $skill(LibramSummon_templateObject3 || (LibramSummon_templateObject3 = LibramSummon_taggedTemplateLiteral(["Summon Love Song"]))):
      return loveSongsExpected();
    case $skill(LibramSummon_templateObject4 || (LibramSummon_templateObject4 = LibramSummon_taggedTemplateLiteral(["Summon BRICKOs"]))):
      return brickosExpected();
    case $skill(LibramSummon_templateObject5 || (LibramSummon_templateObject5 = LibramSummon_taggedTemplateLiteral(["Summon Dice"]))):
      return diceExpected();
    case $skill(LibramSummon_templateObject6 || (LibramSummon_templateObject6 = LibramSummon_taggedTemplateLiteral(["Summon Resolutions"]))):
      return resolutionsExpected();
    case $skill(LibramSummon_templateObject7 || (LibramSummon_templateObject7 = LibramSummon_taggedTemplateLiteral(["Summon Taffy"]))):
      return taffyExpected();
  }
  return new Map();
}
/**
 *
 * @returns map containing the chance of items to be summoned for each libram summoning skill available
 */
function possibleLibramSummons() {
  var results = new Map();
  if (CandyHearts_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject8 || (LibramSummon_templateObject8 = LibramSummon_taggedTemplateLiteral(["Summon Candy Heart"]))), expected());
  }
  if (DivineFavors_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject9 || (LibramSummon_templateObject9 = LibramSummon_taggedTemplateLiteral(["Summon Party Favor"]))), DivineFavors_expected());
  }
  if (LoveSongs_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject0 || (LibramSummon_templateObject0 = LibramSummon_taggedTemplateLiteral(["Summon Love Song"]))), LoveSongs_expected());
  }
  if (Brickos_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject1 || (LibramSummon_templateObject1 = LibramSummon_taggedTemplateLiteral(["Summon BRICKOs"]))), Brickos_expected());
  }
  if (Gygaxian_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject10 || (LibramSummon_templateObject10 = LibramSummon_taggedTemplateLiteral(["Summon Dice"]))), Gygaxian_expected());
  }
  if (Resolutions_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject11 || (LibramSummon_templateObject11 = LibramSummon_taggedTemplateLiteral(["Summon Resolutions"]))), Resolutions_expected());
  }
  if (PulledTaffy_have()) {
    results.set(template_string_$skill(LibramSummon_templateObject12 || (LibramSummon_templateObject12 = LibramSummon_taggedTemplateLiteral(["Summon Taffy"]))), PulledTaffy_expected());
  }
  return results;
}
/**
 * Determines the best libram to cast, based on expected meat value in mall
 *
 * @returns The best libram to cast, based on expected meat value in mall
 */
function bestLibramToCast() {
  var arr = Array.from(possibleLibramSummons().entries());
  if (!arr.length) return null;
  return utils_maxBy(arr, _ref => {
    var _ref2 = LibramSummon_slicedToArray(_ref, 2),
      itemMap = _ref2[1];
    return utils_sum(Array.from(itemMap.entries()), _ref3 => {
      var _ref4 = LibramSummon_slicedToArray(_ref3, 2),
        item = _ref4[0],
        weight = _ref4[1];
      return weight * getSaleValue(item);
    });
  })[0];
}
;// ./node_modules/libram/dist/logger.js
function logger_typeof(o) { "@babel/helpers - typeof"; return logger_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, logger_typeof(o); }
function logger_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function logger_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, logger_toPropertyKey(o.key), o); } }
function logger_createClass(e, r, t) { return r && logger_defineProperties(e.prototype, r), t && logger_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function logger_defineProperty(e, r, t) { return (r = logger_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function logger_toPropertyKey(t) { var i = logger_toPrimitive(t, "string"); return "symbol" == logger_typeof(i) ? i : i + ""; }
function logger_toPrimitive(t, r) { if ("object" != logger_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != logger_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var LogLevels;
(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = logger_defineProperty(logger_defineProperty(logger_defineProperty(logger_defineProperty({}, LogLevels.INFO, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), LogLevels.WARNING, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), LogLevels.ERROR, error => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(error));
  return;
}), LogLevels.DEBUG, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
});
var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);
    logger_defineProperty(this, "handlers", defaultHandlers);
  }
  return logger_createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
}();
logger_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
/* harmony default export */ const dist_logger = (new Logger());
;// ./node_modules/libram/dist/maximize.js
function maximize_typeof(o) { "@babel/helpers - typeof"; return maximize_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, maximize_typeof(o); }
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject0, maximize_templateObject1, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, maximize_templateObject35, maximize_templateObject36, maximize_templateObject37, maximize_templateObject38, maximize_templateObject39, maximize_templateObject40, maximize_templateObject41, maximize_templateObject42, maximize_templateObject43, maximize_templateObject44, maximize_templateObject45, maximize_templateObject46, maximize_templateObject47, maximize_templateObject48;
function maximize_slicedToArray(r, e) { return maximize_arrayWithHoles(r) || maximize_iterableToArrayLimit(r, e) || maximize_unsupportedIterableToArray(r, e) || maximize_nonIterableRest(); }
function maximize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function maximize_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function maximize_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, maximize_toPropertyKey(o.key), o); } }
function maximize_createClass(e, r, t) { return r && maximize_defineProperties(e.prototype, r), t && maximize_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function maximize_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function maximize_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = maximize_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function maximize_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function maximize_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function maximize_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? maximize_ownKeys(Object(t), !0).forEach(function (r) { maximize_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : maximize_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function maximize_defineProperty(e, r, t) { return (r = maximize_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function maximize_toPropertyKey(t) { var i = maximize_toPrimitive(t, "string"); return "symbol" == maximize_typeof(i) ? i : i + ""; }
function maximize_toPrimitive(t, r) { if ("object" != maximize_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != maximize_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function maximize_toConsumableArray(r) { return maximize_arrayWithoutHoles(r) || maximize_iterableToArray(r) || maximize_unsupportedIterableToArray(r) || maximize_nonIterableSpread(); }
function maximize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return maximize_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? maximize_arrayLikeToArray(r, a) : void 0; } }
function maximize_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function maximize_arrayWithoutHoles(r) { if (Array.isArray(r)) return maximize_arrayLikeToArray(r); }
function maximize_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





function toMaximizerName(_ref) {
  var name = _ref.name,
    id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$updateOnLo, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: (_addendums$updateOnLo = addendums.updateOnLocationChange) !== null && _addendums$updateOnLo !== void 0 ? _addendums$updateOnLo : defaultOptions.updateOnLocationChange,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(maximize_toConsumableArray(defaultOptions.forceEquip), maximize_toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(maximize_toConsumableArray(defaultOptions.preventEquip), maximize_toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(maximize_toConsumableArray(defaultOptions.bonusEquip), maximize_toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(maximize_toConsumableArray(defaultOptions.preventSlot), maximize_toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: maximize_objectSpread(maximize_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  updateOnLocationChange: false,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */
function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var modeableItems = {
  backupcamera: template_string_$item(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["backup camera"]))),
  umbrella: template_string_$item(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: template_string_$item(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: template_string_$item(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: template_string_$item(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: template_string_$item(maximize_templateObject6 || (maximize_templateObject6 = maximize_taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: template_string_$item(maximize_templateObject7 || (maximize_templateObject7 = maximize_taggedTemplateLiteral(["LED candle"])))
};
var modeableState = {
  backupcamera: () => (0,external_kolmafia_namespaceObject.getProperty)("backupCameraMode"),
  umbrella: () => (0,external_kolmafia_namespaceObject.getProperty)("umbrellaState"),
  snowsuit: () => (0,external_kolmafia_namespaceObject.getProperty)("snowsuit"),
  edpiece: () => (0,external_kolmafia_namespaceObject.getProperty)("edPiece"),
  retrocape: () => (0,external_kolmafia_namespaceObject.getProperty)("retroCapeSuperhero") + " " + (0,external_kolmafia_namespaceObject.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,external_kolmafia_namespaceObject.getProperty)("parkaMode"),
  jillcandle: () => (0,external_kolmafia_namespaceObject.getProperty)("ledCandleMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */
function getCurrentModes() {
  var modes = {};
  var _iterator = maximize_createForOfIteratorHelper(modeableCommands),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */
function applyModes(modes) {
  var _iterator2 = maximize_createForOfIteratorHelper(modeableCommands),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,external_kolmafia_namespaceObject.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// Subset of slots that are valid for caching.
var cachedSlots = $slots(maximize_templateObject8 || (maximize_templateObject8 = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /*#__PURE__*/maximize_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  maximize_classCallCheck(this, CacheEntry);
  maximize_defineProperty(this, "equipment", void 0);
  maximize_defineProperty(this, "rider", void 0);
  maximize_defineProperty(this, "familiar", void 0);
  maximize_defineProperty(this, "canEquipItemCount", void 0);
  maximize_defineProperty(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
});
var _outfitSlots = /*#__PURE__*/new WeakMap();
var _useHistory = /*#__PURE__*/new WeakMap();
var _maxSize = /*#__PURE__*/new WeakMap();
var OutfitLRUCache = /*#__PURE__*/function () {
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);
    // Current outfits allocated
    _classPrivateFieldInitSpec(this, _outfitSlots, []);
    // Array of indices into #outfitSlots in order of use. Most recent at the front.
    _classPrivateFieldInitSpec(this, _useHistory, []);
    _classPrivateFieldInitSpec(this, _maxSize, void 0);
    _classPrivateFieldSet(_maxSize, this, maxSize);
  }
  return maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(_useHistory, this).length !== _classPrivateFieldGet(_outfitSlots, this).length || !maximize_toConsumableArray(_classPrivateFieldGet(_useHistory, this)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(_useHistory, this, [index].concat(maximize_toConsumableArray(_classPrivateFieldGet(_useHistory, this).filter(i => i !== index))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(_outfitSlots, this).indexOf(key);
      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;
      if (_classPrivateFieldGet(_outfitSlots, this).length >= _classPrivateFieldGet(_maxSize, this)) {
        lastUseIndex = _classPrivateFieldGet(_useHistory, this).pop();
        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet(_useHistory, this).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet(_outfitSlots, this)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(_outfitSlots, this).push(key) - 1;
        _classPrivateFieldGet(_useHistory, this).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(_outfitSlots, this, []);
      _classPrivateFieldSet(_useHistory, this, []);
    }
  }]);
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */
maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0,external_kolmafia_namespaceObject.cliExecute)("outfit save ".concat(name));
}
// Objective cache entries.
var cachedObjectives = {};
// Outfit cache entries. Keep 6 by default to avoid cluttering list.
var outfitCache = new OutfitLRUCache(6);
// Cache to prevent rescanning all items unnecessarily
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */
function canEquipItemCount() {
  var stats = $stats(maximize_templateObject9 || (maximize_templateObject9 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_namespaceObject.myBasestat)(stat), 300));
  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_namespaceObject.Item.all().filter(item => (0,external_kolmafia_namespaceObject.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && (0,external_kolmafia_namespaceObject.myFamiliar)() !== entry.familiar) {
    dist_logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    dist_logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;
  if (outfitName) {
    if (!(0,external_kolmafia_namespaceObject.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_namespaceObject.outfit)(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(maximize_templateObject0 || (maximize_templateObject0 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_namespaceObject.equip)($slot(maximize_templateObject1 || (maximize_templateObject1 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = maximize_createForOfIteratorHelper(entry.equipment),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = maximize_slicedToArray(_step3.value, 2),
          slot = _step3$value[0],
          item = _step3$value[1];
        if ((0,external_kolmafia_namespaceObject.equippedItem)(slot) !== item && (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0) {
          (0,external_kolmafia_namespaceObject.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      dist_logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject10 || (maximize_templateObject10 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject11 || (maximize_templateObject11 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_namespaceObject.enthroneFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject12 || (maximize_templateObject12 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || template_string_$familiar.none);
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject13 || (maximize_templateObject13 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject14 || (maximize_templateObject14 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject15 || (maximize_templateObject15 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || template_string_$familiar.none);
  }
  applyModes(maximize_objectSpread(maximize_objectSpread({}, entry.modes), options.modes));
}
var slotStructure = [$slots(maximize_templateObject16 || (maximize_templateObject16 = maximize_taggedTemplateLiteral(["hat"]))), $slots(maximize_templateObject17 || (maximize_templateObject17 = maximize_taggedTemplateLiteral(["back"]))), $slots(maximize_templateObject18 || (maximize_templateObject18 = maximize_taggedTemplateLiteral(["shirt"]))), $slots(maximize_templateObject19 || (maximize_templateObject19 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), $slots(maximize_templateObject20 || (maximize_templateObject20 = maximize_taggedTemplateLiteral(["pants"]))), $slots(maximize_templateObject21 || (maximize_templateObject21 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(maximize_templateObject22 || (maximize_templateObject22 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;
  var _iterator4 = maximize_createForOfIteratorHelper(slotStructure),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref2 => {
        var _ref3 = maximize_slicedToArray(_ref2, 2),
          item = _ref3[1];
        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = maximize_slicedToArray(_ref4, 2),
          item = _ref5[1];
        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = maximize_slicedToArray(_ref6, 1),
          slot = _ref7[0];
        return (0,external_kolmafia_namespaceObject.equippedItem)(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          dist_logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject23 || (maximize_templateObject23 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject24 || (maximize_templateObject24 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject25 || (maximize_templateObject25 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply ".concat(entry.rider.get(template_string_$item(maximize_templateObject26 || (maximize_templateObject26 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat(template_string_$item(maximize_templateObject27 || (maximize_templateObject27 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject28 || (maximize_templateObject28 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject29 || (maximize_templateObject29 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject30 || (maximize_templateObject30 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_namespaceObject.myBjornedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply".concat(entry.rider.get(template_string_$item(maximize_templateObject31 || (maximize_templateObject31 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat(template_string_$item(maximize_templateObject32 || (maximize_templateObject32 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */
function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();
  var _iterator5 = maximize_createForOfIteratorHelper(cachedSlots),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,external_kolmafia_namespaceObject.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject33 || (maximize_templateObject33 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(maximize_templateObject34 || (maximize_templateObject34 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_namespaceObject.equippedItem)($slot(maximize_templateObject35 || (maximize_templateObject35 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject36 || (maximize_templateObject36 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject37 || (maximize_templateObject37 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject38 || (maximize_templateObject38 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject39 || (maximize_templateObject39 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = maximize_createForOfIteratorHelper(options.preventSlot),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(maximize_templateObject40 || (maximize_templateObject40 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(maximize_templateObject41 || (maximize_templateObject41 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(maximize_templateObject42 || (maximize_templateObject42 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(maximize_templateObject43 || (maximize_templateObject43 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = maximize_createForOfIteratorHelper(external_kolmafia_namespaceObject.Slot.all()),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(maximize_templateObject44 || (maximize_templateObject44 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(maximize_templateObject45 || (maximize_templateObject45 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(maximize_templateObject46 || (maximize_templateObject46 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(maximize_templateObject47 || (maximize_templateObject47 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_namespaceObject.myFamiliar)(), canEquipItemCount(), maximize_objectSpread(maximize_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    dist_logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
    preventEquip = fullOptions.preventEquip,
    bonusEquip = fullOptions.bonusEquip,
    onlySlot = fullOptions.onlySlot,
    preventSlot = fullOptions.preventSlot,
    forceUpdate = fullOptions.forceUpdate;
  // Sort each group in objective to ensure consistent ordering in string
  var objective = maximize_toConsumableArray(new Set([].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = maximize_slicedToArray(_ref8, 2),
      bonus = _ref9[1];
    return bonus !== 0;
  }).map(_ref0 => {
    var _ref1 = maximize_slicedToArray(_ref0, 2),
      item = _ref1[0],
      bonus = _ref1[1];
    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", ");
  // Items equipped in slots not touched by the maximizer must be in the cache key
  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort()), [lib_have(template_string_$effect(maximize_templateObject48 || (maximize_templateObject48 = maximize_taggedTemplateLiteral(["Offhand Remarkable"])))), options.updateOnLocationChange && (0,external_kolmafia_namespaceObject.myLocation)()]).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    dist_logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      dist_logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    dist_logger.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0,external_kolmafia_namespaceObject.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }
  return keys.reduce((current, key) => maximize_objectSpread(maximize_objectSpread({}, current), (optionsA[key] || optionsB[key]) === undefined ? {} : maximize_defineProperty({}, key, optionsA[key] || optionsB[key])), {});
}
var _maximizeParameters = /*#__PURE__*/new WeakMap();
var _maximizeOptions = /*#__PURE__*/new WeakMap();
var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);
    _classPrivateFieldInitSpec(this, _maximizeParameters, void 0);
    _classPrivateFieldInitSpec(this, _maximizeOptions, void 0);
    _classPrivateFieldSet(_maximizeParameters, this, maximizeParameters);
    _classPrivateFieldSet(_maximizeOptions, this, maximizeOptions);
  }
  return maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(_maximizeParameters, this);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(_maximizeOptions, this);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     * @returns A new merged Requirement
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      var optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement([].concat(maximize_toConsumableArray(this.maximizeParameters), maximize_toConsumableArray(other.maximizeParameters)), maximize_objectSpread(maximize_objectSpread({}, optionalBooleans), {}, {
        forceEquip: [].concat(maximize_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), maximize_toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(maximize_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), maximize_toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(maximize_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), maximize_toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(maximize_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), maximize_toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(maximize_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), maximize_toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      }));
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        requirements[_key2] = arguments[_key2];
      }
      Requirement.merge(requirements).maximize();
    }
  }]);
}();
/**
 * Clear all outfits cached by the maximizer.
 */
function clearMaximizerCache() {
  outfitCache.clear();
  for (var member in cachedObjectives) delete cachedObjectives[member];
}
;// ./node_modules/libram/dist/resources/2017/MummingTrunk.js
function MummingTrunk_slicedToArray(r, e) { return MummingTrunk_arrayWithHoles(r) || MummingTrunk_iterableToArrayLimit(r, e) || MummingTrunk_unsupportedIterableToArray(r, e) || MummingTrunk_nonIterableRest(); }
function MummingTrunk_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MummingTrunk_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return MummingTrunk_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? MummingTrunk_arrayLikeToArray(r, a) : void 0; } }
function MummingTrunk_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function MummingTrunk_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function MummingTrunk_arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var MUMMERY_MODS_PATTERN = /\[(\d*)\*fam\(([^)]*)\)/;
/**
 * Parses the _mummeryMods preference into a Map for easier use.
 *
 * @returns A map, mapping Familiars to a Tuple consisting of the NumericModifier attached to the familiar, and the value thereof.
 */
function currentCostumes() {
  return new Map(Object.entries((0,external_kolmafia_namespaceObject.splitModifiers)(property_get("_mummeryMods"))).map(_ref => {
    var _ref2 = MummingTrunk_slicedToArray(_ref, 2),
      modifier = _ref2[0],
      value = _ref2[1];
    if (!isNumericModifier(modifier)) return null;
    var matcher = value.match(MUMMERY_MODS_PATTERN);
    if (!matcher) return null;
    return [external_kolmafia_namespaceObject.Familiar.get(matcher[2]), [modifier, Number(matcher[1])]];
  }).filter(utils_notNull));
}
;// ./node_modules/libram/dist/challengePaths/2015/CommunityService.js
function CommunityService_typeof(o) { "@babel/helpers - typeof"; return CommunityService_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CommunityService_typeof(o); }
var CommunityService_templateObject, CommunityService_templateObject2, CommunityService_templateObject3, CommunityService_templateObject4, CommunityService_templateObject5, CommunityService_templateObject6, _CommunityService, CommunityService_templateObject7, CommunityService_templateObject8, CommunityService_templateObject9, CommunityService_templateObject0, CommunityService_templateObject1, CommunityService_templateObject10, CommunityService_templateObject11, CommunityService_templateObject12, CommunityService_templateObject13, CommunityService_templateObject14, CommunityService_templateObject15, CommunityService_templateObject16, CommunityService_templateObject17, CommunityService_templateObject18, CommunityService_templateObject19, CommunityService_templateObject20, CommunityService_templateObject21, CommunityService_templateObject22, CommunityService_templateObject23, CommunityService_templateObject24, CommunityService_templateObject25, CommunityService_templateObject26, CommunityService_templateObject27, CommunityService_templateObject28, CommunityService_templateObject29;
function CommunityService_slicedToArray(r, e) { return CommunityService_arrayWithHoles(r) || CommunityService_iterableToArrayLimit(r, e) || CommunityService_unsupportedIterableToArray(r, e) || CommunityService_nonIterableRest(); }
function CommunityService_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CommunityService_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return CommunityService_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? CommunityService_arrayLikeToArray(r, a) : void 0; } }
function CommunityService_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function CommunityService_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function CommunityService_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function CommunityService_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function CommunityService_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CommunityService_toPropertyKey(o.key), o); } }
function CommunityService_createClass(e, r, t) { return r && CommunityService_defineProperties(e.prototype, r), t && CommunityService_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function CommunityService_defineProperty(e, r, t) { return (r = CommunityService_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function CommunityService_toPropertyKey(t) { var i = CommunityService_toPrimitive(t, "string"); return "symbol" == CommunityService_typeof(i) ? i : i + ""; }
function CommunityService_toPrimitive(t, r) { if ("object" != CommunityService_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CommunityService_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function CommunityService_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }







var thralls = new Map([[$stat(CommunityService_templateObject || (CommunityService_templateObject = CommunityService_taggedTemplateLiteral(["muscle"]))), $thrall(CommunityService_templateObject2 || (CommunityService_templateObject2 = CommunityService_taggedTemplateLiteral(["Elbow Macaroni"])))], [$stat(CommunityService_templateObject3 || (CommunityService_templateObject3 = CommunityService_taggedTemplateLiteral(["moxie"]))), $thrall(CommunityService_templateObject4 || (CommunityService_templateObject4 = CommunityService_taggedTemplateLiteral(["Penne Dreadful"])))]]);
var statCommunityServicePredictor = stat => {
  return () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)(stat) - (0,external_kolmafia_namespaceObject.myBasestat)(thralls.get(stat) === (0,external_kolmafia_namespaceObject.myThrall)() && !lib_have(template_string_$effect(CommunityService_templateObject5 || (CommunityService_templateObject5 = CommunityService_taggedTemplateLiteral(["Expert Oiliness"])))) ? $stat(CommunityService_templateObject6 || (CommunityService_templateObject6 = CommunityService_taggedTemplateLiteral(["mysticality"]))) : stat)));
};
var visitCouncil = () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php");
// Use the object arg for situations like Raw Combat Rate
function hypotheticalModifier(modifier) {
  for (var _len = arguments.length, effects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    effects[_key - 1] = arguments[_key];
  }
  var newEffects = effects.filter(e => !lib_have(e));
  return (0,external_kolmafia_namespaceObject.numericModifier)(modifier) + utils_sum(newEffects, effect => (0,external_kolmafia_namespaceObject.numericModifier)(effect, modifier));
}
var CommunityService = /*#__PURE__*/function () {
  /**
   * Class to store properties of various CS tests.
   *
   * @param id The id the game HTML uses to identify the test; this is used primarily in runChoice.
   * @param stat The principle stat the test measures, often used as more easily memorable shorthand for the specific tests
   * @param property The name of the test as a string, often used as part of the string property "csServicesPerformed".
   * @param predictor A function that returns an estimate for the number of turns that the test will take given your character's current state.
   * @param maximizeRequirements A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
   */
  function CommunityService(id, stat, property, predictor, maximizeRequirements) {
    CommunityService_classCallCheck(this, CommunityService);
    CommunityService_defineProperty(this, "choice", void 0);
    CommunityService_defineProperty(this, "stat", void 0);
    CommunityService_defineProperty(this, "property", void 0);
    CommunityService_defineProperty(this, "predictor", void 0);
    CommunityService_defineProperty(this, "maximizeRequirements", void 0);
    CommunityService_defineProperty(this, "timer", null);
    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  /**
   * @returns The id number of the test, used primarily in runChoice.
   */
  return CommunityService_createClass(CommunityService, [{
    key: "id",
    get: function get() {
      return this.choice;
    }
    /**
     * @returns The primary stat the test measures, used primarily as memorable shorthand in place of test names.
     */
  }, {
    key: "statName",
    get: function get() {
      return this.stat;
    }
    /**
     * @returns The name of the test, used primarily as part of the string property "csServicesPerformed"
     */
  }, {
    key: "name",
    get: function get() {
      return this.property;
    }
    /**
     *  @returns The predicted number of turns this test will take given your character's current state.
     */
  }, {
    key: "prediction",
    get: function get() {
      return this.predictor();
    }
    /**
     * @returns A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
     */
  }, {
    key: "requirement",
    get: function get() {
      return this.maximizeRequirements;
    }
    /**
     * Start the time & turn counter for the Test in question.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this$timer;
      (_this$timer = this.timer) !== null && _this$timer !== void 0 ? _this$timer : this.timer = {
        time: Date.now(),
        turns: (0,external_kolmafia_namespaceObject.myTurncount)()
      };
    }
  }, {
    key: "isDone",
    value:
    /**
     * Checks the "csServicesPerformed" property to see whether mafia currently believes this test is complete.
     *
     * @returns Whether mafia currently believes this test is complete.
     */
    function isDone() {
      return property_get("csServicesPerformed").includes(this.property);
    }
    /**
     * Maximizes based on the Requirement associated with this particular test.
     */
  }, {
    key: "maximize",
    value: function maximize() {
      if (this.maximizeRequirements) this.maximizeRequirements.maximize();
    }
    /**
     * Attempts to turn in the test to the Council of Loathing.
     *
     * @returns Whether mafia believes the test is complete at the end of this function.
     */
  }, {
    key: "do",
    value: function _do() {
      if (property_get("csServicesPerformed").trim().length === 0) visitCouncil();
      visitCouncil();
      var councilText = (0,external_kolmafia_namespaceObject.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
    /**
     * Wrapper function that prepares for a test and then completes it, adding time and turn details to the log.
     *
     * @param prepare A function that does all necessary preparations for this CS test, including choosing your outfit. Optionally returns the number of turns you expect to spend preparing for the test.
     * @param maxTurns We will run the test iff the predicted/actual turns is less than or equal to this parameter.
     * @returns "completed", "failed", or "already completed".
     */
  }, {
    key: "run",
    value: function run(prepare) {
      var _this$timer2;
      var maxTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      if (this.isDone()) return "already completed";
      var _ref = (_this$timer2 = this.timer) !== null && _this$timer2 !== void 0 ? _this$timer2 : {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        },
        time = _ref.time,
        turns = _ref.turns;
      var additionalTurns;
      try {
        var result = prepare();
        additionalTurns = typeof result === "number" ? result : 0;
      } catch (e) {
        (0,external_kolmafia_namespaceObject.print)("".concat(e), "red");
        return "failed";
      }
      var prediction = this.predictor();
      var council = visitCouncil();
      var turnCost = this._actualCost(council);
      if (!turnCost) return "already completed";
      if (turnCost > Math.min(maxTurns, (0,external_kolmafia_namespaceObject.myAdventures)())) {
        return "failed";
      }
      if (!this.do()) return "failed";
      CommunityService.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - turns,
        seconds: (Date.now() - time) / 1000,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
    /**
     * Checks council.php to verify that a test is complete; more reliable than isDone, but requires an additional pagehit.
     *
     * @returns Whether council.php suggests that the test is complete.
     */
  }, {
    key: "verifyIsDone",
    value: function verifyIsDone() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function _actualCost(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
    /**
     * Checks council.php for the number of turns this test will take; more reliable than prediction, but requires an additional pagehit.
     *
     * @returns The number of turns to complete this test according to council.php.
     */
  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
    /**
     * @param effects A spread array of Effects to consider
     * @returns The number of turns we expect to save if we start using those effects
     */
  }, {
    key: "turnsSavedBy",
    value: function turnsSavedBy() {
      var currentTurns = utils_clamp(this.prediction, 1, 60);
      var newTurns = utils_clamp(this.predictor.apply(this, arguments), 1, 60);
      return currentTurns - newTurns;
    }
    /**
     * A log of the predicted turns, actual turns, and duration of each CS test performed.
     */
  }], [{
    key: "startTimer",
    value:
    /**
     * Start the time & turn counter for the given task
     *
     * @param name The name of the task to start the counter of
     */
    function startTimer(name) {
      if (!this.taskTimers.has(name)) {
        this.taskTimers.set(name, {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        });
      }
    }
  }, {
    key: "logTask",
    value: function logTask(name, action) {
      var _this$taskTimers$get, _action;
      var _ref2 = (_this$taskTimers$get = this.taskTimers.get(name)) !== null && _this$taskTimers$get !== void 0 ? _this$taskTimers$get : {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        },
        time = _ref2.time,
        turns = _ref2.turns;
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService.log[name] = {
        type: "task",
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - turns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - time) / 1000
      };
    }
  }, {
    key: "printLog",
    value:
    /**
     * Prints turncount and time details of the test in question.
     *
     * @param colour The colour (or color) you'd like the log to be printed in.
     */
    function printLog() {
      var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blue";
      var logEntries = Object.entries(CommunityService.log);
      for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = CommunityService_slicedToArray(_logEntries[_i], 2),
          testName = _logEntries$_i[0],
          testEntry = _logEntries$_i[1];
        var type = testEntry.type,
          predictedTurns = testEntry.predictedTurns,
          turnCost = testEntry.turnCost,
          seconds = testEntry.seconds;
        if (type === "test") {
          (0,external_kolmafia_namespaceObject.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          (0,external_kolmafia_namespaceObject.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            (0,external_kolmafia_namespaceObject.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }
          (0,external_kolmafia_namespaceObject.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }
      var totalTime = utils_sum(logEntries, _ref3 => {
        var _ref4 = CommunityService_slicedToArray(_ref3, 2),
          testEntry = _ref4[1];
        return testEntry.seconds;
      });
      (0,external_kolmafia_namespaceObject.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
    // Below, we have the tests themselves.
  }]);
}();
_CommunityService = CommunityService;
CommunityService_defineProperty(CommunityService, "taskTimers", new Map());
CommunityService_defineProperty(CommunityService, "log", {});
CommunityService_defineProperty(CommunityService, "HP", new _CommunityService(1, "HP", "Donate Blood", () => 60 - Math.floor(((0,external_kolmafia_namespaceObject.myMaxhp)() - (0,external_kolmafia_namespaceObject.myBuffedstat)($stat(CommunityService_templateObject7 || (CommunityService_templateObject7 = CommunityService_taggedTemplateLiteral(["muscle"])))) - 3) / 30), new Requirement(["HP"], {})));
CommunityService_defineProperty(CommunityService, "Muscle", new _CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(CommunityService_templateObject8 || (CommunityService_templateObject8 = CommunityService_taggedTemplateLiteral(["Muscle"])))), new Requirement(["Muscle"], {})));
CommunityService_defineProperty(CommunityService, "Mysticality", new _CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(CommunityService_templateObject9 || (CommunityService_templateObject9 = CommunityService_taggedTemplateLiteral(["Mysticality"])))), new Requirement(["Mysticality"], {})));
CommunityService_defineProperty(CommunityService, "Moxie", new _CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(CommunityService_templateObject0 || (CommunityService_templateObject0 = CommunityService_taggedTemplateLiteral(["Moxie"])))), new Requirement(["Moxie"], {})));
CommunityService_defineProperty(CommunityService, "FamiliarWeight", new _CommunityService(5, "Familiar Weight", "Breed More Collies", function () {
  for (var _len2 = arguments.length, effects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    effects[_key2] = arguments[_key2];
  }
  return 60 - Math.floor((totalFamiliarWeight((0,external_kolmafia_namespaceObject.myFamiliar)(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects))) / 5);
}, new Requirement(["Familiar Weight"], {})));
CommunityService_defineProperty(CommunityService, "WeaponDamage", new _CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", function () {
  var weaponPower = (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject1 || (CommunityService_templateObject1 = CommunityService_taggedTemplateLiteral(["weapon"])))));
  var offhandPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject10 || (CommunityService_templateObject10 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) === $slot(CommunityService_templateObject11 || (CommunityService_templateObject11 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject12 || (CommunityService_templateObject12 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) : 0;
  var familiarPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject13 || (CommunityService_templateObject13 = CommunityService_taggedTemplateLiteral(["familiar"]))))) === $slot(CommunityService_templateObject14 || (CommunityService_templateObject14 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject15 || (CommunityService_templateObject15 = CommunityService_taggedTemplateLiteral(["familiar"]))))) : 0;
  // mafia does not currently count swagger
  var multiplier = lib_have(template_string_$effect(CommunityService_templateObject16 || (CommunityService_templateObject16 = CommunityService_taggedTemplateLiteral(["Bow-Legged Swagger"])))) ? 2 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len3 = arguments.length, effects = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    effects[_key3] = arguments[_key3];
  }
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Weapon Damage"].concat(effects)) - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 0.001) - Math.floor(multiplier * hypotheticalModifier.apply(void 0, ["Weapon Damage Percent"].concat(effects)) / 50 + 0.001);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
CommunityService_defineProperty(CommunityService, "SpellDamage", new _CommunityService(7, "Spell Damage", "Make Sausage", function () {
  var dragonfishDamage = (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(CommunityService_templateObject17 || (CommunityService_templateObject17 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))) ? (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$familiar(CommunityService_templateObject18 || (CommunityService_templateObject18 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))), "Spell Damage Percent", totalFamiliarWeight(), template_string_$item.none) : 0;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len4 = arguments.length, effects = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    effects[_key4] = arguments[_key4];
  }
  return 60 - Math.floor(hypotheticalModifier.apply(void 0, ["Spell Damage"].concat(effects)) / 50 + 0.001) - Math.floor((hypotheticalModifier.apply(void 0, ["Spell Damage Percent"].concat(effects)) - dragonfishDamage) / 50 + 0.001);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
CommunityService_defineProperty(CommunityService, "Noncombat", new _CommunityService(8, "Non-Combat", "Be a Living Statue", function () {
  for (var _len5 = arguments.length, effects = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    effects[_key5] = arguments[_key5];
  }
  var noncombatRate = -1 * hypotheticalModifier.apply(void 0, ["Raw Combat Rate"].concat(effects));
  var currentFamiliarModifier = -1 * (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Raw Combat Rate", totalFamiliarWeight(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject19 || (CommunityService_templateObject19 = CommunityService_taggedTemplateLiteral(["familiar"])))));
  var newFamiliarModifier = -1 * (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Raw Combat Rate", totalFamiliarWeight((0,external_kolmafia_namespaceObject.myFamiliar)(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject20 || (CommunityService_templateObject20 = CommunityService_taggedTemplateLiteral(["familiar"])))));
  var adjustedRate = noncombatRate - currentFamiliarModifier + newFamiliarModifier;
  return 60 - 3 * Math.floor(adjustedRate / 5);
}, new Requirement(["-Raw Combat Rate"], {})));
CommunityService_defineProperty(CommunityService, "BoozeDrop", new _CommunityService(9, "Item Drop", "Make Margaritas", function () {
  var mummingCostume = currentCostumes().get((0,external_kolmafia_namespaceObject.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Item Drop", totalFamiliarWeight(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject21 || (CommunityService_templateObject21 = CommunityService_taggedTemplateLiteral(["familiar"]))))) + mummingBuff - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject22 || (CommunityService_templateObject22 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Booze Drop", totalFamiliarWeight(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject23 || (CommunityService_templateObject23 = CommunityService_taggedTemplateLiteral(["familiar"]))))) - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject24 || (CommunityService_templateObject24 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Booze Drop");
  // Champagne doubling does NOT count for CS, so we undouble
  var multiplier = (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(CommunityService_templateObject25 || (CommunityService_templateObject25 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))) && property_get("garbageChampagneCharge") > 0 ? 0.5 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len6 = arguments.length, effects = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    effects[_key6] = arguments[_key6];
  }
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Item Drop"].concat(effects)) - familiarItemDrop - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myThrall)(), "Item Drop")) / 30 + 0.001) - Math.floor((hypotheticalModifier.apply(void 0, ["Booze Drop"].concat(effects)) - familiarBoozeDrop) / 15 + 0.001);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: template_string_$items(CommunityService_templateObject26 || (CommunityService_templateObject26 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))
})));
CommunityService_defineProperty(CommunityService, "HotRes", new _CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", function () {
  var currentFamiliarModifier = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Hot Resistance", totalFamiliarWeight(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject27 || (CommunityService_templateObject27 = CommunityService_taggedTemplateLiteral(["familiar"])))));
  for (var _len7 = arguments.length, effects = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    effects[_key7] = arguments[_key7];
  }
  var newFamiliarModifier = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Hot Resistance", totalFamiliarWeight((0,external_kolmafia_namespaceObject.myFamiliar)(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject28 || (CommunityService_templateObject28 = CommunityService_taggedTemplateLiteral(["familiar"])))));
  return 60 - (hypotheticalModifier.apply(void 0, ["Hot Resistance"].concat(effects)) - currentFamiliarModifier + newFamiliarModifier);
}, new Requirement(["Hot Resistance"], {})));
CommunityService_defineProperty(CommunityService, "CoilWire", new _CommunityService(11, "Coil Wire", "Coil Wire", () => 60, new Requirement([], {})));
CommunityService_defineProperty(CommunityService, "donate", () => {
  visitCouncil();
  (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1089&option=30");
});
CommunityService_defineProperty(CommunityService, "path", $path(CommunityService_templateObject29 || (CommunityService_templateObject29 = CommunityService_taggedTemplateLiteral(["Community Service"]))));

;// ./src/lib.ts
var src_lib_templateObject, lib_templateObject2, lib_templateObject3, lib_templateObject4, lib_templateObject5, lib_templateObject6, lib_templateObject7, lib_templateObject8, lib_templateObject9, lib_templateObject0, lib_templateObject1, lib_templateObject10, lib_templateObject11, lib_templateObject12, lib_templateObject13, lib_templateObject14, lib_templateObject15;
function src_lib_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = Math.round(minutes - hours * 60);
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
}
var byPrimaryClass = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myClass)().toString());
function canCastLibrams() {
  var summonNumber = 1 + property_get("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 1) / 2;
  return (0,external_kolmafia_namespaceObject.myMp)() >= cost;
}
function totalDuration(item) {
  var effect = (0,external_kolmafia_namespaceObject.effectModifier)(item, "Effect");
  return (0,external_kolmafia_namespaceObject.haveEffect)(effect) + modifier_get("Effect Duration", item) * (0,external_kolmafia_namespaceObject.availableAmount)(item);
}
function castPriciestLibram() {
  var choice = bestLibramToCast();
  if (!choice) return false;
  return (0,external_kolmafia_namespaceObject.useSkill)(1, choice);
}
function burnLibrams() {
  while (canCastLibrams()) {
    if (!CommunityService.FamiliarWeight.isDone()) {
      var libramPossibilities = possibleLibramSummons();
      var decisionMap = new Map();
      if (lib_have(template_string_$skill(src_lib_templateObject || (src_lib_templateObject = src_lib_taggedTemplateLiteral(["Summon Candy Heart"])))) && totalDuration(template_string_$item(lib_templateObject2 || (lib_templateObject2 = src_lib_taggedTemplateLiteral(["green candy heart"])))) <= 0) {
        var _libramPossibilities$, _libramPossibilities$2;
        var probability = (_libramPossibilities$ = (_libramPossibilities$2 = libramPossibilities.get(template_string_$skill(lib_templateObject3 || (lib_templateObject3 = src_lib_taggedTemplateLiteral(["Summon Candy Heart"]))))) === null || _libramPossibilities$2 === void 0 ? void 0 : _libramPossibilities$2.get(template_string_$item(lib_templateObject4 || (lib_templateObject4 = src_lib_taggedTemplateLiteral(["green candy heart"]))))) !== null && _libramPossibilities$ !== void 0 ? _libramPossibilities$ : 0;
        decisionMap.set(template_string_$skill(lib_templateObject5 || (lib_templateObject5 = src_lib_taggedTemplateLiteral(["Summon Candy Heart"]))), 3 * probability);
      }
      if (lib_have(template_string_$skill(lib_templateObject6 || (lib_templateObject6 = src_lib_taggedTemplateLiteral(["Summon Taffy"])))) && totalDuration(template_string_$item(lib_templateObject7 || (lib_templateObject7 = src_lib_taggedTemplateLiteral(["pulled blue taffy"])))) < 50) {
        var _libramPossibilities$3, _libramPossibilities$4;
        var _probability = (_libramPossibilities$3 = (_libramPossibilities$4 = libramPossibilities.get(template_string_$skill(lib_templateObject8 || (lib_templateObject8 = src_lib_taggedTemplateLiteral(["Summon Taffy"]))))) === null || _libramPossibilities$4 === void 0 ? void 0 : _libramPossibilities$4.get(template_string_$item(lib_templateObject9 || (lib_templateObject9 = src_lib_taggedTemplateLiteral(["pulled blue taffy"]))))) !== null && _libramPossibilities$3 !== void 0 ? _libramPossibilities$3 : 0;
        decisionMap.set(template_string_$skill(lib_templateObject0 || (lib_templateObject0 = src_lib_taggedTemplateLiteral(["Summon Taffy"]))), 1 * _probability);
      }
      if (lib_have(template_string_$skill(lib_templateObject1 || (lib_templateObject1 = src_lib_taggedTemplateLiteral(["Summon Love Song"])))) && totalDuration(template_string_$item(lib_templateObject10 || (lib_templateObject10 = src_lib_taggedTemplateLiteral(["love song of icy revenge"])))) < 20) {
        var _libramPossibilities$5, _libramPossibilities$6;
        var _probability2 = (_libramPossibilities$5 = (_libramPossibilities$6 = libramPossibilities.get(template_string_$skill(lib_templateObject11 || (lib_templateObject11 = src_lib_taggedTemplateLiteral(["Summon Love Song"]))))) === null || _libramPossibilities$6 === void 0 ? void 0 : _libramPossibilities$6.get(template_string_$item(lib_templateObject12 || (lib_templateObject12 = src_lib_taggedTemplateLiteral(["love song of icy revenge"]))))) !== null && _libramPossibilities$5 !== void 0 ? _libramPossibilities$5 : 0;
        var currentWeightValue = utils_clamp(Math.ceil(totalDuration(template_string_$item(lib_templateObject13 || (lib_templateObject13 = src_lib_taggedTemplateLiteral(["love song of icy revenge"])))) / 2), 0, 10);
        var newWeightValue = utils_clamp(Math.ceil((totalDuration(template_string_$item(lib_templateObject14 || (lib_templateObject14 = src_lib_taggedTemplateLiteral(["love song of icy revenge"])))) + 5) / 2), 0, 10);
        decisionMap.set(template_string_$skill(lib_templateObject15 || (lib_templateObject15 = src_lib_taggedTemplateLiteral(["Summon Love Song"]))), _probability2 * (newWeightValue - currentWeightValue));
      }
      var bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);
      if (bestLibrams.length === 0) {
        if (!castPriciestLibram()) return;
      } else {
        var decision = bestLibrams[0][0];
        (0,external_kolmafia_namespaceObject.useSkill)(1, decision);
      }
    } else if (!castPriciestLibram()) return;
  }
}
var peridotChoice = monster => ({
  1557: "1&bandersnatch=".concat(monster.id)
});
;// ./node_modules/grimoire-kolmafia/dist/args.js
function args_typeof(o) { "@babel/helpers - typeof"; return args_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, args_typeof(o); }
function args_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = args_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function args_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return args_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? args_arrayLikeToArray(r, a) : void 0; } }
function args_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function args_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function args_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? args_ownKeys(Object(t), !0).forEach(function (r) { args_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : args_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function args_defineProperty(e, r, t) { return (r = args_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function args_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function args_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, args_toPropertyKey(o.key), o); } }
function args_createClass(e, r, t) { return r && args_defineProperties(e.prototype, r), t && args_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function args_toPropertyKey(t) { var i = args_toPrimitive(t, "string"); return "symbol" == args_typeof(i) ? i : i + ""; }
function args_toPrimitive(t, r) { if ("object" != args_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != args_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable @typescript-eslint/no-explicit-any */

var Args = /*#__PURE__*/function () {
  function Args() {
    args_classCallCheck(this, Args);
  }
  return args_createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return args_objectSpread(args_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);
          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = args_objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"
      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      // Next, check that all default values actually appear in the options.
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      if ("default" in spec && raw_options) {
        var _iterator = args_createForOfIteratorHelper(spec.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim());
        // Parse all values, return the first error found if any
        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
        // Otherwise, all values are good
        return result;
      };
      return args_objectSpread(args_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = external_kolmafia_namespaceObject.Class.get(value);
        // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.
        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = args_objectSpread(args_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = args_objectSpread(args_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, args_defineProperty(args_defineProperty(args_defineProperty(args_defineProperty({}, specSymbol, argsWithHelp), scriptSymbol, scriptName), scriptHelpSymbol, scriptHelp), optionsSymbol, options !== null && options !== void 0 ? options : {}));
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = args_createForOfIteratorHelper(options.positionalArgs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _a;
      var metadata = Args.getMetadata(args);
      // Load the list of keys and flags from the arg spec
      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;
        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      });
      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;
          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting
          var value_str = (0,external_kolmafia_namespaceObject.getProperty)(setting);
          if (value_str === "") return undefined; // no setting
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      // Parse new argments from the command line
      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;
        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args.getMetadata(args);
      (0,external_kolmafia_namespaceObject.printHtml)("".concat(metadata.scriptHelp));
      (0,external_kolmafia_namespaceObject.printHtml)("");
      (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;
        if (arg.hidden) return;
        var nameText = "<font color='".concat((0,external_kolmafia_namespaceObject.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = args_createForOfIteratorHelper(valueOptions),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === undefined) {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        (0,external_kolmafia_namespaceObject.printHtml)("");
        (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
}();
var ParseError = /*#__PURE__*/args_createClass(function ParseError(message) {
  args_classCallCheck(this, ParseError);
  this.message = message;
});
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }
  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */
var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    args_classCallCheck(this, WrappedArgMetadata);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */
  return args_createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }
  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    args_classCallCheck(this, CommandParser);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */
  return args_createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0; // reset the parser
      var result = new Map();
      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = args_createForOfIteratorHelper(searchValue),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote
        this.consume([valueEnder]); // Consume opening quote
      }
      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      // Consume the value (and closing quote)
      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);
}();
;// ./node_modules/libram/dist/overlappingNames.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"];
var overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow"];
;// ./node_modules/libram/dist/combat.js
function combat_typeof(o) { "@babel/helpers - typeof"; return combat_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, combat_typeof(o); }
function _superPropGet(t, o, e, r) { var p = _get(combat_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = combat_getPrototypeOf(t));); return t; }
function combat_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = combat_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function combat_toConsumableArray(r) { return combat_arrayWithoutHoles(r) || combat_iterableToArray(r) || combat_unsupportedIterableToArray(r) || combat_nonIterableSpread(); }
function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function combat_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return combat_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? combat_arrayLikeToArray(r, a) : void 0; } }
function combat_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function combat_arrayWithoutHoles(r) { if (Array.isArray(r)) return combat_arrayLikeToArray(r); }
function combat_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function combat_defineProperty(e, r, t) { return (r = combat_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function combat_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, combat_toPropertyKey(o.key), o); } }
function combat_createClass(e, r, t) { return r && combat_defineProperties(e.prototype, r), t && combat_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function combat_toPropertyKey(t) { var i = combat_toPrimitive(t, "string"); return "symbol" == combat_typeof(i) ? i : i + ""; }
function combat_toPrimitive(t, r) { if ("object" != combat_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != combat_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function combat_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function combat_callSuper(t, o, e) { return o = combat_getPrototypeOf(o), combat_possibleConstructorReturn(t, combat_isNativeReflectConstruct() ? Reflect.construct(o, e || [], combat_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function combat_possibleConstructorReturn(t, e) { if (e && ("object" == combat_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return combat_assertThisInitialized(t); }
function combat_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function combat_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && combat_setPrototypeOf(t, e); }
function combat_wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return combat_wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !combat_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return combat_construct(t, arguments, combat_getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), combat_setPrototypeOf(Wrapper, t); }, combat_wrapNativeSuper(t); }
function combat_construct(t, e, r) { if (combat_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && combat_setPrototypeOf(p, r.prototype), p; }
function combat_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (combat_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function combat_isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function combat_setPrototypeOf(t, e) { return combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, combat_setPrototypeOf(t, e); }
function combat_getPrototypeOf(t) { return combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, combat_getPrototypeOf(t); }




var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var query = "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value");
  var macroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php");
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)(macroText, query);
  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = (0,external_kolmafia_namespaceObject.xpath)(newMacroText, query);
  }
  if (macroMatches.length === 0) {
    // We may have hit the macro cap
    if ((0,external_kolmafia_namespaceObject.xpath)(macroText, '//select[@name="macroid"]/option').length >= 100) {
      throw new InvalidMacroError("Please delete at least one existing macro to make some space for Libram");
    }
    // Otherwise who knows why it failed
    throw new InvalidMacroError("Could not find or create macro ".concat(name));
  }
  return parseInt(macroMatches[0], 10);
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? external_kolmafia_namespaceObject.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    if (itemOrItems[0] === itemOrItems[1]) return "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0]));
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return external_kolmafia_namespaceObject.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);
    return combat_callSuper(this, InvalidMacroError, arguments);
  }
  combat_inherits(InvalidMacroError, _Error);
  return combat_createClass(InvalidMacroError);
}(/*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);
    combat_defineProperty(this, "components", []);
    combat_defineProperty(this, "name", MACRO_NAME);
  }
  return combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, combat_toConsumableArray(nextStepsStrings.filter(Boolean)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.if_("!".concat(Macro.makeBALLSPredicate(condition)), ifTrue);
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(Macro.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @param condition The BALLS condition for the repeat statement, optional.
     * @returns {Macro} This object itself.
     */
    function repeat(condition) {
      return condition === undefined ? this.step("repeat") : this.step("repeat ".concat(Macro.makeBALLSPredicate(condition)));
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill).repeat(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), Macro.item(item));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = combat_createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;
          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        return "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        if (condition[0] instanceof external_kolmafia_namespaceObject.Item) return itemOrItemsBallsMacroPredicate(condition);
        return "(".concat(condition.map(entry => Macro.makeBALLSPredicate(entry)).join(" || "), ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        return "haseffect ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        return "".concat(condition.toString().toLowerCase(), "class");
      } else if (condition instanceof external_kolmafia_namespaceObject.Phylum) {
        return "monsterphylum ".concat(condition);
      } else if (condition instanceof external_kolmafia_namespaceObject.Element) {
        return "monsterelement ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
combat_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
combat_defineProperty(Macro, "cachedMacroIds", new Map());
combat_defineProperty(Macro, "cachedAutoAttacks", new Map());
function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */
function adventureMacroAuto(loc, autoMacro) {
  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = nextMacro !== null && nextMacro !== void 0 ? nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/function (_Macro2) {
  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);
    return combat_callSuper(this, StrictMacro, arguments);
  }
  combat_inherits(StrictMacro, _Macro2);
  return combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }
      return _superPropGet(StrictMacro, "skill", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }
      return _superPropGet(StrictMacro, "item", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }
      return _superPropGet(StrictMacro, "trySkill", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      for (var _len0 = arguments.length, items = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        items[_key0] = arguments[_key0];
      }
      return _superPropGet(StrictMacro, "tryItem", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len1 = arguments.length, skills = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        skills[_key1] = arguments[_key1];
      }
      return _superPropGet(StrictMacro, "trySkillRepeat", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
  }], [{
    key: "skill",
    value: function skill() {
      var _this8;
      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;
      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this0;
      return (_this0 = new this()).trySkill.apply(_this0, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this1;
      return (_this1 = new this()).tryItem.apply(_this1, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this10;
      return (_this10 = new this()).trySkillRepeat.apply(_this10, arguments);
    }
  }]);
}(Macro);
;// ./node_modules/grimoire-kolmafia/dist/combat.js
function dist_combat_typeof(o) { "@babel/helpers - typeof"; return dist_combat_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dist_combat_typeof(o); }
function dist_combat_callSuper(t, o, e) { return o = dist_combat_getPrototypeOf(o), dist_combat_possibleConstructorReturn(t, dist_combat_isNativeReflectConstruct() ? Reflect.construct(o, e || [], dist_combat_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function dist_combat_possibleConstructorReturn(t, e) { if (e && ("object" == dist_combat_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return dist_combat_assertThisInitialized(t); }
function dist_combat_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function dist_combat_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (dist_combat_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function dist_combat_getPrototypeOf(t) { return dist_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, dist_combat_getPrototypeOf(t); }
function dist_combat_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && dist_combat_setPrototypeOf(t, e); }
function dist_combat_setPrototypeOf(t, e) { return dist_combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, dist_combat_setPrototypeOf(t, e); }
function dist_combat_toConsumableArray(r) { return dist_combat_arrayWithoutHoles(r) || dist_combat_iterableToArray(r) || dist_combat_unsupportedIterableToArray(r) || dist_combat_nonIterableSpread(); }
function dist_combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dist_combat_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function dist_combat_arrayWithoutHoles(r) { if (Array.isArray(r)) return dist_combat_arrayLikeToArray(r); }
function dist_combat_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = dist_combat_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function dist_combat_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return dist_combat_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? dist_combat_arrayLikeToArray(r, a) : void 0; } }
function dist_combat_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function dist_combat_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function dist_combat_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, dist_combat_toPropertyKey(o.key), o); } }
function dist_combat_createClass(e, r, t) { return r && dist_combat_defineProperties(e.prototype, r), t && dist_combat_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function dist_combat_toPropertyKey(t) { var i = dist_combat_toPrimitive(t, "string"); return "symbol" == dist_combat_typeof(i) ? i : i + ""; }
function dist_combat_toPrimitive(t, r) { if ("object" != dist_combat_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dist_combat_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */
var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    dist_combat_classCallCheck(this, CombatStrategy);
    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */
  return dist_combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator = dist_combat_createForOfIteratorHelper(monsters),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator2 = dist_combat_createForOfIteratorHelper(monsters),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof external_kolmafia_namespaceObject.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = dist_combat_createForOfIteratorHelper(monsters),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
      var _iterator4 = dist_combat_createForOfIteratorHelper(monsters),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = dist_combat_toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = dist_combat_toConsumableArray(this.default_macro);
      var _iterator5 = dist_combat_createForOfIteratorHelper(this.macros),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], dist_combat_toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack) result.default_autoattack = dist_combat_toConsumableArray(this.default_autoattack);
      var _iterator6 = dist_combat_createForOfIteratorHelper(this.autoattacks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], dist_combat_toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = dist_combat_createForOfIteratorHelper(this.actions),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], dist_combat_toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;
      var result = new Macro();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(macro => undelay(macro))));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(macro => undelay(macro)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(macro => undelay(macro))));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile());
      // Perform the non-monster specific action (these should end the fight)
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(macro => undelay(macro)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(macro => undelay(macro))));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(dist_combat_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        function CombatStrategyWithActions() {
          dist_combat_classCallCheck(this, CombatStrategyWithActions);
          return dist_combat_callSuper(this, CombatStrategyWithActions, arguments);
        }
        dist_combat_inherits(CombatStrategyWithActions, _this);
        return dist_combat_createClass(CombatStrategyWithActions);
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var proto = CombatStrategyWithActions.prototype;
      var _iterator0 = dist_combat_createForOfIteratorHelper(actions),
        _step0;
      try {
        var _loop = function _loop() {
          var action = _step0.value;
          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          _loop();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */
var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    dist_combat_classCallCheck(this, CompressedMacro);
    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */
  return dist_combat_createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
}();
/**
 * A class for providing resources to fulfil combat actions.
 */
var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    dist_combat_classCallCheck(this, CombatResources);
    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */
  return dist_combat_createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof external_kolmafia_namespaceObject.Item) return new Macro().item(resource.do);
      if (resource.do instanceof external_kolmafia_namespaceObject.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);
}();
;// ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject0, outfit_templateObject1, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, outfit_templateObject49, outfit_templateObject50, outfit_templateObject51, outfit_templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59;
function outfit_typeof(o) { "@babel/helpers - typeof"; return outfit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, outfit_typeof(o); }
function outfit_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function outfit_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? outfit_ownKeys(Object(t), !0).forEach(function (r) { outfit_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : outfit_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function outfit_defineProperty(e, r, t) { return (r = outfit_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function outfit_slicedToArray(r, e) { return outfit_arrayWithHoles(r) || outfit_iterableToArrayLimit(r, e) || outfit_unsupportedIterableToArray(r, e) || outfit_nonIterableRest(); }
function outfit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function outfit_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function outfit_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = outfit_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function outfit_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function outfit_toConsumableArray(r) { return outfit_arrayWithoutHoles(r) || outfit_iterableToArray(r) || outfit_unsupportedIterableToArray(r) || outfit_nonIterableSpread(); }
function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return outfit_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? outfit_arrayLikeToArray(r, a) : void 0; } }
function outfit_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function outfit_arrayWithoutHoles(r) { if (Array.isArray(r)) return outfit_arrayLikeToArray(r); }
function outfit_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function outfit_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function outfit_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, outfit_toPropertyKey(o.key), o); } }
function outfit_createClass(e, r, t) { return r && outfit_defineProperties(e.prototype, r), t && outfit_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function outfit_toPropertyKey(t) { var i = outfit_toPrimitive(t, "string"); return "symbol" == outfit_typeof(i) ? i : i + ""; }
function outfit_toPrimitive(t, r) { if ("object" != outfit_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != outfit_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var riderSlots = (/* unused pure expression or super */ null && (["buddy-bjorn", "crown-of-thrones"]));
var weaponHands = i => i ? (0,external_kolmafia_namespaceObject.weaponHands)(i) : 0;
var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);
    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
    this.postActions = [];
    this.preActions = [];
  }
  /**
   * Create an outfit from your current player state.
   */
  return outfit_createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return outfit_toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!lib_have(item, this.equippedAmount(item) + 1)) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== template_string_$item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_namespaceObject.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_namespaceObject.canEquip)(this.familiar, item)) return false;
      }
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_namespaceObject.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray($slots(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(outfit_templateObject0 || (outfit_templateObject0 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject1 || (outfit_templateObject1 = outfit_taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!lib_have(template_string_$skill(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set($slot(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["weapon"]))):
          return template_string_$familiar(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return template_string_$familiar(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));
        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;
      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function applyBonus(item, value, reducer) {
      var previous = this.getBonus(item);
      return this.setBonus(item, reducer(value, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return value;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      return this.applyBonus(item, value, (a, b) => a + b);
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function applyBonuses(items, reducer) {
      var _iterator = outfit_createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = outfit_slicedToArray(_step.value, 2),
            item = _step$value[0],
            value = _step$value[1];
          this.applyBonus(item, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function setBonuses(items) {
      this.applyBonuses(items, a => a);
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function addBonuses(items) {
      this.applyBonuses(items, (a, b) => a + b);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set($slot(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;
      if (familiar !== template_string_$familiar.none) {
        if (!lib_have(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== template_string_$item.none && !(0,external_kolmafia_namespaceObject.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d, _e, _f;
      var succeeded = true;
      for (var _i = 0, _outfitSlots = outfitSlots; _i < _outfitSlots.length; _i++) {
        var slotName = _outfitSlots[_i];
        var slot = (_a = new Map([["famequip", $slot(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
      }
      var _iterator2 = outfit_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!this.equip(item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, outfit_toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, outfit_toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }
      if (spec.bonuses) {
        this.addBonuses(spec.bonuses);
      }
      this.beforeDress.apply(this, outfit_toConsumableArray((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : []));
      this.afterDress.apply(this, outfit_toConsumableArray((_f = spec.afterDress) !== null && _f !== void 0 ? _f : []));
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      // some() returns false on an empty array, yet every() returns true.
      // This keeps behavior consistent between slotful and slotless equipping.
      if (things.length === 0) return true;
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }
      if (thing instanceof external_kolmafia_namespaceObject.Item) return this.equipItem(thing, slot);
      if (thing instanceof external_kolmafia_namespaceObject.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value:
    /**
     * Add a rider to the outfit.
     *
     * This function does *not* equip the corresponding item; it must be equipped separately.
     *
     * If a familiar is already specified as the rider that is different from the provided target, this function will return false and not change the rider.
     * @param target The familiar to use as the rider, or a ranked list of familiars to try to use as the rider.
     * @returns True if we successfully set the slot to a valid rider.
     */
    function equipRider(target, slot) {
      var current = this.riders.get(slot);
      var targets = Array.isArray(target) ? target : [target];
      if (current) {
        return targets.includes(current);
      }
      // Gather the set of riders that are equipped in other rider slots.
      var otherRiders = outfit_toConsumableArray(this.riders.entries()).filter(_ref => {
        var _ref2 = outfit_slicedToArray(_ref, 1),
          key = _ref2[0];
        return slot !== key;
      }).map(_ref3 => {
        var _ref4 = outfit_slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var fam = targets.find(f => lib_have(f) && this.familiar !== f && !otherRiders.includes(f));
      if (fam) {
        this.riders.set(slot, fam);
        return true;
      }
      return false;
    }
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
  }, {
    key: "bjornify",
    value: function bjornify(target) {
      return this.equipRider(target, $slot(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      return this.equipRider(target, $slot(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      // Check if the new modes are compatible with existing modes
      for (var _i2 = 0, _modeableCommands = outfit_modeableCommands; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        if (mode === "retrocape") continue; // checked below
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      // Check if retrocape modes are compatible
      // (Parts that are undefined are compatible with everything)
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = outfit_objectSpread(outfit_objectSpread({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function afterDress() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function beforeDress() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set();
      // First, we equip non-accessory equipment.
      var nonaccessorySlots = $slots(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["back"])))) === template_string_$item(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus(template_string_$item(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["hat"])))) === template_string_$item(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus(template_string_$item(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // We must manually remove equipment that we want to use in a different
      // slot than where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans
      var _iterator3 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slot = _step3.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) || slot === $slot(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["weapon"]))) && weaponHands((0,external_kolmafia_namespaceObject.equippedItem)(slot)) !== 1 && this.equips.has($slot(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(outfit_templateObject49 || (outfit_templateObject49 = outfit_taggedTemplateLiteral(["weapon"]))))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
        }
        // Then we equip all the non-accessory equipment.
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
        // Next, we equip accessories
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);
      // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.
      var missingAccessories = []; // accessories that are not already equipped
      var _iterator5 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step5;
      try {
        var _loop = function _loop() {
          var accessory = _step5.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && (0,external_kolmafia_namespaceObject.equippedItem)(slot) === accessory);
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
        // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));
        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }
        (0,external_kolmafia_namespaceObject.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      // Remaining slots are filled by the maximizer
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || outfit_toConsumableArray(this.bonuses).filter(_ref5 => {
        var _ref6 = outfit_slicedToArray(_ref5, 2),
          value = _ref6[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: outfit_toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0,external_kolmafia_namespaceObject.cliExecute)("refresh inventory");
            this._dress(true);
            return;
          } else throw new Error("Failed to maximize properly!");
        }
        (0,external_kolmafia_namespaceObject.logprint)("Maximize: ".concat(this.modifier));
      }
      // Set the modes of any equipped items.
      applyModes(modes);
      // Handle the rider slots next
      if (bjorn && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() === bjorn) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() !== bjorn) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(bjorn);
      }
      if (crown && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) {
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() === crown) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() !== crown) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(crown);
      }
      // Verify that all equipment was indeed equipped
      if (this.familiar !== undefined && (0,external_kolmafia_namespaceObject.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0,external_kolmafia_namespaceObject.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var accessory = _step7.value;
          if ((0,external_kolmafia_namespaceObject.equippedAmount)(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr = [[$slot(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), template_string_$item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))), external_kolmafia_namespaceObject.myBjornedFamiliar], [$slot(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), template_string_$item(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))), external_kolmafia_namespaceObject.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = outfit_slicedToArray(_arr[_i4], 3),
          rider = _arr$_i[0],
          throne = _arr$_i[1],
          checkingFunction = _arr$_i[2];
        var wanted = this.riders.get(rider);
        if (outfit_toConsumableArray(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      var _iterator8 = outfit_createForOfIteratorHelper(this.preActions),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(false);
      var _iterator9 = outfit_createForOfIteratorHelper(this.postActions),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = outfit_toConsumableArray(this.modifier);
      result.avoid = outfit_toConsumableArray(this.avoid);
      result.modes = outfit_objectSpread({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      result.beforeDress.apply(result, outfit_toConsumableArray(this.preActions));
      result.afterDress.apply(result, outfit_toConsumableArray(this.postActions));
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: outfit_toConsumableArray(this.modifier),
        avoid: outfit_toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: outfit_objectSpread({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar;
      // Add all equipment forced in a particular slot
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        var entry = this.equips.get((_a = new Map([["famequip", $slot(outfit_templateObject50 || (outfit_templateObject50 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject51 || (outfit_templateObject51 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(outfit_templateObject52 || (outfit_templateObject52 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject53 || (_templateObject53 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      if (this.preActions.length) result.beforeDress = this.preActions;
      if (this.postActions.length) result.afterDress = this.postActions;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit = new Outfit();
      var familiar = (0,external_kolmafia_namespaceObject.myFamiliar)();
      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = new Map([["famequip", $slot(_templateObject54 || (_templateObject54 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject55 || (_templateObject55 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject56 || (_templateObject56 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject57 || (_templateObject57 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject58 || (_templateObject58 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject59 || (_templateObject59 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
      outfit.setModes(outfit_getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _a;
      var outfit = new Outfit();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters;
        if ((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0 ? void 0 : _a.length) {
          result.equip = spec.maximizeOptions.forceEquip;
        }
        result.avoid = spec.maximizeOptions.preventEquip;
        result.bonuses = spec.maximizeOptions.bonusEquip;
        if (spec.maximizeOptions.modes) {
          result.modes = convertFromLibramModes(spec.maximizeOptions.modes);
        }
        // Not sure if this is necessary
        var cleanedResult = Object.fromEntries(outfit_toConsumableArray(Object.entries(result)).filter(_ref7 => {
          var _ref8 = outfit_slicedToArray(_ref7, 2),
            v = _ref8[1];
          return v !== undefined;
        }));
        return Outfit.from(cleanedResult);
      }
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"],
    jillcandle: modes["jillcandle"]
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? outfit_objectSpread(outfit_objectSpread({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */
function outfit_getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */
function getMode(property, options) {
  var val = property_get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
;// ./node_modules/grimoire-kolmafia/dist/engine.js
function engine_typeof(o) { "@babel/helpers - typeof"; return engine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, engine_typeof(o); }
var engine_templateObject;
function engine_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function engine_toConsumableArray(r) { return engine_arrayWithoutHoles(r) || engine_iterableToArray(r) || engine_unsupportedIterableToArray(r) || engine_nonIterableSpread(); }
function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function engine_arrayWithoutHoles(r) { if (Array.isArray(r)) return engine_arrayLikeToArray(r); }
function engine_slicedToArray(r, e) { return engine_arrayWithHoles(r) || engine_iterableToArrayLimit(r, e) || engine_unsupportedIterableToArray(r, e) || engine_nonIterableRest(); }
function engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function engine_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function engine_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = engine_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function engine_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return engine_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? engine_arrayLikeToArray(r, a) : void 0; } }
function engine_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function engine_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function engine_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? engine_ownKeys(Object(t), !0).forEach(function (r) { engine_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : engine_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function engine_defineProperty(e, r, t) { return (r = engine_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function engine_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, engine_toPropertyKey(o.key), o); } }
function engine_createClass(e, r, t) { return r && engine_defineProperties(e.prototype, r), t && engine_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function engine_toPropertyKey(t) { var i = engine_toPrimitive(t, "string"); return "symbol" == engine_typeof(i) ? i : i + ""; }
function engine_toPrimitive(t, r) { if ("object" != engine_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != engine_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function engine_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }




var EngineOptions = /*#__PURE__*/(/* unused pure expression or super */ null && (engine_createClass(function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
})));
var grimoireCCS = "grimoire_macro";
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.options = options !== null && options !== void 0 ? options : {};
    this.tasks = tasks.map(task => engine_objectSpread(engine_objectSpread({}, this.options.default_task_options), task));
    var _iterator = engine_createForOfIteratorHelper(this.tasks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */
  return engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== undefined && this.attempts[task.name] >= task.limit.skip) return false;
      var _iterator2 = engine_createForOfIteratorHelper((_b = task.after) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready()) return false;
      if (task.completed()) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      this.printExecutingMessage(task);
      // Determine the proper postcondition for after the task executes.
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      // Acquire any items and effects first, possibly for later execution steps.
      this.acquireItems(task);
      this.acquireEffects(task);
      // Prepare the outfit, with resources.
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit);
      // Prepare combat and choices
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      // Actually perform the task
      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      // Mark that we tried the task, and apply limits
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Print a message to indicate the task has begun.
     * @param task The current executing task.
     */
  }, {
    key: "printExecutingMessage",
    value: function printExecutingMessage(task) {
      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue");
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire = undelay(task.acquire);
      var _iterator4 = engine_createForOfIteratorHelper(acquire || []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_namespaceObject.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_namespaceObject.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_namespaceObject.retrieveItem)(to_get.item, num_needed);
          }
          if ((0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_namespaceObject.myEffects)()).map(effectName => (0,external_kolmafia_namespaceObject.toEffect)(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = engine_createForOfIteratorHelper(effects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();
      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.setLocation)(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {})); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = engine_slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value === undefined) continue;
        manager.setChoice(parseInt(key), value);
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(engine_toConsumableArray(otherCCSEntries)).join("\n");
        // Log Macro + other CCS
        (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, grimoireCCS);
          (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs
          this.cachedCcsContents = ccsContents;
        }
      }
      // Save autoattack combat macro
      var autoattack = task_combat.compileAutoattack();
      if (autoattack.toString().length > 1) {
        (0,external_kolmafia_namespaceObject.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do() : task.do;
      if (result instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.adv1)(result, -1, "");
      (0,external_kolmafia_namespaceObject.runCombat)();
      while ((0,external_kolmafia_namespaceObject.inMultiFight)()) (0,external_kolmafia_namespaceObject.runCombat)();
      if ((0,external_kolmafia_namespaceObject.choiceFollowsFight)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof external_kolmafia_namespaceObject.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof external_kolmafia_namespaceObject.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        if (task.limit.completed) throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      // Properties adapted from garbo
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && (0,external_kolmafia_namespaceObject.readCcs)(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          (0,external_kolmafia_namespaceObject.writeCcs)("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
}();
Engine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray(property_get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return lib_have(template_string_$skill(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([
// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*",
// June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet",
// Lil' Doctor™ bag noncombat
"A Pound of Cure"]);
var environmentSpecificNCs = new Map([["Even Tamer Than Usual", "indoor"], ["Never Break the Chain", "indoor"], ["Close, but Yes Cigar", "indoor"], ["Armchair Quarterback", "indoor"], ["This Turtle Rocks!", "outdoor"], ["Really Sticking Her Neck Out", "outdoor"], ["It Came from Beneath the Sewer? Great!", "outdoor"], ["Don't Be Alarmed, Now", "outdoor"], ["Puttin' it on Wax", "underground"], ["More Like... Hurtle", "underground"], ["Musk! Musk! Musk!", "underground"], ["Silent Strolling", "underwater"]]);
var zoneSpecificNCs = new Map(Object.entries((0,external_kolmafia_namespaceObject.fileToBuffer)("data/encounters.txt").split("\n").reduce((obj, line) => {
  var _a;
  var _line$split = line.split("\t"),
    _line$split2 = engine_slicedToArray(_line$split, 3),
    location = _line$split2[0],
    type = _line$split2[1],
    name = _line$split2[2];
  if (type !== "TURTLE" || location === "*") return obj;
  return engine_objectSpread(engine_objectSpread({}, obj), {}, engine_defineProperty({}, name, [].concat(engine_toConsumableArray((_a = obj[name]) !== null && _a !== void 0 ? _a : []), [(0,external_kolmafia_namespaceObject.toLocation)(location)])));
}, {})));
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a, _b, _c;
  var last = property_get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = property_get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    if (environment === ((_c = property_get("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment)) return true;
    return wanderingNCs.has(last);
  }
}
;// ./node_modules/grimoire-kolmafia/dist/route.js
function route_typeof(o) { "@babel/helpers - typeof"; return route_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, route_typeof(o); }
function route_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function route_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? route_ownKeys(Object(t), !0).forEach(function (r) { route_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : route_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function route_defineProperty(e, r, t) { return (r = route_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function route_toPropertyKey(t) { var i = route_toPrimitive(t, "string"); return "symbol" == route_typeof(i) ? i : i + ""; }
function route_toPrimitive(t, r) { if ("object" != route_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != route_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function route_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = route_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function route_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return route_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? route_arrayLikeToArray(r, a) : void 0; } }
function route_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var verifyTaskDependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _a;
  var result = [];
  var _iterator = route_createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var questReady = quest.ready;
      var _iterator2 = route_createForOfIteratorHelper(quest.tasks),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var task = _step2.value;
          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = route_objectSpread({}, task);
          renamedTask.name = "".concat(quest.name, "/").concat(task.name);
          renamedTask.after = (_a = task.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after));
          // Include previous task as a dependency
          if (implicitAfter && task.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name];
          // Include quest completion in task completion
          if (questCompleted !== undefined) {
            var taskCompleted = task.completed;
            renamedTask.completed = () => questCompleted() || taskCompleted();
          }
          var taskReady = renamedTask.ready;
          if (questReady !== undefined && taskReady !== undefined) {
            renamedTask.ready = () => questReady() && taskReady();
          } else if (questReady !== undefined) {
            renamedTask.ready = () => questReady();
          }
          result.push(renamedTask);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (verifyTaskDependencies) verifyDependencies(result);
  return result;
}
function verifyDependencies(tasks) {
  var _a;
  // Verify the dependency names of all tasks
  var names = new Set();
  var _iterator3 = route_createForOfIteratorHelper(tasks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var task = _step3.value;
      names.add(task.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = route_createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _task = _step4.value;
      var _iterator5 = route_createForOfIteratorHelper((_a = _task.after) !== null && _a !== void 0 ? _a : []),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var after = _step5.value;
          if (!names.has(after)) {
            throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return tasks;
}
function orderByRoute(tasks, routing, ignore_missing_tasks) {
  var priorities = new Map();
  var _iterator6 = route_createForOfIteratorHelper(tasks),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var task = _step6.value;
      priorities.set(task.name, [1000, task]);
    }
    // Prioritize the routing list of tasks first
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  function setPriorityRecursive(task, priority) {
    var _a;
    var old_priority = priorities.get(task);
    if (old_priority === undefined) {
      if (ignore_missing_tasks) return;
      throw "Unknown routing task ".concat(task);
    }
    if (old_priority[0] <= priority) return;
    priorities.set(task, [priority, old_priority[1]]);
    var _iterator7 = route_createForOfIteratorHelper((_a = old_priority[1].after) !== null && _a !== void 0 ? _a : []),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var requirement = _step7.value;
        setPriorityRecursive(requirement, priority - 0.01);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
  for (var i = 0; i < routing.length; i++) {
    setPriorityRecursive(routing[i], i);
  }
  // Sort all tasks by priority.
  // Since this sort is stable, we default to earlier tasks.
  var result = tasks.slice();
  result.sort((a, b) => (priorities.get(a.name) || [1000])[0] - (priorities.get(b.name) || [1000])[0]);
  return result;
}
;// ./node_modules/grimoire-kolmafia/dist/index.js







;// ./src/engine/outfit.ts
var engine_outfit_templateObject, engine_outfit_templateObject2, engine_outfit_templateObject3, engine_outfit_templateObject4, engine_outfit_templateObject5, engine_outfit_templateObject6, engine_outfit_templateObject7, engine_outfit_templateObject8, engine_outfit_templateObject9, engine_outfit_templateObject0, engine_outfit_templateObject1, engine_outfit_templateObject10, engine_outfit_templateObject11, engine_outfit_templateObject12, engine_outfit_templateObject13, engine_outfit_templateObject14, engine_outfit_templateObject15, engine_outfit_templateObject16, engine_outfit_templateObject17, engine_outfit_templateObject18, engine_outfit_templateObject19, engine_outfit_templateObject20, engine_outfit_templateObject21, engine_outfit_templateObject22, engine_outfit_templateObject23, engine_outfit_templateObject24, engine_outfit_templateObject25, engine_outfit_templateObject26, engine_outfit_templateObject27, engine_outfit_templateObject28, engine_outfit_templateObject29, engine_outfit_templateObject30, engine_outfit_templateObject31, engine_outfit_templateObject32, engine_outfit_templateObject33, engine_outfit_templateObject34, engine_outfit_templateObject35, engine_outfit_templateObject36, engine_outfit_templateObject37, engine_outfit_templateObject38, engine_outfit_templateObject39, engine_outfit_templateObject40;
function engine_outfit_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

function equipDefaults(outfit) {
  outfit.equip(byStat({
    Muscle: template_string_$items(engine_outfit_templateObject || (engine_outfit_templateObject = engine_outfit_taggedTemplateLiteral(["Apriling band helmet"]))),
    Mysticality: template_string_$items(engine_outfit_templateObject2 || (engine_outfit_templateObject2 = engine_outfit_taggedTemplateLiteral(["astral chapeau, Apriling band helmet"]))),
    Moxie: template_string_$items(engine_outfit_templateObject3 || (engine_outfit_templateObject3 = engine_outfit_taggedTemplateLiteral(["very pointy crown, Apriling band helmet"])))
  }), $slot(engine_outfit_templateObject4 || (engine_outfit_templateObject4 = engine_outfit_taggedTemplateLiteral(["hat"]))));
  outfit.equip(byStat({
    Muscle: template_string_$items(engine_outfit_templateObject5 || (engine_outfit_templateObject5 = engine_outfit_taggedTemplateLiteral(["dented scepter, Fourth of May Cosplay Saber"]))),
    default: template_string_$items(engine_outfit_templateObject6 || (engine_outfit_templateObject6 = engine_outfit_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
  }), $slot(engine_outfit_templateObject7 || (engine_outfit_templateObject7 = engine_outfit_taggedTemplateLiteral(["weapon"]))));
  outfit.equip(template_string_$item(engine_outfit_templateObject8 || (engine_outfit_templateObject8 = engine_outfit_taggedTemplateLiteral(["unbreakable umbrella"]))), $slot(engine_outfit_templateObject9 || (engine_outfit_templateObject9 = engine_outfit_taggedTemplateLiteral(["off-hand"]))));
  outfit.equip(template_string_$items(engine_outfit_templateObject0 || (engine_outfit_templateObject0 = engine_outfit_taggedTemplateLiteral(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))), $slot(engine_outfit_templateObject1 || (engine_outfit_templateObject1 = engine_outfit_taggedTemplateLiteral(["back"]))));
  outfit.equip(template_string_$items(engine_outfit_templateObject10 || (engine_outfit_templateObject10 = engine_outfit_taggedTemplateLiteral(["LOV Eardigan, Jurassic Parka"]))), $slot(engine_outfit_templateObject11 || (engine_outfit_templateObject11 = engine_outfit_taggedTemplateLiteral(["shirt"]))));
  outfit.equip(template_string_$item(engine_outfit_templateObject12 || (engine_outfit_templateObject12 = engine_outfit_taggedTemplateLiteral(["Cargo Cultist Shorts"]))), $slot(engine_outfit_templateObject13 || (engine_outfit_templateObject13 = engine_outfit_taggedTemplateLiteral(["pants"]))));
  outfit.equip(byStat({
    Muscle: template_string_$items(engine_outfit_templateObject14 || (engine_outfit_templateObject14 = engine_outfit_taggedTemplateLiteral(["Brutal brogues, Kremlin's Greatest Briefcase"]))),
    Mysticality: template_string_$items(engine_outfit_templateObject15 || (engine_outfit_templateObject15 = engine_outfit_taggedTemplateLiteral(["battle broom, Kremlin's Greatest Briefcase"]))),
    Moxie: template_string_$items(engine_outfit_templateObject16 || (engine_outfit_templateObject16 = engine_outfit_taggedTemplateLiteral(["LOV Earrings, Beach Comb"])))
  }), $slot(engine_outfit_templateObject17 || (engine_outfit_templateObject17 = engine_outfit_taggedTemplateLiteral(["acc1"]))));
  outfit.equip(template_string_$item(engine_outfit_templateObject18 || (engine_outfit_templateObject18 = engine_outfit_taggedTemplateLiteral(["your cowboy boots"]))), $slot(engine_outfit_templateObject19 || (engine_outfit_templateObject19 = engine_outfit_taggedTemplateLiteral(["acc2"]))));
  outfit.equip(template_string_$item(engine_outfit_templateObject20 || (engine_outfit_templateObject20 = engine_outfit_taggedTemplateLiteral(["Powerful Glove"]))), $slot(engine_outfit_templateObject21 || (engine_outfit_templateObject21 = engine_outfit_taggedTemplateLiteral(["acc3"]))));
  outfit.equip(template_string_$familiar(engine_outfit_templateObject22 || (engine_outfit_templateObject22 = engine_outfit_taggedTemplateLiteral(["Melodramedary"]))));
  outfit.equip(template_string_$item(engine_outfit_templateObject23 || (engine_outfit_templateObject23 = engine_outfit_taggedTemplateLiteral(["tiny stillsuit"]))), $slot(engine_outfit_templateObject24 || (engine_outfit_templateObject24 = engine_outfit_taggedTemplateLiteral(["familiar"]))));
  outfit.setModes({
    retrocape: [byStat({
      Muscle: "vampire",
      Mysticality: "heck",
      Moxie: "robot"
    }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur"
  });
}
var defaultOutfit = {
  hat: byStat({
    Muscle: template_string_$items(engine_outfit_templateObject25 || (engine_outfit_templateObject25 = engine_outfit_taggedTemplateLiteral(["Iunion Crown"]))),
    Mysticality: template_string_$items(engine_outfit_templateObject26 || (engine_outfit_templateObject26 = engine_outfit_taggedTemplateLiteral(["astral chapeau, Iunion Crown"]))),
    Moxie: template_string_$items(engine_outfit_templateObject27 || (engine_outfit_templateObject27 = engine_outfit_taggedTemplateLiteral(["very pointy crown, Iunion Crown"])))
  }),
  weapon: byStat({
    Muscle: template_string_$items(engine_outfit_templateObject28 || (engine_outfit_templateObject28 = engine_outfit_taggedTemplateLiteral(["dented scepter, Fourth of May Cosplay Saber"]))),
    default: template_string_$items(engine_outfit_templateObject29 || (engine_outfit_templateObject29 = engine_outfit_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
  }),
  offhand: template_string_$item(engine_outfit_templateObject30 || (engine_outfit_templateObject30 = engine_outfit_taggedTemplateLiteral(["unbreakable umbrella"]))),
  back: template_string_$items(engine_outfit_templateObject31 || (engine_outfit_templateObject31 = engine_outfit_taggedTemplateLiteral(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
  shirt: template_string_$items(engine_outfit_templateObject32 || (engine_outfit_templateObject32 = engine_outfit_taggedTemplateLiteral(["LOV Eardigan, Jurassic Parka"]))),
  pants: template_string_$item(engine_outfit_templateObject33 || (engine_outfit_templateObject33 = engine_outfit_taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
  acc1: byStat({
    Muscle: template_string_$items(engine_outfit_templateObject34 || (engine_outfit_templateObject34 = engine_outfit_taggedTemplateLiteral(["Brutal brogues, Kremlin's Greatest Briefcase"]))),
    Mysticality: template_string_$items(engine_outfit_templateObject35 || (engine_outfit_templateObject35 = engine_outfit_taggedTemplateLiteral(["battle broom, Kremlin's Greatest Briefcase"]))),
    Moxie: template_string_$items(engine_outfit_templateObject36 || (engine_outfit_templateObject36 = engine_outfit_taggedTemplateLiteral(["LOV Earrings, Beach Comb"])))
  }),
  acc2: template_string_$item(engine_outfit_templateObject37 || (engine_outfit_templateObject37 = engine_outfit_taggedTemplateLiteral(["your cowboy boots"]))),
  acc3: template_string_$item(engine_outfit_templateObject38 || (engine_outfit_templateObject38 = engine_outfit_taggedTemplateLiteral(["Powerful Glove"]))),
  familiar: template_string_$familiar(engine_outfit_templateObject39 || (engine_outfit_templateObject39 = engine_outfit_taggedTemplateLiteral(["Melodramedary"]))),
  famequip: template_string_$item(engine_outfit_templateObject40 || (engine_outfit_templateObject40 = engine_outfit_taggedTemplateLiteral(["tiny stillsuit"]))),
  modes: {
    retrocape: [byStat({
      Muscle: "vampire",
      Mysticality: "heck",
      Moxie: "robot"
    }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur"
  }
};
;// ./src/engine/resources.ts
var resources_templateObject, resources_templateObject2, resources_templateObject3, resources_templateObject4, resources_templateObject5, resources_templateObject6, resources_templateObject7;
function resources_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

var freeKillSources = [{
  available: () => !lib_have(template_string_$effect(resources_templateObject || (resources_templateObject = resources_taggedTemplateLiteral(["Everything Looks Yellow"])))),
  do: template_string_$skill(resources_templateObject2 || (resources_templateObject2 = resources_taggedTemplateLiteral(["Spit jurassic acid"]))),
  equip: {
    shirt: template_string_$item(resources_templateObject3 || (resources_templateObject3 = resources_taggedTemplateLiteral(["Jurassic Parka"]))),
    modes: {
      parka: "dilophosaur"
    }
  }
}, {
  available: () => property_get("_chestXRayUsed") < 3,
  do: template_string_$skill(resources_templateObject4 || (resources_templateObject4 = resources_taggedTemplateLiteral(["Chest X-Ray"]))),
  equip: template_string_$item(resources_templateObject5 || (resources_templateObject5 = resources_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))
}, {
  available: () => property_get("_shatteringPunchUsed") < 2,
  do: template_string_$skill(resources_templateObject6 || (resources_templateObject6 = resources_taggedTemplateLiteral(["Shattering Punch"])))
},
// Save one for gingerbread sprinkles
{
  available: () => !property_get("_gingerbreadMobHitUsed"),
  do: template_string_$skill(resources_templateObject7 || (resources_templateObject7 = resources_taggedTemplateLiteral(["Gingerbread Mob Hit"])))
}];
;// ./src/engine/engine.ts
function engine_engine_typeof(o) { "@babel/helpers - typeof"; return engine_engine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, engine_engine_typeof(o); }
var engine_engine_templateObject, engine_templateObject2;
function engine_engine_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function engine_engine_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function engine_engine_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, engine_engine_toPropertyKey(o.key), o); } }
function engine_engine_createClass(e, r, t) { return r && engine_engine_defineProperties(e.prototype, r), t && engine_engine_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function engine_engine_toPropertyKey(t) { var i = engine_engine_toPrimitive(t, "string"); return "symbol" == engine_engine_typeof(i) ? i : i + ""; }
function engine_engine_toPrimitive(t, r) { if ("object" != engine_engine_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != engine_engine_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function engine_callSuper(t, o, e) { return o = engine_getPrototypeOf(o), engine_possibleConstructorReturn(t, engine_isNativeReflectConstruct() ? Reflect.construct(o, e || [], engine_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function engine_possibleConstructorReturn(t, e) { if (e && ("object" == engine_engine_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return engine_assertThisInitialized(t); }
function engine_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function engine_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (engine_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function engine_superPropGet(t, o, e, r) { var p = engine_get(engine_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function engine_get() { return engine_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = engine_superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, engine_get.apply(null, arguments); }
function engine_superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = engine_getPrototypeOf(t));); return t; }
function engine_getPrototypeOf(t) { return engine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, engine_getPrototypeOf(t); }
function engine_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && engine_setPrototypeOf(t, e); }
function engine_setPrototypeOf(t, e) { return engine_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, engine_setPrototypeOf(t, e); }





var CSEngine = /*#__PURE__*/function (_Engine) {
  function CSEngine(tasks) {
    engine_engine_classCallCheck(this, CSEngine);
    // Remove tasks for other classes
    tasks = tasks.filter(task => !task.class || task.class.includes((0,external_kolmafia_namespaceObject.myClass)()));
    return engine_callSuper(this, CSEngine, [tasks]);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  engine_inherits(CSEngine, _Engine);
  return engine_engine_createClass(CSEngine, [{
    key: "createOutfit",
    value: function createOutfit(task) {
      return new Outfit();
    }
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // Set up a free kill if needed
      if (combat.can("killFree")) {
        var freeKillSource = freeKillSources.find(source => source.available() && (source.equip === undefined || outfit.equip(source.equip)));
        if (freeKillSource === undefined) throw "Unable to provide a free kill source";
        resources.provide("killFree", freeKillSource);
      }

      // Equip as much of the task's outfit as possible
      outfit.equip(engine_superPropGet(CSEngine, "createOutfit", this, 3)([task]).spec());
    }
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
      engine_superPropGet(CSEngine, "dress", this, 3)([task, outfit]);
    }
  }, {
    key: "prepare",
    value: function prepare(task) {
      engine_superPropGet(CSEngine, "prepare", this, 3)([task]);
      if (task.combat !== undefined && (0,external_kolmafia_namespaceObject.myHp)() < (0,external_kolmafia_namespaceObject.myMaxhp)() * 0.9) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(engine_engine_templateObject || (engine_engine_templateObject = engine_engine_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }
  }, {
    key: "post",
    value: function post(task) {
      engine_superPropGet(CSEngine, "post", this, 3)([task]);
      if (lib_have(template_string_$effect(engine_templateObject2 || (engine_templateObject2 = engine_engine_taggedTemplateLiteral(["Beaten Up"]))))) throw "Fight was lost; stop.";
    }
  }]);
}(Engine);
;// ./node_modules/libram/dist/Copier.js
function Copier_typeof(o) { "@babel/helpers - typeof"; return Copier_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Copier_typeof(o); }
function Copier_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Copier_toPropertyKey(o.key), o); } }
function Copier_createClass(e, r, t) { return r && Copier_defineProperties(e.prototype, r), t && Copier_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Copier_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Copier_defineProperty(e, r, t) { return (r = Copier_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Copier_toPropertyKey(t) { var i = Copier_toPrimitive(t, "string"); return "symbol" == Copier_typeof(i) ? i : i + ""; }
function Copier_toPrimitive(t, r) { if ("object" != Copier_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Copier_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Copier = /*#__PURE__*/Copier_createClass(function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  Copier_classCallCheck(this, Copier);
  Copier_defineProperty(this, "couldCopy", void 0);
  Copier_defineProperty(this, "prepare", void 0);
  Copier_defineProperty(this, "canCopy", void 0);
  Copier_defineProperty(this, "copiedMonster", void 0);
  Copier_defineProperty(this, "fightCopy", null);
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
});
;// ./node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_templateObject, SourceTerminal_templateObject2, SourceTerminal_templateObject3, SourceTerminal_templateObject4, SourceTerminal_templateObject5, SourceTerminal_templateObject6, SourceTerminal_templateObject7, SourceTerminal_templateObject8, SourceTerminal_templateObject9, SourceTerminal_templateObject0, SourceTerminal_templateObject1, SourceTerminal_templateObject10, SourceTerminal_templateObject11, SourceTerminal_templateObject12, SourceTerminal_templateObject13, SourceTerminal_templateObject14, SourceTerminal_templateObject15, SourceTerminal_templateObject16, SourceTerminal_templateObject17, SourceTerminal_templateObject18, SourceTerminal_templateObject19, SourceTerminal_templateObject20, SourceTerminal_templateObject21, SourceTerminal_templateObject22, SourceTerminal_templateObject23, SourceTerminal_templateObject24, SourceTerminal_templateObject25;
function SourceTerminal_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = SourceTerminal_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function SourceTerminal_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return SourceTerminal_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? SourceTerminal_arrayLikeToArray(r, a) : void 0; } }
function SourceTerminal_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function SourceTerminal_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }






var item = template_string_$item(SourceTerminal_templateObject || (SourceTerminal_templateObject = SourceTerminal_taggedTemplateLiteral(["Source terminal"])));
/**
 * @returns Is the terminal currently installed & available in our campground?
 */
function SourceTerminal_have() {
  return haveInCampground(item);
}
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */
var Buffs = {
  Items: template_string_$effect(SourceTerminal_templateObject2 || (SourceTerminal_templateObject2 = SourceTerminal_taggedTemplateLiteral(["items.enh"]))),
  Meat: template_string_$effect(SourceTerminal_templateObject3 || (SourceTerminal_templateObject3 = SourceTerminal_taggedTemplateLiteral(["meat.enh"]))),
  Init: template_string_$effect(SourceTerminal_templateObject4 || (SourceTerminal_templateObject4 = SourceTerminal_taggedTemplateLiteral(["init.enh"]))),
  Critical: template_string_$effect(SourceTerminal_templateObject5 || (SourceTerminal_templateObject5 = SourceTerminal_taggedTemplateLiteral(["critical.enh"]))),
  Damage: template_string_$effect(SourceTerminal_templateObject6 || (SourceTerminal_templateObject6 = SourceTerminal_taggedTemplateLiteral(["damage.enh"]))),
  Substats: template_string_$effect(SourceTerminal_templateObject7 || (SourceTerminal_templateObject7 = SourceTerminal_taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 *
 * @param buff The buff to acquire
 * @see Buffs
 * @returns Whether we successfully acquired the buff
 */
function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }
  return (0,external_kolmafia_namespaceObject.cliExecute)("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */
var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: template_string_$effect(SourceTerminal_templateObject8 || (SourceTerminal_templateObject8 = SourceTerminal_taggedTemplateLiteral(["familiar.enq"]))),
  /** +25 ML */
  Monsters: template_string_$effect(SourceTerminal_templateObject9 || (SourceTerminal_templateObject9 = SourceTerminal_taggedTemplateLiteral(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: template_string_$effect(SourceTerminal_templateObject0 || (SourceTerminal_templateObject0 = SourceTerminal_taggedTemplateLiteral(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: template_string_$effect(SourceTerminal_templateObject1 || (SourceTerminal_templateObject1 = SourceTerminal_taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 *
 * @param rolloverBuff The buff to acquire
 * @see RolloverBuffs
 * @returns Whether we successfully `enquire`d the terminal for our rollover buff
 */
function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }
  return cliExecute("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: template_string_$skill(SourceTerminal_templateObject10 || (SourceTerminal_templateObject10 = SourceTerminal_taggedTemplateLiteral(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: template_string_$skill(SourceTerminal_templateObject11 || (SourceTerminal_templateObject11 = SourceTerminal_taggedTemplateLiteral(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: template_string_$skill(SourceTerminal_templateObject12 || (SourceTerminal_templateObject12 = SourceTerminal_taggedTemplateLiteral(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: template_string_$skill(SourceTerminal_templateObject13 || (SourceTerminal_templateObject13 = SourceTerminal_taggedTemplateLiteral(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: template_string_$skill(SourceTerminal_templateObject14 || (SourceTerminal_templateObject14 = SourceTerminal_taggedTemplateLiteral(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: template_string_$skill(SourceTerminal_templateObject15 || (SourceTerminal_templateObject15 = SourceTerminal_taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 *
 * @param skills Skill or 2-tuple of Skills to learn
 * @see Skills
 * @returns Whether our current skills match the ones we asked for
 */
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills())) return true;
  var _iterator = SourceTerminal_createForOfIteratorHelper(skillsArray),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0,external_kolmafia_namespaceObject.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
/**
 * @returns The Skills currently available from Source Terminal
 */
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => property_get(p)).filter(Boolean).map(s => external_kolmafia_namespaceObject.Skill.get(s.slice(0, -4)));
}
/**
 * @param skills A Skill or 2-tuple of Skills to check if we currently have active
 * @returns Whether the input agrees with our current skills
 */
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */
var Items = new Map([[template_string_$item(SourceTerminal_templateObject16 || (SourceTerminal_templateObject16 = SourceTerminal_taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [template_string_$item(SourceTerminal_templateObject17 || (SourceTerminal_templateObject17 = SourceTerminal_taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [template_string_$item(SourceTerminal_templateObject18 || (SourceTerminal_templateObject18 = SourceTerminal_taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [template_string_$item(SourceTerminal_templateObject19 || (SourceTerminal_templateObject19 = SourceTerminal_taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [template_string_$item(SourceTerminal_templateObject20 || (SourceTerminal_templateObject20 = SourceTerminal_taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [template_string_$item(SourceTerminal_templateObject21 || (SourceTerminal_templateObject21 = SourceTerminal_taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [template_string_$item(SourceTerminal_templateObject22 || (SourceTerminal_templateObject22 = SourceTerminal_taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [template_string_$item(SourceTerminal_templateObject23 || (SourceTerminal_templateObject23 = SourceTerminal_taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [template_string_$item(SourceTerminal_templateObject24 || (SourceTerminal_templateObject24 = SourceTerminal_taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [template_string_$item(SourceTerminal_templateObject25 || (SourceTerminal_templateObject25 = SourceTerminal_taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 *
 * @param item Item to collect
 * @see Items
 * @returns Whether the `cliExecute` succeeded
 */
function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return cliExecute("terminal extrude ".concat(fileName));
}
/**
 * @returns chips currently installed to player's Source Terminal
 */
function getChips() {
  return property_get("sourceTerminalChips").split(",");
}
/**
 * @returns number of times digitize was cast today
 */
function getDigitizeUses() {
  return property_get("_sourceTerminalDigitizeUses");
}
/**
 * @returns Monster that is currently digitized, else `null`
 */
function getDigitizeMonster() {
  return property_get("_sourceTerminalDigitizeMonster");
}
/**
 * @returns number of digitized monsters encountered since it was last cast
 */
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
/**
 * @returns maximum number of digitizes player can cast
 */
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * @returns the current day's number of remaining digitize uses
 */
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
/**
 * @returns whether the player could theoretically cast Digitize
 */
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
/**
 * Sets Digitize to be one of our skills if it currently isn't
 *
 * @returns Whether we expect that Digitize is one of our active skills now
 */
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }
  return true;
}
/**
 * Determines whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 *
 * @returns Whether the player can currently cast digitize, ignoring the MP cost but accounting for other factors
 */
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * @returns number of times duplicate was cast today
 */
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
/**
 * @returns number of times enhance was cast today
 */
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
/**
 * @returns number of times portscan was cast today
 */
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
/**
 * @returns maximum number of times duplicate can be used
 */
function maximumDuplicateUses() {
  return myPath() === Path.get("The Source") ? 5 : 1;
}
/**
 * @returns number of remaining times duplicate can be used today
 */
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
/**
 * @returns number of times enhance can be used per day
 */
function maximumEnhanceUses() {
  return 1 + getChips().filter(chip => ["CRAM", "SCRAM"].includes(chip)).length;
}
/**
 * @returns number of remaining times enahce can be used today
 */
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
/**
 * @returns expected duration of an enhance buff
 */
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
/**
 * @returns expected duration of an enquiry buff
 */
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}
;// ./node_modules/libram/dist/counter.js

/**
 * Returns Infinity for counters that do not exist, and otherwise returns the duration of the counter
 *
 * @param counter The name of the counter in question
 * @returns Infinity if the counter does not exist; otherwise returns the duration of the counter
 */
function counter_get(counter) {
  var value = getCounter(counter);
  // getCounter returns -1 for counters that don't exist, but it also returns -1 for counters whose value is -1
  if (value === -1) {
    // if we have a counter with value -1, we check to see if that counter exists via getCounters()
    // We return null if it doesn't exist
    return getCounters(counter, -1, -1).trim() === "" ? Infinity : -1;
  }
  return value;
}
/**
 * The world is everything that is the case. This determines which counters are the case.
 *
 * @param counter The name of the counter in question
 * @returns True for counters which currently exist; false for those which do not
 */
function exists(counter) {
  return (0,external_kolmafia_namespaceObject.getCounter)(counter) !== -1 || (0,external_kolmafia_namespaceObject.getCounters)(counter, -1, -1).trim() !== "";
}
/**
 * Creates a manual counter with specified name and duration
 *
 * @param counter Name of the counter to manually create
 * @param duration Duration of counter to manually set
 * @returns Whether the counter was successfully set
 */
function set(counter, duration) {
  cliExecute("counters add ".concat(duration, " ").concat(counter));
  return counter_get(counter) !== null;
}
;// ./node_modules/html-entities/dist/esm/named-references.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// This file is autogenerated by tools/process-named-references.ts
var pairDivider = "~";
var blockDivider = "~~";
function generateNamedReferences(input, prev) {
  var entities = {};
  var characters = {};
  var blocks = input.split(blockDivider);
  var isOptionalBlock = false;
  for (var i = 0; blocks.length > i; i++) {
    var entries = blocks[i].split(pairDivider);
    for (var j = 0; j < entries.length; j += 2) {
      var entity = entries[j];
      var character = entries[j + 1];
      var fullEntity = '&' + entity + ';';
      entities[fullEntity] = character;
      if (isOptionalBlock) {
        entities['&' + entity] = character;
      }
      characters[character] = fullEntity;
    }
    isOptionalBlock = true;
  }
  return prev ? {
    entities: __assign(__assign({}, entities), prev.entities),
    characters: __assign(__assign({}, characters), prev.characters)
  } : {
    entities: entities,
    characters: characters
  };
}
var bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
var namedReferences = {};
namedReferences['xml'] = generateNamedReferences("lt~<~gt~>~quot~\"~apos~'~amp~&");
namedReferences['html4'] = generateNamedReferences("apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~\"~amp~&~lt~<~gt~>");
namedReferences['html5'] = generateNamedReferences("Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~\t~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~\"~REG~®", namedReferences['html4']);
;// ./node_modules/html-entities/dist/esm/numeric-unicode-map.js
var numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
;// ./node_modules/html-entities/dist/esm/surrogate-pairs.js
var fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xd800, (astralCodePoint - 0x10000) % 0x400 + 0xdc00);
};
// @ts-expect-error - String.prototype.codePointAt might not exist in older node versions
var surrogate_pairs_getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;
};
var highSurrogateFrom = 0xd800;
var highSurrogateTo = 0xdbff;
;// ./node_modules/html-entities/dist/esm/index.js
var esm_assign = undefined && undefined.__assign || function () {
  esm_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return esm_assign.apply(this, arguments);
};



var allNamedReferences = esm_assign(esm_assign({}, namedReferences), {
  all: namedReferences.html5
});
var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
    _c = _b.mode,
    mode = _c === void 0 ? 'specialChars' : _c,
    _d = _b.numeric,
    numeric = _d === void 0 ? 'decimal' : _d,
    _e = _b.level,
    level = _e === void 0 ? 'all' : _e;
  if (!text) {
    return '';
  }
  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  return String.prototype.replace.call(text, encodeRegExp, function (input) {
    var result = references[input];
    if (!result) {
      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);
      result = (isHex ? '&#x' + code.toString(16) : '&#' + code) + ';';
    }
    return result;
  });
}
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.html5
  }
};
var decodeRegExps = esm_assign(esm_assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
function getDecodedEntity(entity, references, isAttribute, isStrict) {
  var decodeResult = entity;
  var decodeEntityLastChar = entity[entity.length - 1];
  if (isAttribute && decodeEntityLastChar === '=') {
    decodeResult = entity;
  } else if (isStrict && decodeEntityLastChar !== ';') {
    decodeResult = entity;
  } else {
    var decodeResultByReference = references[entity];
    if (decodeResultByReference) {
      decodeResult = decodeResultByReference;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar = entity[2];
      var decodeCode = decodeSecondChar == 'x' || decodeSecondChar == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      decodeResult = decodeCode >= 0x10ffff ? outOfBoundsChar : decodeCode > 65535 ? fromCodePoint(decodeCode) : fromCharCode(numericUnicodeMap[decodeCode] || decodeCode);
    }
  }
  return decodeResult;
}
/** Decodes a single entity */
function decodeEntity(entity, _a) {
  var _b = _a === void 0 ? defaultDecodeEntityOptions : _a,
    _c = _b.level,
    level = _c === void 0 ? 'all' : _c;
  if (!entity) {
    return '';
  }
  return getDecodedEntity(entity, allNamedReferences[level].entities, false, false);
}
/** Decodes all entities in the text */
function decode(text, _a) {
  var _b = _a === void 0 ? defaultDecodeOptions : _a,
    _c = _b.level,
    level = _c === void 0 ? 'all' : _c,
    _d = _b.scope,
    scope = _d === void 0 ? level === 'xml' ? 'strict' : 'body' : _d;
  if (!text) {
    return '';
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  return text.replace(decodeRegExp, function (entity) {
    return getDecodedEntity(entity, references, isAttribute, isStrict);
  });
}
;// ./node_modules/libram/dist/Clan.js
function Clan_typeof(o) { "@babel/helpers - typeof"; return Clan_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Clan_typeof(o); }
function Clan_toConsumableArray(r) { return Clan_arrayWithoutHoles(r) || Clan_iterableToArray(r) || Clan_unsupportedIterableToArray(r) || Clan_nonIterableSpread(); }
function Clan_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Clan_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function Clan_arrayWithoutHoles(r) { if (Array.isArray(r)) return Clan_arrayLikeToArray(r); }
function Clan_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = Clan_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function Clan_slicedToArray(r, e) { return Clan_arrayWithHoles(r) || Clan_iterableToArrayLimit(r, e) || Clan_unsupportedIterableToArray(r, e) || Clan_nonIterableRest(); }
function Clan_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Clan_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Clan_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Clan_arrayLikeToArray(r, a) : void 0; } }
function Clan_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Clan_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Clan_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Clan_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Clan_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Clan_toPropertyKey(o.key), o); } }
function Clan_createClass(e, r, t) { return r && Clan_defineProperties(e.prototype, r), t && Clan_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Clan_defineProperty(e, r, t) { return (r = Clan_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Clan_toPropertyKey(t) { var i = Clan_toPrimitive(t, "string"); return "symbol" == Clan_typeof(i) ? i : i + ""; }
function Clan_toPrimitive(t, r) { if ("object" != Clan_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Clan_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), Clan_setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return Clan_inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) { if ("" === t) return e; var p = o[r]; return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : ""; })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != Clan_typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function Clan_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Clan_setPrototypeOf(t, e); }
function Clan_setPrototypeOf(t, e) { return Clan_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Clan_setPrototypeOf(t, e); }





var clanIdCache = {};
var toPlayerId = player => typeof player === "string" ? (0,external_kolmafia_namespaceObject.getPlayerId)(player) : player;
var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /*#__PURE__*/function () {
  function Clan(id, name) {
    Clan_classCallCheck(this, Clan);
    Clan_defineProperty(this, "id", void 0);
    Clan_defineProperty(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  return Clan_createClass(Clan, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0,external_kolmafia_namespaceObject.getClanId)()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function join() {
      return Clan.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function check() {
      return (0,external_kolmafia_namespaceObject.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = (0,external_kolmafia_namespaceObject.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;
      var _lastFax = Clan_slicedToArray(lastFax, 4),
        monsterName = _lastFax[3];
      if (!monsterName) return null;
      return external_kolmafia_namespaceObject.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php");
      return (0,external_kolmafia_namespaceObject.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0,external_kolmafia_namespaceObject.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0,external_kolmafia_namespaceObject.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;
        var _match = Clan_slicedToArray(match, 3),
          encodedName = _match[1],
          degree = _match[2];
        return {
          name: decode(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(utils_notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
        _ref2 = Clan_slicedToArray(_ref, 2),
        meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0,external_kolmafia_namespaceObject.availableAmount)(item));
        if (needed === 0) {
          return map.set(item, 0);
        }
        var foldGroup = getFoldGroup(item);
        var _iterator = Clan_createForOfIteratorHelper(foldGroup),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0,external_kolmafia_namespaceObject.availableAmount)(foldable));
            for (var _i2 = 0; _i2 < quantityToFold; _i2++) {
              (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(item.name));
              needed--;
            }
            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0,external_kolmafia_namespaceObject.refreshStash)();
        for (var _i = 0, _arr = [item].concat(Clan_toConsumableArray(foldGroup)); _i < _arr.length; _i++) {
          var matchingItem = _arr[_i];
          var quantityToTake = Math.min(needed, (0,external_kolmafia_namespaceObject.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue;
          // If we can't take from the stash, there's no sense in iterating through the whole fold group
          if (!(0,external_kolmafia_namespaceObject.takeStash)(quantityToTake, matchingItem)) return;
          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check()) throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0,external_kolmafia_namespaceObject.availableAmount)(item));
        (0,external_kolmafia_namespaceObject.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      this._check();
      var map = arrayToCountedMap(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }
      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);
            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });
          if (map.size > 0) {
            dist_logger.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase()) {
          return Clan.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === clanName);
          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === (0,external_kolmafia_namespaceObject.getClanId)()) {
          return Clan.get();
        }
      }
      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function get() {
      return new Clan((0,external_kolmafia_namespaceObject.getClanId)(), (0,external_kolmafia_namespaceObject.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_signup.php");
      return (0,external_kolmafia_namespaceObject.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0,external_kolmafia_namespaceObject.xpath)(validHtml, "//@value")[0]);
        var name = decode((0,external_kolmafia_namespaceObject.xpath)(validHtml, "//text()")[0]);
        return new Clan(id, name);
      });
    }
  }]);
}();
;// ./node_modules/libram/dist/resources/2019/BeachComb.js
var BeachComb_templateObject, BeachComb_templateObject2, BeachComb_templateObject3, BeachComb_templateObject4, BeachComb_templateObject5, BeachComb_templateObject6, BeachComb_templateObject7, BeachComb_templateObject8, BeachComb_templateObject9, BeachComb_templateObject0, BeachComb_templateObject1, BeachComb_templateObject10, BeachComb_templateObject11, BeachComb_templateObject12, BeachComb_templateObject13, BeachComb_templateObject14, BeachComb_templateObject15, BeachComb_templateObject16, BeachComb_templateObject17, BeachComb_templateObject18, BeachComb_templateObject19;
function BeachComb_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





/**
 * Determines whether we `have` the beach comb
 *
 * @returns Whether we `have` the beach comb
 */
function BeachComb_have() {
  return have_(Item.get("Beach Comb"));
}
/**
 * Determines whether we `have` the beach comb or the driftwood beach comb
 *
 * @returns Whether we `have` either the beach comb or the driftwood beach comb
 */
function available() {
  return BeachComb_have() || have_(Item.get("driftwood beach comb"));
}
var headBuffs = [template_string_$effect(BeachComb_templateObject || (BeachComb_templateObject = BeachComb_taggedTemplateLiteral(["Hot-Headed"]))), template_string_$effect(BeachComb_templateObject2 || (BeachComb_templateObject2 = BeachComb_taggedTemplateLiteral(["Cold as Nice"]))), template_string_$effect(BeachComb_templateObject3 || (BeachComb_templateObject3 = BeachComb_taggedTemplateLiteral(["A Brush with Grossness"]))), template_string_$effect(BeachComb_templateObject4 || (BeachComb_templateObject4 = BeachComb_taggedTemplateLiteral(["Does It Have a Skull In There??"]))), template_string_$effect(BeachComb_templateObject5 || (BeachComb_templateObject5 = BeachComb_taggedTemplateLiteral(["Oiled, Slick"]))), template_string_$effect(BeachComb_templateObject6 || (BeachComb_templateObject6 = BeachComb_taggedTemplateLiteral(["Lack of Body-Building"]))), template_string_$effect(BeachComb_templateObject7 || (BeachComb_templateObject7 = BeachComb_taggedTemplateLiteral(["We're All Made of Starfish"]))), template_string_$effect(BeachComb_templateObject8 || (BeachComb_templateObject8 = BeachComb_taggedTemplateLiteral(["Pomp & Circumsands"]))), template_string_$effect(BeachComb_templateObject9 || (BeachComb_templateObject9 = BeachComb_taggedTemplateLiteral(["Resting Beach Face"]))), template_string_$effect(BeachComb_templateObject0 || (BeachComb_templateObject0 = BeachComb_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), template_string_$effect(BeachComb_templateObject1 || (BeachComb_templateObject1 = BeachComb_taggedTemplateLiteral(["You Learned Something Maybe!"])))];
var head = {
  HOT: template_string_$effect(BeachComb_templateObject10 || (BeachComb_templateObject10 = BeachComb_taggedTemplateLiteral(["Hot-Headed"]))),
  COLD: template_string_$effect(BeachComb_templateObject11 || (BeachComb_templateObject11 = BeachComb_taggedTemplateLiteral(["Cold as Nice"]))),
  STENCH: template_string_$effect(BeachComb_templateObject12 || (BeachComb_templateObject12 = BeachComb_taggedTemplateLiteral(["A Brush with Grossness"]))),
  SPOOKY: template_string_$effect(BeachComb_templateObject13 || (BeachComb_templateObject13 = BeachComb_taggedTemplateLiteral(["Does It Have a Skull In There??"]))),
  SLEAZE: template_string_$effect(BeachComb_templateObject14 || (BeachComb_templateObject14 = BeachComb_taggedTemplateLiteral(["Oiled, Slick"]))),
  MUSCLE: template_string_$effect(BeachComb_templateObject15 || (BeachComb_templateObject15 = BeachComb_taggedTemplateLiteral(["Lack of Body-Building"]))),
  MYSTICALITY: template_string_$effect(BeachComb_templateObject16 || (BeachComb_templateObject16 = BeachComb_taggedTemplateLiteral(["We're All Made of Starfish"]))),
  INITIATIVE: template_string_$effect(BeachComb_templateObject17 || (BeachComb_templateObject17 = BeachComb_taggedTemplateLiteral(["Resting Beach Face"]))),
  FAMILIAR: template_string_$effect(BeachComb_templateObject18 || (BeachComb_templateObject18 = BeachComb_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))),
  EXPERIENCE: template_string_$effect(BeachComb_templateObject19 || (BeachComb_templateObject19 = BeachComb_taggedTemplateLiteral(["You Learned Something Maybe!"])))
};
/**
 * Calculates the tide level for a given game day
 *
 * @param day The day to check the tide level of; defaults to today
 * @returns The tide level as an integer
 */
function tideLevel() {
  var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gamedayToInt();
  var dayOfMonth = 1 + day % 8;
  return 4 - Math.abs(4 - dayOfMonth);
}
/**
 * Determines whether a given tile can currently be combed, based on the tide level
 *
 * @param tile The tile to check
 * @returns Whether today's tides permit the combing of this tile
 */
function canComb(tile) {
  return tile.row > tideLevel();
}
/**
 * @returns The number of free combs we have available for today
 */
function freeCombs() {
  return available() ? clamp(11 - get("_freeBeachWalksUsed"), 0, 11) : 0;
}
/**
 * Comb a tile or tiles; skips any presently uncombablle tiles
 *
 * @param tiles The tiles to comb
 */
function comb() {
  for (var _len = arguments.length, tiles = new Array(_len), _key = 0; _key < _len; _key++) {
    tiles[_key] = arguments[_key];
  }
  if (!available() || !tiles.length) return;
  for (var _i = 0, _tiles = tiles; _i < _tiles.length; _i++) {
    var tile = _tiles[_i];
    if (canComb(tile)) {
      var minute = tile.minute,
        row = tile.row,
        column = tile.column;
      cliExecute("beach wander ".concat(minute));
      cliExecute("beach comb ".concat(row, " ").concat(column));
    }
  }
  if (handlingChoice()) runChoice(5);
}
/**
 * Determines whether a given Beach Head can be combed today
 *
 * @param target The head in question, either as the Effect it grants or as its name
 * @returns Whether the given head is combable
 */
function headAvailable(target) {
  var effect = target instanceof external_kolmafia_namespaceObject.Effect ? target : head[target];
  var headNumber = 1 + headBuffs.indexOf(effect);
  return (0,external_kolmafia_namespaceObject.getProperty)("beachHeadsUnlocked").split(",").includes(headNumber.toString()) && !(0,external_kolmafia_namespaceObject.getProperty)("_beachHeadsUsed").split(",").includes(headNumber.toString());
}
/**
 * Tries to comb a given Beach Head
 *
 * @param target The Beach Head to comb, given either as its effect or as its name
 * @returns Whether we have the head effect at the end of the whole rigamarole; this means that if you `tryHead` when you already have the effect, it will (presumably) fail to comb but will return `true`
 */
function tryHead(target) {
  var effect = target instanceof external_kolmafia_namespaceObject.Effect ? target : head[target];
  if (!headBuffs.includes(effect)) return false;
  if (!headAvailable(target)) return false;
  (0,external_kolmafia_namespaceObject.cliExecute)(effect.default);
  return lib_have(effect);
}
;// ./node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_templateObject, AsdonMartin_templateObject2, AsdonMartin_templateObject3, AsdonMartin_templateObject4, AsdonMartin_templateObject5, AsdonMartin_templateObject6, AsdonMartin_templateObject7, AsdonMartin_templateObject8, AsdonMartin_templateObject9, AsdonMartin_templateObject0, AsdonMartin_templateObject1, AsdonMartin_templateObject10, AsdonMartin_templateObject11, AsdonMartin_templateObject12, AsdonMartin_templateObject13, AsdonMartin_templateObject14, AsdonMartin_templateObject15, AsdonMartin_templateObject16;
function AsdonMartin_slicedToArray(r, e) { return AsdonMartin_arrayWithHoles(r) || AsdonMartin_iterableToArrayLimit(r, e) || AsdonMartin_unsupportedIterableToArray(r, e) || AsdonMartin_nonIterableRest(); }
function AsdonMartin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AsdonMartin_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return AsdonMartin_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? AsdonMartin_arrayLikeToArray(r, a) : void 0; } }
function AsdonMartin_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function AsdonMartin_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function AsdonMartin_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function AsdonMartin_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var PriceAge;
(function (PriceAge) {
  PriceAge[PriceAge["HISTORICAL"] = 0] = "HISTORICAL";
  PriceAge[PriceAge["RECENT"] = 1] = "RECENT";
  PriceAge[PriceAge["TODAY"] = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
/**
 * @returns Whether the Asdon is our current active workshed
 */
function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(AsdonMartin_templateObject || (AsdonMartin_templateObject = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"])));
}
/**
 * @returns `true` if we `have` the Asdon or if it's installed
 */
function AsdonMartin_have() {
  return installed() || haveItem($item(AsdonMartin_templateObject2 || (AsdonMartin_templateObject2 = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))));
}
var fuelSkiplist = template_string_$items(AsdonMartin_templateObject3 || (AsdonMartin_templateObject3 = AsdonMartin_taggedTemplateLiteral(["cup of \"tea\", thermos of \"whiskey\", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of \"milk\""])));
/**
 * Internal function used to determine whether a historical price is recent enough
 *
 * @param item The item to check
 * @returns Whether a price is too old to trust
 */
function priceTooOld(item) {
  return (0,external_kolmafia_namespaceObject.historicalPrice)(item) === 0 || (0,external_kolmafia_namespaceObject.historicalAge)(item) >= 7;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the historical price
 */
function historicalPriceOrMax(item) {
  var historical = (0,external_kolmafia_namespaceObject.historicalPrice)(item);
  return historical < 0 ? 999999999 : historical;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the mall price
 */
function mallPriceOrMax(item) {
  var mall = (0,external_kolmafia_namespaceObject.mallPrice)(item);
  return mall < 0 ? 999999999 : mall;
}
/**
 * Combined internal function to determine the price of an item
 *
 * @param item The item in question
 * @param priceAge How do we decide when to use historical vs real mall prices?
 * @returns The price of the item in question
 */
function price(item, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL:
      {
        var historical = historicalPriceOrMax(item);
        return historical === 0 ? mallPriceOrMax(item) : historical;
      }
    case PriceAge.RECENT:
      return priceTooOld(item) ? mallPriceOrMax(item) : historicalPriceOrMax(item);
    case PriceAge.TODAY:
      return mallPriceOrMax(item);
  }
}
function inventoryItems() {
  return external_kolmafia_namespaceObject.Item.all().filter(isFuelItem).filter(item => lib_have(item) && [100, (0,external_kolmafia_namespaceObject.autosellPrice)(item)].includes(price(item, PriceAge.RECENT)));
}
/**
 * @param it The item in question
 * @param priceAge The PriceAge option to apply
 * @returns Meat per fuel of an item
 */
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PriceAge.RECENT;
  var units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
/**
 * @param it the item in question
 * @returns Can `it` be used as Asdon fuel?
 */
function isFuelItem(it) {
  return !(0,external_kolmafia_namespaceObject.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
/**
 * @returns The best fuel options available to us at this time
 */
function getBestFuels() {
  // Three stages.
  // 1. Filter to reasonable items using historical cost (within 5x of historical best).
  var allFuel = external_kolmafia_namespaceObject.Item.all().filter(isFuelItem);
  if (allFuel.filter(item => (0,external_kolmafia_namespaceObject.historicalPrice)(item) === 0).length > 100) {
    (0,external_kolmafia_namespaceObject.mallPrices)("food");
    (0,external_kolmafia_namespaceObject.mallPrices)("booze");
  }
  var keyHistorical = item => calculateFuelUnitCost(item, PriceAge.HISTORICAL);
  allFuel.sort((x, y) => keyHistorical(x) - keyHistorical(y));
  var bestUnitCost = keyHistorical(allFuel[0]);
  var firstBadIndex = allFuel.findIndex(item => keyHistorical(item) > 5 * bestUnitCost);
  var potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  // 2. Filter to top 10 candidates using prices at most a week old.
  if (potentialFuel.filter(item => priceTooOld(item)).length > 100) {
    (0,external_kolmafia_namespaceObject.mallPrices)("food");
    (0,external_kolmafia_namespaceObject.mallPrices)("booze");
  }
  var key1 = item => -getAverageAdventures(item);
  var key2 = item => calculateFuelUnitCost(item, PriceAge.RECENT);
  potentialFuel.sort((x, y) => key1(x) - key1(y));
  potentialFuel.sort((x, y) => key2(x) - key2(y));
  // 3. Find result using precise price for those top candidates.
  var candidates = potentialFuel.slice(0, 10);
  var key3 = item => calculateFuelUnitCost(item, PriceAge.TODAY);
  candidates.sort((x, y) => key3(x) - key3(y));
  if (calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100) {
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. " + "This means something went wrong.");
  }
  return candidates;
}
/**
 * Fuel your Asdon Martin with a given quantity of a given item
 *
 * @param it Item to fuel with.
 * @param quantity Number of items to fuel with.
 * @returns Whether we succeeded at fueling with the given items.
 */
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
/**
 * Fill your Asdon Martin to the given fuel level in the cheapest way possible
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillTo(targetUnits) {
  if (!installed()) return false;
  while ((0,external_kolmafia_namespaceObject.getFuel)() < targetUnits) {
    // if in Hardcore/ronin, skip the price calculation and just use soda bread
    var _ref = (0,external_kolmafia_namespaceObject.canInteract)() ? getBestFuels() : [template_string_$item(AsdonMartin_templateObject4 || (AsdonMartin_templateObject4 = AsdonMartin_taggedTemplateLiteral(["loaf of soda bread"]))), undefined],
      _ref2 = AsdonMartin_slicedToArray(_ref, 2),
      bestFuel = _ref2[0],
      secondBest = _ref2[1];
    var count = Math.ceil(targetUnits / getAverageAdventures(bestFuel));
    var ceiling = undefined;
    if (secondBest) {
      var efficiencyOfSecondBest = (0,external_kolmafia_namespaceObject.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if (!(0,external_kolmafia_namespaceObject.canInteract)()) {
      // If we can't access the bugbear bakery but do have access to all-purpose flower, use that to get soda bread
      if ((0,external_kolmafia_namespaceObject.npcPrice)(template_string_$item(AsdonMartin_templateObject5 || (AsdonMartin_templateObject5 = AsdonMartin_taggedTemplateLiteral(["wad of dough"])))) === 0 && (0,external_kolmafia_namespaceObject.npcPrice)(template_string_$item(AsdonMartin_templateObject6 || (AsdonMartin_templateObject6 = AsdonMartin_taggedTemplateLiteral(["all-purpose flower"])))) > 0) {
        var maxTries = Math.ceil(count / 35); // minimum amount of wad of dough created from all-purpose flower is 35
        for (var i = 0; i < maxTries && (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(AsdonMartin_templateObject7 || (AsdonMartin_templateObject7 = AsdonMartin_taggedTemplateLiteral(["wad of dough"])))) < count; i++) {
          (0,external_kolmafia_namespaceObject.buy)(template_string_$item(AsdonMartin_templateObject8 || (AsdonMartin_templateObject8 = AsdonMartin_taggedTemplateLiteral(["all-purpose flower"]))));
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(AsdonMartin_templateObject9 || (AsdonMartin_templateObject9 = AsdonMartin_taggedTemplateLiteral(["all-purpose flower"]))));
        }
        (0,external_kolmafia_namespaceObject.retrieveItem)(count, bestFuel);
      } else (0,external_kolmafia_namespaceObject.retrieveItem)(count, bestFuel);
    } else if (ceiling) (0,external_kolmafia_namespaceObject.buy)(count, bestFuel, ceiling);else (0,external_kolmafia_namespaceObject.buy)(count, bestFuel);
    if (!insertFuel(bestFuel, Math.min((0,external_kolmafia_namespaceObject.itemAmount)(bestFuel), count))) {
      throw new Error("Failed to fuel Asdon Martin.");
    }
  }
  return (0,external_kolmafia_namespaceObject.getFuel)() >= targetUnits;
}
/**
 * @param targetUnits The fuel level we aim to achieve
 * @returns Whether we successfully filled our Asdon's tank
 */
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort((a, b) => getAverageAdventures(b) / (0,external_kolmafia_namespaceObject.autosellPrice)(b) - getAverageAdventures(a) / (0,external_kolmafia_namespaceObject.autosellPrice)(a));
  if (options.length === 0) return false;
  var best = options[0];
  if ((0,external_kolmafia_namespaceObject.autosellPrice)(best) / getAverageAdventures(best) > 100) return false;
  var amountToUse = utils_clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0,external_kolmafia_namespaceObject.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
/**
 * Fill your Asdon Martin by prioritizing mallmin items in your inventory. Default to the behavior of fillTo.
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillWithInventoryTo(targetUnits) {
  if (!installed()) return false;
  var continueFuelingFromInventory = true;
  while ((0,external_kolmafia_namespaceObject.getFuel)() < targetUnits && continueFuelingFromInventory) {
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  }
  return fillTo(targetUnits);
}
/**
 * Object consisting of the various Asdon driving styles
 */
var Driving = {
  Obnoxiously: template_string_$effect(AsdonMartin_templateObject0 || (AsdonMartin_templateObject0 = AsdonMartin_taggedTemplateLiteral(["Driving Obnoxiously"]))),
  Stealthily: template_string_$effect(AsdonMartin_templateObject1 || (AsdonMartin_templateObject1 = AsdonMartin_taggedTemplateLiteral(["Driving Stealthily"]))),
  Wastefully: template_string_$effect(AsdonMartin_templateObject10 || (AsdonMartin_templateObject10 = AsdonMartin_taggedTemplateLiteral(["Driving Wastefully"]))),
  Safely: template_string_$effect(AsdonMartin_templateObject11 || (AsdonMartin_templateObject11 = AsdonMartin_taggedTemplateLiteral(["Driving Safely"]))),
  Recklessly: template_string_$effect(AsdonMartin_templateObject12 || (AsdonMartin_templateObject12 = AsdonMartin_taggedTemplateLiteral(["Driving Recklessly"]))),
  Intimidatingly: template_string_$effect(AsdonMartin_templateObject13 || (AsdonMartin_templateObject13 = AsdonMartin_taggedTemplateLiteral(["Driving Intimidatingly"]))),
  Quickly: template_string_$effect(AsdonMartin_templateObject14 || (AsdonMartin_templateObject14 = AsdonMartin_taggedTemplateLiteral(["Driving Quickly"]))),
  Observantly: template_string_$effect(AsdonMartin_templateObject15 || (AsdonMartin_templateObject15 = AsdonMartin_taggedTemplateLiteral(["Driving Observantly"]))),
  Waterproofly: template_string_$effect(AsdonMartin_templateObject16 || (AsdonMartin_templateObject16 = AsdonMartin_taggedTemplateLiteral(["Driving Waterproofly"])))
};
/**
 * Attempt to drive with a particular style for a particular number of turns.
 *
 * @param style The driving style to use.
 * @param turns The number of turns to attempt to get.
 * @param preferInventory Whether we should preferentially value items currently in our inventory.
 * @returns Whether we have at least as many turns as requested of said driving style.
 */
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var preferInventory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Object.values(Driving).includes(style)) return false;
  if (!installed()) return false;
  if ((0,external_kolmafia_namespaceObject.haveEffect)(style) >= turns) return true;
  var fuelNeeded = 37 * Math.ceil((turns - (0,external_kolmafia_namespaceObject.haveEffect)(style)) / 30);
  (preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded);
  while ((0,external_kolmafia_namespaceObject.getFuel)() >= 37 && (0,external_kolmafia_namespaceObject.haveEffect)(style) < turns) {
    (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  }
  return (0,external_kolmafia_namespaceObject.haveEffect)(style) >= turns;
}
;// ./src/combat.ts
function src_combat_typeof(o) { "@babel/helpers - typeof"; return src_combat_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, src_combat_typeof(o); }
var combat_templateObject, combat_templateObject2, combat_templateObject3, combat_templateObject4, combat_templateObject5, combat_templateObject6, combat_templateObject7, combat_templateObject8, combat_templateObject9, combat_templateObject0;
function combat_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function src_combat_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function src_combat_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, src_combat_toPropertyKey(o.key), o); } }
function src_combat_createClass(e, r, t) { return r && src_combat_defineProperties(e.prototype, r), t && src_combat_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function src_combat_toPropertyKey(t) { var i = src_combat_toPrimitive(t, "string"); return "symbol" == src_combat_typeof(i) ? i : i + ""; }
function src_combat_toPrimitive(t, r) { if ("object" != src_combat_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != src_combat_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function src_combat_callSuper(t, o, e) { return o = src_combat_getPrototypeOf(o), src_combat_possibleConstructorReturn(t, src_combat_isNativeReflectConstruct() ? Reflect.construct(o, e || [], src_combat_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function src_combat_possibleConstructorReturn(t, e) { if (e && ("object" == src_combat_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return src_combat_assertThisInitialized(t); }
function src_combat_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function src_combat_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (src_combat_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function src_combat_getPrototypeOf(t) { return src_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, src_combat_getPrototypeOf(t); }
function src_combat_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && src_combat_setPrototypeOf(t, e); }
function src_combat_setPrototypeOf(t, e) { return src_combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, src_combat_setPrototypeOf(t, e); }


var combat_Macro = /*#__PURE__*/function (_StrictMacro) {
  function Macro() {
    src_combat_classCallCheck(this, Macro);
    return src_combat_callSuper(this, Macro, arguments);
  }
  src_combat_inherits(Macro, _StrictMacro);
  return src_combat_createClass(Macro, [{
    key: "delevel",
    value: function delevel() {
      return this.trySkill(template_string_$skill(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill(template_string_$skill(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["Micrometeorite"])))).tryItem(template_string_$item(combat_templateObject3 || (combat_templateObject3 = combat_taggedTemplateLiteral(["Time-Spinner"])))).trySkill(template_string_$skill(combat_templateObject4 || (combat_templateObject4 = combat_taggedTemplateLiteral(["Summon Love Gnats"]))));
    }
  }, {
    key: "sing",
    value: function sing() {
      return this.skill(template_string_$skill(combat_templateObject5 || (combat_templateObject5 = combat_taggedTemplateLiteral(["Sing Along"]))));
    }
  }, {
    key: "kill",
    value: function kill() {
      return this.externalIf((0,external_kolmafia_namespaceObject.myClass)().primestat === $stat(combat_templateObject6 || (combat_templateObject6 = combat_taggedTemplateLiteral(["Muscle"]))), Macro.while_("!mpbelow ".concat((0,external_kolmafia_namespaceObject.mpCost)(template_string_$skill(combat_templateObject7 || (combat_templateObject7 = combat_taggedTemplateLiteral(["Lunging Thrust-Smack"]))))), Macro.skill(template_string_$skill(combat_templateObject8 || (combat_templateObject8 = combat_taggedTemplateLiteral(["Lunging Thrust-Smack"]))))), Macro.while_("!mpbelow ".concat((0,external_kolmafia_namespaceObject.mpCost)(template_string_$skill(combat_templateObject9 || (combat_templateObject9 = combat_taggedTemplateLiteral(["Saucestorm"]))))), Macro.skill(template_string_$skill(combat_templateObject0 || (combat_templateObject0 = combat_taggedTemplateLiteral(["Saucestorm"])))))).attack().repeat();
    }
  }, {
    key: "default",
    value: function _default() {
      return this.delevel().sing().kill();
    }
  }], [{
    key: "delevel",
    value: function delevel() {
      return new Macro().delevel();
    }
  }, {
    key: "sing",
    value: function sing() {
      return new Macro().sing();
    }
  }, {
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }, {
    key: "default",
    value: function _default() {
      return new Macro().default();
    }
  }]);
}(StrictMacro);

;// ./src/engine/combat.ts
function engine_combat_typeof(o) { "@babel/helpers - typeof"; return engine_combat_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, engine_combat_typeof(o); }
function engine_combat_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, engine_combat_toPropertyKey(o.key), o); } }
function engine_combat_createClass(e, r, t) { return r && engine_combat_defineProperties(e.prototype, r), t && engine_combat_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function engine_combat_toPropertyKey(t) { var i = engine_combat_toPrimitive(t, "string"); return "symbol" == engine_combat_typeof(i) ? i : i + ""; }
function engine_combat_toPrimitive(t, r) { if ("object" != engine_combat_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != engine_combat_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function engine_combat_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function engine_combat_callSuper(t, o, e) { return o = engine_combat_getPrototypeOf(o), engine_combat_possibleConstructorReturn(t, engine_combat_isNativeReflectConstruct() ? Reflect.construct(o, e || [], engine_combat_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function engine_combat_possibleConstructorReturn(t, e) { if (e && ("object" == engine_combat_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return engine_combat_assertThisInitialized(t); }
function engine_combat_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function engine_combat_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (engine_combat_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function engine_combat_getPrototypeOf(t) { return engine_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, engine_combat_getPrototypeOf(t); }
function engine_combat_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && engine_combat_setPrototypeOf(t, e); }
function engine_combat_setPrototypeOf(t, e) { return engine_combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, engine_combat_setPrototypeOf(t, e); }

var myActions = ["killFree"];
var CSCombatStrategy = /*#__PURE__*/function (_CombatStrategy$withA) {
  function CSCombatStrategy() {
    engine_combat_classCallCheck(this, CSCombatStrategy);
    return engine_combat_callSuper(this, CSCombatStrategy, arguments);
  }
  engine_combat_inherits(CSCombatStrategy, _CombatStrategy$withA);
  return engine_combat_createClass(CSCombatStrategy);
}(CombatStrategy.withActions(myActions));
;// ./src/tasks/common.ts
function common_typeof(o) { "@babel/helpers - typeof"; return common_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, common_typeof(o); }
var common_templateObject, common_templateObject2, common_templateObject3, common_templateObject4, common_templateObject5, common_templateObject6, common_templateObject7, common_templateObject8, common_templateObject9, common_templateObject0, common_templateObject1, common_templateObject10, common_templateObject11, common_templateObject12, common_templateObject13, common_templateObject14, common_templateObject15, common_templateObject16, common_templateObject17, common_templateObject18, common_templateObject19, common_templateObject20, common_templateObject21, common_templateObject22, common_templateObject23, common_templateObject24, common_templateObject25;
function common_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function common_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? common_ownKeys(Object(t), !0).forEach(function (r) { common_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : common_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function common_defineProperty(e, r, t) { return (r = common_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function common_toPropertyKey(t) { var i = common_toPrimitive(t, "string"); return "symbol" == common_typeof(i) ? i : i + ""; }
function common_toPrimitive(t, r) { if ("object" != common_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != common_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function common_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }






function innerElfTask() {
  return {
    name: "Inner Elf",
    completed: () => lib_have(template_string_$effect(common_templateObject || (common_templateObject = common_taggedTemplateLiteral(["Inner Elf"])))),
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !exists("portscan.edu"),
    do: () => Clan.with(args.slimeclan, () => {
      (0,external_kolmafia_namespaceObject.adv1)($location(common_templateObject2 || (common_templateObject2 = common_taggedTemplateLiteral(["The Slime Tube"]))), -1, "");
    }),
    combat: new CSCombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(common_templateObject3 || (common_templateObject3 = common_taggedTemplateLiteral(["KGB tranquilizer dart"])))).skill(template_string_$skill(common_templateObject4 || (common_templateObject4 = common_taggedTemplateLiteral(["Snokebomb"]))))),
    choices: {
      326: 1
    },
    effects: [template_string_$effect(common_templateObject5 || (common_templateObject5 = common_taggedTemplateLiteral(["Blood Bubble"])))],
    outfit: {
      acc3: template_string_$item(common_templateObject6 || (common_templateObject6 = common_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      familiar: template_string_$familiar(common_templateObject7 || (common_templateObject7 = common_taggedTemplateLiteral(["Machine Elf"])))
    },
    limit: {
      tries: 1
    }
  };
}
function meteorShowerTask() {
  return {
    name: "Meteor Showered",
    completed: () => lib_have(template_string_$effect(common_templateObject8 || (common_templateObject8 = common_taggedTemplateLiteral(["Meteor Showered"])))),
    ready: () => property_get("_meteorShowerUses") < 5 && property_get("_saberForceUses") < 5,
    do: $location(common_templateObject9 || (common_templateObject9 = common_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(common_templateObject0 || (common_templateObject0 = common_taggedTemplateLiteral(["Meteor Shower"])))).skill(template_string_$skill(common_templateObject1 || (common_templateObject1 = common_taggedTemplateLiteral(["Use the Force"]))))),
    choices: {
      1387: 3
    },
    outfit: {
      weapon: template_string_$item(common_templateObject10 || (common_templateObject10 = common_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar.none,
      famequip: template_string_$item.none
    },
    limit: {
      tries: 1
    }
  };
}
function beachTask(effect) {
  var num = 1 + headBuffs.indexOf(effect);
  return {
    name: "Beach Head: ".concat(effect),
    completed: () => (0,external_kolmafia_namespaceObject.getProperty)("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    ready: () => property_get("_freeBeachWalksUsed") < 11 && property_get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    do: () => tryHead(effect),
    limit: {
      tries: 1
    }
  };
}
function potionTask(item) {
  var acquire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var effect = (0,external_kolmafia_namespaceObject.effectModifier)(item, "Effect");
  return {
    name: item.toString(),
    completed: () => lib_have(effect),
    ready: acquire ? undefined : () => lib_have(item),
    do: () => (0,external_kolmafia_namespaceObject.use)(item),
    acquire: acquire ? [{
      item: item
    }] : undefined,
    limit: {
      tries: 1
    }
  };
}
function skillTask(x) {
  var includeAprilShield = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  {
    var _ref = x instanceof external_kolmafia_namespaceObject.Skill ? {
        skill: x,
        effect: (0,external_kolmafia_namespaceObject.toEffect)(x)
      } : x instanceof external_kolmafia_namespaceObject.Effect ? {
        skill: (0,external_kolmafia_namespaceObject.toSkill)(x),
        effect: x
      } : x,
      skill = _ref.skill,
      effect = _ref.effect;
    var needGlove = $skills(common_templateObject11 || (common_templateObject11 = common_taggedTemplateLiteral(["CHEAT CODE: Invisible Avatar, CHEAT CODE: Triple Size"]))).includes(skill);
    return {
      name: skill.name,
      completed: () => effect !== template_string_$effect.none ? lib_have(effect) : skill.timescast > skill.dailylimit,
      prepare: () => {
        if ((0,external_kolmafia_namespaceObject.myMaxmp)() < (0,external_kolmafia_namespaceObject.mpCost)(skill)) throw "Max MP is too low to cast ".concat(skill.name);
        while ((0,external_kolmafia_namespaceObject.myMp)() < (0,external_kolmafia_namespaceObject.mpCost)(skill)) {
          if (!lib_have(template_string_$item(common_templateObject12 || (common_templateObject12 = common_taggedTemplateLiteral(["magical sausage"])))) && lib_have(template_string_$item(common_templateObject13 || (common_templateObject13 = common_taggedTemplateLiteral(["magical sausage casing"]))))) {
            (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(common_templateObject14 || (common_templateObject14 = common_taggedTemplateLiteral(["magical sausage"]))));
          }
          if (lib_have(template_string_$item(common_templateObject15 || (common_templateObject15 = common_taggedTemplateLiteral(["magical sausage"]))))) {
            (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(common_templateObject16 || (common_templateObject16 = common_taggedTemplateLiteral(["magical sausage"]))));
          } else if (lib_have(template_string_$item(common_templateObject17 || (common_templateObject17 = common_taggedTemplateLiteral(["psychokinetic energy blob"]))))) {
            (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(common_templateObject18 || (common_templateObject18 = common_taggedTemplateLiteral(["psychokinetic energy blob"]))));
          } else {
            throw "Ran out of preferred MP restorers, consider Doc Galaktik's Invigorating Tonic";
          }
        }
      },
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(skill),
      outfit: common_objectSpread(common_objectSpread({}, needGlove ? {
        equip: [template_string_$item(common_templateObject19 || (common_templateObject19 = common_taggedTemplateLiteral(["Powerful Glove"])))]
      } : {}), includeAprilShield ? {
        offhand: template_string_$item(common_templateObject20 || (common_templateObject20 = common_taggedTemplateLiteral(["April Shower Thoughts shield"])))
      } : {
        avoid: template_string_$items(common_templateObject21 || (common_templateObject21 = common_taggedTemplateLiteral(["April Shower Thoughts shield"])))
      }),
      limit: {
        tries: 1
      }
    };
  }
}
function asdonTask(style) {
  var effect = style instanceof external_kolmafia_namespaceObject.Effect ? style : Driving[style];
  return {
    name: effect.name,
    completed: () => lib_have(effect),
    prepare: () => {
      if (!(0,external_kolmafia_namespaceObject.knollAvailable)() && (0,external_kolmafia_namespaceObject.getFuel)() < 37 && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(common_templateObject22 || (common_templateObject22 = common_taggedTemplateLiteral(["wad of dough"])))) < 8) {
        (0,external_kolmafia_namespaceObject.buy)(template_string_$item(common_templateObject23 || (common_templateObject23 = common_taggedTemplateLiteral(["all-purpose flower"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(common_templateObject24 || (common_templateObject24 = common_taggedTemplateLiteral(["all-purpose flower"]))));
      }
    },
    do: () => drive(effect),
    limit: {
      tries: 1
    }
  };
}
function deckTask(card) {
  return {
    name: "Cheat At Cards: ".concat(card),
    completed: () => property_get("_deckCardsSeen").toLowerCase().split("|").includes(card.toLowerCase()),
    ready: () => lib_have(template_string_$item(common_templateObject25 || (common_templateObject25 = common_taggedTemplateLiteral(["Deck of Every Card"])))) && property_get("_deckCardsDrawn") <= 10,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("cheat ".concat(card.toLowerCase())),
    limit: {
      tries: 1
    }
  };
}
function libramTask() {
  return {
    name: "Burn Librams",
    completed: () => !canCastLibrams(),
    do: burnLibrams,
    limit: {
      tries: 1
    }
  };
}
;// ./src/tasks/boozedrop.ts
function boozedrop_typeof(o) { "@babel/helpers - typeof"; return boozedrop_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, boozedrop_typeof(o); }
var boozedrop_templateObject, boozedrop_templateObject2, boozedrop_templateObject3, boozedrop_templateObject4, boozedrop_templateObject5, boozedrop_templateObject6, boozedrop_templateObject7, boozedrop_templateObject8, boozedrop_templateObject9, boozedrop_templateObject0, boozedrop_templateObject1, boozedrop_templateObject10, boozedrop_templateObject11, boozedrop_templateObject12, boozedrop_templateObject13, boozedrop_templateObject14, boozedrop_templateObject15, boozedrop_templateObject16, boozedrop_templateObject17, boozedrop_templateObject18, boozedrop_templateObject19, boozedrop_templateObject20, boozedrop_templateObject21, boozedrop_templateObject22, boozedrop_templateObject23, boozedrop_templateObject24, boozedrop_templateObject25, boozedrop_templateObject26, boozedrop_templateObject27, boozedrop_templateObject28, boozedrop_templateObject29, boozedrop_templateObject30, boozedrop_templateObject31, boozedrop_templateObject32, boozedrop_templateObject33;
function boozedrop_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function boozedrop_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? boozedrop_ownKeys(Object(t), !0).forEach(function (r) { boozedrop_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : boozedrop_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function boozedrop_defineProperty(e, r, t) { return (r = boozedrop_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function boozedrop_toPropertyKey(t) { var i = boozedrop_toPrimitive(t, "string"); return "symbol" == boozedrop_typeof(i) ? i : i + ""; }
function boozedrop_toPrimitive(t, r) { if ("object" != boozedrop_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != boozedrop_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function boozedrop_toConsumableArray(r) { return boozedrop_arrayWithoutHoles(r) || boozedrop_iterableToArray(r) || boozedrop_unsupportedIterableToArray(r) || boozedrop_nonIterableSpread(); }
function boozedrop_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function boozedrop_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return boozedrop_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? boozedrop_arrayLikeToArray(r, a) : void 0; } }
function boozedrop_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function boozedrop_arrayWithoutHoles(r) { if (Array.isArray(r)) return boozedrop_arrayLikeToArray(r); }
function boozedrop_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function boozedrop_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var buffs = $effects(boozedrop_templateObject || (boozedrop_templateObject = boozedrop_taggedTemplateLiteral(["Singer's Faithful Ocelot, Fat Leon's Phat Loot Lyric, The Spirit of Taking"])));
var BoozeDropQuest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [].concat(boozedrop_toConsumableArray(buffs.map(effect => skillTask(effect))), [boozedrop_objectSpread(boozedrop_objectSpread({}, skillTask(template_string_$effect(boozedrop_templateObject2 || (boozedrop_templateObject2 = boozedrop_taggedTemplateLiteral(["Spice Haze"]))))), {}, {
    class: $classes(boozedrop_templateObject3 || (boozedrop_templateObject3 = boozedrop_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Sauceror, Disco Bandit, Accordion Thief"])))
  }), {
    name: "Anticheese",
    completed: () => property_get("lastAnticheeseDay") > 0,
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse"),
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(boozedrop_templateObject4 || (boozedrop_templateObject4 = boozedrop_taggedTemplateLiteral(["government"]))), true), potionTask(template_string_$item(boozedrop_templateObject5 || (boozedrop_templateObject5 = boozedrop_taggedTemplateLiteral(["autumn leaf"])))), {
    name: "Oversized Sparkler",
    completed: () => lib_have(template_string_$item(boozedrop_templateObject6 || (boozedrop_templateObject6 = boozedrop_taggedTemplateLiteral(["oversized sparkler"])))),
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2", false),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=fwshop&action=buyitem&quantity=1&whichrow=1257&pwd"),
    limit: {
      tries: 1
    }
  }, {
    name: "Batform",
    completed: () => lib_have(template_string_$effect(boozedrop_templateObject7 || (boozedrop_templateObject7 = boozedrop_taggedTemplateLiteral(["Bat-Adjacent Form"])))),
    do: $location(boozedrop_templateObject8 || (boozedrop_templateObject8 = boozedrop_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CSCombatStrategy().macro(Macro.skill(template_string_$skill(boozedrop_templateObject9 || (boozedrop_templateObject9 = boozedrop_taggedTemplateLiteral(["Become a Bat"])))).skill(template_string_$skill(boozedrop_templateObject0 || (boozedrop_templateObject0 = boozedrop_taggedTemplateLiteral(["Bowl Straight Up"])))).skill(template_string_$skill(boozedrop_templateObject1 || (boozedrop_templateObject1 = boozedrop_taggedTemplateLiteral(["Reflex Hammer"]))))),
    outfit: {
      back: template_string_$item(boozedrop_templateObject10 || (boozedrop_templateObject10 = boozedrop_taggedTemplateLiteral(["vampyric cloake"]))),
      acc3: template_string_$item(boozedrop_templateObject11 || (boozedrop_templateObject11 = boozedrop_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: template_string_$familiar(boozedrop_templateObject12 || (boozedrop_templateObject12 = boozedrop_taggedTemplateLiteral(["none"])))
    },
    limit: {
      tries: 1
    }
  }, boozedrop_objectSpread(boozedrop_objectSpread({}, potionTask(template_string_$item(boozedrop_templateObject13 || (boozedrop_templateObject13 = boozedrop_taggedTemplateLiteral(["Salsa Caliente\u2122 candle"]))))), {}, {
    class: $classes(boozedrop_templateObject14 || (boozedrop_templateObject14 = boozedrop_taggedTemplateLiteral(["Sauceror"])))
  }), {
    name: "Items.enh",
    completed: () => lib_have(template_string_$effect(boozedrop_templateObject15 || (boozedrop_templateObject15 = boozedrop_taggedTemplateLiteral(["items.enh"])))),
    do: () => enhance(template_string_$effect(boozedrop_templateObject16 || (boozedrop_templateObject16 = boozedrop_taggedTemplateLiteral(["items.enh"])))),
    limit: {
      tries: 1
    }
  }, asdonTask("Observantly"), skillTask({
    skill: template_string_$skill(boozedrop_templateObject17 || (boozedrop_templateObject17 = boozedrop_taggedTemplateLiteral(["Sauce Contemplation"]))),
    effect: template_string_$effect(boozedrop_templateObject18 || (boozedrop_templateObject18 = boozedrop_taggedTemplateLiteral(["Lubricating Sauce"])))
  }, true), potionTask(template_string_$item(boozedrop_templateObject19 || (boozedrop_templateObject19 = boozedrop_taggedTemplateLiteral(["bag of grain"])))), {
    name: "Steely-Eyed Squint",
    completed: () => lib_have(template_string_$effect(boozedrop_templateObject20 || (boozedrop_templateObject20 = boozedrop_taggedTemplateLiteral(["Steely-Eyed Squint"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(boozedrop_templateObject21 || (boozedrop_templateObject21 = boozedrop_taggedTemplateLiteral(["Steely-Eyed Squint"])))),
    limit: {
      tries: 1
    }
  }, skillTask(template_string_$effect(boozedrop_templateObject22 || (boozedrop_templateObject22 = boozedrop_taggedTemplateLiteral(["Feeling Lost"])))), {
    name: "Test",
    completed: () => CommunityService.BoozeDrop.isDone(),
    do: () => CommunityService.BoozeDrop.run(() => undefined, 1),
    outfit: {
      hat: template_string_$item(boozedrop_templateObject23 || (boozedrop_templateObject23 = boozedrop_taggedTemplateLiteral(["wad of used tape"]))),
      weapon: template_string_$item(boozedrop_templateObject24 || (boozedrop_templateObject24 = boozedrop_taggedTemplateLiteral(["oversized sparkler"]))),
      offhand: template_string_$item(boozedrop_templateObject25 || (boozedrop_templateObject25 = boozedrop_taggedTemplateLiteral(["unbreakable umbrella"]))),
      back: template_string_$item(boozedrop_templateObject26 || (boozedrop_templateObject26 = boozedrop_taggedTemplateLiteral(["Buddy Bjorn"]))),
      acc1: template_string_$item(boozedrop_templateObject27 || (boozedrop_templateObject27 = boozedrop_taggedTemplateLiteral(["Guzzlr tablet"]))),
      acc2: template_string_$item(boozedrop_templateObject28 || (boozedrop_templateObject28 = boozedrop_taggedTemplateLiteral(["Cincho de Mayo"]))),
      acc3: template_string_$items(boozedrop_templateObject29 || (boozedrop_templateObject29 = boozedrop_taggedTemplateLiteral(["barrel hoop earring, gold detective badge"]))),
      famequip: template_string_$item(boozedrop_templateObject30 || (boozedrop_templateObject30 = boozedrop_taggedTemplateLiteral(["li'l ninja costume"]))),
      familiar: template_string_$familiar(boozedrop_templateObject31 || (boozedrop_templateObject31 = boozedrop_taggedTemplateLiteral(["Trick-or-Treating Tot"]))),
      modes: {
        umbrella: "bucket style"
      },
      riders: {
        "buddy-bjorn": template_string_$familiar(boozedrop_templateObject32 || (boozedrop_templateObject32 = boozedrop_taggedTemplateLiteral(["Party Mouse"])))
      }
    },
    acquire: [{
      item: template_string_$item(boozedrop_templateObject33 || (boozedrop_templateObject33 = boozedrop_taggedTemplateLiteral(["wad of used tape"])))
    }],
    limit: {
      tries: 1
    }
  }])
};
;// ./node_modules/libram/dist/resources/2014/CrimboShrub.js
var CrimboShrub_templateObject, CrimboShrub_templateObject2, CrimboShrub_templateObject3, CrimboShrub_templateObject4;
function CrimboShrub_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




/**
 * @returns Whether we `have` the Crimbo Shrub in our terrarium
 */
function CrimboShrub_have() {
  return lib_have(template_string_$familiar(CrimboShrub_templateObject || (CrimboShrub_templateObject = CrimboShrub_taggedTemplateLiteral(["Crimbo Shrub"]))));
}
var Toppers = {
  Muscle: 1,
  Mysticality: 2,
  Moxie: 3
};
var Lights = {
  "Prismatic Damage": 1,
  "Hot Damage": 2,
  "Cold Damage": 3,
  "Stench Damage": 4,
  "Spooky Damage": 5,
  "Sleaze Damage": 6
};
var Garland = {
  "HP Regen": 1,
  "PvP Fights": 2,
  Blocking: 3
};
var Gifts = {
  "Yellow Ray": 1,
  "Red Ray": 2,
  Gifts: 3
};
var Prefs = {
  Muscle: "Muscle",
  Mysticality: "Mysticality",
  Moxie: "Moxie",
  Prismatic: "Prismatic Damage",
  Hot: "Hot Damage",
  Cold: "Cold Damage",
  Stench: "Stench Damage",
  Spooky: "Spooky Damage",
  Sleaze: "Sleaze Damage",
  HP: "HP Regen",
  PvP: "PvP Fights",
  blocking: "Blocking",
  yellow: "Yellow Ray",
  meat: "Red Ray",
  gifts: "Gifts"
};
/**
 * Internal function used to check whether decour perfectly matches what we want
 *
 * @param topper Topper to check for
 * @param lights Lights to check for
 * @param garland Garland to check for
 * @param gifts Gifts to check for
 * @returns Whether every single decour matches what we expect
 */
function isDecoratedWith(topper, lights, garland, gifts) {
  var decorations = [property_get("shrubTopper"), property_get("shrubLights"), property_get("shrubGarland"), property_get("shrubGifts")].map(x => Prefs[x]);
  return [topper, lights, garland, gifts].every((x, i) => x === decorations[i]);
}
/**
 * Decorates our Crimbo Shrub with the chosen decour, if able
 *
 * @param topper The shrub Topper to select
 * @param lights The shrub Lights to select
 * @param garland The shrub Garland to select
 * @param gifts The shrub Gifts to select
 * @returns Whether the shrub's decour perfectly matches the given decour
 */
function decorate(topper, lights, garland, gifts) {
  if (!CrimboShrub_have()) return false;
  if (property_get("_shrubDecorated")) return isDecoratedWith(topper, lights, garland, gifts);
  if (!lib_have(template_string_$item(CrimboShrub_templateObject2 || (CrimboShrub_templateObject2 = CrimboShrub_taggedTemplateLiteral(["box of old Crimbo decorations"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(CrimboShrub_templateObject3 || (CrimboShrub_templateObject3 = CrimboShrub_taggedTemplateLiteral(["Crimbo Shrub"]))));
  }
  lib_directlyUse(template_string_$item(CrimboShrub_templateObject4 || (CrimboShrub_templateObject4 = CrimboShrub_taggedTemplateLiteral(["box of old Crimbo decorations"]))));
  (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=".concat(Toppers[topper], "&lights=").concat(Lights[lights], "&garland=").concat(Garland[garland], "&gift=").concat(Gifts[gifts]));
  return isDecoratedWith(topper, lights, garland, gifts);
}
;// ./node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_templateObject;
function CombatLoversLocket_slicedToArray(r, e) { return CombatLoversLocket_arrayWithHoles(r) || CombatLoversLocket_iterableToArrayLimit(r, e) || CombatLoversLocket_unsupportedIterableToArray(r, e) || CombatLoversLocket_nonIterableRest(); }
function CombatLoversLocket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CombatLoversLocket_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return CombatLoversLocket_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? CombatLoversLocket_arrayLikeToArray(r, a) : void 0; } }
function CombatLoversLocket_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function CombatLoversLocket_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function CombatLoversLocket_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function CombatLoversLocket_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





var locket = template_string_$item(CombatLoversLocket_templateObject || (CombatLoversLocket_templateObject = CombatLoversLocket_taggedTemplateLiteral(["combat lover's locket"])));
/**
 * @returns Whether you `have` the Combat Lover's Locket
 */
function CombatLoversLocket_have() {
  return lib_have(locket);
}
/**
 * Filters the set of all unlocked locket monsters to only the ones available to be locketed right now.
 *
 * @returns An array consisting of all Monsters you can fight with your locket right now.
 */
function availableLocketMonsters() {
  if (reminiscesLeft() === 0) return [];
  return Object.entries(getLocketMonsters()).filter(_ref => {
    var _ref2 = CombatLoversLocket_slicedToArray(_ref, 2),
      unused = _ref2[1];
    return unused;
  }).map(_ref3 => {
    var _ref4 = CombatLoversLocket_slicedToArray(_ref3, 1),
      name = _ref4[0];
    return toMonster(name);
  });
}
/**
 * Parses getLocketMonsters and returns the collection of all Monsters as an Array.
 *
 * @returns An array consisting of all Monsters you can hypothetically fight, regardless of whether they've been fought today.
 */
function unlockedLocketMonsters() {
  return Object.entries(getLocketMonsters()).map(_ref5 => {
    var _ref6 = CombatLoversLocket_slicedToArray(_ref5, 1),
      name = _ref6[0];
    return toMonster(name);
  });
}
function parseLocketProperty() {
  return property_get("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 *
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */
function reminiscesLeft() {
  return CombatLoversLocket_have() ? utils_clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 *
 * @returns An array consisting of the Monsters reminisced today.
 */
function monstersReminisced() {
  return parseLocketProperty().map(id => (0,external_kolmafia_namespaceObject.toMonster)(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 *
 * @param monster The Monster to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */
function reminisce(monster) {
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0 || !(0,external_kolmafia_namespaceObject.getLocketMonsters)()[monster.name]) {
    return false;
  }
  (0,external_kolmafia_namespaceObject.cliExecute)("reminisce ".concat(monster));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  external_kolmafia_namespaceObject.runCombat.apply(void 0, combatParams);
  return monstersReminisced().includes(monster);
}
/**
 * This function efficiently evaluates all of an adventurer's possibly reminiscable monsters, placing them through a filtering criteria and evaluating them based on a passed function.
 *
 * @param criteria A filtering function for delineating which monsters are "fair game" for the search, such as "is this monster free".
 * @param value A function for deciding which monsters are "better" than others.
 * @returns A singular monster that fulfills the criteria function and maximizes the value function.
 */
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => 1;
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0) return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length) return null;
  return maxBy(options, value);
}
/**
 * Determine if a monster is currently reminiscible/reminiscable.
 * @param monster The monster in question
 * @returns Whether we can currently reminisce that monster
 */
function canReminisce(monster) {
  return CombatLoversLocket_have() && reminiscesLeft() > 0 && Boolean(getLocketMonsters()["".concat(monster)]);
}
;// ./src/tasks/coilwire.ts
var coilwire_templateObject, coilwire_templateObject2, coilwire_templateObject3, coilwire_templateObject4, coilwire_templateObject5, coilwire_templateObject6, coilwire_templateObject7, coilwire_templateObject8, coilwire_templateObject9, coilwire_templateObject0, coilwire_templateObject1, coilwire_templateObject10, coilwire_templateObject11, coilwire_templateObject12, coilwire_templateObject13, coilwire_templateObject14, coilwire_templateObject15, coilwire_templateObject16, coilwire_templateObject17, coilwire_templateObject18, coilwire_templateObject19, coilwire_templateObject20, coilwire_templateObject21, coilwire_templateObject22, coilwire_templateObject23, coilwire_templateObject24, coilwire_templateObject25, coilwire_templateObject26, coilwire_templateObject27, coilwire_templateObject28, coilwire_templateObject29, coilwire_templateObject30, coilwire_templateObject31, coilwire_templateObject32, coilwire_templateObject33;
function coilwire_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





var CoilWireQuest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [{
    name: "Holiday Runaway",
    completed: () => getTodaysHolidayWanderers().length === 0 || property_get("_banderRunaways") >= 1,
    do: $location(coilwire_templateObject || (coilwire_templateObject = coilwire_taggedTemplateLiteral(["Noob Cave"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.runaway()),
    outfit: {
      familiar: template_string_$familiar(coilwire_templateObject2 || (coilwire_templateObject2 = coilwire_taggedTemplateLiteral(["Pair of Stomping Boots"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Shrub Meat",
    completed: () => lib_have(template_string_$effect(coilwire_templateObject3 || (coilwire_templateObject3 = coilwire_taggedTemplateLiteral(["Everything Looks Red"])))),
    ready: () => lib_have(template_string_$item(coilwire_templateObject4 || (coilwire_templateObject4 = coilwire_taggedTemplateLiteral(["cosmic bowling ball"])))),
    prepare: () => {
      decorate((0,external_kolmafia_namespaceObject.myPrimestat)().toString(), "Spooky Damage", "Blocking", "Red Ray");
      if (property_get("_hotTubSoaks") < 1) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
    },
    do: $location(coilwire_templateObject5 || (coilwire_templateObject5 = coilwire_taggedTemplateLiteral(["The Skeleton Store"]))),
    // Shrub's spooky damage won't kill monsters here
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(coilwire_templateObject6 || (coilwire_templateObject6 = coilwire_taggedTemplateLiteral(["Open a Big Red Present"])))).skill(template_string_$skill(coilwire_templateObject7 || (coilwire_templateObject7 = coilwire_taggedTemplateLiteral(["Bowl a Curveball"]))))),
    outfit: {
      familiar: template_string_$familiar(coilwire_templateObject8 || (coilwire_templateObject8 = coilwire_taggedTemplateLiteral(["Crimbo Shrub"])))
    },
    limit: {
      tries: 2
    } // Skeletons in Store opening NC
  }, {
    name: "Kramco",
    completed: () => property_get("_sausageFights") > 0,
    ready: () => getKramcoWandererChance() >= 1,
    do: $location(coilwire_templateObject9 || (coilwire_templateObject9 = coilwire_taggedTemplateLiteral(["Noob Cave"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(coilwire_templateObject0 || (coilwire_templateObject0 = coilwire_taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat()),
    outfit: {
      back: template_string_$item(coilwire_templateObject1 || (coilwire_templateObject1 = coilwire_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: template_string_$item(coilwire_templateObject10 || (coilwire_templateObject10 = coilwire_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Mimic",
    completed: () => property_get("_bagOfCandy"),
    ready: () => property_get("ghostLocation") !== $location(coilwire_templateObject11 || (coilwire_templateObject11 = coilwire_taggedTemplateLiteral(["none"]))),
    do: () => (0,external_kolmafia_namespaceObject.adv1)(property_get("ghostLocation", $location(coilwire_templateObject12 || (coilwire_templateObject12 = coilwire_taggedTemplateLiteral(["none"])))), 0, ""),
    combat: new CSCombatStrategy().macro(combat_Macro.delevel().skill(template_string_$skill(coilwire_templateObject13 || (coilwire_templateObject13 = coilwire_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(coilwire_templateObject14 || (coilwire_templateObject14 = coilwire_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(coilwire_templateObject15 || (coilwire_templateObject15 = coilwire_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(coilwire_templateObject16 || (coilwire_templateObject16 = coilwire_taggedTemplateLiteral(["Trap Ghost"]))))),
    outfit: {
      back: template_string_$item(coilwire_templateObject17 || (coilwire_templateObject17 = coilwire_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: template_string_$item(coilwire_templateObject18 || (coilwire_templateObject18 = coilwire_taggedTemplateLiteral(["weeping willow wand"]))),
      familiar: template_string_$familiar(coilwire_templateObject19 || (coilwire_templateObject19 = coilwire_taggedTemplateLiteral(["Stocking Mimic"]))),
      famequip: template_string_$item.none
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Fruity Skeleton",
    class: $classes(coilwire_templateObject20 || (coilwire_templateObject20 = coilwire_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Sauceror"]))),
    completed: () => lib_have(template_string_$item(coilwire_templateObject21 || (coilwire_templateObject21 = coilwire_taggedTemplateLiteral(["cherry"])))),
    ready: () => !lib_have(template_string_$effect(coilwire_templateObject22 || (coilwire_templateObject22 = coilwire_taggedTemplateLiteral(["Everything Looks Yellow"])))),
    do: $location(coilwire_templateObject23 || (coilwire_templateObject23 = coilwire_taggedTemplateLiteral(["The Skeleton Store"]))),
    outfit: {
      shirt: template_string_$item(coilwire_templateObject24 || (coilwire_templateObject24 = coilwire_taggedTemplateLiteral(["Jurassic Parka"]))),
      modes: {
        parka: "dilophosaur"
      },
      acc3: template_string_$item(coilwire_templateObject25 || (coilwire_templateObject25 = coilwire_taggedTemplateLiteral(["Peridot of Peril"])))
    },
    choices: peridotChoice($monster(coilwire_templateObject26 || (coilwire_templateObject26 = coilwire_taggedTemplateLiteral(["novelty tropical skeleton"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(coilwire_templateObject27 || (coilwire_templateObject27 = coilwire_taggedTemplateLiteral(["Spit jurassic acid"]))))),
    limit: {
      tries: 1
    }
  }, {
    name: "Evil Olive",
    class: $classes(coilwire_templateObject28 || (coilwire_templateObject28 = coilwire_taggedTemplateLiteral(["Disco Bandit, Accordion Thief"]))),
    completed: () => lib_have(template_string_$item(coilwire_templateObject29 || (coilwire_templateObject29 = coilwire_taggedTemplateLiteral(["jumbo olive"])))),
    ready: () => !lib_have(template_string_$effect(coilwire_templateObject30 || (coilwire_templateObject30 = coilwire_taggedTemplateLiteral(["Everything Looks Yellow"])))),
    do: () => reminisce($monster(coilwire_templateObject31 || (coilwire_templateObject31 = coilwire_taggedTemplateLiteral(["Evil Olive"])))),
    outfit: {
      shirt: template_string_$item(coilwire_templateObject32 || (coilwire_templateObject32 = coilwire_taggedTemplateLiteral(["Jurassic Parka"]))),
      modes: {
        parka: "dilophosaur"
      }
    },
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(coilwire_templateObject33 || (coilwire_templateObject33 = coilwire_taggedTemplateLiteral(["Spit jurassic acid"]))))),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.CoilWire.isDone(),
    prepare: burnLibrams,
    do: () => CommunityService.CoilWire.run(() => undefined),
    outfit: {
      modifier: "mp, mp regen 15min"
    },
    limit: {
      tries: 1
    }
  }]
};
;// ./src/tasks/donate.ts

var DonateQuest = {
  name: "Donate",
  tasks: [{
    name: "Test",
    completed: () => property_get("kingLiberated"),
    do: () => CommunityService.donate(),
    limit: {
      tries: 1
    }
  }]
};
;// ./src/tasks/familiarweight.ts
function familiarweight_typeof(o) { "@babel/helpers - typeof"; return familiarweight_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, familiarweight_typeof(o); }
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject0, familiarweight_templateObject1, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24, familiarweight_templateObject25, familiarweight_templateObject26, familiarweight_templateObject27, familiarweight_templateObject28, familiarweight_templateObject29, familiarweight_templateObject30, familiarweight_templateObject31, familiarweight_templateObject32, familiarweight_templateObject33, familiarweight_templateObject34, familiarweight_templateObject35, familiarweight_templateObject36, familiarweight_templateObject37, familiarweight_templateObject38, familiarweight_templateObject39, familiarweight_templateObject40, familiarweight_templateObject41, familiarweight_templateObject42, familiarweight_templateObject43, familiarweight_templateObject44;
function familiarweight_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function familiarweight_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? familiarweight_ownKeys(Object(t), !0).forEach(function (r) { familiarweight_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : familiarweight_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function familiarweight_defineProperty(e, r, t) { return (r = familiarweight_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function familiarweight_toPropertyKey(t) { var i = familiarweight_toPrimitive(t, "string"); return "symbol" == familiarweight_typeof(i) ? i : i + ""; }
function familiarweight_toPrimitive(t, r) { if ("object" != familiarweight_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != familiarweight_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function familiarweight_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





var maxTurns = byClass({
  "Accordion Thief": 4,
  default: 6
});
var outfit = {
  hat: template_string_$item(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
  weapon: template_string_$item(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  offhand: template_string_$item(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["rope"]))),
  back: template_string_$item(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["Buddy Bjorn"]))),
  pants: template_string_$item(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["Great Wolf's beastly trousers"]))),
  acc1: template_string_$item(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["Brutal brogues"]))),
  acc2: template_string_$item(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["Beach Comb"]))),
  acc3: template_string_$item(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["hewn moon-rune spoon"]))),
  familiar: template_string_$familiar(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["Comma Chameleon"]))),
  riders: {
    "buddy-bjorn": template_string_$familiar(familiarweight_templateObject0 || (familiarweight_templateObject0 = familiarweight_taggedTemplateLiteral(["Misshapen Animal Skeleton"])))
  }
};
var FamiliarWeightQuest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [familiarweight_objectSpread(familiarweight_objectSpread({}, skillTask(template_string_$skill(familiarweight_templateObject1 || (familiarweight_templateObject1 = familiarweight_taggedTemplateLiteral(["Chorale of Companionship"]))))), {}, {
    class: $classes(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["Accordion Thief"])))
  }), potionTask(template_string_$item(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["green candy heart"])))), beachTask(template_string_$effect(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"])))), {
    name: "Puzzle Champ",
    completed: () => property_get("_witchessBuff"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("witchess"),
    limit: {
      tries: 1
    }
  }, {
    name: "Play Pool",
    completed: () => lib_have(template_string_$effect(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 1"),
    limit: {
      tries: 1
    }
  }, {
    name: "Fireworks Hat",
    completed: () => lib_have(template_string_$item(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["sombrero-mounted sparkler"])))),
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2", false),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=fwshop&action=buyitem&quantity=1&whichrow=1248&pwd"),
    limit: {
      tries: 1
    }
  }, {
    name: "Tea Party",
    completed: () => property_get("_madTeaParty"),
    prepare: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["\"DRINK ME\" potion"]))));
    },
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("hatter sombrero-mounted sparkler"),
    limit: {
      tries: 1
    }
  }, {
    name: "Homemade Robot Gear",
    completed: () => lib_have(template_string_$item(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["homemade robot gear"])))) || property_get("commaFamiliar") === template_string_$familiar(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Homemade Robot"]))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"])))),
    outfit: {
      familiar: template_string_$familiar(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["Homemade Robot"])))
    },
    acquire: [{
      item: template_string_$item(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Feed Chameleon",
    completed: () => property_get("commaFamiliar") === template_string_$familiar(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["Homemade Robot"]))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("inv_equip.php?which=2&action=equip&whichitem=".concat((0,external_kolmafia_namespaceObject.toInt)(template_string_$item(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["homemade robot gear"])))), "&pwd"));
      (0,external_kolmafia_namespaceObject.visitUrl)("charpane.php");
    },
    outfit: {
      familiar: template_string_$familiar(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["Comma Chameleon"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Icy Revenge",
    completed: () => lib_have(template_string_$effect(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["Cold Hearted"]))), 20),
    ready: () => lib_have(template_string_$item(familiarweight_templateObject25 || (familiarweight_templateObject25 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject26 || (familiarweight_templateObject26 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"])))),
    limit: {
      tries: 4
    }
  }, {
    name: "Blue Taffy",
    completed: () => lib_have(template_string_$effect(familiarweight_templateObject27 || (familiarweight_templateObject27 = familiarweight_taggedTemplateLiteral(["Blue Swayed"]))), 50),
    ready: () => lib_have(template_string_$item(familiarweight_templateObject28 || (familiarweight_templateObject28 = familiarweight_taggedTemplateLiteral(["pulled blue taffy"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject29 || (familiarweight_templateObject29 = familiarweight_taggedTemplateLiteral(["pulled blue taffy"])))),
    limit: {
      tries: 5
    }
  }, {
    name: "Unlock Beach",
    completed: () => property_get("lastDesertUnlock") === (0,external_kolmafia_namespaceObject.myAscensions)(),
    do: () => {
      var desertAccessItem = (0,external_kolmafia_namespaceObject.knollAvailable)() ? template_string_$item(familiarweight_templateObject30 || (familiarweight_templateObject30 = familiarweight_taggedTemplateLiteral(["bitchin' meatcar"]))) : template_string_$item(familiarweight_templateObject31 || (familiarweight_templateObject31 = familiarweight_taggedTemplateLiteral(["Desert Bus pass"])));
      if (!lib_have(desertAccessItem)) {
        (0,external_kolmafia_namespaceObject.cliExecute)("acquire ".concat(desertAccessItem.name));
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Tune Moon",
    completed: () => (0,external_kolmafia_namespaceObject.mySign)() === "Platypus",
    ready: () => !property_get("moonTuned"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon platypus"),
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(familiarweight_templateObject32 || (familiarweight_templateObject32 = familiarweight_taggedTemplateLiteral(["silver face paint"])))), {
    name: "Gingerbread Clock",
    completed: () => property_get("_gingerbreadClockAdvanced"),
    ready: () => property_get("_gingerbreadCityTurns") === 0,
    do: $location(familiarweight_templateObject33 || (familiarweight_templateObject33 = familiarweight_taggedTemplateLiteral(["Gingerbread Civic Center"]))),
    limit: {
      tries: 1
    }
  }, {
    // Need 178 lbs for 50 sprinkles from 1 free kill
    name: "Gingerbread Sprinkles",
    completed: () => lib_have(template_string_$item(familiarweight_templateObject34 || (familiarweight_templateObject34 = familiarweight_taggedTemplateLiteral(["sprinkles"]))), 50) || property_get("_gingerbreadCityTurns") >= 4 || lib_have(template_string_$item(familiarweight_templateObject35 || (familiarweight_templateObject35 = familiarweight_taggedTemplateLiteral(["gingerbread spice latte"])))) || lib_have(template_string_$effect(familiarweight_templateObject36 || (familiarweight_templateObject36 = familiarweight_taggedTemplateLiteral(["Whole Latte Love"])))),
    ready: () => property_get("_gingerbreadClockAdvanced"),
    prepare: () => {
      var weight = (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)()) + (0,external_kolmafia_namespaceObject.weightAdjustment)();
      if (weight < 158) {
        throw "Unable to guarantee 50 sprinkles, current familiar weight of ".concat(weight, " lbs is < 158 lbs");
      }
    },
    do: $location(familiarweight_templateObject37 || (familiarweight_templateObject37 = familiarweight_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))),
    outfit: familiarweight_objectSpread(familiarweight_objectSpread({}, outfit), {}, {
      familiar: template_string_$familiar(familiarweight_templateObject38 || (familiarweight_templateObject38 = familiarweight_taggedTemplateLiteral(["Chocolate Lab"]))),
      famequip: template_string_$item(familiarweight_templateObject39 || (familiarweight_templateObject39 = familiarweight_taggedTemplateLiteral(["tiny stillsuit"])))
    }),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(familiarweight_templateObject40 || (familiarweight_templateObject40 = familiarweight_taggedTemplateLiteral(["Meteor Shower"])))).skill(template_string_$skill(familiarweight_templateObject41 || (familiarweight_templateObject41 = familiarweight_taggedTemplateLiteral(["Shattering Punch"]))))),
    limit: {
      tries: 1
    }
  }, {
    name: "Gingerbread Noon",
    completed: () => property_get("_gingerbreadCityTurns") >= 5,
    do: $location(familiarweight_templateObject42 || (familiarweight_templateObject42 = familiarweight_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))),
    outfit: familiarweight_objectSpread(familiarweight_objectSpread({}, outfit), {}, {
      familiar: template_string_$familiar(familiarweight_templateObject43 || (familiarweight_templateObject43 = familiarweight_taggedTemplateLiteral(["Pair of Stomping Boots"])))
    }),
    choices: {
      1208: 3
    },
    combat: new CSCombatStrategy().macro(combat_Macro.runaway()),
    limit: {
      tries: 3
    }
  }, potionTask(template_string_$item(familiarweight_templateObject44 || (familiarweight_templateObject44 = familiarweight_taggedTemplateLiteral(["gingerbread spice latte"])))), meteorShowerTask(), libramTask(), {
    name: "Test",
    completed: () => CommunityService.FamiliarWeight.isDone(),
    do: () => CommunityService.FamiliarWeight.run(() => undefined, maxTurns),
    outfit: outfit,
    limit: {
      tries: 1
    }
  }]
};
;// ./src/tasks/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject0, hotres_templateObject1, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17;
function hotres_toConsumableArray(r) { return hotres_arrayWithoutHoles(r) || hotres_iterableToArray(r) || hotres_unsupportedIterableToArray(r) || hotres_nonIterableSpread(); }
function hotres_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function hotres_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return hotres_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? hotres_arrayLikeToArray(r, a) : void 0; } }
function hotres_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function hotres_arrayWithoutHoles(r) { if (Array.isArray(r)) return hotres_arrayLikeToArray(r); }
function hotres_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function hotres_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var hotres_buffs = $effects(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Feeling Peaceful, Astral Shell, Ghostly Shell, Empathy, Leash of Linguini, Blood Bond"])));
var HotResQuest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [].concat(hotres_toConsumableArray(hotres_buffs.map(effect => skillTask(effect))), [beachTask(template_string_$effect(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["Hot-Headed"])))), {
    name: "Foam Suit",
    completed: () => lib_have(template_string_$effect(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))),
    ready: () => property_get("_fireExtinguisherCharge") >= 10 && property_get("_saberForceUses") < 5,
    do: $location(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill(template_string_$skill(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["Use the Force"]))))),
    choices: {
      1387: 3
    },
    outfit: {
      weapon: template_string_$item(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))),
      familiar: template_string_$familiar(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["none"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.HotRes.isDone(),
    do: () => CommunityService.HotRes.run(() => undefined, 1),
    outfit: {
      weapon: template_string_$item(hotres_templateObject0 || (hotres_templateObject0 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(hotres_templateObject1 || (hotres_templateObject1 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))),
      back: template_string_$item(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      shirt: template_string_$item(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["Jurassic Parka"]))),
      pants: template_string_$item(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: template_string_$item(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["cursed monkey's paw"]))),
      acc2: template_string_$item(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["hewn moon-rune spoon"]))),
      acc3: template_string_$item(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["Beach Comb"]))),
      familiar: template_string_$familiar(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Exotic Parrot"]))),
      famequip: template_string_$item(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["tiny stillsuit"]))),
      modes: {
        retrocape: ["vampire", "hold"],
        parka: "pterodactyl"
      }
    },
    limit: {
      tries: 1
    }
  }])
};
;// ./node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_templateObject, TunnelOfLove_templateObject2;
function TunnelOfLove_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





/**
 * @returns Is the love tunnel available?
 */
function TunnelOfLove_have() {
  return get("loveTunnelAvailable");
}
/**
 * @returns Have we visited the love tunnel yet today?
 */
function isUsed() {
  return get("_loveTunnelUsed");
}
/**
 * @returns Do we `have` an Enamorang?
 */
function haveLovEnamorang() {
  return lib_have(template_string_$item(TunnelOfLove_templateObject || (TunnelOfLove_templateObject = TunnelOfLove_taggedTemplateLiteral(["LOV Enamorang"]))));
}
/**
 * @returns How many enamorangs have we used today?
 */
function getLovEnamorangUses() {
  return property_get("_enamorangs");
}
/**
 * @returns Can we currently use an enamorang?
 */
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
/**
 * @returns The Monster currently in our enamorang; `null` for none
 */
function getLovEnamorangMonster() {
  return property_get("enamorangMonster");
}
var LovEnamorang = new Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());
/**
 * Internal function used for `fightAll`
 *
 * @param equipment The equipment to select from the tunnel
 * @returns The relevant choice option
 */
function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;
    case "LOV Epaulettes":
      return 2;
    case "LOV Earring":
      return 3;
  }
}
/**
 *Internal function used for `fightAll`
 *
 * @param effect The effect to select from the tunnel
 * @returns The relevant choice option
 */
function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;
    case "Open Heart Surgery":
      return 2;
    case "Wandering Eye Surgery":
      return 3;
  }
}
/**
 * Internal function used for `fightAll`
 *
 * @param extra The extra item to select from the tunnel
 * @returns The relevant choice option
 */
function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;
    case "LOV Emotionizer":
      return 2;
    case "LOV Extraterrestrial Chocolate":
      return 3;
    case "LOV Echinacea Bouquet":
      return 4;
    case "LOV Elephant":
      return 5;
    case "toast":
      return 6;
    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 *
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */
function fightAll(equipment, effect, extra) {
  withChoices({
    1222: 1,
    1223: 1,
    1224: equipmentChoice(equipment),
    1225: 1,
    1226: effectChoice(effect),
    1227: 1,
    1228: extraChoice(extra)
  }, () => {
    (0,external_kolmafia_namespaceObject.adv1)($location(TunnelOfLove_templateObject2 || (TunnelOfLove_templateObject2 = TunnelOfLove_taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
  });
}
;// ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;
function Witchess_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var Witchess_item = template_string_$item(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
/**
 * @returns Is the Witchess installed and available in our campground?
 */
function Witchess_have() {
  return haveInCampground(Witchess_item);
}
/**
 * @returns How many Witchess fights have we done so far today?
 */
function fightsDone() {
  return property_get("_witchessFights");
}
var pieces = external_kolmafia_namespaceObject.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
/**
 * Fight a Witchess piece of your choice
 *
 * @param piece The piece to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns The value of `runCombat()`, which is the page html of the final round
 */
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");
  if (!(0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!(0,external_kolmafia_namespaceObject.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!(0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1182&piece=").concat(piece.id), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  return external_kolmafia_namespaceObject.runCombat.apply(void 0, combatParams);
}
;// ./src/tasks/leveling.ts
function leveling_typeof(o) { "@babel/helpers - typeof"; return leveling_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, leveling_typeof(o); }
var leveling_templateObject, leveling_templateObject2, leveling_templateObject3, leveling_templateObject4, leveling_templateObject5, leveling_templateObject6, leveling_templateObject7, leveling_templateObject8, leveling_templateObject9, leveling_templateObject0, leveling_templateObject1, leveling_templateObject10, leveling_templateObject11, leveling_templateObject12, leveling_templateObject13, leveling_templateObject14, leveling_templateObject15, leveling_templateObject16, leveling_templateObject17, leveling_templateObject18, leveling_templateObject19, leveling_templateObject20, leveling_templateObject21, leveling_templateObject22, leveling_templateObject23, leveling_templateObject24, leveling_templateObject25, leveling_templateObject26, leveling_templateObject27, leveling_templateObject28, leveling_templateObject29, leveling_templateObject30, leveling_templateObject31, leveling_templateObject32, leveling_templateObject33, leveling_templateObject34, leveling_templateObject35, leveling_templateObject36, leveling_templateObject37, leveling_templateObject38, leveling_templateObject39, leveling_templateObject40, leveling_templateObject41, leveling_templateObject42, leveling_templateObject43, leveling_templateObject44, leveling_templateObject45, leveling_templateObject46, leveling_templateObject47, leveling_templateObject48, leveling_templateObject49, leveling_templateObject50, leveling_templateObject51, leveling_templateObject52, leveling_templateObject53, leveling_templateObject54, leveling_templateObject55, leveling_templateObject56, leveling_templateObject57, leveling_templateObject58, leveling_templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199;
function leveling_slicedToArray(r, e) { return leveling_arrayWithHoles(r) || leveling_iterableToArrayLimit(r, e) || leveling_unsupportedIterableToArray(r, e) || leveling_nonIterableRest(); }
function leveling_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function leveling_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function leveling_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function leveling_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = leveling_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function leveling_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function leveling_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? leveling_ownKeys(Object(t), !0).forEach(function (r) { leveling_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : leveling_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function leveling_defineProperty(e, r, t) { return (r = leveling_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function leveling_toPropertyKey(t) { var i = leveling_toPrimitive(t, "string"); return "symbol" == leveling_typeof(i) ? i : i + ""; }
function leveling_toPrimitive(t, r) { if ("object" != leveling_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != leveling_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function leveling_toConsumableArray(r) { return leveling_arrayWithoutHoles(r) || leveling_iterableToArray(r) || leveling_unsupportedIterableToArray(r) || leveling_nonIterableSpread(); }
function leveling_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function leveling_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return leveling_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? leveling_arrayLikeToArray(r, a) : void 0; } }
function leveling_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function leveling_arrayWithoutHoles(r) { if (Array.isArray(r)) return leveling_arrayLikeToArray(r); }
function leveling_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function leveling_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }







var generalStoreItem = byStat({
  Muscle: template_string_$item(leveling_templateObject || (leveling_templateObject = leveling_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))),
  Mysticality: template_string_$item(leveling_templateObject2 || (leveling_templateObject2 = leveling_taggedTemplateLiteral(["glittery mascara"]))),
  Moxie: template_string_$item(leveling_templateObject3 || (leveling_templateObject3 = leveling_taggedTemplateLiteral(["hair spray"])))
});
var leveling_buffs = {
  stats: $effects(leveling_templateObject4 || (leveling_templateObject4 = leveling_taggedTemplateLiteral(["Triple-Sized, Big, Song of Bravado, Stevedave's Shanty of Superiority, Rage of the Reindeer, Feeling Excited, Carol of the Thrills"]))),
  familiarWeight: $effects(leveling_templateObject5 || (leveling_templateObject5 = leveling_taggedTemplateLiteral(["Empathy, Leash of Linguini, Blood Bond"]))),
  item: $effects(leveling_templateObject6 || (leveling_templateObject6 = leveling_taggedTemplateLiteral(["Singer's Faithful Ocelot, The Spirit of Taking"]))),
  damage: $effects(leveling_templateObject7 || (leveling_templateObject7 = leveling_taggedTemplateLiteral(["Carol of the Hells, Carol of the Bulls, Frenzied, Bloody"], ["Carol of the Hells, Carol of the Bulls, Frenzied\\, Bloody"]))),
  elementalDamage: $effects(leveling_templateObject8 || (leveling_templateObject8 = leveling_taggedTemplateLiteral(["Takin' It Greasy, Intimidating Mien, Rotten Memories, Pyromania, Frostbeard"]))),
  survivability: $effects(leveling_templateObject9 || (leveling_templateObject9 = leveling_taggedTemplateLiteral(["Blood Bubble, Ruthlessly Efficient, Feeling Peaceful, Astral Shell, Ghostly Shell, Elemental Saucesphere"]))),
  monsterLevel: $effects(leveling_templateObject0 || (leveling_templateObject0 = leveling_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance, Pride of the Puffin, Drescher's Annoying Noise"]))),
  aprilShield: $effects(leveling_templateObject1 || (leveling_templateObject1 = leveling_taggedTemplateLiteral(["Thoughtful Empathy, Slippery as a Seal, Strength of the Tortoise, Tubes of Universal Meat, Lubricating Sauce, Disco over Matter, Mariachi Moisture"])))
};
var _byStat = byStat({
    Muscle: {
      sauceFruit: template_string_$item(leveling_templateObject10 || (leveling_templateObject10 = leveling_taggedTemplateLiteral(["lemon"]))),
      saucePotion: template_string_$item(leveling_templateObject11 || (leveling_templateObject11 = leveling_taggedTemplateLiteral(["philter of phorce"]))),
      sauceEffect: template_string_$effect(leveling_templateObject12 || (leveling_templateObject12 = leveling_taggedTemplateLiteral(["Phorcefullness"])))
    },
    Mysticality: {
      sauceFruit: template_string_$item(leveling_templateObject13 || (leveling_templateObject13 = leveling_taggedTemplateLiteral(["grapefruit"]))),
      // From Prevent Scurvy and Sobriety
      saucePotion: template_string_$item(leveling_templateObject14 || (leveling_templateObject14 = leveling_taggedTemplateLiteral(["ointment of the occult"]))),
      sauceEffect: template_string_$effect(leveling_templateObject15 || (leveling_templateObject15 = leveling_taggedTemplateLiteral(["Mystically Oiled"])))
    },
    Moxie: {
      sauceFruit: template_string_$item(leveling_templateObject16 || (leveling_templateObject16 = leveling_taggedTemplateLiteral(["olive"]))),
      // From Evil Olive
      saucePotion: template_string_$item(leveling_templateObject17 || (leveling_templateObject17 = leveling_taggedTemplateLiteral(["serum of sarcasm"]))),
      sauceEffect: template_string_$effect(leveling_templateObject18 || (leveling_templateObject18 = leveling_taggedTemplateLiteral(["Superhuman Sarcasm"])))
    }
  }),
  saucePotion = _byStat.saucePotion,
  sauceFruit = _byStat.sauceFruit,
  sauceEffect = _byStat.sauceEffect;
var synthEffect = byStat({
  Muscle: template_string_$effect(leveling_templateObject19 || (leveling_templateObject19 = leveling_taggedTemplateLiteral(["Synthesis: Movement"]))),
  Mysticality: template_string_$effect(leveling_templateObject20 || (leveling_templateObject20 = leveling_taggedTemplateLiteral(["Synthesis: Learning"]))),
  Moxie: template_string_$effect(leveling_templateObject21 || (leveling_templateObject21 = leveling_taggedTemplateLiteral(["Synthesis: Style"])))
});
var synthPairs = byStat({
  Muscle: [[template_string_$item(leveling_templateObject22 || (leveling_templateObject22 = leveling_taggedTemplateLiteral(["Crimbo fudge"]))), template_string_$item(leveling_templateObject23 || (leveling_templateObject23 = leveling_taggedTemplateLiteral(["Crimbo peppermint bark"])))], [template_string_$item(leveling_templateObject24 || (leveling_templateObject24 = leveling_taggedTemplateLiteral(["bag of many confections"]))), template_string_$item(leveling_templateObject25 || (leveling_templateObject25 = leveling_taggedTemplateLiteral(["Crimbo peppermint bark"])))], [template_string_$item(leveling_templateObject26 || (leveling_templateObject26 = leveling_taggedTemplateLiteral(["Crimbo candied pecan"]))), template_string_$item(leveling_templateObject27 || (leveling_templateObject27 = leveling_taggedTemplateLiteral(["peppermint patty"])))], [template_string_$item(leveling_templateObject28 || (leveling_templateObject28 = leveling_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(leveling_templateObject29 || (leveling_templateObject29 = leveling_taggedTemplateLiteral(["peppermint patty"])))]],
  Mysticality: [[template_string_$item(leveling_templateObject30 || (leveling_templateObject30 = leveling_taggedTemplateLiteral(["Crimbo fudge"]))), template_string_$item(leveling_templateObject31 || (leveling_templateObject31 = leveling_taggedTemplateLiteral(["Crimbo fudge"])))], [template_string_$item(leveling_templateObject32 || (leveling_templateObject32 = leveling_taggedTemplateLiteral(["Crimbo fudge"]))), template_string_$item(leveling_templateObject33 || (leveling_templateObject33 = leveling_taggedTemplateLiteral(["bag of many confections"])))], [template_string_$item(leveling_templateObject34 || (leveling_templateObject34 = leveling_taggedTemplateLiteral(["Crimbo peppermint bark"]))), template_string_$item(leveling_templateObject35 || (leveling_templateObject35 = leveling_taggedTemplateLiteral(["Crimbo candied pecan"])))], [template_string_$item(leveling_templateObject36 || (leveling_templateObject36 = leveling_taggedTemplateLiteral(["Crimbo peppermint bark"]))), template_string_$item(leveling_templateObject37 || (leveling_templateObject37 = leveling_taggedTemplateLiteral(["peppermint sprout"])))], [template_string_$item(leveling_templateObject38 || (leveling_templateObject38 = leveling_taggedTemplateLiteral(["Crimbo candied pecan"]))), template_string_$item(leveling_templateObject39 || (leveling_templateObject39 = leveling_taggedTemplateLiteral(["peppermint crook"])))]],
  Moxie: [[template_string_$item(leveling_templateObject40 || (leveling_templateObject40 = leveling_taggedTemplateLiteral(["Crimbo fudge"]))), template_string_$item(leveling_templateObject41 || (leveling_templateObject41 = leveling_taggedTemplateLiteral(["Crimbo candied pecan"])))], [template_string_$item(leveling_templateObject42 || (leveling_templateObject42 = leveling_taggedTemplateLiteral(["Crimbo fudge"]))), template_string_$item(leveling_templateObject43 || (leveling_templateObject43 = leveling_taggedTemplateLiteral(["peppermint sprout"])))], [template_string_$item(leveling_templateObject44 || (leveling_templateObject44 = leveling_taggedTemplateLiteral(["bag of many confections"]))), template_string_$item(leveling_templateObject45 || (leveling_templateObject45 = leveling_taggedTemplateLiteral(["Crimbo candied pecan"])))], [template_string_$item(leveling_templateObject46 || (leveling_templateObject46 = leveling_taggedTemplateLiteral(["bag of many confections"]))), template_string_$item(leveling_templateObject47 || (leveling_templateObject47 = leveling_taggedTemplateLiteral(["peppermint sprout"])))], [template_string_$item(leveling_templateObject48 || (leveling_templateObject48 = leveling_taggedTemplateLiteral(["Crimbo peppermint bark"]))), template_string_$item(leveling_templateObject49 || (leveling_templateObject49 = leveling_taggedTemplateLiteral(["peppermint twist"])))]]
});
var LOVEquipment = byStat({
  Muscle: template_string_$item(leveling_templateObject50 || (leveling_templateObject50 = leveling_taggedTemplateLiteral(["LOV Eardigan"]))),
  Mysticality: template_string_$item(leveling_templateObject51 || (leveling_templateObject51 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
  Moxie: template_string_$item(leveling_templateObject52 || (leveling_templateObject52 = leveling_taggedTemplateLiteral(["LOV Earrings"])))
});
var LevelingQuest = {
  name: "Leveling",
  completed: () => property_get("csServicesPerformed").split(",").length > 1 || freeKillSources.every(source => !source.available()),
  tasks: [innerElfTask(), potionTask(generalStoreItem, true), leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(leveling_templateObject53 || (leveling_templateObject53 = leveling_taggedTemplateLiteral(["flask of baconstone juice"]))))), {}, {
    class: $classes(leveling_templateObject54 || (leveling_templateObject54 = leveling_taggedTemplateLiteral(["Pastamancer, Turtle Tamer"])))
  }), // From juice bar
  leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(leveling_templateObject55 || (leveling_templateObject55 = leveling_taggedTemplateLiteral(["potion of temporary gr8ness"]))))), {}, {
    class: $classes(leveling_templateObject56 || (leveling_templateObject56 = leveling_taggedTemplateLiteral(["Disco Bandit"])))
  }), // From juice bar
  leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(leveling_templateObject57 || (leveling_templateObject57 = leveling_taggedTemplateLiteral(["pressurized potion of proficiency"]))))), {}, {
    class: $classes(leveling_templateObject58 || (leveling_templateObject58 = leveling_taggedTemplateLiteral(["Accordion Thief"])))
  }), // From juice bar
  leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(leveling_templateObject59 || (leveling_templateObject59 = leveling_taggedTemplateLiteral(["natural magick candle"]))))), {}, {
    class: $classes(_templateObject60 || (_templateObject60 = leveling_taggedTemplateLiteral(["Seal Clubber, Pastamancer, Sauceror, Disco Bandit"])))
  }), leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(_templateObject61 || (_templateObject61 = leveling_taggedTemplateLiteral(["Napalm In The Morning\u2122 candle"]))))), {}, {
    class: $classes(_templateObject62 || (_templateObject62 = leveling_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer"])))
  }), leveling_objectSpread(leveling_objectSpread({}, potionTask(template_string_$item(_templateObject63 || (_templateObject63 = leveling_taggedTemplateLiteral(["votive of confidence"]))))), {}, {
    class: $classes(_templateObject64 || (_templateObject64 = leveling_taggedTemplateLiteral(["Turtle Tamer, Pastamancer, Accordion Thief"])))
  }), potionTask(template_string_$item(_templateObject65 || (_templateObject65 = leveling_taggedTemplateLiteral(["MayDay\u2122 supply package"]))))].concat(leveling_toConsumableArray($effects(_templateObject66 || (_templateObject66 = leveling_taggedTemplateLiteral(["Lack of Body-Building, We're All Made of Starfish, Pomp & Circumsands, You Learned Something Maybe!"]))).map(beachTask)), [{
    name: "Vaccine",
    completed: () => property_get("_spacegateVaccine"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spacegate vaccine 2"),
    limit: {
      tries: 1
    }
  }, {
    name: "Boxing Daybuff",
    completed: () => property_get("_daycareSpa"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("daycare ".concat((0,external_kolmafia_namespaceObject.myPrimestat)().toString().toLowerCase())),
    limit: {
      tries: 1
    }
  }, {
    name: "Smile of Lyle",
    completed: () => property_get("_lyleFavored"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("monorail buff"),
    limit: {
      tries: 1
    }
  }, {
    name: "Telescope",
    completed: () => property_get("telescopeLookedHigh"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("telescope look high"),
    limit: {
      tries: 1
    }
  }, {
    name: "Cross Streams",
    completed: () => property_get("_streamsCrossed"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("crossstreams"),
    limit: {
      tries: 1
    }
  }, {
    // Minimize pants switching
    name: "Sewer Items",
    completed: () => template_string_$items(_templateObject67 || (_templateObject67 = leveling_taggedTemplateLiteral(["turtle totem, saucepan, stolen accordion"]))).every(item => lib_have(item)),
    do: () => template_string_$items(_templateObject68 || (_templateObject68 = leveling_taggedTemplateLiteral(["turtle totem, saucepan, stolen accordion"]))).forEach(item => (0,external_kolmafia_namespaceObject.retrieveItem)(item)),
    outfit: {
      pants: template_string_$item(_templateObject69 || (_templateObject69 = leveling_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }], leveling_toConsumableArray(leveling_buffs.stats.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.familiarWeight.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.damage.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.item.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.elementalDamage.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.survivability.map(effect => skillTask(effect))), leveling_toConsumableArray(leveling_buffs.aprilShield.map(effect => skillTask(effect, true))), [leveling_objectSpread(leveling_objectSpread({}, skillTask(byStat({
    Muscle: template_string_$effect(_templateObject70 || (_templateObject70 = leveling_taggedTemplateLiteral(["Quiet Determination"]))),
    Mysticality: template_string_$effect(_templateObject71 || (_templateObject71 = leveling_taggedTemplateLiteral(["Inscrutable Gaze"]))),
    Moxie: template_string_$effect(_templateObject72 || (_templateObject72 = leveling_taggedTemplateLiteral(["Quiet Desperation"])))
  }))), {}, {
    name: "Facial Expression"
  })], leveling_toConsumableArray($skills(_templateObject73 || (_templateObject73 = leveling_taggedTemplateLiteral(["Advanced Saucecrafting, Prevent Scurvy and Sobriety, Summon Crimbo Candy"]))).map(effect => skillTask(effect))), [{
    name: "Get Range",
    completed: () => property_get("hasRange"),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject74 || (_templateObject74 = leveling_taggedTemplateLiteral(["Dramatic\u2122 range"])))),
    acquire: [{
      item: template_string_$item(_templateObject75 || (_templateObject75 = leveling_taggedTemplateLiteral(["Dramatic\u2122 range"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Saucecraft",
    completed: () => lib_have(sauceEffect),
    ready: () => lib_have(sauceFruit),
    do: () => (0,external_kolmafia_namespaceObject.use)(saucePotion),
    acquire: [{
      item: saucePotion
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Cloud-Talk",
    completed: () => lib_have(template_string_$effect(_templateObject76 || (_templateObject76 = leveling_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"])))),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky"),
    limit: {
      tries: 1
    }
  }, {
    name: synthEffect.name,
    completed: () => lib_have(synthEffect),
    do: () => {
      var _iterator = leveling_createForOfIteratorHelper(synthPairs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = leveling_slicedToArray(_step.value, 2),
            candy1 = _step$value[0],
            candy2 = _step$value[1];
          var enough = candy1 === candy2 ? lib_have(candy1, 2) : lib_have(candy1) && (0,external_kolmafia_namespaceObject.retrieveItem)(candy2);
          if (enough) {
            if ((0,external_kolmafia_namespaceObject.sweetSynthesis)(candy1, candy2)) return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "April Shower",
    completed: () => property_get("_aprilShower"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("shower ".concat((0,external_kolmafia_namespaceObject.myPrimestat)())),
    limit: {
      tries: 1
    }
  }, {
    name: "Bastille",
    completed: () => property_get("_bastilleGames") > 0,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("bastille.ash mainstat brutalist"),
    outfit: {
      offhand: template_string_$item(_templateObject77 || (_templateObject77 = leveling_taggedTemplateLiteral(["familiar scrapbook"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Holiday Runaway",
    completed: () => getTodaysHolidayWanderers().length === 0 || property_get("_banderRunaways") >= 2,
    do: $location(_templateObject78 || (_templateObject78 = leveling_taggedTemplateLiteral(["Noob Cave"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.runaway()),
    outfit: {
      familiar: template_string_$familiar(_templateObject79 || (_templateObject79 = leveling_taggedTemplateLiteral(["Pair of Stomping Boots"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Ninja Costume",
    completed: () => lib_have(template_string_$item(_templateObject80 || (_templateObject80 = leveling_taggedTemplateLiteral(["li'l ninja costume"])))) && lib_have(template_string_$effect(_templateObject81 || (_templateObject81 = leveling_taggedTemplateLiteral(["Giant Growth"])))),
    do: $location(_templateObject82 || (_templateObject82 = leveling_taggedTemplateLiteral(["The Haiku Dungeon"]))),
    post: () => (0,external_kolmafia_namespaceObject.visitUrl)("questlog.php?which=1"),
    // Check quest log for protonic ghost location
    choices: peridotChoice($monster(_templateObject83 || (_templateObject83 = leveling_taggedTemplateLiteral(["amateur ninja"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(_templateObject84 || (_templateObject84 = leveling_taggedTemplateLiteral(["Giant Growth"])))).skill(template_string_$skill(_templateObject85 || (_templateObject85 = leveling_taggedTemplateLiteral(["Chest X-Ray"]))))),
    outfit: {
      back: template_string_$item(_templateObject86 || (_templateObject86 = leveling_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: template_string_$item(_templateObject87 || (_templateObject87 = leveling_taggedTemplateLiteral(["weeping willow wand"]))),
      acc2: template_string_$item(_templateObject88 || (_templateObject88 = leveling_taggedTemplateLiteral(["Peridot of Peril"]))),
      acc3: template_string_$item(_templateObject89 || (_templateObject89 = leveling_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Nanorhino Buff",
    completed: () => lib_have(byStat({
      Muscle: template_string_$effect(_templateObject90 || (_templateObject90 = leveling_taggedTemplateLiteral(["Nanobrawny"]))),
      Mysticality: template_string_$effect(_templateObject91 || (_templateObject91 = leveling_taggedTemplateLiteral(["Nanobrainy"]))),
      Moxie: template_string_$effect(_templateObject92 || (_templateObject92 = leveling_taggedTemplateLiteral(["Nanoballsy"])))
    })),
    ready: () => property_get("ghostLocation") !== $location(_templateObject93 || (_templateObject93 = leveling_taggedTemplateLiteral(["none"]))) && property_get("_nanorhinoCharge") >= 100,
    do: () => (0,external_kolmafia_namespaceObject.adv1)(property_get("ghostLocation", $location(_templateObject94 || (_templateObject94 = leveling_taggedTemplateLiteral(["none"])))), 0, ""),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(byPrimaryClass({
      "Seal Clubber": template_string_$skill(_templateObject95 || (_templateObject95 = leveling_taggedTemplateLiteral(["Clobber"]))),
      "Turtle Tamer": template_string_$skill(_templateObject96 || (_templateObject96 = leveling_taggedTemplateLiteral(["Toss"]))),
      Pastamancer: template_string_$skill(_templateObject97 || (_templateObject97 = leveling_taggedTemplateLiteral(["Spaghetti Spear"]))),
      Sauceror: template_string_$skill(_templateObject98 || (_templateObject98 = leveling_taggedTemplateLiteral(["Salsaball"]))),
      "Disco Bandit": template_string_$skill(_templateObject99 || (_templateObject99 = leveling_taggedTemplateLiteral(["Suckerpunch"]))),
      "Accordion Thief": template_string_$skill(_templateObject100 || (_templateObject100 = leveling_taggedTemplateLiteral(["Sing"])))
    })).delevel().skill(template_string_$skill(_templateObject101 || (_templateObject101 = leveling_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(_templateObject102 || (_templateObject102 = leveling_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(_templateObject103 || (_templateObject103 = leveling_taggedTemplateLiteral(["Shoot Ghost"])))).skill(template_string_$skill(_templateObject104 || (_templateObject104 = leveling_taggedTemplateLiteral(["Trap Ghost"]))))),
    outfit: {
      back: template_string_$item(_templateObject105 || (_templateObject105 = leveling_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: template_string_$item(_templateObject106 || (_templateObject106 = leveling_taggedTemplateLiteral(["weeping willow wand"]))),
      familiar: template_string_$familiar(_templateObject107 || (_templateObject107 = leveling_taggedTemplateLiteral(["Nanorhino"])))
    },
    limit: {
      tries: 2
    } // Intro NC
  }, {
    name: "Do You Crush What I Crush?",
    completed: () => lib_have(template_string_$effect(_templateObject108 || (_templateObject108 = leveling_taggedTemplateLiteral(["Do You Crush What I Crush?"])))),
    do: $location(_templateObject109 || (_templateObject109 = leveling_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(_templateObject110 || (_templateObject110 = leveling_taggedTemplateLiteral(["Bowl a Curveball"]))))),
    outfit: {
      familiar: template_string_$familiar(_templateObject111 || (_templateObject111 = leveling_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
      famequip: template_string_$item.none
    },
    limit: {
      tries: 1
    }
  }, {
    name: "LOV Tunnel",
    completed: () => property_get("_loveTunnelUsed"),
    prepare: () => {
      burnLibrams();
      var itemDrop = modifier_get("Item Drop");
      if (itemDrop < 100) {
        throw "Unable to guarantee the LOV Elixir drops, current item drop of ".concat(itemDrop, "% is < 100%");
      }
    },
    do: () => fightAll(byStat({
      Muscle: "LOV Eardigan",
      Mysticality: "LOV Epaulettes",
      Moxie: "LOV Earring"
    }), "Open Heart Surgery", "LOV Extraterrestrial Chocolate"),
    post: () => {
      var elixirs = template_string_$items(_templateObject112 || (_templateObject112 = leveling_taggedTemplateLiteral(["LOV Elixir #3, LOV Elixir #6"]))).filter(elixir => !lib_have(elixir));
      if (elixirs.length > 0) throw "".concat(elixirs, " did not drop");
    },
    combat: new CSCombatStrategy().macro(combat_Macro.if_($monster(_templateObject113 || (_templateObject113 = leveling_taggedTemplateLiteral(["LOV Enforcer"]))), combat_Macro.attack().repeat()).if_($monster(_templateObject114 || (_templateObject114 = leveling_taggedTemplateLiteral(["LOV Engineer"]))), combat_Macro.skill(template_string_$skill(_templateObject115 || (_templateObject115 = leveling_taggedTemplateLiteral(["Toynado"])))).repeat()).if_($monster(_templateObject116 || (_templateObject116 = leveling_taggedTemplateLiteral(["LOV Equivocator"]))), combat_Macro["default"]())),
    outfit: {
      offhand: template_string_$item(_templateObject117 || (_templateObject117 = leveling_taggedTemplateLiteral(["June cleaver"]))),
      shirt: template_string_$item(_templateObject118 || (_templateObject118 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      famequip: template_string_$item.none
    },
    acquire: [{
      item: template_string_$item(_templateObject119 || (_templateObject119 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(_templateObject120 || (_templateObject120 = leveling_taggedTemplateLiteral(["LOV Elixir #3"])))), potionTask(template_string_$item(_templateObject121 || (_templateObject121 = leveling_taggedTemplateLiteral(["LOV Elixir #6"])))), {
    name: "Ten-Percent Bonus",
    completed: () => !lib_have(template_string_$item(_templateObject122 || (_templateObject122 = leveling_taggedTemplateLiteral(["a ten-percent bonus"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject123 || (_templateObject123 = leveling_taggedTemplateLiteral(["a ten-percent bonus"])))),
    outfit: {
      offhand: template_string_$item(_templateObject124 || (_templateObject124 = leveling_taggedTemplateLiteral(["familiar scrapbook"]))),
      equip: [LOVEquipment]
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Set Snojo",
    completed: () => !!property_get("snojoSetting"),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Snojo",
    completed: () => property_get("_snojoFreeFights") >= 10,
    do: $location(_templateObject125 || (_templateObject125 = leveling_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    combat: new CSCombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject126 || (_templateObject126 = leveling_taggedTemplateLiteral(["Bowl Straight Up"])))).default()),
    limit: {
      tries: 10
    }
  }, {
    name: "Post-Snojo Hottub",
    completed: () => $effects(_templateObject127 || (_templateObject127 = leveling_taggedTemplateLiteral(["Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut"]))).every(effect => !lib_have(effect)),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("hottub"),
    limit: {
      tries: 1
    }
  }, {
    name: "Eldritch Tentacle",
    completed: () => property_get("_eldritchHorrorEvoked"),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject128 || (_templateObject128 = leveling_taggedTemplateLiteral(["Evoke Eldritch Horror"])))),
    post: () => {
      if (lib_have(template_string_$effect(_templateObject129 || (_templateObject129 = leveling_taggedTemplateLiteral(["Beaten Up"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
    },
    combat: new CSCombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      shirt: template_string_$item(_templateObject130 || (_templateObject130 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    },
    acquire: [{
      item: template_string_$item(_templateObject131 || (_templateObject131 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "God Lobster",
    completed: () => property_get("_godLobsterFights") >= 3,
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1"),
    combat: new CSCombatStrategy().macro(combat_Macro["default"]()),
    choices: {
      1310: 1
    },
    outfit: {
      shirt: template_string_$item(_templateObject132 || (_templateObject132 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      famequip: template_string_$items(_templateObject133 || (_templateObject133 = leveling_taggedTemplateLiteral(["God Lobster's Ring, God Lobster's Scepter, tiny stillsuit"]))),
      familiar: template_string_$familiar(_templateObject134 || (_templateObject134 = leveling_taggedTemplateLiteral(["God Lobster"])))
    },
    acquire: [{
      item: template_string_$item(_templateObject135 || (_templateObject135 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 3
    }
  }, {
    name: "Oliver's Place: Goblin Flapper",
    completed: () => lib_have(template_string_$item(_templateObject136 || (_templateObject136 = leveling_taggedTemplateLiteral(["imported taffy"])))) || lib_have(template_string_$effect(_templateObject137 || (_templateObject137 = leveling_taggedTemplateLiteral(["Imported Strength"])))),
    ready: () => property_get("_speakeasyFreeFights") < 3,
    do: $location(_templateObject138 || (_templateObject138 = leveling_taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    choices: peridotChoice($monster(_templateObject139 || (_templateObject139 = leveling_taggedTemplateLiteral(["goblin flapper"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(_templateObject140 || (_templateObject140 = leveling_taggedTemplateLiteral(["Feel Envy"])))).skill(template_string_$skill(_templateObject141 || (_templateObject141 = leveling_taggedTemplateLiteral(["Portscan"])))).sing().kill()),
    outfit: {
      acc3: template_string_$item(_templateObject142 || (_templateObject142 = leveling_taggedTemplateLiteral(["Peridot of Peril"])))
    },
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(_templateObject143 || (_templateObject143 = leveling_taggedTemplateLiteral(["imported taffy"])))), {
    name: "Oliver's Place: Government Agent",
    completed: () => property_get("_speakeasyFreeFights") >= 3,
    do: $location(_templateObject144 || (_templateObject144 = leveling_taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    combat: new CSCombatStrategy().macro(() => combat_Macro.externalIf(!lib_have(template_string_$item(_templateObject145 || (_templateObject145 = leveling_taggedTemplateLiteral(["government cheese"])))), combat_Macro.skill(template_string_$skill(_templateObject146 || (_templateObject146 = leveling_taggedTemplateLiteral(["Feel Envy"]))))).externalIf(property_get("_speakeasyFreeFights") < 2, combat_Macro.skill(template_string_$skill(_templateObject147 || (_templateObject147 = leveling_taggedTemplateLiteral(["Portscan"]))))).default()),
    outfit: {
      shirt: template_string_$item(_templateObject148 || (_templateObject148 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      acc3: template_string_$item(_templateObject149 || (_templateObject149 = leveling_taggedTemplateLiteral(["backup camera"]))),
      modes: {
        backupcamera: "ml"
      }
    },
    acquire: [{
      item: template_string_$item(_templateObject150 || (_templateObject150 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 2
    }
  }, {
    name: "Witchess Witch",
    completed: () => lib_have(template_string_$item(_templateObject151 || (_templateObject151 = leveling_taggedTemplateLiteral(["battle broom"])))),
    ready: () => fightsDone() < 5,
    do: () => fightPiece($monster(_templateObject152 || (_templateObject152 = leveling_taggedTemplateLiteral(["Witchess Witch"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject153 || (_templateObject153 = leveling_taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill(template_string_$skill(_templateObject154 || (_templateObject154 = leveling_taggedTemplateLiteral(["Micrometeorite"])))).trySkill(template_string_$skill(_templateObject155 || (_templateObject155 = leveling_taggedTemplateLiteral(["Summon Love Stinkbug"])))).step(byStat({
      Mysticality: combat_Macro.attack(),
      default: combat_Macro.skill(template_string_$skill(_templateObject156 || (_templateObject156 = leveling_taggedTemplateLiteral(["Lunging Thrust-Smack"]))))
    })).repeat()),
    outfit: {
      weapon: template_string_$item(_templateObject157 || (_templateObject157 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(_templateObject158 || (_templateObject158 = leveling_taggedTemplateLiteral(["familiar scrapbook"]))),
      shirt: template_string_$item(_templateObject159 || (_templateObject159 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    },
    acquire: [{
      item: template_string_$item(_templateObject160 || (_templateObject160 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess King",
    completed: () => lib_have(template_string_$item(_templateObject161 || (_templateObject161 = leveling_taggedTemplateLiteral(["dented scepter"])))),
    ready: () => fightsDone() < 5,
    do: () => fightPiece($monster(_templateObject162 || (_templateObject162 = leveling_taggedTemplateLiteral(["Witchess King"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.delevel().attack().repeat()),
    outfit: {
      weapon: template_string_$item(_templateObject163 || (_templateObject163 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(_templateObject164 || (_templateObject164 = leveling_taggedTemplateLiteral(["familiar scrapbook"]))),
      shirt: template_string_$item(_templateObject165 || (_templateObject165 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    },
    acquire: [{
      item: template_string_$item(_templateObject166 || (_templateObject166 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess Queen",
    completed: () => lib_have(template_string_$item(_templateObject167 || (_templateObject167 = leveling_taggedTemplateLiteral(["very pointy crown"])))),
    ready: () => fightsDone() < 5,
    do: () => fightPiece($monster(_templateObject168 || (_templateObject168 = leveling_taggedTemplateLiteral(["Witchess Queen"])))),
    combat: new CSCombatStrategy().macro(combat_Macro.item(template_string_$item(_templateObject169 || (_templateObject169 = leveling_taggedTemplateLiteral(["Time-Spinner"])))).attack().repeat()),
    outfit: {
      weapon: template_string_$item(_templateObject170 || (_templateObject170 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(_templateObject171 || (_templateObject171 = leveling_taggedTemplateLiteral(["familiar scrapbook"]))),
      shirt: template_string_$item(_templateObject172 || (_templateObject172 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: template_string_$familiar(_templateObject173 || (_templateObject173 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    acquire: [{
      item: template_string_$item(_templateObject174 || (_templateObject174 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }], leveling_toConsumableArray(leveling_buffs.monsterLevel.map(effect => skillTask(effect))), [{
    name: "Deep Machine Tunnels",
    completed: () => property_get("_machineTunnelsAdv") >= 5,
    do: $location(_templateObject175 || (_templateObject175 = leveling_taggedTemplateLiteral(["The Deep Machine Tunnels"]))),
    combat: new CSCombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      shirt: template_string_$item(_templateObject176 || (_templateObject176 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      acc3: template_string_$item(_templateObject177 || (_templateObject177 = leveling_taggedTemplateLiteral(["backup camera"]))),
      familiar: template_string_$familiar(_templateObject178 || (_templateObject178 = leveling_taggedTemplateLiteral(["Machine Elf"]))),
      modes: {
        backupcamera: "ml"
      }
    },
    acquire: [{
      item: template_string_$item(_templateObject179 || (_templateObject179 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 5
    }
  }, {
    name: "Party Fair",
    completed: () => property_get("_questPartyFair") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)((0,external_kolmafia_namespaceObject.toUrl)($location(_templateObject180 || (_templateObject180 = leveling_taggedTemplateLiteral(["The Neverending Party"])))));
      if (["food", "booze"].includes(property_get("_questPartyFairQuest"))) {
        (0,external_kolmafia_namespaceObject.runChoice)(1); // Accept quest
      } else {
        (0,external_kolmafia_namespaceObject.runChoice)(2); // Decline quest
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Sausage Goblin",
    completed: () => property_get("_sausageFights") > 1,
    ready: () => getKramcoWandererChance() >= 1 && lib_have(template_string_$item(_templateObject181 || (_templateObject181 = leveling_taggedTemplateLiteral(["cosmic bowling ball"])))),
    do: $location(_templateObject182 || (_templateObject182 = leveling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 1
    },
    combat: new CSCombatStrategy().macro(combat_Macro.if_($monster(_templateObject183 || (_templateObject183 = leveling_taggedTemplateLiteral(["sausage goblin"]))), combat_Macro.skill(template_string_$skill(_templateObject184 || (_templateObject184 = leveling_taggedTemplateLiteral(["Bowl Sideways"])))).default()).abort()),
    outfit: {
      offhand: template_string_$item(_templateObject185 || (_templateObject185 = leveling_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      shirt: template_string_$item(_templateObject186 || (_templateObject186 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      acc3: template_string_$item(_templateObject187 || (_templateObject187 = leveling_taggedTemplateLiteral(["backup camera"]))),
      modes: {
        backupcamera: "ml"
      }
    },
    acquire: [{
      item: template_string_$item(_templateObject188 || (_templateObject188 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Neverending Party",
    completed: () => property_get("_neverendingPartyFreeTurns") >= 10 && lib_have(template_string_$effect(_templateObject189 || (_templateObject189 = leveling_taggedTemplateLiteral(["Spit Upon"])))),
    do: $location(_templateObject190 || (_templateObject190 = leveling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1324: 5
    },
    combat: new CSCombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject191 || (_templateObject191 = leveling_taggedTemplateLiteral(["Feel Pride"])))).trySkill(template_string_$skill(_templateObject192 || (_templateObject192 = leveling_taggedTemplateLiteral(["%fn, spit on me!"])))).default()),
    outfit: {
      shirt: template_string_$item(_templateObject193 || (_templateObject193 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      acc3: template_string_$item(_templateObject194 || (_templateObject194 = leveling_taggedTemplateLiteral(["backup camera"]))),
      modes: {
        backupcamera: "ml"
      }
    },
    acquire: [{
      item: template_string_$item(_templateObject195 || (_templateObject195 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 10
    }
  }, {
    name: "Free Kills",
    completed: () => freeKillSources.every(source => !source.available()),
    do: $location(_templateObject196 || (_templateObject196 = leveling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1324: 5
    },
    combat: new CSCombatStrategy().killFree(),
    outfit: {
      shirt: template_string_$item(_templateObject197 || (_templateObject197 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      acc3: template_string_$item(_templateObject198 || (_templateObject198 = leveling_taggedTemplateLiteral(["backup camera"]))),
      modes: {
        backupcamera: "ml"
      }
    },
    acquire: [{
      item: template_string_$item(_templateObject199 || (_templateObject199 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 8
    }
  }])
};
;// ./src/tasks/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject0, noncombat_templateObject1, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12;
function noncombat_toConsumableArray(r) { return noncombat_arrayWithoutHoles(r) || noncombat_iterableToArray(r) || noncombat_unsupportedIterableToArray(r) || noncombat_nonIterableSpread(); }
function noncombat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function noncombat_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return noncombat_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? noncombat_arrayLikeToArray(r, a) : void 0; } }
function noncombat_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function noncombat_arrayWithoutHoles(r) { if (Array.isArray(r)) return noncombat_arrayLikeToArray(r); }
function noncombat_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function noncombat_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var noncombat_buffs = $effects(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Feeling Lonely, Smooth Movements, The Sonata of Sneakiness, Invisible Avatar"])));
var NoncombatQuest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [].concat(noncombat_toConsumableArray(noncombat_buffs.map(effect => skillTask(effect))), [{
    name: "Silent Running",
    completed: () => lib_have(template_string_$effect(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Silent Running"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("swim sprints"),
    limit: {
      tries: 1
    }
  }, {
    name: "Cop Dollars",
    completed: () => property_get("_detectiveCasesCompleted") >= 3,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("Detective Solver.ash"),
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["shoe gum"]))), true), potionTask(template_string_$item(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["shady shades"])))), {
    name: "Test",
    completed: () => CommunityService.Noncombat.isDone(),
    do: () => CommunityService.Noncombat.run(() => undefined, 1),
    outfit: {
      hat: template_string_$item(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["very pointy crown"]))),
      offhand: template_string_$item(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["unbreakable umbrella"]))),
      back: template_string_$item(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["protonic accelerator pack"]))),
      shirt: template_string_$item(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["Jurassic Parka"]))),
      pants: template_string_$item(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Great Wolf's beastly trousers"]))),
      acc1: template_string_$item(noncombat_templateObject0 || (noncombat_templateObject0 = noncombat_taggedTemplateLiteral(["Brutal brogues"]))),
      acc2: template_string_$item(noncombat_templateObject1 || (noncombat_templateObject1 = noncombat_taggedTemplateLiteral(["Beach Comb"]))),
      acc3: template_string_$item(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["McHugeLarge left ski"]))),
      familiar: template_string_$familiar(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["Disgeist"]))),
      famequip: template_string_$item(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["tiny stillsuit"]))),
      modes: {
        umbrella: "cocoon",
        parka: "pterodactyl"
      }
    },
    limit: {
      tries: 1
    }
  }])
};
;// ./node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_templateObject;
function SongBoom_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var SongBoom_item = template_string_$item(SongBoom_templateObject || (SongBoom_templateObject = SongBoom_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
/**
 * @returns Whether we `have` the SongBoom™ BoomBox
 */
function SongBoom_have() {
  return haveItem(SongBoom_item);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * @returns The `SongBoomSong` you currently have active; `null` if none is active at this time
 */
function song() {
  var stored = property_get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * @returns Song changes left today.
 */
function songChangesLeft() {
  return property_get("_boomBoxSongsLeft");
}
/**
 * Change the song. Throws an error if unable.
 *
 * @param newSong Song to change to.
 * @returns Whether we successfully changed the song; `false` thus means that this was already our current song.
 */
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0,external_kolmafia_namespaceObject.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * @returns Progress to next song drop (e.g. gathered meat-clip).
 */
function dropProgress() {
  return get("_boomBoxFights");
}
;// ./node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_templateObject, AutumnAton_templateObject2, AutumnAton_templateObject3, AutumnAton_templateObject4, AutumnAton_templateObject5, AutumnAton_templateObject6, AutumnAton_templateObject7, AutumnAton_templateObject8, AutumnAton_templateObject9;
function AutumnAton_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





var AutumnAton_item = external_kolmafia_namespaceObject.Item.get("autumn-aton");
/**
 * Is the autumn-aton currently in your inventory, available to deploy?
 *
 * @returns The whether the autumn-aton is currently available for deployment
 */
function AutumnAton_available() {
  return (0,external_kolmafia_namespaceObject.availableAmount)(AutumnAton_item) > 0;
}
/**
 * Do you own the autumn-aton?
 *
 * @returns Whether you are an autumn-aton `have`r
 */
function AutumnAton_have() {
  return get("hasAutumnaton") || AutumnAton_available();
}
/**
 * Internal function used to parse the fallbot's choice adventure to determine which zones are currently available
 *
 * @param html The pagetext of the fallbot's choice adventure
 * @returns The locations currently available to send the fallbot to
 */
function checkLocations(html) {
  return (0,external_kolmafia_namespaceObject.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/@value').map(id => (0,external_kolmafia_namespaceObject.toLocation)(Number(id)));
}
/**
 * @returns The current location the autumn-aton is questing in; null if it is not on a quest.
 */
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function validateLocation(list, location) {
  return list.some(loc => loc.id === location.id);
}
/**
 * Deploy the autumn-aton to a location of your choosing.
 *
 * @param target A location to send the autumn-aton to, or a prioritized list of locations to send it to, or a function to pick which location to send it to.
 * @param upgrade Should we apply any upgrades we see available?
 * @returns Where we ended up sending the autumn-aton; null if we didn't send it off.
 */
function sendTo(target) {
  var upgrade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!AutumnAton_available()) return null;
  var pageHtml = lib_directlyUse(AutumnAton_item);
  if (upgrade && (0,external_kolmafia_namespaceObject.availableChoiceOptions)()[1]) (0,external_kolmafia_namespaceObject.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof external_kolmafia_namespaceObject.Location ? target : Array.isArray(target) ? target.find(l => validateLocation(locationsAvailable, l)) : target(locationsAvailable);
  if (!location) return null;
  if (!validateLocation(locationsAvailable, location)) return null;
  if (!(0,external_kolmafia_namespaceObject.handlingChoice)()) lib_directlyUse(AutumnAton_item);
  (0,external_kolmafia_namespaceObject.runChoice)(2, "heythereprogrammer=".concat(location.id));
  if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  return location;
}
/**
 * Install any available upgrades for the autumn-aton.
 *
 * @returns Whether there were any upgrades to install.
 */
function upgrade() {
  directlyUse(AutumnAton_item);
  var canUpgrade = availableChoiceOptions()[1] !== undefined;
  if (canUpgrade) runChoice(1);
  visitUrl("main.php");
  return canUpgrade;
}
/**
 * @returns A list of all locations you can send your autumn-aton to right now. Empty if you are unable to send it anywhere.
 */
function availableLocations() {
  if (!AutumnAton_available()) return [];
  var pageHtml = directlyUse(AutumnAton_item);
  visitUrl("main.php");
  return checkLocations(pageHtml);
}
/**
 * The mafia names for the autumn-aton upgrades
 */
var possibleUpgrades = (/* unused pure expression or super */ null && (["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"]));
/**
 * @returns An array containing the upgrades that you currently have on your autumn-aton.
 */
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
/**
 * @returns The number of turns remaining in your current autumn-aton quest. This number may be negative for any number of reasons.
 */
function turnsLeft() {
  return get("autumnatonQuestTurn") - totalTurnsPlayed();
}
/**
 * @returns The number of leg-upgrades your autumn-aton has installed
 */
function legs() {
  return currentUpgrades().filter(u => u.includes("leg")).length;
}
/**
 * @returns The number of turns we expect your next autumn-aton quest to take.
 */
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
/**
 * @returns The current visual acuity level of your autumn-aton as determined by the current upgrade-state.
 */
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(u => visualUpgrades.includes(u)).length;
}
/**
 * @returns The number of items from a zone we expect the autumn-aton to steal based on the current upgrade-state. It may not succeed in stealing every item it can.
 */
function zoneItems() {
  return 3 + currentUpgrades().filter(u => u.includes("arm")).length;
}
/**
 * @returns The number of seasonal items we expect the autumn-aton to return with given its current upgrade-state.
 */
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = (/* unused pure expression or super */ null && (["low", "mid", "high"]));
var UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: template_string_$item(AutumnAton_templateObject || (AutumnAton_templateObject = AutumnAton_taggedTemplateLiteral(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: template_string_$item(AutumnAton_templateObject2 || (AutumnAton_templateObject2 = AutumnAton_taggedTemplateLiteral(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: template_string_$item(AutumnAton_templateObject3 || (AutumnAton_templateObject3 = AutumnAton_taggedTemplateLiteral(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: template_string_$item(AutumnAton_templateObject4 || (AutumnAton_templateObject4 = AutumnAton_taggedTemplateLiteral(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: template_string_$item(AutumnAton_templateObject5 || (AutumnAton_templateObject5 = AutumnAton_taggedTemplateLiteral(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: template_string_$item(AutumnAton_templateObject6 || (AutumnAton_templateObject6 = AutumnAton_taggedTemplateLiteral(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: template_string_$item(AutumnAton_templateObject7 || (AutumnAton_templateObject7 = AutumnAton_taggedTemplateLiteral(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: template_string_$item(AutumnAton_templateObject8 || (AutumnAton_templateObject8 = AutumnAton_taggedTemplateLiteral(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: template_string_$item(AutumnAton_templateObject9 || (AutumnAton_templateObject9 = AutumnAton_taggedTemplateLiteral(["autumn years wisdom"])))
    }
  }
};
/**
 * Determines and returns the upgrade and item drop associated with the given location
 *
 * @param location The location to check the expected autumn-aton-unique drops of
 * @returns `null` if the location has no upgrade or drop; otherwise, the upgrade and the autumn-aton item associated with that item
 */
function getUniques(location) {
  var env = location.environment;
  var difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty],
      index = _UNIQUES$env$difficul.index,
      _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}
;// ./src/tasks/prologue.ts
var prologue_templateObject, prologue_templateObject2, prologue_templateObject3, prologue_templateObject4, prologue_templateObject5, prologue_templateObject6, prologue_templateObject7, prologue_templateObject8, prologue_templateObject9, prologue_templateObject0, prologue_templateObject1, prologue_templateObject10, prologue_templateObject11, prologue_templateObject12, prologue_templateObject13, prologue_templateObject14, prologue_templateObject15, prologue_templateObject16, prologue_templateObject17, prologue_templateObject18, prologue_templateObject19, prologue_templateObject20, prologue_templateObject21, prologue_templateObject22, prologue_templateObject23, prologue_templateObject24, prologue_templateObject25;
function prologue_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





var PULLS = [template_string_$item(prologue_templateObject || (prologue_templateObject = prologue_taggedTemplateLiteral(["Great Wolf's beastly trousers"]))), template_string_$item(prologue_templateObject2 || (prologue_templateObject2 = prologue_taggedTemplateLiteral(["Stick-Knife of Loathing"]))), template_string_$item(prologue_templateObject3 || (prologue_templateObject3 = prologue_taggedTemplateLiteral(["Buddy Bjorn"])))];
var BEST_INITIATIVE = byPrimaryClass({
  "Seal Clubber": 2,
  // Familiar exp: 2
  "Turtle Tamer": 0,
  // Weapon Damage Percent: 100
  Pastamancer: 3,
  // Familiar exp: 2
  Sauceror: 1,
  // Exp: 3
  "Disco Bandit": 0,
  // Maximum MP Percent: 30
  "Accordion Thief": 2 // Booze Drop: 30
});
var PrologueQuest = {
  name: "Prologue",
  tasks: [{
    name: "Workshed",
    completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(prologue_templateObject4 || (prologue_templateObject4 = prologue_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(prologue_templateObject5 || (prologue_templateObject5 = prologue_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Garden",
    completed: () => [0, undefined].includes((0,external_kolmafia_namespaceObject.getCampground)()[template_string_$item(prologue_templateObject6 || (prologue_templateObject6 = prologue_taggedTemplateLiteral(["peppermint sprout"]))).name]),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("garden pick"),
    limit: {
      tries: 1
    }
  }, {
    name: "Non-Staff Pulls",
    completed: () => PULLS.every(item => lib_have(item)),
    do: () => PULLS.filter(item => !lib_have(item)).forEach(item => (0,external_kolmafia_namespaceObject.takeStorage)(1, item)),
    limit: {
      tries: 1
    }
  }, {
    name: "Clan",
    completed: () => (0,external_kolmafia_namespaceObject.getClanName)() === args.vipclan,
    do: () => Clan.join(args.vipclan),
    limit: {
      tries: 1
    }
  }, {
    name: "Council",
    completed: () => property_get("lastCouncilVisit") > 0,
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php"),
    limit: {
      tries: 1
    }
  }, {
    name: "Toot",
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("tutorial.php?action=toot"),
    completed: () => property_get("questM05Toot") === "finished" && !lib_have(template_string_$item(prologue_templateObject7 || (prologue_templateObject7 = prologue_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(prologue_templateObject8 || (prologue_templateObject8 = prologue_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Skeleton Store",
    completed: () => property_get("questM23Meatsmith") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Overgrown Lot",
    completed: () => property_get("questM24Doc") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=doc&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Madness Bakery",
    completed: () => property_get("questM25Armorer") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Alice's Army",
    completed: () => !!property_get("grimoire3Summons"),
    ready: () => lib_have(template_string_$skill(prologue_templateObject9 || (prologue_templateObject9 = prologue_taggedTemplateLiteral(["Summon Alice's Army Cards"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(prologue_templateObject0 || (prologue_templateObject0 = prologue_taggedTemplateLiteral(["Summon Alice's Army Cards"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Chateau Desk",
    completed: () => property_get("_chateauDeskHarvested"),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_desk"),
    limit: {
      tries: 1
    }
  }, deckTask("Forest"), deckTask("Island"), deckTask("Rope"), {
    name: "Barrel Hoop Earring",
    completed: () => property_get("_barrelPrayer"),
    class: $classes(prologue_templateObject1 || (prologue_templateObject1 = prologue_taggedTemplateLiteral(["Seal Clubber, Disco Bandit"]))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("barrelprayer glamour"),
    limit: {
      tries: 1
    }
  }, {
    name: "Cowboy Boots",
    completed: () => lib_have(template_string_$item(prologue_templateObject10 || (prologue_templateObject10 = prologue_taggedTemplateLiteral(["your cowboy boots"])))),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_ltt"),
    limit: {
      tries: 1
    }
  }, {
    name: "Terminal Skill",
    completed: () => getSkills().includes(template_string_$skill(prologue_templateObject11 || (prologue_templateObject11 = prologue_taggedTemplateLiteral(["Portscan"])))),
    do: () => educate(template_string_$skill(prologue_templateObject12 || (prologue_templateObject12 = prologue_taggedTemplateLiteral(["Portscan"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Detective Badge",
    completed: () => lib_have(template_string_$item(prologue_templateObject13 || (prologue_templateObject13 = prologue_taggedTemplateLiteral(["gold detective badge"])))),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct"),
    limit: {
      tries: 1
    }
  }, {
    name: "Mummery",
    completed: () => property_get("_mummeryMods").includes((0,external_kolmafia_namespaceObject.myPrimestat)().toString()),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("mummery ".concat((0,external_kolmafia_namespaceObject.myPrimestat)().toString().toLowerCase())),
    outfit: {
      familiar: template_string_$familiar(prologue_templateObject14 || (prologue_templateObject14 = prologue_taggedTemplateLiteral(["Melodramedary"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "BoomBox",
    completed: () => song() === "Total Eclipse of Your Meat",
    do: () => setSong("Total Eclipse of Your Meat"),
    limit: {
      tries: 1
    }
  }, {
    name: "Horsery",
    completed: () => property_get("_horsery") === "dark horse",
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("horsery dark"),
    limit: {
      tries: 1
    }
  }, {
    name: "Vote!",
    completed: () => lib_have(template_string_$item(prologue_templateObject15 || (prologue_templateObject15 = prologue_taggedTemplateLiteral(["\"I Voted!\" sticker"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=".concat(BEST_INITIATIVE, "&local%5B%5D=").concat(BEST_INITIATIVE));
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Scavenge",
    completed: () => property_get("_daycareGymScavenges") > 0,
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
      (0,external_kolmafia_namespaceObject.runChoice)(2);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Cosplay Saber",
    completed: () => property_get("_saberMod") > 0,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("saber familiar"),
    limit: {
      tries: 1
    }
  }, {
    name: "Unlock Bird",
    completed: () => lib_have(template_string_$skill(prologue_templateObject16 || (prologue_templateObject16 = prologue_taggedTemplateLiteral(["Seek out a Bird"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(prologue_templateObject17 || (prologue_templateObject17 = prologue_taggedTemplateLiteral(["Bird-a-Day calendar"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Lathe",
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe"),
    completed: () => lib_have(template_string_$item(prologue_templateObject18 || (prologue_templateObject18 = prologue_taggedTemplateLiteral(["weeping willow wand"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(prologue_templateObject19 || (prologue_templateObject19 = prologue_taggedTemplateLiteral(["weeping willow wand"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Backup Camera Reverser",
    completed: () => property_get("backupCameraReverserEnabled"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera reverser"),
    limit: {
      tries: 1
    }
  }, {
    name: "Fallbot",
    completed: () => !AutumnAton_available() || property_get("_autumnatonQuests") > 0,
    do: () => {
      sendTo($location(prologue_templateObject20 || (prologue_templateObject20 = prologue_taggedTemplateLiteral(["The Sleazy Back Alley"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Learn About Bugs",
    ready: () => lib_have(template_string_$item(prologue_templateObject21 || (prologue_templateObject21 = prologue_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
    completed: () => property_get("_sitCourseCompleted") || lib_have(template_string_$skill(prologue_templateObject22 || (prologue_templateObject22 = prologue_taggedTemplateLiteral(["Insectologist"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(prologue_templateObject23 || (prologue_templateObject23 = prologue_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
    choices: {
      1494: 2
    },
    limit: {
      tries: 1
    }
  }, {
    name: "McHugeLarge",
    completed: () => lib_have(template_string_$item(prologue_templateObject24 || (prologue_templateObject24 = prologue_taggedTemplateLiteral(["McHugeLarge left ski"])))),
    ready: () => lib_have(template_string_$item(prologue_templateObject25 || (prologue_templateObject25 = prologue_taggedTemplateLiteral(["McHugeLarge duffel bag"])))),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?action=skiduffel&pwd", false),
    limit: {
      tries: 1
    }
  }]
};
;// ./src/tasks/spelldamage.ts
function spelldamage_typeof(o) { "@babel/helpers - typeof"; return spelldamage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, spelldamage_typeof(o); }
var spelldamage_templateObject, spelldamage_templateObject2, spelldamage_templateObject3, spelldamage_templateObject4, spelldamage_templateObject5, spelldamage_templateObject6, spelldamage_templateObject7, spelldamage_templateObject8, spelldamage_templateObject9, spelldamage_templateObject0, spelldamage_templateObject1, spelldamage_templateObject10, spelldamage_templateObject11, spelldamage_templateObject12, spelldamage_templateObject13, spelldamage_templateObject14, spelldamage_templateObject15, spelldamage_templateObject16, spelldamage_templateObject17, spelldamage_templateObject18, spelldamage_templateObject19, spelldamage_templateObject20, spelldamage_templateObject21, spelldamage_templateObject22, spelldamage_templateObject23, spelldamage_templateObject24, spelldamage_templateObject25, spelldamage_templateObject26, spelldamage_templateObject27, spelldamage_templateObject28, spelldamage_templateObject29, spelldamage_templateObject30, spelldamage_templateObject31, spelldamage_templateObject32, spelldamage_templateObject33;
function spelldamage_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function spelldamage_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? spelldamage_ownKeys(Object(t), !0).forEach(function (r) { spelldamage_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : spelldamage_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function spelldamage_defineProperty(e, r, t) { return (r = spelldamage_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function spelldamage_toPropertyKey(t) { var i = spelldamage_toPrimitive(t, "string"); return "symbol" == spelldamage_typeof(i) ? i : i + ""; }
function spelldamage_toPrimitive(t, r) { if ("object" != spelldamage_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != spelldamage_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function spelldamage_toConsumableArray(r) { return spelldamage_arrayWithoutHoles(r) || spelldamage_iterableToArray(r) || spelldamage_unsupportedIterableToArray(r) || spelldamage_nonIterableSpread(); }
function spelldamage_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function spelldamage_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return spelldamage_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? spelldamage_arrayLikeToArray(r, a) : void 0; } }
function spelldamage_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function spelldamage_arrayWithoutHoles(r) { if (Array.isArray(r)) return spelldamage_arrayLikeToArray(r); }
function spelldamage_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function spelldamage_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }






var spelldamage_buffs = $effects(spelldamage_templateObject || (spelldamage_templateObject = spelldamage_taggedTemplateLiteral(["Arched Eyebrow of the Archmage, Carol of the Hells, Jackasses' Symphony of Destruction, Simmering, Song of Sauce, Spirit of Cayenne"])));
var chefstaff = byStat({
  Mysticality: template_string_$item(spelldamage_templateObject2 || (spelldamage_templateObject2 = spelldamage_taggedTemplateLiteral(["Staff of the Roaring Hearth"]))),
  default: template_string_$item(spelldamage_templateObject3 || (spelldamage_templateObject3 = spelldamage_taggedTemplateLiteral(["Staff of Simmering Hatred"])))
});
var spelldamage_maxTurns = byPrimaryClass({
  Pastamancer: 10,
  Sauceror: 8,
  "Accordion Thief": 11,
  default: 12
});
var SpellDamageQuest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [].concat(spelldamage_toConsumableArray(spelldamage_buffs.map(effect => skillTask(effect))), [spelldamage_objectSpread(spelldamage_objectSpread({}, skillTask(template_string_$skill(spelldamage_templateObject4 || (spelldamage_templateObject4 = spelldamage_taggedTemplateLiteral(["Elron's Explosive Etude"]))))), {}, {
    class: $classes(spelldamage_templateObject5 || (spelldamage_templateObject5 = spelldamage_taggedTemplateLiteral(["Accordion Thief"])))
  }), {
    name: "Play Pool",
    completed: () => lib_have(template_string_$effect(spelldamage_templateObject6 || (spelldamage_templateObject6 = spelldamage_taggedTemplateLiteral(["Mental A-cue-ity"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 2"),
    limit: {
      tries: 1
    }
  }, {
    name: "Deep Dark Visions",
    completed: () => lib_have(template_string_$effect(spelldamage_templateObject7 || (spelldamage_templateObject7 = spelldamage_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))),
    do: () => {
      while ((0,external_kolmafia_namespaceObject.myHp)() < (0,external_kolmafia_namespaceObject.myMaxhp)()) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(spelldamage_templateObject8 || (spelldamage_templateObject8 = spelldamage_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(spelldamage_templateObject9 || (spelldamage_templateObject9 = spelldamage_taggedTemplateLiteral(["Deep Dark Visions"]))));
    },
    outfit: {
      shirt: template_string_$item(spelldamage_templateObject0 || (spelldamage_templateObject0 = spelldamage_taggedTemplateLiteral(["Jurassic Parka"]))),
      back: template_string_$item(spelldamage_templateObject1 || (spelldamage_templateObject1 = spelldamage_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      weapon: template_string_$item(spelldamage_templateObject10 || (spelldamage_templateObject10 = spelldamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar(spelldamage_templateObject11 || (spelldamage_templateObject11 = spelldamage_taggedTemplateLiteral(["Exotic Parrot"]))),
      famequip: template_string_$item(spelldamage_templateObject12 || (spelldamage_templateObject12 = spelldamage_taggedTemplateLiteral(["tiny stillsuit"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    },
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(spelldamage_templateObject13 || (spelldamage_templateObject13 = spelldamage_taggedTemplateLiteral(["tobiko marble soda"]))), true), potionTask(template_string_$item(spelldamage_templateObject14 || (spelldamage_templateObject14 = spelldamage_taggedTemplateLiteral(["cordial of concentration"]))), true), {
    name: "Barrel Prayer",
    class: $classes(spelldamage_templateObject15 || (spelldamage_templateObject15 = spelldamage_taggedTemplateLiteral(["Sauceror"]))),
    completed: () => property_get("_barrelPrayer"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("barrelprayer buff"),
    limit: {
      tries: 1
    }
  }, {
    name: "Briefcase Enchantment",
    completed: () => (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(spelldamage_templateObject16 || (spelldamage_templateObject16 = spelldamage_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))), "Spell Damage Percent") > 0,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("Briefcase.ash enchantment spell"),
    limit: {
      tries: 1
    }
  }, {
    name: "Cargopocket",
    completed: () => property_get("_cargoPocketEmptied"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("cargo 177"),
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(spelldamage_templateObject17 || (spelldamage_templateObject17 = spelldamage_taggedTemplateLiteral(["Yeg's Motel hand soap"])))), {
    name: "Saucefingers",
    class: $classes(spelldamage_templateObject18 || (spelldamage_templateObject18 = spelldamage_taggedTemplateLiteral(["Pastamancer"]))),
    completed: () => lib_have(template_string_$effect(spelldamage_templateObject19 || (spelldamage_templateObject19 = spelldamage_taggedTemplateLiteral(["Saucefingers"])))),
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && property_get("_reflexHammerUsed") < 3,
    do: $location(spelldamage_templateObject20 || (spelldamage_templateObject20 = spelldamage_taggedTemplateLiteral(["The Dire Warren"]))),
    outfit: {
      acc3: template_string_$item(spelldamage_templateObject21 || (spelldamage_templateObject21 = spelldamage_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: template_string_$familiar(spelldamage_templateObject22 || (spelldamage_templateObject22 = spelldamage_taggedTemplateLiteral(["Mini-Adventurer"])))
    },
    choices: {
      768: 4
    },
    combat: new CSCombatStrategy().macro(combat_Macro.skill(template_string_$skill(spelldamage_templateObject23 || (spelldamage_templateObject23 = spelldamage_taggedTemplateLiteral(["Reflex Hammer"]))))),
    limit: {
      tries: 2
    }
  }, skillTask(template_string_$skill(spelldamage_templateObject24 || (spelldamage_templateObject24 = spelldamage_taggedTemplateLiteral(["Simmer"]))), true), innerElfTask(), meteorShowerTask(), {
    name: "Pull Staff",
    completed: () => lib_have(chefstaff),
    prepare: () => {
      if (!(0,external_kolmafia_namespaceObject.canEquip)(chefstaff)) {
        throw "Will not be able to equip ".concat(chefstaff.name, ", consider a lesser chef staff");
      }
    },
    do: () => (0,external_kolmafia_namespaceObject.takeStorage)(chefstaff, 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.SpellDamage.isDone(),
    do: () => CommunityService.SpellDamage.run(() => undefined, spelldamage_maxTurns),
    outfit: {
      hat: template_string_$items(spelldamage_templateObject25 || (spelldamage_templateObject25 = spelldamage_taggedTemplateLiteral(["astral chapeau, Hollandaise helmet, none"]))),
      weapon: chefstaff,
      offhand: template_string_$items(spelldamage_templateObject26 || (spelldamage_templateObject26 = spelldamage_taggedTemplateLiteral(["Abracandalabra, weeping willow wand"]))),
      back: template_string_$item(spelldamage_templateObject27 || (spelldamage_templateObject27 = spelldamage_taggedTemplateLiteral(["Buddy Bjorn"]))),
      acc1: template_string_$item(spelldamage_templateObject28 || (spelldamage_templateObject28 = spelldamage_taggedTemplateLiteral(["battle broom"]))),
      acc2: template_string_$item(spelldamage_templateObject29 || (spelldamage_templateObject29 = spelldamage_taggedTemplateLiteral(["Powerful Glove"]))),
      acc3: template_string_$item(spelldamage_templateObject30 || (spelldamage_templateObject30 = spelldamage_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      familiar: template_string_$familiar(spelldamage_templateObject31 || (spelldamage_templateObject31 = spelldamage_taggedTemplateLiteral(["Disembodied Hand"]))),
      famequip: template_string_$item(spelldamage_templateObject32 || (spelldamage_templateObject32 = spelldamage_taggedTemplateLiteral(["Stick-Knife of Loathing"]))),
      riders: {
        "buddy-bjorn": template_string_$familiar(spelldamage_templateObject33 || (spelldamage_templateObject33 = spelldamage_taggedTemplateLiteral(["Mechanical Songbird"])))
      }
    },
    limit: {
      tries: 1
    }
  }])
};
;// ./src/tasks/stat.ts
function stat_typeof(o) { "@babel/helpers - typeof"; return stat_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, stat_typeof(o); }
var stat_templateObject, stat_templateObject2, stat_templateObject3, stat_templateObject4, stat_templateObject5, stat_templateObject6, stat_templateObject7, stat_templateObject8, stat_templateObject9, stat_templateObject0, stat_templateObject1, stat_templateObject10, stat_templateObject11, stat_templateObject12, stat_templateObject13;
function stat_toConsumableArray(r) { return stat_arrayWithoutHoles(r) || stat_iterableToArray(r) || stat_unsupportedIterableToArray(r) || stat_nonIterableSpread(); }
function stat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function stat_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return stat_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? stat_arrayLikeToArray(r, a) : void 0; } }
function stat_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function stat_arrayWithoutHoles(r) { if (Array.isArray(r)) return stat_arrayLikeToArray(r); }
function stat_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function stat_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function stat_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? stat_ownKeys(Object(t), !0).forEach(function (r) { stat_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : stat_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function stat_defineProperty(e, r, t) { return (r = stat_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function stat_toPropertyKey(t) { var i = stat_toPrimitive(t, "string"); return "symbol" == stat_typeof(i) ? i : i + ""; }
function stat_toPrimitive(t, r) { if ("object" != stat_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != stat_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function stat_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var SKILL_BUFFS = {
  MUSCLE: $effects(stat_templateObject || (stat_templateObject = stat_taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination"]))),
  MYSTICALITY: $effects(stat_templateObject2 || (stat_templateObject2 = stat_taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Quiet Judgement"]))),
  MOXIE: $effects(stat_templateObject3 || (stat_templateObject3 = stat_taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind"]))),
  HP: $effects(stat_templateObject4 || (stat_templateObject4 = stat_taggedTemplateLiteral(["Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination"])))
};
function skillBuffTasks(key) {
  return SKILL_BUFFS[key].map(effect => skillTask(effect));
}
function thrallTask(thrall) {
  return {
    name: thrall.toString(),
    class: $classes(stat_templateObject5 || (stat_templateObject5 = stat_taggedTemplateLiteral(["Pastamancer"]))),
    completed: () => (0,external_kolmafia_namespaceObject.myThrall)() === thrall,
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(thrall.skill),
    limit: {
      tries: 1
    }
  };
}
function equalizeTask() {
  return stat_objectSpread(stat_objectSpread({}, potionTask(byStat({
    Muscle: template_string_$item(stat_templateObject6 || (stat_templateObject6 = stat_taggedTemplateLiteral(["oil of stability"]))),
    Mysticality: template_string_$item(stat_templateObject7 || (stat_templateObject7 = stat_taggedTemplateLiteral(["oil of expertise"]))),
    Moxie: template_string_$item(stat_templateObject8 || (stat_templateObject8 = stat_taggedTemplateLiteral(["oil of slipperiness"])))
  }), true)), {}, {
    class: $classes(stat_templateObject9 || (stat_templateObject9 = stat_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror"]))),
    limit: {
      tries: 1
    }
  });
}
var Muscle = {
  name: "Muscle",
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [].concat(stat_toConsumableArray(skillBuffTasks("MUSCLE")), [skillTask(template_string_$skill(stat_templateObject0 || (stat_templateObject0 = stat_taggedTemplateLiteral(["Blessing of the War Snapper"])))), thrallTask($thrall(stat_templateObject1 || (stat_templateObject1 = stat_taggedTemplateLiteral(["Elbow Macaroni"])))), equalizeTask(), {
    name: "Test",
    completed: () => CommunityService.Muscle.isDone(),
    do: () => CommunityService.Muscle.run(() => undefined, 1),
    outfit: {
      modifier: "Muscle"
    },
    limit: {
      tries: 1
    }
  }])
};
var Mysticality = {
  name: "Mysticality",
  completed: () => CommunityService.Mysticality.isDone(),
  tasks: [].concat(stat_toConsumableArray(skillBuffTasks("MYSTICALITY")), [equalizeTask(), {
    name: "Test",
    completed: () => CommunityService.Mysticality.isDone(),
    do: () => CommunityService.Mysticality.run(() => undefined, 1),
    outfit: {
      modifier: "Mysticality"
    },
    limit: {
      tries: 1
    }
  }])
};
var Moxie = {
  name: "Moxie",
  completed: () => CommunityService.Moxie.isDone(),
  tasks: [].concat(stat_toConsumableArray(skillBuffTasks("MOXIE")), [thrallTask($thrall(stat_templateObject10 || (stat_templateObject10 = stat_taggedTemplateLiteral(["Penne Dreadful"])))), equalizeTask(), {
    name: "Test",
    completed: () => CommunityService.Moxie.isDone(),
    do: () => CommunityService.Moxie.run(() => undefined, 1),
    outfit: {
      modifier: "Moxie"
    },
    limit: {
      tries: 1
    }
  }])
};
var Hitpoints = {
  name: "Hitpoints",
  completed: () => CommunityService.HP.isDone(),
  tasks: [].concat(stat_toConsumableArray(skillBuffTasks("HP")), [skillTask(template_string_$skill(stat_templateObject11 || (stat_templateObject11 = stat_taggedTemplateLiteral(["Blessing of the War Snapper"])))), thrallTask($thrall(stat_templateObject12 || (stat_templateObject12 = stat_taggedTemplateLiteral(["Elbow Macaroni"])))), beachTask(template_string_$effect(stat_templateObject13 || (stat_templateObject13 = stat_taggedTemplateLiteral(["Lack of Body-Building"])))), equalizeTask(), {
    name: "Test",
    completed: () => CommunityService.HP.isDone(),
    do: () => CommunityService.HP.run(() => undefined, 1),
    outfit: {
      modifier: "HP"
    },
    limit: {
      tries: 1
    }
  }])
};
var StatTests = byStat({
  Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
  Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
  Moxie: [Mysticality, Muscle, Hitpoints, Moxie]
});
/* harmony default export */ const stat = (StatTests);
;// ./src/tasks/weapondamage.ts
var weapondamage_templateObject, weapondamage_templateObject2, weapondamage_templateObject3, weapondamage_templateObject4, weapondamage_templateObject5, weapondamage_templateObject6, weapondamage_templateObject7, weapondamage_templateObject8, weapondamage_templateObject9, weapondamage_templateObject0, weapondamage_templateObject1, weapondamage_templateObject10, weapondamage_templateObject11, weapondamage_templateObject12, weapondamage_templateObject13, weapondamage_templateObject14, weapondamage_templateObject15, weapondamage_templateObject16, weapondamage_templateObject17, weapondamage_templateObject18;
function weapondamage_toConsumableArray(r) { return weapondamage_arrayWithoutHoles(r) || weapondamage_iterableToArray(r) || weapondamage_unsupportedIterableToArray(r) || weapondamage_nonIterableSpread(); }
function weapondamage_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function weapondamage_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return weapondamage_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? weapondamage_arrayLikeToArray(r, a) : void 0; } }
function weapondamage_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function weapondamage_arrayWithoutHoles(r) { if (Array.isArray(r)) return weapondamage_arrayLikeToArray(r); }
function weapondamage_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function weapondamage_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var weapondamage_buffs = $effects(weapondamage_templateObject || (weapondamage_templateObject = weapondamage_taggedTemplateLiteral(["Carol of the Bulls, Frenzied, Bloody, Jackasses' Symphony of Destruction, Rage of the Reindeer, Scowl of the Auk, Song of the North, Tenacity of the Snapper"], ["Carol of the Bulls, Frenzied\\, Bloody, Jackasses' Symphony of Destruction, Rage of the Reindeer, Scowl of the Auk, Song of the North, Tenacity of the Snapper"])));
var WeaponDamageQuest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [].concat(weapondamage_toConsumableArray(weapondamage_buffs.map(effect => skillTask(effect))), [skillTask(template_string_$skill(weapondamage_templateObject2 || (weapondamage_templateObject2 = weapondamage_taggedTemplateLiteral(["Blessing of the War Snapper"])))), {
    // Sometimes LOV Elixir #3 does not drop
    name: "Play Pool",
    completed: () => lib_have(template_string_$effect(weapondamage_templateObject3 || (weapondamage_templateObject3 = weapondamage_taggedTemplateLiteral(["The Power of LOV"])))) || lib_have(template_string_$effect(weapondamage_templateObject4 || (weapondamage_templateObject4 = weapondamage_taggedTemplateLiteral(["Billiards Belligerence"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 1"),
    limit: {
      tries: 1
    }
  }, innerElfTask(), {
    name: "Meteor Ungulith",
    completed: () => monstersReminisced().includes($monster(weapondamage_templateObject5 || (weapondamage_templateObject5 = weapondamage_taggedTemplateLiteral(["ungulith"])))),
    do: () => reminisce($monster(weapondamage_templateObject6 || (weapondamage_templateObject6 = weapondamage_taggedTemplateLiteral(["ungulith"])))),
    combat: new CSCombatStrategy().macro(Macro.skill(template_string_$skill(weapondamage_templateObject7 || (weapondamage_templateObject7 = weapondamage_taggedTemplateLiteral(["Meteor Shower"])))).skill(template_string_$skill(weapondamage_templateObject8 || (weapondamage_templateObject8 = weapondamage_taggedTemplateLiteral(["Use the Force"]))))),
    choices: {
      1387: 3
    },
    outfit: {
      weapon: template_string_$item(weapondamage_templateObject9 || (weapondamage_templateObject9 = weapondamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar.none
    },
    limit: {
      tries: 1
    }
  }, potionTask(template_string_$item(weapondamage_templateObject0 || (weapondamage_templateObject0 = weapondamage_taggedTemplateLiteral(["corrupted marrow"])))), {
    name: "Bow-Legged Swagger",
    completed: () => property_get("_bowleggedSwaggerUsed"),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(weapondamage_templateObject1 || (weapondamage_templateObject1 = weapondamage_taggedTemplateLiteral(["Bow-Legged Swagger"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.WeaponDamage.isDone(),
    do: () => CommunityService.WeaponDamage.run(() => void {}, 1),
    outfit: {
      weapon: template_string_$item(weapondamage_templateObject10 || (weapondamage_templateObject10 = weapondamage_taggedTemplateLiteral(["dented scepter"]))),
      offhand: template_string_$item(weapondamage_templateObject11 || (weapondamage_templateObject11 = weapondamage_taggedTemplateLiteral(["broken champagne bottle"]))),
      pants: template_string_$item(weapondamage_templateObject12 || (weapondamage_templateObject12 = weapondamage_taggedTemplateLiteral(["Great Wolf's beastly trousers"]))),
      acc1: template_string_$item(weapondamage_templateObject13 || (weapondamage_templateObject13 = weapondamage_taggedTemplateLiteral(["Brutal brogues"]))),
      acc2: template_string_$item(weapondamage_templateObject14 || (weapondamage_templateObject14 = weapondamage_taggedTemplateLiteral(["Powerful Glove"]))),
      acc3: template_string_$item(weapondamage_templateObject15 || (weapondamage_templateObject15 = weapondamage_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      famequip: template_string_$item(weapondamage_templateObject16 || (weapondamage_templateObject16 = weapondamage_taggedTemplateLiteral(["Stick-Knife of Loathing"]))),
      familiar: template_string_$familiar(weapondamage_templateObject17 || (weapondamage_templateObject17 = weapondamage_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    acquire: [{
      item: template_string_$item(weapondamage_templateObject18 || (weapondamage_templateObject18 = weapondamage_taggedTemplateLiteral(["broken champagne bottle"])))
    }],
    limit: {
      tries: 1
    }
  }])
};
;// ./src/tasks/diet.ts
var diet_templateObject, diet_templateObject2, diet_templateObject3, diet_templateObject4, diet_templateObject5, diet_templateObject6, diet_templateObject7, diet_templateObject8, diet_templateObject9, diet_templateObject0;
function diet_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var DietQuest = {
  name: "Diet",
  tasks: [{
    name: "Ancestral Recall",
    completed: () => template_string_$skill(diet_templateObject || (diet_templateObject = diet_taggedTemplateLiteral(["Ancestral Recall"]))).timescast > 0,
    ready: () => lib_have(template_string_$item(diet_templateObject2 || (diet_templateObject2 = diet_taggedTemplateLiteral(["blue mana"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(diet_templateObject3 || (diet_templateObject3 = diet_taggedTemplateLiteral(["Ancestral Recall"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Borrowed Time",
    completed: () => property_get("_borrowedTimeUsed"),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(diet_templateObject4 || (diet_templateObject4 = diet_taggedTemplateLiteral(["borrowed time"])))),
    acquire: [{
      item: template_string_$item(diet_templateObject5 || (diet_templateObject5 = diet_taggedTemplateLiteral(["borrowed time"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Open Six-Pack",
    completed: () => !lib_have(template_string_$item(diet_templateObject6 || (diet_templateObject6 = diet_taggedTemplateLiteral(["astral six-pack"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(diet_templateObject7 || (diet_templateObject7 = diet_taggedTemplateLiteral(["astral six-pack"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Drink Pilsners",
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= 4,
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 11,
    do: () => (0,external_kolmafia_namespaceObject.drink)(template_string_$item(diet_templateObject8 || (diet_templateObject8 = diet_taggedTemplateLiteral(["astral pilsner"]))), utils_clamp((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(diet_templateObject9 || (diet_templateObject9 = diet_taggedTemplateLiteral(["astral pilsner"])))), 0, 4 - (0,external_kolmafia_namespaceObject.myInebriety)())),
    effects: $effects(diet_templateObject0 || (diet_templateObject0 = diet_taggedTemplateLiteral(["Ode to Booze"]))),
    limit: {
      tries: 1
    }
  }]
};
;// ./src/main.ts
function main_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = main_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function main_toConsumableArray(r) { return main_arrayWithoutHoles(r) || main_iterableToArray(r) || main_unsupportedIterableToArray(r) || main_nonIterableSpread(); }
function main_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function main_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return main_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? main_arrayLikeToArray(r, a) : void 0; } }
function main_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function main_arrayWithoutHoles(r) { if (Array.isArray(r)) return main_arrayLikeToArray(r); }
function main_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

















var args = Args.create("loopcs", "A script to complete community service runs.", {
  vipclan: Args.string({
    help: "Name of clan that has a fully stocked VIP lounge.",
    default: "Margaretting Tye"
  }),
  slimeclan: Args.string({
    help: "Name of clan that has Mother Slime ready in The Slime Tube.",
    default: "Hobopolis Vacation Home"
  }),
  actions: Args.number({
    help: "Maximum number of actions to perform, if given. Can be used to execute just a few steps at a time."
  }),
  abort: Args.string({
    help: "If given, abort during the prepare() step for the task with matching name."
  }),
  list: Args.flag({
    help: "Show the status of all tasks and exit.",
    setting: ""
  })
});
function main(command) {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (runComplete()) {
    (0,external_kolmafia_namespaceObject.print)("Community Service complete!", "purple");
    return;
  }
  var timeProperty = "_loopcs_elapsedTime";
  var setTimeNow = property_get(timeProperty, -1) === -1;
  if (setTimeNow) _set(timeProperty, (0,external_kolmafia_namespaceObject.gametimeToInt)());
  var tasks = getTasks([DietQuest, PrologueQuest, CoilWireQuest, LevelingQuest].concat(main_toConsumableArray(stat), [WeaponDamageQuest, SpellDamageQuest, HotResQuest, NoncombatQuest, FamiliarWeightQuest, BoozeDropQuest, DonateQuest]));

  // Abort during the prepare() step of the specified task
  if (args.abort) {
    var to_abort = tasks.find(task => task.name === args.abort);
    if (!to_abort) throw "Unable to identify task ".concat(args.abort);
    to_abort.prepare = () => {
      throw "Abort requested on task ".concat(to_abort.name);
    };
  }
  var engine = new CSEngine(tasks);
  try {
    if (args.list) {
      listTasks(engine);
      return;
    }
    engine.run(args.actions);
    var remaining_tasks = engine.tasks.filter(task => !task.completed());
    if (!runComplete()) {
      (0,external_kolmafia_namespaceObject.print)("Remaining tasks:", "red");
      var _iterator = main_createForOfIteratorHelper(remaining_tasks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;
          if (!task.completed()) (0,external_kolmafia_namespaceObject.print)("".concat(task.name), "red");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      throw "Unable to find available task, but the run is not complete.";
    }
  } finally {
    engine.destruct();
  }
  (0,external_kolmafia_namespaceObject.print)("Community Service complete!", "purple");
  (0,external_kolmafia_namespaceObject.print)("Adventures used: ".concat((0,external_kolmafia_namespaceObject.turnsPlayed)()), "purple");
  (0,external_kolmafia_namespaceObject.print)("Adventures remaining: ".concat((0,external_kolmafia_namespaceObject.myAdventures)()), "purple");
  if (setTimeNow) (0,external_kolmafia_namespaceObject.print)("Time: ".concat(convertMilliseconds((0,external_kolmafia_namespaceObject.gametimeToInt)() - property_get(timeProperty, (0,external_kolmafia_namespaceObject.gametimeToInt)()))), "purple");else (0,external_kolmafia_namespaceObject.print)("Time: ".concat(convertMilliseconds((0,external_kolmafia_namespaceObject.gametimeToInt)() - property_get(timeProperty, (0,external_kolmafia_namespaceObject.gametimeToInt)())), " since first run today started"), "purple");
}
function runComplete() {
  return property_get("kingLiberated");
}
function listTasks(engine) {
  var _iterator2 = main_createForOfIteratorHelper(engine.tasks),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var task = _step2.value;
      if (task.completed()) {
        (0,external_kolmafia_namespaceObject.print)("".concat(task.name, ": Done"), "blue");
      } else if (engine.available(task)) {
        (0,external_kolmafia_namespaceObject.print)("".concat(task.name, ": Available"));
      } else {
        (0,external_kolmafia_namespaceObject.print)("".concat(task.name, ": Not Available"), "red");
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;