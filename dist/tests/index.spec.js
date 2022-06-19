"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// suite
/*
- api endpoint send back status code 200 ok test
- input vailidation test
- check on the file name input sends back error msg when it is not found
- the image sizer function process sends back the file
*/
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../server"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var imageSizer_1 = __importDefault(require("../modules/imageSizer"));
var request = (0, supertest_1.default)(server_1.default);
describe('Endpoint Response testing', function () {
    it('should respond with status code 200 Ok when api parmeters exists at route /resize?', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/resize?name=fjord&width=200&height=100')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should respond with status code 400 bad request when missing any paramter at route /resize?', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/resize?name=fjord&width=100')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should respond with status code 400 bad request when the file name does not match any of the files in the server', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/resize?name=unkwon&width=100&height=200')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Testing the Image Processing', function () {
    it('shoud create the resize image file successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
        var outputPath, query, thumbPath, image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    outputPath = path_1.default.join(process.cwd(), '/public/thumbnails/');
                    query = { name: 'fjord', width: '200', height: '100' };
                    thumbPath = "".concat(outputPath, "/").concat(query.name, "_").concat(query.width, "_").concat(query.height, ".jpg");
                    return [4 /*yield*/, (0, imageSizer_1.default)(query.name, query.width, query.height)];
                case 1:
                    _a.sent();
                    image = fs_1.default.readFileSync(thumbPath).buffer;
                    expect(image).toBeInstanceOf(ArrayBuffer);
                    return [2 /*return*/];
            }
        });
    }); });
});
