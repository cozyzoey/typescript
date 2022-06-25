"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// // 1. 'DataReader' 인터페이스를 만족하는 객체 생성
// const csvFileReader = new CsvFileReader("football.csv");
// // 2. MatchReader 인스턴스 생성하고 DataReader 인터페이스 만족하는 무언가를 전달하기
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
