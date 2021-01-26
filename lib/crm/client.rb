require 'crm/client/lead'
require 'crm/client/preapproval'
require 'crm/client/response'

module Crm
  class Client
    # Initialize the client
    #
    # @param lead [Lead]
    def initialize(lead)
      @lead = lead
    end

    # Submit a lead
    #
    # @return [OpenStruct]
    def submit
      creation = create_lead
      return creation if !creation.success?
      create_preapproval(creation.body['id'])
    end

    private

    def create_lead
      Crm::Client::Lead.new(@lead).submit
    end

    def create_preapproval(id)
      Crm::Client::Preapproval.new(id).submit
    end
  end
end