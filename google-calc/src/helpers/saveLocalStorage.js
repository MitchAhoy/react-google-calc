const saveCampaigns =  (data) => {
    localStorage.setItem('campaigns', JSON.stringify(data))
  }

  export default saveCampaigns