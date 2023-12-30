import { Request } from "superagent";
import ApiClient from "../src/ApiClient";
import AggregateIndicators from "../src/model/AggregateIndicators";
import BondCandles from "../src/model/BondCandles";
import BondProfile from "../src/model/BondProfile";
import BondTickData from "../src/model/BondTickData";
import BondYieldCurve from "../src/model/BondYieldCurve";
import BasicFinancials from "../src/model/BasicFinancials";
import EarningResult from "../src/model/EarningResult";
import CompanyEarningsQualityScore from "../src/model/CompanyEarningsQualityScore";
import EbitEstimates from "../src/model/EbitEstimates";
import EbitdaEstimates from "../src/model/EbitdaEstimates";
import EarningsEstimates from "../src/model/EarningsEstimates";
import CompanyESG from "../src/model/CompanyESG";
import CompanyExecutive from "../src/model/CompanyExecutive";
import CompanyNews from "../src/model/CompanyNews";
import CompanyProfile from "../src/model/CompanyProfile";
import RevenueEstimates from "../src/model/RevenueEstimates";
import CongressionalTrading from "../src/model/CongressionalTrading";
import CountryMetadata from "../src/model/CountryMetadata";
import CovidInfo from "../src/model/CovidInfo";
import CryptoCandles from "../src/model/CryptoCandles";
import CryptoProfile from "../src/model/CryptoProfile";
import CryptoSymbol from "../src/model/CryptoSymbol";
import EarningsCalendar from "../src/model/EarningsCalendar";
import EconomicCalendar from "../src/model/EconomicCalendar";
import ETFsCountryExposure from "../src/model/ETFsCountryExposure";
import EconomicData from "../src/model/EconomicData";
import EconomicCode from "../src/model/EconomicCode";
import ETFsHoldings from "../src/model/ETFsHoldings";

type MethodCallback<T> = (error: String, data: T, response: String) => void;

declare module "finnhub" {
  export default class DefaultApi {
    declare apiClient: ApiClient;
    public constructor(apiClient: ApiClient);
    public aggregateIndicator(
      symbol: string,
      resolution: string,
      callback: MethodCallback<AggregateIndicators>
    ): Request;
    public bondPrices(
      isIn: string,
      from: number,
      to: number,
      callback: MethodCallback<BondCandles>
    ): Request;
    public bondProfiles(
      opts: {
        isIn?: string;
        cusip?: string;
        figi?: string;
      },
      callback: MethodCallback<BondProfile>
    ): Request;
    public bondTick(
      isIn: string,
      date: Date,
      limit: number,
      skip: number,
      exchange: string,
      callback: MethodCallback<BondTickData>
    ): Request;
    public bondYieldCurve(
      code: string,
      callback: MethodCallback<BondYieldCurve>
    ): Request;
    public companyBasicFinancials(
      symbol: string,
      metric: string,
      callback: MethodCallback<BasicFinancials>
    ): Request;
    public companyEarnings(
      symbol: string,
      opts: {
        limit: number;
      },
      callback: MethodCallback<EarningResult[]>
    ): Request;
    public companyEarningsQualityScore(
      symbol: string,
      freq: string,
      callback: MethodCallback<CompanyEarningsQualityScore>
    ): Request;
    public companyEbitEstimates(
      symbol: string,
      opts: {
        freq: string;
      },
      callback: MethodCallback<EbitEstimates>
    ): Request;
    public companyEbitdaEstimates(
      symbol: string,
      opts: {
        freq: string;
      },
      callback: MethodCallback<EbitdaEstimates>
    ): Request;
    public companyEpsEstimates(
      symbol: string,
      opts: {
        freq: string;
      },
      callback: MethodCallback<EarningsEstimates>
    ): Request;
    public companyEsgScore(
      symbol: string,
      callback: MethodCallback<CompanyESG>
    ): Request;
    public companyExecutive(
      symbol: string,
      callback: MethodCallback<CompanyExecutive>
    ): Request;
    public companyNews(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<CompanyNews>
    ): Request;
    public companyPeers(
      symbol: string,
      opts: {
        grouping: string;
      },
      callback: MethodCallback<string[]>
    ): Request;
    public companyProfile(
      opts: {
        isin: string;
        cusip: string;
        symbol: string;
      },
      callback: MethodCallback<CompanyProfile>
    ): Request;
    public companyRevenueEstimates(
      symbol: string,
      opts: {
        freq: string;
      },
      callback: MethodCallback<RevenueEstimates>
    ): Request;
    public congressionalTrading(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<CongressionalTrading>
    ): Request;
    public country(callback: MethodCallback<CountryMetadata[]>): Request;
    public covid19(callback: MethodCallback<CovidInfo[]>): Request;
    public cryptoCandles(
      symbol: string,
      resolution: string,
      from: number,
      to: number,
      callback: MethodCallback<CryptoCandles>
    ): Request;

    public cryptoExchanges(callback: MethodCallback<string[]>): Request;
    public cryptoProfile(
      symbol: string,
      callback: MethodCallback<CryptoProfile>
    ): Request;
    public cryptoSymbols(
      exchange: string,
      callback: MethodCallback<CryptoSymbol[]>
    ): Request;
    public earningsCalendar(
      opts: {
        from: Date;
        to: Date;
        symbol: string;
        international: boolean;
      },
      callback: MethodCallback<EarningsCalendar>
    ): Request;
    public economicCalendar(
      opts: {
        from: Date;
        to: Date;
      },
      callback: MethodCallback<EconomicCalendar>
    ): Request;
    public economicCode(callback: MethodCallback<EconomicCode>): Request;
    public economicData(
      code: string,
      callback: MethodCallback<EconomicData>
    ): Request;
    public etfsCountryExposure(
      opts: {
        symbol: string;
        isin: string;
      },
      callback: MethodCallback<ETFsCountryExposure>
    ): Request;
    public etfsHoldings(
      opts: {
        symbol: string;
        isin: string;
        skip: number;
        date: string;
      },
      callback: MethodCallback<ETFsHoldings>
    ): Request;

    public etfsProfile(
      opts: {
        symbol: string;
        isin: string;
      },
      callback: MethodCallback<ETFsProfile>
    ): Request;

    public etfsSectorExposure(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<ETFsSectorExposure>
    ): Request;

    public fdaCommitteeMeetingCalendar(
      callback: MethodCallback<FDAComitteeMeeting[]>
    ): Request;

    public filings(
      opts: {
        symbol: string;
        cik: string;
        access: string;
        form: string;
        from: Date;
        to: Date;
      },
      callback: MethodCallback<Filling>
    ): Request;

    public filingsSentiment(
      accessNumber: string,
      callback: MethodCallback<SECSentimentAnalysis>
    ): Request;
    public financials(
      symbol: string,
      statement: string,
      freq: string,
      callback: MethodCallback<FinancialStatements>
    ): Request;
    public financialsReported(
      opts: {
        symbol: string;
        cik: string;
        accessNumber: string;
        freq: string;
        from: Date;
        to: Date;
      },
      callback: MethodCallback<FinancialsAsReported>
    ): Request;
    public forexCandles(symbol: string, resolution: strirng, from: Number, to: Number, callback: MethodCallback<ForexCandles>): Request;
    public forexExchanges(callback: MethodCallback<string[]>): Request;

  }
}
