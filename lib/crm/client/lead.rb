module Crm
  class Client
    class Lead
      include HTTParty
      base_uri ENV['lead_endpoint_url']
      headers 'Accept' => 'application/json'
      headers 'Content-Type' => 'application/json'
  
      # Initialize our lead
      #
      # @param lead [Lead]
      def initialize(lead)
        @lead = lead
      end

      # Submit our lead
      #
      # @return [Crm::Client::Response]
      def submit
        exporter = LeadExporter.new(@lead)
        response = self.class.post(
          '/leadmanagement/api/leads/v2/LandingPage',
          body: exporter.export.to_json
        )
        Response.new(
          success: response.ok?,
          body: JSON.parse(response.body)
        )
      end
    end
  end
end