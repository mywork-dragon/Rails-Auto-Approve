module PositionsHelper
  # Get open positions
  #
  # @return [Position::ActiveRecord_Relation]
  def open_positions
    @open_positions ||= Position.active
  end
end