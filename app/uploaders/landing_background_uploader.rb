class LandingBackgroundUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process resize_to_limit: [1600, 730, :center]
  process tags: %w(background)

  # Acceptable file extensions
  #
  # @return [Array]
  def extension_white_list
    %w(jpg jpeg gif png svg)
  end
end
