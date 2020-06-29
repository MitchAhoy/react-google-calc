import uuid from 'react-uuid'
export default class NewCampaign {
  constructor(campaignName, clicks, impressions, cost, conversions, isLostRank, isLostBudget) {
    this.campaignName = campaignName
    this.clicks = clicks
    this.impressions = impressions
    this.ctr = this.clicks / this.impressions
    this.cost = cost
    this.avgCpc = this.cost / this.clicks
    this.conversions = conversions
    this.costConversion = this.cost / this.conversions
    this.conversionRate = this.conversions / this.clicks
    this.isLostRank = isLostRank / 100
    this.isLostBudget = isLostBudget / 100
    this.impressionShare = 1 - (this.isLostRank + this.isLostBudget)
    this.eligibleImpressions = this.impressions / this.impressionShare
    this.rankPotentialImpressions = this.isLostRank * this.eligibleImpressions
    this.budgetPotentialImpressions = this.isLostBudget * this.eligibleImpressions
    this.projectedImpressions = this.impressions + this.budgetPotentialImpressions
    this.projectedClicks = this.projectedImpressions * this.ctr
    this.projectedCost = this.projectedClicks * this.avgCpc
    this.projectedConversions = this.projectedClicks * this.conversionRate
    this.projectedCostConversion = this.projectedCost / this.projectedConversions
    this.additionalImpressions = this.projectedImpressions = this.impressions
    this.additionalClicks = this.projectedClicks - this.clicks
    this.additionalCost = this.projectedCost - this.cost
    this.additionalConversions = this.projectedConversions - this.conversions
    this.id = uuid()
  }
}