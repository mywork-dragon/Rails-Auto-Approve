module Crm
  class Client
    class Create
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
      def call
        body = LeadExporter.new(@lead).step1
        response = self.class.post(
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
