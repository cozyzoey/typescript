"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(mathces) {
        const output = this.analyzer.run(mathces);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;