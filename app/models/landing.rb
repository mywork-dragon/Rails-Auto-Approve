class Landing < ApplicationRecord
  has_many :leads, dependent: :destroy

  mount_uploader :logo, LandingLogoUploader
  enum state: { pending: 0, active: 1, archived: 2 }

  validates :theme, inclusion: Theme.available
  validates :source, presence: true
  validates :path, length: { maximum: 255 }, format: { with: /\A\// }, presence: true

  # Get missing config
  #
  # @return [Hash]
  def missing_config
    fields = (theme_instance.variables.keys - config.keys)
    return {} if fields.empty?
    Hash[fields.zip(theme_instance.variables.values_at(fields))]
  end

  # Get a Theme instance
  #
  # @return [Theme]
  def theme_instance
    @theme_instance ||= Theme.new(theme)
  end

  def render(scope)
    renderer = ERB.new(theme_instance.markup)
    template = Liquid::Template.parse(renderer.result(scope))
    template.render(config)
  end
end
