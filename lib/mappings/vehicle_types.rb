class Mappings::VehicleTypes
  MAPPING = {
    'Car/SUV/Truck' => 1,
    'Motorcycle' => 2
  }.freeze

  # Get all vehicle types
  #
  # @return [Array<String>]
  def self.types
    MAPPING.keys.map(&:to_s)
  end
end