module Crm
  class Client
    class Response
      # Initialize response
      #
      # @param body [Hash]
      # @param success [Boolean]
      def initialize(body:, success:)
        @body = body
        @success = success
      end
      attr_reader :body, :success
      alias_method :success?, :success
    end
  end
end
