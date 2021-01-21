Fabricator(:category) do
  name { FFaker::Lorem.word }
  teaser { FFaker::Lorem.sentence }
  cover { File.open(Rails.root.join('test/media/image.jpg')) }
end