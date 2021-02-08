class Leads::Preapproval
  # Create preapproval
  #
  # @param lead [Lead]
  # @param params
  # @return [OpenStruct]
  def self.call(lead)
    response = Crm::Client.new(lead).preapproval
    if response.success?
      lead.preapproval!
      OpenStruct.new(success?: true, lead: lead)
    else
      OpenStruct.new(success?: false, errors: response.body)
    end
  end
end