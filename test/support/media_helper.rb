module MediaHelper
  def media(file)
    File.open(Rails.root.join('test/media', file))
  end
end
