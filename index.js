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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _this = this;
var createCharacterElement = function (character) {
    var characterDiv = document.createElement('div');
    characterDiv.className = 'character';
    var viewImage = document.createElement('img');
    viewImage.src = character.image;
    var nameCharacter = document.createElement('p');
    nameCharacter.textContent = character.name;
    characterDiv.appendChild(viewImage);
    characterDiv.appendChild(nameCharacter);
    return characterDiv;
};
var getRickyMorty = function () { return __awaiter(_this, void 0, void 0, function () {
    var apiKey, response, dataApi, characters, imageContainer_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                apiKey = 'https://rickandmortyapi.com/api';
                return [4 /*yield*/, fetch("".concat(apiKey, "/character"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                dataApi = _a.sent();
                characters = dataApi.results;
                imageContainer_1 = document.createElement('div');
                imageContainer_1.className = 'character-container';
                characters.forEach(function (character) {
                    var characterElement = createCharacterElement(character);
                    imageContainer_1.appendChild(characterElement);
                });
                document.body.append(imageContainer_1);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error al obtener datos de la API:', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getRickyMorty();
var AddCharacter = function () {
    try {
        var urlInput = document.getElementById('url');
        var nameInput = document.getElementById('name');
        var newCharacter = {
            image: urlInput.value,
            name: nameInput.value,
        };
        var newCharacterDiv = createCharacterElement(newCharacter);
        var imageContainer = document.querySelector('.character-container');
        if (imageContainer) {
            imageContainer.appendChild(newCharacterDiv);
            newCharacterDiv.id = 'new-character';
            newCharacterDiv.scrollIntoView({ behavior: 'smooth' });
        }
        if (urlInput && nameInput) {
            urlInput.value = '';
            nameInput.value = '';
        }
    }
    catch (error) {
        console.error('Error al agregar nuevo personaje:', error);
    }
};
