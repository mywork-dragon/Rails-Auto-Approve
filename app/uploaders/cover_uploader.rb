class CoverUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process resize_to_limit: [1000, 1000, :center]
  process tags: %w(cover)

  # Acceptable file extensions
  #
  # @return [Array]
  def extension_white_list
    %w(jpg jpeg gif png)
  end
end
