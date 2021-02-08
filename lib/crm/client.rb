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

    def step1
      Crm::Client::Lead.new(@lead).submit(:step1)
    end

    def step2
      Crm::Client::Lead.new(@lead).submit(:step2)
    end

    def step3
      Crm::Client::Lead.new(@lead).submit(:step3)
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