"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser")); // Import the centralized route handler
const middlewares_1 = require("./middlewares");
const cors_1 = __importDefault(require("cors"));
const initializeFirebase_1 = require("./initializeFirebase");
(0, initializeFirebase_1.initializeApp)();
const app = (0, express_1.default)();
// Middlewares
// Setup CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers to allow
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(middlewares_1.isRequestAuthenticated);
app.get("/kanban", (req, res) => {
    console.log("ndigkndk");
    res.status(200).send("Cool");
});
// Use centralized route handling
//app.use('/', routes);
app.listen(3001, () => console.log('Server running on port 3001'));
exports.default = app;
