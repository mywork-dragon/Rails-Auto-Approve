Fabricator(:post) do
  user
  title { FFaker::Lorem.sentence }
  cover { File.open(Rails.root.join('test/media/image.jpg')) }
  teaser { FFaker::Lorem.sentence }
  content { FFaker::Lorem.paragraph }
end