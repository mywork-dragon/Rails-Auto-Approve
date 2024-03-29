module Crm
  class Client
    class Lead
      include HTTParty
      base_uri ENV['lead_endpoint_url']
      headers 'Accept' => 'application/json'
      headers 'Content-Type' => 'application/json'
  
      debug_output $stdout if Rails.env.development?

      # Initialize our lead
      #
      # @param lead [Lead]
      def initialize(lead)
        @lead = lead
      end

      # Submit our lead
      #
      # @return [Crm::Client::Response]
      def call(method_name)
        exporter = LeadExporter.new(@lead)
        response = self.class.post(
          '/leadmanagement/api/leads/v2/LandingPage',
          body: exporter.send(method_name).to_json
        )
        Response.new(
          success: response.ok?,
          body: JSON.parse(response.body)
        )
      end
    end
  end
end
