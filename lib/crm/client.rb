module Crm
  class Client
    include HTTParty
    base_uri ENV['lead_endpoint_url']

    def submit(lead)
      exporter = LeadExporter.new(lead)

      self.class.post(
        ENV['lead_endpoint_path'],
        headers: { 'Content-Type'=>'application/json' },
        body: exporter.export.to_json
      )
    end
  end
end