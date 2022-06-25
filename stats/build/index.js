"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const Summary_1 = require("./Summary");
// 1. 'DataReader' 인터페이스를 만족하는 객체 생성
const csvFileReader = new CsvFileReader_1.CsvFilleReader("football.csv");
// 2. MatchReader 인스턴스 생성하고 DataReader 인터페이스 만족하는 무언가를 전달하기
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
