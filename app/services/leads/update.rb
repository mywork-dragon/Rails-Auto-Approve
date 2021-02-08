class Leads::Update
  # Sync the lead
  #
  # @param lead [Lead]
  # @param params
  # @return [OpenStruct]
  def self.call(lead, params, exporter:, preapproval: false)
    if lead.update(params)
      response = Crm::Client.new(lead).update(exporter: exporter)
      if response.success?
        lead.send("#{exporter}!")
        OpenStruct.new(success?: true, lead: lead)
      else
        OpenStruct.new(success?: false, errors: response.body)
      end
    else
      OpenStruct.new(success?: false, errors: lead.errors.messages)
    end
  end
end