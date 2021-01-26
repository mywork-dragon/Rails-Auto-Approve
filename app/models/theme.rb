require 'base64'

class Theme
  class ThemeNotFoundError < StandardError; end

  attr_reader :name

  # Initialize with path to theme
  #
  # @param path [String]
  def initialize(name)
    validate_theme_exists!(name)
    @name = name
    @path = Rails.root.join('lib/themes', name)
    @config = YAML.load_file(File.join(@path, 'config.yml'))
  end

  # Get a list of variables
  #
  # @return [Array<String>]
  def variables
    @config.fetch('variables', [])
  end

  # Get cover image
  #
  # @return [String]
  def cover
    File.open(File.join(@path, 'cover.jpg'), 'rb') do |f|
      'data:image/png;base64,' + Base64.strict_encode64(f.read)
    end
  end

  # Get the markup from the theme template
  #
  # @return [String]
  def markup
    File.read(File.join(@path, 'index.html.erb'))
  end

  # Get the names of all themes
  #
  # @return [Array<String>]
  def self.available
    Dir[Rails.root.join('lib', 'themes', '*')].map do |path|
      File.basename(path)
    end
  end

  # Get an array of themes
  #
  # @return [Array<Theme>]
  def self.all
    available.map { |name| new(name) }
  end

  private

  def validate_theme_exists!(name)
    return if self.class.available.include?(name)
    raise ThemeNotFoundError.new(name)
  end
end