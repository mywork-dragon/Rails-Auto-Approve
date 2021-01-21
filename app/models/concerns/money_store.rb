module MoneyStore
  extend ActiveSupport::Concern

  class_methods do
    def price(field)
      method_name = "#{field}_cents"

      # Define setter
      define_method "#{field}=" do |value|
        self.send("#{method_name}=", value.to_money.cents)
      end

      # Define getter
      define_method field do
        return unless send(method_name).present?
        Money.new(method_name)
      end
    end
  end
end