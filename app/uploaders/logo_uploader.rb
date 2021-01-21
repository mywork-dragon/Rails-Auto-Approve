class LogoUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process resize_to_limit: [400, 400, :center]
  process tags: %w(logo)

  # Acceptable file extensions
  #
  # @return [Array]
  def extension_white_list
    %w(jpg jpeg gif png)
  end
end
