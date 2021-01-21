CarrierWave.configure do |config|
  if Rails.env.test?
    config.storage = :file
    config.cache_storage = :file
    config.enable_processing = false
  else
    config.cache_storage = :file
    config.enable_processing = true
  end
end
