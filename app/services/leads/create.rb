class Leads::Create
  # Sync the lead
  #
  # @param params
  # @return [OpenStruct]
  def self.call(params = {})
    lead = Lead.new(params)
    if lead.save
      response = Crm::Client.new(lead).submit
      if response.success?
        lead.update(crm_id: response.body['leadId'])
        OpenStruct.new(success?: true, lead: lead)
      else
        OpenStruct.new(success?: false, errors: response.body)
      end
    else
      OpenStruct.new(success?: false, errors: lead.errors)
    end
  end
end