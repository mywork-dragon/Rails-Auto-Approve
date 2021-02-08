module Crm
  class Client
    class Update
      include HTTParty
      base_uri ENV['lead_endpoint_url']
      headers 'Accept' => 'application/json'
      headers 'Content-Type' => 'application/json'
  
      debug_output $stdout if Rails.env.development?

      # Initialize our lead
      #
      # @param lead [Lead]
      def initialize(lead, exporter:)
        @lead = lead
        @exporter = exporter
      end

      # Submit our lead
      #
      # @return [Crm::Client::Response]
      def call
        body = LeadExporter.new(@lead).send(@exporter)
        body.merge!(id: @lead.crm_id)
        response = self.class.put(
          '/leadmanagement/api/leads/v2/LandingPage',
          body: body.to_json
        )
        Response.new(
          success: response.ok?,
          body: JSON.parse(response.body)
        )
      end
    end
  end
end
