import { MatchData } from "./MatchData";

export interface Analyzer {
  run(mathces: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(mathces: MatchData[]): void {
    const output = this.analyzer.run(mathces);
    this.outputTarget.print(output);
  }
}
