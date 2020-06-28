class CalculateMetrics {
  constructor(campaignName, clicks, impressions, cost, conversions, isLostRank, isLostBudget) {
    this.campaignName = campaignName
    this.clicks = clicks
    this.impressions = impressions
    this.ctr = (this.clicks / this.impressions)
    this.cost = cost
    this.avgCpc = this.cost / this.clicks
    this.conversions = conversions
    this.costConversion = this.cost / this.conversions
    this.conversionRate = this.conversions / this.clicks
    this.isLostRank = isLostRank
    this.isLostBudget = isLostBudget
    this.impressionShare = 100 - (this.isLostRank + this.isLostBudget)
    this.eligibleIs = this.impressions / this.impressionShare * 100

  }
}

export default CalculateMetrics