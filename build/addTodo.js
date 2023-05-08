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
const hello = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "My first lambda dude! Hello Dude. Six Months to six figures!!!!",
            input: event,
        }, null, 2),
    };
});
module.exports = {
    handler: hello,
};
