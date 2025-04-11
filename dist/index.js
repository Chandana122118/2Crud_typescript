"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_route_1 = __importDefault(require("./router/product.route"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/product', product_route_1.default);
app.get('/', (req, res) => {
    res.send("Hello from Node API Updated");
});
mongoose_1.default.connect("mongodb+srv://chandanam:GQveIHiUv0YbbDlH@backenddb.uzvtwrt.mongodb.net/Crud_Ts?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
    console.log('Connected to Database');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
    .catch(() => {
    console.log("Connection Failed");
});
//# sourceMappingURL=index.js.map