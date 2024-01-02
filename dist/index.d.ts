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
import CryptoCandles from "./model/CryptoCandles";
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
  export class ApiClient {
    public authentications: {
      api_key: { type: string; apiKey: string };
    }

    public static instance: ApiClient;
  }

  export class DefaultApi {
    declare apiClient: ApiClient;
    public constructor(apiClient?: ApiClient);
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
    public forexCandles(
      symbol: string,
      resolution: strirng,
      from: Number,
      to: Number,
      callback: MethodCallback<ForexCandles>
    ): Request;
    public forexExchanges(callback: MethodCallback<string[]>): Request;
    public forexRates(
      opts: { base: string; date: string },
      callback: MethodCallback<Forexrates>
    ): Request;
    public forexSymbols(
      exchange: string,
      callback: MethodCallback<ForexSymbol>
    ): Request;
    public fundOwnership(
      symbol: string,
      opts: { limit: Number },
      callback: MethodCallback<FundOwnership>
    ): Request;
    public indicesConstituents(
      symbol: String,
      callback: MethodCallback<IndicesConstituents>
    ): Request;
    public indicesHistoricalConstituents(
      symbol: string,
      callback: MethodCallback<IndicesHistoricalConstituents>
    ): Request;

    public insiderSentiment(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<InsiderSentiments>
    );

    public insiderTransactions(
      symbol: string,
      opts: {
        from: Date;
        to: Date;
      },
      callback: MethodCallback<InsiderTransactions>
    ): Request;

    public institutionalOwnership(
      symbol: string,
      cusip: string,
      from: string,
      to: string,
      callback: MethodCallback<InstitutionalOwnership>
    ): Request;

    public institutionalPortfolio(
      cik: string,
      from: string,
      to: string,
      callback: MethodCallback<InstitutionalPortfolio>
    ): Request;

    public institutionalProfile(
      opts: {
        cik: string;
      },
      callback: MethodCallback<InstitutionalProfile>
    ): Request;

    public internationalFilings(
      opts: {
        symbol: string;
        country: string;
      },
      callback: MethodCallback<InternationalFiling>
    ): Request;

    public investmentThemes(
      theme: string,
      callback: MethodCallback<InvestmentThemes>
    ): Request;

    public ipoCalendar(
      from: Date,
      to: Date,
      callback: MethodCallback<IPOCalendar>
    ): Request;

    public isinChange(
      from: string,
      to: string,
      callback: MethodCallback<IsinChange>
    ): Request;

    public marketHoliday(
      exchange: string,
      callback: MethodCallback<MarketHoliday>
    ): Request;

    public marketNews(
      category: string,
      opts: { mind: Number },
      callback: MethodCallback<MarketNews>
    ): Request;

    public marketStatus(
      exchange: string,
      callback: MethodCallback<MarketStatus>
    ): Request;

    public mutualFundCountryExposure(
      opts: {
        symbol: string;
        isin: string;
      },
      callback: MethodCallback<MutualFundCountryExposure>
    ): Request;

    public mutualFundEet(
      isin: string,
      callback: MethodCallback<MutualFundEet>
    ): Request;

    public mutualFundEetPai(
      isin: string,
      callback: MethodCallback<MutualFundEetPai>
    ): Request;

    public mutualFundHoldings(
      opts: {
        symbol: string;
        isin: string;
        skip: number;
      },
      callback: MethodCallback<MutualFundHoldings>
    ): Request;

    public mutualFundProfile(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<MutualFundProfile>
    ): Request;

    public mutualFundSectorExposure(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<MutualFundSectorExposure>
    ): Request;

    public newsSentiment(
      symbol: string,
      callback: MethodCallback<NewsSentiment>
    ): Request;

    public ownership(
      symbol: string,
      opts: { limit: Number },
      callback: MethodCallback<Ownership>
    ): Request;

    public patternRecognition(
      symbol: string,
      resolution: string,
      callback: MethodCallback<PatternRecognition>
    ): Request;

    public pressReleases(
      symbol: string,
      opts: { from: Date; to: Date },
      callback: MethodCallback<PressRelease>
    ): Request;

    public priceMetrics(
      symbol: string,
      opts: { from: Date; to: Date },
      callback: MethodCallback<PriceMetrics>
    ): Request;

    public priceTarget(
      symbol: string,
      callback: MethodCallback<PriceTarget>
    ): Request;

    public quote(symbol: string, callback: MethodCallback<Quote>): Request;

    public recommendationTrends(
      symbol: string,
      callback: MethodCallback<RecommendationTrend>
    ): Request;

    public revenueBreakdown(
      opts: { symbol: string; cik: string },
      callback: MethodCallback<RevenueBreakdown>
    ): Request;

    public sectorMetric(
      region: string,
      callback: MethodCallback<SectorMetric>
    ): Request;

    public similarityIndex(
      opts: { symbol: string; cik: string; freq: string },
      callback: MethodCallback<SimilarityIndex>
    ): Request;

    public socialSentiment(
      symbol: string,
      opts: {
        from: Date;
        to: Date;
      },
      callback: MethodCallback<SocialSentiment>
    ): Request;

    public stockBasicDividends(
      symbol: string,
      callback: MethodCallback<Dividends2>
    ): Request;

    public stockBidask(
      symbol: string,
      callback: MethodCallback<LastBidAsk>
    ): Request;

    public stockCandles(
      symbol: string,
      resolution: string,
      from: number,
      to: number,
      callback: MethodCallback<StockCandles>
    ): Request;

    public stockDividends(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<Dividends>
    ): Request;

    public stockLobbying(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<LobbyingResult>
    ): Request;

    public stockNbbo(
      symbol: string,
      date: Date,
      limit: Number,
      skip: Number,
      callback: MethodCallback<HistoricalNBBO>
    ): Request;

    public stockSplits(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<Split>
    ): Request;

    public stockSymbols(
      exchange,
      opts: {
        mic: string;
        securityType: string;
        currency: string;
      },
      callback: MethodCallback<StockSymbol>
    ): Request;

    public stockTick(
      symsymbol: stringbol,
      date: Date,
      limit: number,
      skip: Number,
      callback: MethodCallback<TickData>
    ): Request;

    public stockUsaSpending(
      symsymbol: stringbol,
      from: Date,
      to: Date,
      callback: MethodCallback<UsaSpendingResult>
    ): Request;

    public stockUsptoPatent(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<UsptoPatentResult>
    ): Request;

    public stockVisaApplication(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<VisaApplicationResult>
    ): Request;

    public supplyChainRelationships(
      symbol: string,
      callback: MethodCallback<SupplyChainRelationships>
    ): Request;

    public supportResistance(
      symbol: string,
      resolution: string,
      callback: MethodCallback<SupportResistance>
    ): Request;

    public symbolChange(
      from: string,
      to: string,
      callback: MethodCallback<SymbolChange>
    ): Request;

    public symbolSearch(
      q: string,
      callback: MethodCallback<SymbolLookup>
    ): Request;

    public technicalIndicator(
      opts: {
        base: string;
        date: string;
      },
      callback: MethodCallback<Forexrates>
    ): Request;

    public forexSymbols(
      exchange: string,
      callback: MethodCallback<string[]>
    ): Request;
    public fundOwnership(
      symbol: string,
      opts: { limit: Number },
      callback: MethodCallback<FundOwnership>
    ): Request;
    public indicesConstituents(
      symbol: string,
      callback: MethodCallback<IndicesConstituents>
    ): Request;
    public indicesHistoricalConstituents(
      symbol: string,
      callback: MethodCallback<IndicesHistoricalConstituents>
    ): Request;
    public insiderSentiment(
      symbol: string,
      from: date,
      to: date,
      callback: MethodCallback<InsiderSentiments>
    ): Request;
    public insiderTransactions(
      symbol: string,
      opts: { from: Date; to: Date },
      callback: MethodCallback<InsiderTransactions>
    ): Request;
    public institutionalOwnership(
      symbol: string,
      cusip: string,
      from: string,
      to: string,
      callback: MethodCallback<InstitutionalOwnership>
    ): Request;
    public institutionalPortfolio(
      cik: string,
      from: string,
      to: string,
      callback: MethodCallback<InstitutionalPortfolio>
    ): Request;
    public institutionalProfile(
      opts: { cik: string },
      callback: MethodCallback<InstitutionalProfile>
    ): Request;
    public internationalFilings(
      opts: { symbol: string; country: string },
      callback: MethodCallback<InternationalFiling>
    ): Request;
    public investmentThemes(
      theme: string,
      callback: MethodCallback<InvestmentThemes>
    ): Request;
    public ipoCalendar(
      from: Date,
      to: Date,
      callback: MethodCallback<IPOCalendar>
    ): Request;
    public isinChange(
      from: Date,
      to: Date,
      callback: MethodCallback<IsinChange>
    ): Request;
    public marketHoliday(
      exchange: string,
      callback: MethodCallback<MarketHoliday>
    ): Request;
    public marketNews(
      category: string,
      opts: { mind: Number },
      callback: MethodCallback
    ): Request;
    public marketStatus(
      exchange: string,
      callback: MethodCallback<MarketStatus>
    ): Request;
    public mutualFundCountryExposure(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<MutualFundCountryExposure>
    ): Request;
    public mutualFundEet(
      isin: string,
      callback: MethodCallback<MutualFundEet>
    ): Request;
    public mutualFundEetPai(
      isin: string,
      callback: MethodCallback<MutualFundEetPai>
    ): Request;
    public mutualFundHoldings(
      opts: { symbol: string; isin: string; skip: Number },
      callback: MethodCallback<MutualFundHoldings>
    ): Request;
    public mutualFundProfile(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<MutualFundProfile>
    ): Request;
    public mutualFundSectorExposure(
      opts: { symbol: string; isin: string },
      callback: MethodCallback<MutualFundSectorExposure>
    ): Request;
    public newsSentiment(
      symbol: string,
      callback: MethodCallback<NewsSentiment>
    ): Request;
    public ownership(
      symbol: string,
      opts: { limit: Number },
      callback: MethodCallback<Ownership>
    ): Request;
    public patternRecognition(
      symbol: string,
      resolution: string,
      callback: MethodCallback<PatternRecognition>
    ): Request;
    public pressReleases(
      symbol: string,
      opts: { from: Date; to: Date },
      callback: MethodCallback<PressRelease>
    ): Request;
    public priceMetrics(
      symbol: string,
      opts: { date: string },
      callback: MethodCallback<PriceMetrics>
    ): Request;
    public priceTarget(
      symbol: string,
      callback: MethodCallback<PriceTarget>
    ): Request;
    public quote(symbol: string, callback: MethodCallback<Quote>): Request;
    public recommendationTrends(
      symbol: string,
      callback: MethodCallback<RecommendationTrend>
    ): Request;
    public revenueBreakdown(
      opts: { symbol: string; cik: string },
      callback: MethodCallback<RevenueBreakdown>
    ): Request;
    public sectorMetric(
      region: string,
      callback: MethodCallback<SectorMetric>
    ): Request;
    public similarityIndex(
      opts: {
        symbol: string;
        cik: string;
        freq: string;
      },
      callback: MethodCallback<SimilarityIndex>
    ): Request;
    public socialSentiment(
      symbol: string,
      opts: {
        from: Date;
        to: Date;
      },
      callback: MethodCallback<SocialSentiment>
    ): Request;
    public stockBasicDividends(
      symbol: string,
      callback: MethodCallback<Dividends2>
    ): Request;
    public stockBidask(
      symbol: string,
      callback: MethodCallback<LastBidAsk>
    ): Request;
    public stockCandles(
      symbol: string,
      resolution: string,
      from: Number,
      to: Number,
      indicator: string,
      opts: { indicatorFields: object },
      callback: MethodCallback<technicalIndicatorCallback>
    ): Request;

    public transcripts(
      id: string,
      callback: MethodCallback<EarningsCallTranscripts>
    ): Request;

    public transcriptsList(
      symbol: string,
      callback: MethodCallback<EarningsCallTranscriptsList>
    ): Request;

    public upgradeDowngrade(
      opts: {
        symbol: string;
        from: Date;
        to: Date;
      },
      callback: MethodCallback<UpgradeDowngrade>
    ): Request;
    public stockDividends(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<Dividends>
    ): Request;
    public stockLobbying(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<LobbyingResult>
    ): Request;
    public stockNbbo(
      symbol: string,
      date: Date,
      limit: Number,
      skip: Number,
      callback: MethodCallback<HistoricalNBBO>
    ): Request;
    public stockSplits(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<Split>
    ): Request;
    public stockSymbols(
      exchange: string,
      opts: {
        mic: String;
        securitytype: String;
        currency: String;
      },
      callback: MethodCallback<StockSymbol>
    ): Request;
    public stockTick(
      symbol: string,
      date: Date,
      limit: Number,
      skip: Number,
      callback: MethodCallback<TickData>
    ): Request;
    public stockUsaSpending(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<UsaSpendingResult>
    ): Request;
    public stockUsptoPatent(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<UsptoPatentResult>
    ): Request;
    public stockVisaApplication(
      symbol: string,
      from: Date,
      to: Date,
      callback: MethodCallback<VisaApplicationResult>
    ): Request;
    public supplyChainRelationships(
      symbol: string,
      callback: MethodCallback<SupplyChainRelationships>
    ): Request;
    public supportResistance(
      symbol: string,
      resolution: string,
      callback: MethodCallback<SupportResistance>
    ): Request;
    public symbolChange(
      from: string,
      to: string,
      callback: MethodCallback<SymbolChange>
    ): Request;
    public symbolSearch(
      q: string,
      callback: MethodCallback<SymbolLookup>
    ): Request;
    public technicalIndicator(
      symbol: string,
      resolution: string,
      from: Date,
      to: Date,
      indicator: string,
      opts: { indicatorFields: object },
      callback: MethodCallback<technicalIndicatorCallback>
    ): Request;
    public transcripts(
      id: string,
      callback: MethodCallback<EarningsCallTranscripts>
    ): Request;
    public transcriptsList(
      symbol: string,
      callback: MethodCallback<EarningsCallTranscriptsList>
    ): Request;
    public upgradeDowngrade(
      opts: { symbol: string; from: Date; to: Date },
      callback: MethodCallback<UpgradeDowngrade>
    ): Request;
  }
}
