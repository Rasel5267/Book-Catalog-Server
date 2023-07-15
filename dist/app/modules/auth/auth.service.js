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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = require("../../../errors/ApiError");
const jwtHelper_1 = require("../../../helpers/jwtHelper");
const user_model_1 = require("../user/user.model");
const CreateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield user_model_1.User.create(user);
    if (!createUser) {
        throw new Error('Failed to create user!');
    }
    return createUser;
});
const Login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExist = yield user_model_1.User.isUserExist(email);
    if (!isUserExist) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (isUserExist.password &&
        !(yield user_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, 'Password is incorrect');
    }
    // create access token & refresh token
    const { _id, name, email: userEmail } = isUserExist;
    const accessToken = jwtHelper_1.jwtHelpers.createToken({ _id, name, userEmail }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelper_1.jwtHelpers.createToken({ _id, name, userEmail }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const RefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelper_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.ApiError(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token');
    }
    // checking deleted user's refresh token
    const { userEmail } = verifiedToken;
    const isUserExist = yield user_model_1.User.isUserExist(userEmail);
    if (!isUserExist) {
        const error = new ApiError_1.ApiError(http_status_1.default.FORBIDDEN, 'User not exist');
        return error;
    }
    //generate new token
    const newAccessToken = jwtHelper_1.jwtHelpers.createToken({
        id: isUserExist._id,
        userEmail: isUserExist.email,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
});
exports.AuthService = {
    CreateUser,
    Login,
    RefreshToken,
};
