Fabricator(:position) do
  title { FFaker::Lorem.sentence }
  content { FFaker::Lorem.paragraph }
  url { FFaker::Internet.http_url }
  email { FFaker::Internet.free_email }
  location 'Seattle'
end