Fabricator(:review) do
  name { FFaker::Name.first_name }
  location 'Seattle, WA'
  content { FFaker::Lorem.paragraph }
  url { FFaker::Internet.http_url }
  rating { Review::RATINGS.sample }
end