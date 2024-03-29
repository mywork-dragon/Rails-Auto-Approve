module Crm
  class Client
    class Preapproval
      include HTTParty
      base_uri ENV['lead_endpoint_url']
      headers 'Accept' => 'application/json'
      headers 'Content-Type' => 'application/json'
  
      debug_output $stdout if Rails.env.development?

      # Initialize Preapproval
      #
      # @param id [String]
      def initialize(id)
        @id = id
      end

      # Submit for preapproval
      #
      # @return [Crm::Client::Response]
      def call
        response = self.class.post(
          '/leadmanagement/api/leads/v2/LandingPage/PreApprovalDeal',
          body: {
            id: @id,
            dealType: 'Finance',
            dealGoal: 'LowerPayment'
          }.to_json
        )
        Response.new(
          success: response.ok?,
          body: JSON.parse(response.body)
        )
      end
    end
  end
end
