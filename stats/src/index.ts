import { MatchReader } from "./MatchReader";
import { CsvFilleReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

// 1. 'DataReader' 인터페이스를 만족하는 객체 생성
const csvFileReader = new CsvFilleReader("football.csv");

// 2. MatchReader 인스턴스 생성하고 DataReader 인터페이스 만족하는 무언가를 전달하기
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
