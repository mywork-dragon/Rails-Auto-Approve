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

    def create
      Crm::Client::Create.new(@lead).call
    end

    def update(exporter:)
      Crm::Client::Update.new(@lead, exporter: exporter).call
    end

    def preapproval
      Crm::Client::Preapproval.new(@lead.crm_id).call
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