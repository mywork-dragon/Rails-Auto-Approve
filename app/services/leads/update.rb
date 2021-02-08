class Leads::Update
  # Sync the lead
  #
  # @param lead [Lead]
  # @param params
  # @return [OpenStruct]
  def self.call(lead, params, method_name: :step2)
    if lead.update(params)
      response = Crm::Client.new(lead).send(method_name)
      if response.success?
        response.lead.update(state: method_name)
        OpenStruct.new(success?: true, lead: lead)
      else
        OpenStruct.new(success?: false, errors: response.body)
      end
    else
      OpenStruct.new(success?: false, errors: lead.errors.messages)
    end
  end
end