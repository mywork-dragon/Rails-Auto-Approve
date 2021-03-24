class LandingLogoUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process resize_to_limit: [450, 26, :center]
  process tags: %w(logo)

  # Acceptable file extensions
  #
  # @return [Array]
  def extension_white_list
    %w(jpg jpeg gif png svg)
  end
end
