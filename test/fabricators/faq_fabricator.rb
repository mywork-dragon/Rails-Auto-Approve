Fabricator(:faq) do
  question { FFaker::Lorem.sentence }
  answer { FFaker::Lorem.sentence }
end