Fabricator(:review) do
  review_site
  name { FFaker::Name.first_name }
  content { FFaker::Lorem.sentence }
  url { FFaker::Internet.http_url }
  rating { Review::RATINGS.sample }
end