Fabricator(:review_site) do
  name { FFaker::Lorem.word }
  logo { File.open(Rails.root.join('test/media/image.jpg')) }
end