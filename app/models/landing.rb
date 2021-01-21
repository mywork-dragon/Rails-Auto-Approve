class Landing < ApplicationRecord
  has_many :leads, dependent: :destroy

  enum state: { pending: 0, active: 1, archived: 2 }

  validates :theme, inclusion: Theme.available
  validates :path, length: { maximum: 255 }, format: { with: /\A\// }, presence: true

  # Get a Theme instance
  #
  # @return [Theme]
  def theme_instance
    @theme_instance ||= Theme.new(theme)
  end

  # Render the template
  #
  # @return [String]
  def render
    renderer = ERB.new(theme_instance.markup)
    template = Liquid::Template.parse(renderer.result)
    template.render(config)
  end
end
